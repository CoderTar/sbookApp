let ip = "http://154.91.158.152:3000"
// let ip = "http://127.0.0.1:9000"
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
 * 4.获取ip地址和解析
 */
export function ipAndaddress() {

	return new Promise((reslove, reject) => {
		uni.request({
			url: 'http://ip-api.com/json/?lang=zh-CN',
			method: 'GET',
			success: (res) => {

				// let value = res.data.substring(19)

				// value = value.replace(";", " ");

				// value = JSON.parse(`${value}`)
				// console.log("字符串转换json", value)

				reslove({
					userip: res.data.query,
					address: res.data.regionName + res.data.city
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
 * 4.随机生成数
 */

export function roundPhone(value) {

	console.log("通讯录添加", value)
	let response
	let phoneArr = ["iphoneSE", "iphone7", "iphone7s", "iphone8", "iphone8Plus", "iphoneX", "iphoneXr", "iphone11",
		"iphone11Pro", "iphone11ProMax", "iphone12min", "iphone12", "iphone12Pro", "iphone12ProMax", "iphone13min",
		"iphone13", "iphone13Pro", "iphone13ProMax"
	]
	return new Promise((reslove, reject) => {

		response = Math.round(Math.random() * 18);


		reslove(phoneArr[response])


	})
}
