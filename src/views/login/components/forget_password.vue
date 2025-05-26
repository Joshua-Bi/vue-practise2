<template>
    <el-dialog v-model="state.forgetdialogVisible" title="忘记密码" width="400px">
        <el-form class="login-form" :label-position="labelPosition" :rules="rules">
            <el-form-item label="输入您的注册账号" prop="account">
                <el-input v-model="forgetData.account" placeholder="输入您的注册账号" />
            </el-form-item>
            <el-form-item label="输入您的个人邮箱" prop="email">
                <el-input v-model="forgetData.email" placeholder="输入您的个人邮箱" />
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="state.forgetdialogVisible = false">取消</el-button>
                <el-button type="primary" @click="state.forgetdialogVisible = false">
                    下一步
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { FormItemProps, FormProps } from 'element-plus'

const labelPosition = ref<FormProps['labelPosition']>('top')

interface forgeDate {
    account: number | null;
    email: string;
    rePassword?: string;

}

const forgetData: forgeDate = reactive({
    account: null,
    email: '',

})

const rules = reactive({
    account: [
    { required: true, message: '请输入您的注册账号', trigger: 'blur' },
  ],
    email: [
    { required: true, message: '请输入您的注册邮箱', trigger: 'blur' },
  ],

})

// 打开修改密码弹窗
const openChangePassword = () =>{

}

// 默认弹窗关闭
const state = reactive({
    forgetdialogVisible: false
})

// 打开弹窗
const open = () => {
    state.forgetdialogVisible = true
}

defineExpose({
    open
})

</script>

<style scoped lang="scss"></style>