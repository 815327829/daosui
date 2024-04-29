	<template>
		<el-container class="homepage">
			<div class="left-chart">
				<v-chart :option="option_column" style="height: 400px" :theme="macarons"></v-chart>
			</div>
			<div class="center-chart">
				<v-chart :option="option_line" style="height: 400px" :theme="macarons"></v-chart>
			</div>
		</el-container>

	</template>

	<script>
		import {
			use
		} from 'echarts/core'
		import {
			BarChart,
			LineChart
		} from 'echarts/charts'
		import {
			TitleComponent,
			TooltipComponent,
			GridComponent
		} from 'echarts/components'
		import {
			CanvasRenderer
		} from 'echarts/renderers'
		import VChart, {
			// THEME_KEY
		} from "vue-echarts";

		import macarons from "@/assets/macarons.json"

		use([TitleComponent, TooltipComponent, GridComponent, BarChart, LineChart, CanvasRenderer])
		export default {
			data() {
				return {
					macarons,
					option_column: {
						title: {
							text: "Chart",
							left: 'center'
						},
						tooltip: {},
						xAxis: {
							data: ["x1", "x2", "x3", "x4", "x5", "x6"],
						},
						yAxis: {},
						series: [{
							name: "销量",
							type: "bar",
							data: [5, 20, 36, 10, 10, 20],
						}, ],
					},
					option_line: {

						title: {
							text: "Chart",
							left: 'center'
						},
						tooltip: {},
						xAxis: {
							data: ["x1", "x2", "x3", "x4", "x5", "x6"],
						},
						yAxis: {},
						series: [{
							name: "销量",
							type: "line",
							data: [5, 20, 36, 10, 10, 20],
							smooth: true
						}, ],

					}
				};
			},
			components: {
				VChart
			},
			// provide: {
			// 	[THEME_KEY]: "dark"
			// },
		};
	</script>
	<style lang="scss">
		.homepage {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: space-around;
			padding-top: 100px;

			.left-chart {
				width: 30%;
				height: 100px;
			}

			.center-chart {
				width: 30%;
				height: 100px;
			}
		}
	</style>