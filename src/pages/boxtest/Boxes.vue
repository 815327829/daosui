<template>
	<el-container class="boxes">
		<el-header>
			<div class="leftbox">
				<el-input type="text" v-model="input_name" placeholder="请输入搜索名称" clearable width="120px" /> </el-input>
			</div>
			<div class="rightbox">
				<el-button type="primary" plain @click="search">搜索</el-button>
				<el-button type="primary" plain @click="clearsearch">重置</el-button>
			</div>
		</el-header>
		<hr />
		<div class="list-chart-box">
			<!-- <div class="list-chart-box-left"></div> -->
			<div class="list-chart-box-right">
				<div class="list-chart-box-right-box"></div>
				<div class="list-chart-box-right-box"></div>
				<div class="list-chart-box-right-box"></div>
				<div class="list-chart-box-right-box"></div>
				<div class="list-chart-box-right-box"></div>
			</div>
		</div>
		<!-- 		<div class="list-chart-bottom"></div>
		<div class="pagination-container"></div> -->
	</el-container>
</template>

<script>
	// import {
	// 	getInfo
	// } from './api'
	export default {
		name: 'Boxes',
		data() {

			return {
				input_name: "",
				tableData: [{
					id: '001',
					date: '2016-05-02',
					name: 'shuvi',
					address: 'human 1518',
				}, ],
				dialogVisible: false,
				selectedRow: null,
				form: {
					id: '',
					date: '',
					name: '',
					address: '',
				},
				rules: {
					id: [{
							required: true,
							message: "请输入id"
						},
						{
							validator: this.checkUniqueID,
						}


					],
					date: {
						required: true,
						message: "请输入日期"
					},
					name: {
						required: true,
						message: "请输入名字"
					},
					address: {
						required: true,
						message: "请输入地址"
					}
				},
				dialogTitle: '',
				index: '',
				disableInput: false,

			}
		},
		methods: {
			search() {
				this.tableData = this.tableData.filter(item => {
					return item.name == this.input_name
				})
				this.resetForm(); // 重置表单
			},
			clearsearch() {
				this.input_name = ""
			},
			getData() {
				getInfo()
					.then(res => {
						console.log("resdata:" + JSON.stringify(res));
						alert("succcess")
					}).catch(() => {
						//联网失败, 结束加载
						this.mescroll.endErr();
					});
			},
			delData() {
				this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					if (this.index != -1) {
						this.tableData.splice(this.index, 1)
						this.$message({
							type: 'success',
							message: '删除成功!'
						});
					}
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});

			},
			openDialog(act, data) {
				if (act == 'add') {
					this.dialogTitle = '添加'
					this.disableInput = false
					this.dialogVisible = true
					this.form = {
						id: '',
						date: '',
						name: '',
						address: '',
					}
				};
				if (act == 'edit') {
					if (this.selectedRow == null) {
						this.$message({
							message: '请先选择需要编辑的数据',
							type: 'warning'
						})
						return
					}
					this.dialogTitle = '编辑'
					this.disableInput = true
					this.dialogVisible = true
					this.form = {
						...data
					}
				}
			},
			checkUniqueID(rule, value, callback) {
				let exsit = this.tableData.findIndex(item => {
					return item.id == value

				})
				console.log(exsit);
				if (exsit == -1) {
					callback()
					console.log('suces');
				} else {
					if (this.dialogTitle == '添加') {
						callback(new Error('ID已存在'))
					}
				}
			},

			submitForm(formName) {
				// 验证输入的邮箱和姓名，然后处理提交逻辑
				console.log('提交的信息:', JSON.stringify(this.form));
				if (this.dialogTitle == '添加') {
					this.$refs[formName].validate((valid) => {
						if (valid) {
							this.tableData.unshift(this.form)
						} else {
							this.$message({
								message: "添加失败",
								type: 'warning'
							})
							return false;
						}
					})
				}
				if (this.dialogTitle == '编辑') {
					if (this.index != -1) {
						this.$set(this.tableData, this.index, this.form)
					}
					// this.form =
				}
				this.dialogVisible = false; // 关闭对话框
				this.resetForm(); // 重置表单
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			handleSelectionChange(selection) {
				if (selection.length > 0) {
					// 当有新行被选中时，取消之前选中的行，并保留最新的那一行
					const currentSelected = selection[selection.length - 1];
					//获取所在行的索引
					this.index = this.tableData.indexOf(currentSelected)
					if (this.selectedRow && this.selectedRow !== currentSelected) {
						this.$refs.multipleTable.toggleRowSelection(this.selectedRow, false);
					}
					this.selectedRow = currentSelected;
					console.log('当前' + JSON.stringify(this.selectedRow));
				} else {
					// 如果没有行被选中，清空 selectedRow
					this.selectedRow = null;
				}
			},
			/* open() {
				this.$prompt('请输入邮箱', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
					inputErrorMessage: '邮箱格式不正确'
				}).then(({
					value
				}) => {
					this.$message({
						type: 'success',
						message: '你的邮箱是: ' + value,
					});
				});
			}, */
		}

	}
</script>

<style lang="scss">
	.boxes {
		padding-left: 10px;
		width: 100%;
		height: 100%;
		// background-color: gainsboro;

		.el-header {
			/* text-align: left; */
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 5px;
			font-size: 12px;
			background-color: white;
			line-height: 60px;

			.el-input__inner {
				width: 200px;
			}
		}



		.list-chart-box-right {
			display: flex;
			// flex-direction: column; // justify-content: space-around;
			justify-content: space-around;
			align-items: center;
			width: 70vw;
			height: 200px;
			border-color: #66CCFF;
			border-width: 1px; // background-color: lightgray;


			.list-chart-box-right-box {
				width: 25px;
				height: 25px;
				margin: 3px;
				background-color: #66CCFF;
			}
		}




	}
</style>