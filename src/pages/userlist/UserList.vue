<template>
	<el-container class="userlist">
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
		<div class="button-container">
			<el-button type="primary" plain @click="openDialog('add')">添加</el-button>
			<el-button type="primary" plain @click="openDialog('edit',selectedRow)">编辑</el-button>
			<el-button type="danger" plain @click="delData">删除</el-button>
			<el-button type="primary" plain @click="getData">接口测试</el-button>
		</div>
		<el-main>
			<el-table :data="tableData" @selection-change="handleSelectionChange" ref="multipleTable" stripe>
				<el-table-column type="selection"></el-table-column>
				<el-table-column prop="id" label="编码" width="140">
				</el-table-column>
				<el-table-column prop="date" label="日期" width="140">
				</el-table-column>
				<el-table-column prop="name" label="姓名" width="120">
				</el-table-column>
				<el-table-column prop="address" label="地址">
				</el-table-column>
			</el-table>
			<el-pagination background layout="prev, pager, next" :page-size='10' :total="tableData.length">
			</el-pagination>
		</el-main>

		<el-dialog :title="dialogTitle" :visible.sync="dialogVisible" @close="resetForm" :close-on-click-modal="false">
			<el-form :model="form" :rules="rules" ref="form">
				<el-form-item label="编码" prop="id">
					<el-input v-model="form.id" :disabled="disableInput" placeholder="请输入"></el-input>
				</el-form-item>
				<el-form-item label="日期" prop="date" placeholder="请输入">
					<el-input v-model="form.date"></el-input>
				</el-form-item>
				<el-form-item label="姓名" prop="name" placeholder="请输入">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="地址" prop="address" placeholder="请输入">
					<el-input v-model="form.address"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取消</el-button>
				<el-button type="primary" @click="submitForm('form')">确定</el-button>
			</span>
		</el-dialog>

	</el-container>
</template>

<script>
	import {
		getInfo
	} from './api'
	export default {
		name: 'UserList',
		data() {

			return {

				input_name: "",

				tableData: [{
					id: '001',
					date: '2016-05-02',
					name: 'shuvi',
					address: 'human 1518',

				}, {
					id: '002',
					date: '2016-05-02',
					name: 'shuvi1',
					address: 'human 1518'
				}, {
					id: '003',
					date: '2016-05-02',
					name: 'shuvi2',
					address: 'human 1518'
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


	.userlist {
		.el-header {
			/* text-align: left; */
			display: flex;
			justify-content: space-between;
			align-items: center;

			font-size: 12px;
			background-color: white;
			line-height: 60px;

			.el-input__inner {
				width: 200px;
			}
		}

		.button-container {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding-left: 20px;
		}

		.el-dialog {
			width: 25%;

			.el-form-item__label {
				width: 80px;
			}

			.el-form-item__content {
				margin-left: 80px;
				margin-right: 40px;
			}

		}

	}
</style>