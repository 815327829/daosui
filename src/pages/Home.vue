<template>
	<el-container style="height: 100vh; border: 1px solid #eee margin: 0px;" class="home_all">
		<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
			<el-menu :default-openeds="['1', '4']" :router="true" @select="handleMenuSelect" ref="menu">
				<el-menu-item index="./homepage"><i class="el-icon-s-home"></i>主页</el-menu-item>
				<el-submenu index="1">
					<template slot="title"><i class="el-icon-message"></i>导航一</template>
					<el-menu-item-group>
						<template slot="title">分组一</template>
						<el-menu-item index="./userlist" key="1">用户表</el-menu-item>
						<el-menu-item index="./userlistcopy">用户表2</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<!-- <el-submenu index="2">
					<template slot="title"><i class="el-icon-menu"></i>导航二</template>
					<el-menu-item-group>
						<template slot="title">分组一</template>
						<el-menu-item index="2-1">选项1</el-menu-item>
						<el-menu-item index="2-2">选项2</el-menu-item>
					</el-menu-item-group>
					<el-menu-item-group title="分组2">
						<el-menu-item index="2-3">选项3</el-menu-item>
					</el-menu-item-group>
					<el-submenu index="2-4">
						<template slot="title">选项4</template>
						<el-menu-item index="2-4-1">选项4-1</el-menu-item>
					</el-submenu>
				</el-submenu> -->
				<el-submenu index="3">
					<template slot="title"><i class="el-icon-setting"></i>我的测试</template>
					<el-submenu index="3-4">
						<template slot="title">选项4</template>
						<el-menu-item index="./boxes">盒子</el-menu-item>
					</el-submenu>
				</el-submenu>
			</el-menu>
		</el-aside>
		<div class="home_right">
			<div class="total_title"> 大 标 题</div>

			<el-tabs v-model="editableTabsValue" type="card" @edit="handleTabsEdit" @tab-click="clickTab">
				<el-tab-pane :key="item.name" v-for="(item, index) in editableTabs" :label="item.title"
					:name="item.name" :closable="item.closable">
				</el-tab-pane>
			</el-tabs>
			<router-view></router-view>
		</div>



	</el-container>

</template>

<script>
	export default {
		name: 'Home',
		data() {
			return {
				editableTabsValue: '1',
				editableTabs: [{
					title: '主页',
					name: '/homepage',
					closable: false
				}],
				tabIndex: 2,
				tabtitle: '',

			}
		},

		methods: {
			handleMenuSelect(index) {

			},
			handleTabsEdit(targetName, action) {
				if (action === 'remove') {
					let tabs = this.editableTabs;
					let activeName = this.editableTabsValue;
					if (activeName === targetName) {
						tabs.forEach((tab, index) => {
							if (tab.name === targetName) {
								let nextTab = tabs[index + 1] || tabs[index - 1];
								if (nextTab) {
									activeName = nextTab.name;
								}
							}
						});
					}
					this.editableTabsValue = activeName;
					this.editableTabs = tabs.filter(tab => tab.name !== targetName);
					this.$router.push(this.editableTabsValue)
				}
			},
			clickTab(tab) {
				this.editableTabsValue = tab.paneName
				this.$router.push(this.editableTabsValue)
			}
		},


		watch: {
			$route(to, form) {
				var flag = false
				if (this.editableTabs.length != 0) {
					for (let i = 0; i <= this.editableTabs.length; i++) {
						if (this.editableTabs[i] && to.path === this.editableTabs[i].name) {
							this.editableTabsValue = to.path
							flag = true
							break
						}
					};
				}

				if (!flag) {
					let obj = {
						title: to.meta.title,
						name: to.path,
						closable: true
					};
					console.log(obj.name);
					this.editableTabsValue = to.path
					this.editableTabs.push(obj)
				}

			}
		}
	}
</script>

<style lang="scss">
	hr {
		height: 0.5px;
		width: 100%;
		border: 0px;
		background-color: #CCCCCC;
		/* 直接设置边框样式为实线 */
	}

	.home_all {
		.home_right {
			width: 100%;

			.total_title {
				height: 50px;
				background-color: white;
				font-size: 28px;
				font-weight: bold;
				color: #409EFF;
				padding-left: 50px;
			}
		}
	}

	// .el-aside {
	// 	color: var(--login-right-bgc-0);
	// 	background-color: rgb(7, 58, 129) !important;

	// 	.el-menu {
	// 		background-color: rgb(7, 58, 129);
	// 		color: var(--login-right-bgc-0);

	// 		.el-menu-item-group__title {
	// 			color: rgba(255, 255, 255, 0.6);
	// 		}

	// 		.el-menu-item {
	// 			color: rgba(255, 255, 255, 0.6);
	// 			font-weight: bold;
	// 		}

	// 		.el-menu-item:focus,
	// 		.el-menu-item:hover {
	// 			outline: 0;
	// 			background-color: #1760b1;
	// 			color: white;
	// 			font-weight: bold;
	// 		}

	// 		.el-submenu__title {
	// 			color: rgba(255, 255, 255, 0.6);
	// 			font-weight: bold;
	// 		}
	// 	}
	// }

	// .el-dialog {

	// 	background-color: #063E84;

	// 	.el-dialog__title {
	// 		color: white;
	// 	}

	// 	.el-form-item {
	// 		display: block;

	// 		.el-form-item__label {
	// 			width: 50px;
	// 			display: inline-block;
	// 			color: #00CBFF;
	// 			font-weight: bold;
	// 		}

	// 		.el-form-item__content {
	// 			display: block;
	// 			margin-left: 50px;

	// 			// 重写禁用状态下的输入框样式
	// 			.el-input.is-disabled {
	// 				.el-input__inner {
	// 					background-color: #3A6B99; // 设置背景色
	// 					color: #bbb; // 设置文本颜色
	// 				}
	// 			}

	// 			.el-input__inner {
	// 				border: none;
	// 				background-color: rgba(23, 139, 230, 0.3);
	// 				color: #00BBFF;
	// 			}

	// 			.el-input__inner::placeholder {
	// 				color: #00CBFF;
	// 				/* 设置 placeholder 的颜色 */
	// 			}



	// 		}


	// 		/* justify-content: space-between;#1760B1 */
	// 	}

	// }
</style>