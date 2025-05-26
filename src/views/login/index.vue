<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header-wapped">
        <div class="header-content">
          <h3>麋鹿鸭的游戏时刻</h3>
          <span class="welcome">欢迎</span>
        </div>
      </el-header>
      <el-main class="main-wapped">
        <div class="mian-content">
          <el-card class="box-card">
            <el-tabs v-model="activeName" class="demo-tabs" stretch="true">
              <el-tab-pane label="登录" name="first">
                <el-form class="login-from">
                  <el-form-item label="账号">
                    <el-input v-model="loginDate.account" placeholder="请输入账号" />
                  </el-form-item>
                  <el-form-item label="密码">
                    <el-input v-model="loginDate.password" placeholder="请输入密码" />
                  </el-form-item>
                  <!-- 底部外壳 -->
                  <div class="footer-wrapped">
                    <div class="forget-password">
                      <span class="forget-password-button" @click="openForget">忘记密码</span>
                    </div>
                    <div class="footer-button">
                      <el-button type="primary" @click="Login">登录</el-button>
                    </div>
                    <div class="footer-go-register">
                      还没有账号？<span class="go-register">马上注册</span>
                    </div>
                  </div>
                </el-form>
              </el-tab-pane>
              <el-tab-pane label="注册" name="second">
                <el-form class="login-from">
                  <el-form-item label="账号">
                    <el-input v-model="registerData.account" placeholder="账号长度6-12位" />
                  </el-form-item>
                  <el-form-item label="密码">
                    <el-input v-model="registerData.password" placeholder="密码需长度6-12位含字母数字" />
                  </el-form-item>
                  <el-form-item label="确认密码">
                    <el-input v-model="registerData.rePassword" placeholder="请再次输入密码" />
                  </el-form-item>
                  <div class="footer-button">
                    <el-button type="primary" @click="Register">注册</el-button>
                  </div>
                </el-form>
              </el-tab-pane>

            </el-tabs>
          </el-card>
        </div>
      </el-main>
      <el-footer class="footer-wapped">
        <div class="footer-content">
          <div class="title">
            <span>网络小菜鸡</span> |
            <span>前端工程师(实习)</span> |
            <span>阿里云社区常逛专家</span> |
            <span>CSND搜索专家</span> |
            <span>CS答辩S高手</span>
          </div>
        </div>
      </el-footer>
    </el-container>
  </div>
  <forget_password ref="forgetP">
  </forget_password>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import forget_password from './components/forget_password.vue';


const activeName = ref('first')

interface fromDate {
  account: number | null;
  password: string;
  rePassword?: string;

}

// 忘记密码弹窗
  const forgetP = ref()
	// 打开忘记密码弹窗
	const openForget = () => {
		forgetP.value.open()
	}

  // 登录
  const Login = () =>{

  }

  // 注册
  const Register = () =>{

  }

const loginDate: fromDate = reactive({
  account: null ,
  password: '',

})

const registerData: fromDate = reactive({
  account: null ,
  password: '',
  rePassword: '',

})


</script>

<style lang="scss" scoped>
.header-wapped {
  .header-content {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .welcome {
      font-size: 13px;
    }
  }
}



.main-wapped {
  margin: 0 200px;
  background-image: url('@/assets/preview2.jpg');
  width: 1200px;
  height: 600px;
  margin: 0 auto;
  background-size: 60%;
  background-position: left;
  background-repeat: no-repeat;

  .box-card {
    width: 350px;
    height: 375px;
    float: right;
    position: relative;
    top: 14%;


    .login-from {

      // 登录底部外壳
      .footer-wrapped {
        display: flex;
        flex-direction: column;

        .forget-password {
          display: flex;
          justify-content: flex-end;
          margin: 10px 0;

          .forget-password-button {
            font-size: 12px;
            color: #409eff;
            // 鼠标移入的效果
            cursor: pointer;
          }
        }


        .footer-go-register {
          font-size: 12px;
          margin: 12px 0;
          display: flex;
          justify-content: center;

          .go-register {
            font-size: 12px;
            color: #409eff;
            cursor: pointer;
          }
        }
      }

      // 底部登录按钮
      .footer-button {
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }
  }
}


.footer-wapped {
  margin-top: 10px;

  .footer-content {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  // 底部介绍
  .title {
    color: #666;
  }

  span {
    color: #666;
    font-size: 12px;
  }


}

// 表单边距
.el-form {
  margin-top: 30px;
}

// tabs标签
:deep(.el-tabs__item) {
  color: #333;
  font-size: 18px;
}

// 输入框高度
:deep(.el-input__inner) {
  height: 40px;
}

// 输入框标签字体高度
:deep(.el-form-item__label) {
  height: 40px;
  line-height: 40px;
}

// 登录按钮
:deep(.el-button) {
  width: 300px;
  height: 45px;
  font-size: 16px;
}
</style>