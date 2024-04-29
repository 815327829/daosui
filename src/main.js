import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import './styles/element-variables.scss'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
// import * as echarts from 'echarts'
// import 'echarts'
// import ECharts from 'vue-echarts'
// import axios from 'axios'
import BaiduMap from 'vue-baidu-map'; // 导入地图

// 进行全局注册，一次性引入百度地图组件库的所有组件
// ak为官方提供的密钥
Vue.use(BaiduMap, {
	ak: 'zR4DVSqcWcZRAgT6rN1oUIS0utTQlQtg'
})



Vue.config.productionTip = false
// Vue.prototype.$axios = axios
// Vue.prototype.$echarts = echarts
// Vue.component('VueEcharts', ECharts)
// console.log(ECharts);
Vue.use(ElementUI)
Vue.use(VueRouter)

new Vue({
	render: h => h(App),
	router: router
}).$mount('#app')