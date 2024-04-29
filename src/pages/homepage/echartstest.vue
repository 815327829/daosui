<template>
	<div>
		<div :style="{ height: height, width: width }" :id="id"></div>
	</div>
</template>

<script>
	// import 'echarts/theme/vintage'
	export default {
		name: 'echartstest',
		props: {
			height: {
				type: String,
				default: "500px",
			},
			width: {
				type: String,
				default: "500px",
			},
			id: {
				type: String,
				default: "demo",
			},
		},

		data() {

			return {

			}
		},
		mounted() {
			this.drawLine();
		},
		methods: {
			drawLine() {
				let myChart = this.$echarts.init(document.getElementById(this.id))
				myChart.setOption({
					title: {
						text: "this is echarts00"
					},
					tooltip: {},
					xAxis: {
						data: ["x1", "x2", "x3", "x4"]
					},
					yAxis: {},
					series: [{
						name: '销量',
						type: 'bar',
						data: [5, 20, 6, 36, 10, 20]
					}]
				})
			},
		}


	}
</script>

<style>
</style>