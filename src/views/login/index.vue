<template>
  <div class="login">
    <div class="navbar">
      <div class="header-title">汉阳区视频汇聚共享平台</div>
    </div>
    <div class="login-box">
      <h2>欢迎登录</h2>
      <el-form ref="form" :model="form">
        <el-form-item>
          <el-input v-model="form.username" placeholder="请输入账号">
            <i slot="prefix" class="el-input__icon el-icon-s-custom" />
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" placeholder="请输入密码" class="no-autofill-pwd">
            <i slot="prefix" class="el-input__icon el-icon-s-cooperation" />
          </el-input>
        </el-form-item>
        <el-form-item style="margin-bottom: 0">
          <el-button class="submit-btn" @click="handleLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/home/index'
import md5 from 'js-md5'
import moment from 'moment'
export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async handleLogin() {
      if (this.form.username && this.form.password) {
        try {
          let errorNum = Number(localStorage.getItem('errorNum'))
          if (errorNum >= 5) {
            const errorTime = localStorage.getItem('errorTime') || moment()
            const diff = moment().diff(moment(errorTime), 'minutes')
            if (diff < 15) {
              this.$notify.error({
                title: '错误',
                message: '口令错误次数太多，请稍后再试！'
              })
              return
            } else {
              localStorage.removeItem('errorNum')
              localStorage.removeItem('errorTime')
              errorNum = 0
            }
          }

          const params = {
            appId: '',
            appSecret: '',
            mode: 0,
            name: this.form.username,
            password: md5(this.form.password),
            verificationCode: '123456'
          }
          const {
            code,
            data: { accessToken }
          } = await login(params)
          if (code === 200) {
            this.$notify.success({
              title: '成功',
              message: '登陆成功！'
            })
            sessionStorage.setItem('token', accessToken)
            sessionStorage.setItem('username', this.form.username)
            this.$router.push({ path: '/home' })
          } else {
            if (!errorNum) {
              localStorage.setItem('errorNum', 1)
            } else if (errorNum <= 4) {
              localStorage.setItem('errorNum', errorNum + 1)

              if (errorNum === 4) {
                localStorage.setItem('errorTime', moment())
              }
            }
            this.$notify.error({
              title: '错误',
              message: '用户名或密码错误！'
            })
          }
        } catch (error) {
          console.log(error)
        }
      } else {
        this.$notify.error({
          title: '错误',
          message: '请输入账号或密码'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-image: url('~@/assets/images/login/bg.png');
  background-size: 100% 100%;
}

.login-box {
  width: 370px;
  height: 300px;
  padding: 40px;
  box-shadow: 0 0 10px rgb(28, 81, 230) inset;
  position: absolute;
  left: 1200px;
  top: calc(50vh - 150px);
  h2 {
    font-size: 18px;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 40px;
    background: linear-gradient(180deg, rgba(0, 255, 246, 0.93) 32.0068359375%, #15a8ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .submit-btn {
    background: linear-gradient(90deg, #194dd9 0%, #15d3ff 100%);
    width: 100%;
    border: none;
    &:hover {
      color: #fff;
    }
  }
}

.no-autofill-pwd {
  ::v-deep .el-input__inner {
    -webkit-text-security: disc !important;
  }
}
</style>
