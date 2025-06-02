<template>
    <breadCrumb ref="breadcrumb" :item="item" />
    <div class="commom-wrapped">
        <div class="commom-content">
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane label="账号详情" name="first">
                    <div class="account-info-wrapped">
						<span>用户头像：</span>
						<div class="account-info-content">
							<!-- action 是上传头像的接口 -->
							<el-upload class="avatar-uploader" :action="avatarUrl"
								:show-file-list="false" :on-success="handleAvatarSuccess"
								:before-upload="beforeAvatarUpload">
								<img v-if="userStore.imageUrl" :src="userStore.imageUrl" class="avatar" alt="用户头像"/>
								<el-icon v-else class="avatar-uploader-icon">
									<Plus />
								</el-icon>
							</el-upload>
						</div>
					</div>
					<div class="account-info-wrapped">
						<span>用户账号：</span>
						<div class="account-info-content">
							<el-input v-model="userData.account" disabled></el-input>
						</div>
					</div>
					<div class="account-info-wrapped">
						<span>用户密码：</span>
						<div class="account-info-content">
							<el-button type="primary" @click="openChangePassword">修改密码</el-button>
						</div>
					</div>
					<div class="account-info-wrapped">
						<span>用户姓名：</span>
						<div class="account-info-content">
							<el-input v-model="userData.name"></el-input>
						</div>
						<div class="account-save-button">
							<el-button type="primary" @click="saveName">保存</el-button>
						</div>
					</div>
					<div class="account-info-wrapped">
						<span>用户性别：</span>
						<div class="account-info-content">
							<el-select v-model="userData.sex" class="m-2" style="width: 100px">
								<el-option label="男" value="男" />
								<el-option label="女" value="女" />
							</el-select>
						</div>
						<div class="account-save-button">
							<el-button type="primary" @click="saveSex">保存</el-button>
						</div>
					</div>
					<div class="account-info-wrapped">
						<span>用户身份：</span>
						<div class="account-info-content">
							<el-input v-model="userData.identity" disabled></el-input>
						</div>
					</div>
					<div class="account-info-wrapped">
						<span>用户部门：</span>
						<div class="account-info-content">
							<el-input v-model="userData.department" disabled></el-input>
						</div>
					</div>
					<div class="account-info-wrapped">
						<span>用户邮箱：</span>
						<div class="account-info-content">
							<el-input v-model="userData.email"></el-input>
						</div>
						<div class="account-save-button">
							<el-button type="primary" @click="saveEmail">保存</el-button>
						</div>
					</div>
                </el-tab-pane>
                <el-tab-pane label="公司信息" name="second">公司信息</el-tab-pane>
                <el-tab-pane label="首页管理" name="third">首页管理</el-tab-pane>
                <el-tab-pane label="其他设置" name="fourth">其他设置</el-tab-pane>
            </el-tabs>
        </div>
    </div>
    <!-- 修改密码弹窗 -->
    <change ref="changeP"></change>
    <editor ref="editorP"></editor>
</template>

<script lang="ts" setup>
import breadCrumb from '@/components/bread_crumb.vue'
import { reactive, ref } from 'vue'
import { userInforStore } from '../../store/userinfor'
import { ElMessage } from 'element-plus'
import { bind } from '../../api/userinfor'


const breadcrumb = ref()
const userStore = userInforStore()
const item = reactive({
    first: '系统设置',
    })

const activeName = ref('first')

interface user {
		account: number|null,
		name: string,
		sex: string,
		identity: string,
		department: string,
		email: string
	}

	const userData: user = reactive({
		account: null,
		name: '',
		sex: '',
		identity: '',
		department: '',
		email: ''
	})

const handleAvatarSuccess = (response:any
	) => {
		// imageUrl.value = URL.createObjectURL(uploadFile.raw!)
		if (response.status == 0) {
			userStore.$patch({
				imageUrl: response.url
			})
			ElMessage({
				message: '更新头像成功',
				type: 'success',
			});
			(async () => {
				const res = await bind( localStorage.getItem('account') as unknown as number, response.onlyId, response.url)
				console.log(res)
			})()
		} else {
			ElMessage.error('更新头像失败！请重新上传')
		}
	}

// 上传之前的函数
const beforeAvatarUpload = (rawFile:any) => {
		if (rawFile.type !== 'image/jpeg') {
			ElMessage.error('头像必须是jpg格式！')
			return false
		} else if (rawFile.size / 1024 / 1024 > 2) {
			ElMessage.error('头像必须小于2MB!')
			return false
		}
		return true
}



</script>

<style lang="scss" scoped>
// 外壳
.common-wrapped {
    padding: 8px;
    background: #f5f5f5;
    // 计算 减去了头部还有面包屑 + 2X8=16边距
    height: calc(100vh - 101px);

    // 内容
    .common-content {
        padding: 0 10px;
        height: 100%;
        background: #fff;

        // 账号信息外壳
        .account-info-wrapped {
            display: flex;
            align-items: center;
            padding-left: 50px;
            margin-bottom: 24px;
            font-size: 14px;

            // 账号信息内容
            .account-info-content {
                margin-left: 24px;
                margin-right: 16px;
            }

            // 按钮
            .account-save-button {
                margin-left: 16px;
            }
        }

        // 首页管理外壳
        .home-wrapped {
            padding-left: 50px;
            display: flex;
            flex-direction: column;

            // 提示
            .tips {
                display: flex;
                align-items: center;
                margin-bottom: 8px;

                span {
                    font-size: 14px;
                    color: silver;
                }
            }

            // 轮播图
            .swiper-wrapped {
                display: flex;
                margin-bottom: 16px;

                // 轮播图名字
                .swiper-name {
                    font-size: 14px;
                    margin-bottom: 24px;
                }

                .swiper {
                    width: 336px;
                    height: 96px;

                }
            }
        }
    }
}

// 其他设置
.other-set {
    padding-left: 50px;
    font-size: 14px;

    .department-set {
        margin-bottom: 24px;

        span {
            margin-right: 24px;
        }
    }

    .product-set {

        span {
            margin-right: 24px;
        }
    }
}

// 标签页
.demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}

// 上传头像
.avatar-uploader .avatar {
    width: 178px;
    height: 178px;
    display: block;
}

// 输入框的长度
:deep(.el-input) {
    width: 240px;
}
</style>

<style>
.avatar-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}
</style>