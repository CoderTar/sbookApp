<template>
	<view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {
			console.log("进入首页")
			uni.showLoading({
				title: '正在加载...'
			});
		},
		onHide() {
			uni.hideLoading();
			console.log("页面隐藏")
		},
		onUnload() {
			uni.hideLoading();
			console.log("页面卸载")
		}
	}
</script>

<style>

</style>
