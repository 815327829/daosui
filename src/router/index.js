import VueRouter from 'vue-router'
import UserList from '../pages/userlist/UserList.vue'
import UserListCopy from '../pages/userlist/UserListCopy.vue'
import HomePage from '../pages/homepage/HomePage.vue'
import Boxes from '../pages/boxtest/Boxes.vue'

const router = new VueRouter({
	routes: [{
		name: 'userlist',
		path: '/userlist',
		component: UserList,
		meta: {
			title: '用户表'
		}

	}, {
		name: 'userlistcopy',
		path: '/userlistcopy',
		component: UserListCopy,
		meta: {
			title: '用户表2'
		}

	}, {
		name: 'homepage',
		path: '/homepage',
		component: HomePage,
		meta: {
			title: '主页'
		}

	}, {
		name: 'boxes',
		path: '/boxes',
		component: Boxes,
		meta: {
			title: '盒子'
		}

	}]
})

export default router