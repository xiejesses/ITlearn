<template>
    <!--登录-注册弹出框-->
    <div class="login-register">
        <div class="md-modal modal-msg md-modal-transition" v-bind:class="{'md-show':loginModalFlag | registerModalFlag}">
            <div class="md-modal-inner">
                <div class="md-top">
                    <div class="md-title" v-if="loginModalFlag">登录</div>
                    <div class="md-title" v-else>注册</div>
                    <i class="md-close" @click="closeModal"></i>
                </div>
                <div class="md-content" v-if="loginModalFlag">
                    <div class="confirm-tips">
                        <div class="error-wrap">
                            <span class="error error-show" v-show="loginerrorTip">用户名或者密码错误</span>
                        </div>
                        <ul>
                            <li class="regi_form_input">
                                <input type="text" tabindex="1" name="loginname" v-model="userName" class="regi_login_input regi_login_input_left" placeholder="请填写用户名" data-type="loginname">
                            </li>
                            <li class="regi_form_input noMargin">
                                <input type="password" tabindex="2" name="loginpassword" v-model="userPwd" class="regi_login_input regi_login_input_left" placeholder="请输入密码" @keyup.enter="login">
                            </li>
                        </ul>
                    </div>
                    <div class="login-wrap">
                        <a href="javascript:;" class="btn-login" @click="login">登 录</a>
                    </div>
                    <div class="prompt-box">
                        <span class="prompt-box-title">没有账号？</span>
                        <a href="javascript:void(0)" @click="changeFlag">
                            <span class="prompt-box-title-register">注册</span>
                        </a>
                        <a href="javascript:void(0)" class="rightClick">忘记密码</a>
                    </div>
                </div>

                <div class="md-content" v-else>
                    <div class="confirm-tips">
                        <div class="error-wrap">
                            <span class="error error-show" v-show="registererrorTip">用户名或者密码错误</span>
                        </div>
                        <ul>
                            <li class="regi_form_input">
                                <input type="text" tabindex="3" name="registername" v-model="userRegisterName" class="regi_login_input regi_login_input_left" placeholder="请输入用户名" data-type="registername">
                            </li>
                            <li class="regi_form_input">
                                <input type="text" tabindex="4" name="phoneemail" v-model="userRegisterEmail" class="regi_login_input regi_login_input_left" placeholder="请填写邮箱" data-type="phoneemail">
                            </li>
                            <li class="regi_form_input noMargin">
                                <input type="password" tabindex="5" name="password" v-model="userRegisterPwd" class="regi_login_input regi_login_input_left login-input-no input_text" placeholder="请输入密码" @keyup.enter="login">
                            </li>
                        </ul>
                    </div>
                    <div class="login-wrap">
                        <a href="javascript:;" class="btn-login" @click="register">注 册</a>
                    </div>
                    <div class="prompt-box">
                        <a href="javascript:void(0)" @click="changeFlag">
                            <span class="prompt-box-title-register">已有账号登录</span>
                        </a>
                    </div>
                </div>

            </div>
        </div>
        <div class="md-overlay" v-if="loginModalFlag | registerModalFlag" @click="closeModal"></div>
    </div>
</template>

<script>
export default {
    name: 'login-register',
    props:["loginModalFlag","registerModalFlag"],
    data() {
        return {
            
        }
    },
    methods:{
        closeModal() {
            this.$emit("close");
        },
        changeFlag() {
            this.$emit("change");
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


input:-webkit-autofill {
background-color: #FAFFBD;
background-image: none;
color: #000;
}

.rightClick {
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    color: #03B964;
    float: right;
}

.prompt-box-title-register {
    /*color: #333;*/
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    color: #03B964;
}

.prompt-box {
    margin-left: 40px;
    margin-top: 15px;
}
a {
    text-decoration: none;
}

.prompt-box-title {
    color: #333;
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
}

.md-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 400px;
  height: auto;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  visibility: hidden;
  z-index: 201;
}

.md-modal.md-modal-m {
  width: 620px;
}

.md-modal .md-close {
  position: absolute;
  top: 7px;
  right: 7px;
  width: 34px;
  height: 34px;
  -webkit-transform: scale(0.5);
  -ms-transform: scale(0.5);
  transform: scale(0.5);
  text-indent: -8000px;
}

.md-modal .md-close:before, .md-modal .md-close:after {
  position: absolute;
  top: 16px;
  left: -4px;
  content: "";
  width: 44px;
  height: 3px;
  background: #d7d8dd;
  -webkit-transition: -webkit-transform .5s ease-out;
  transition: -webkit-transform .5s ease-out;
  transition: transform .5s ease-out;
  transition: transform .5s ease-out, -webkit-transform .5s ease-out;
}

.md-modal .md-close:before {
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.md-modal .md-close:after {
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.md-modal .md-close:hover:before, .md-modal .md-close:hover:after {
  -webkit-transition: -webkit-transform .3s ease-out;
  transition: -webkit-transform .3s ease-out;
  transition: transform .3s ease-out;
  transition: transform .3s ease-out, -webkit-transform .3s ease-out;
}

.md-modal .md-close:hover:before {
  -webkit-transform: rotate(-135deg);
  -ms-transform: rotate(-135deg);
  transform: rotate(-135deg);
}

.md-modal .md-close:hover:after {
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.md-modal .md-tit {
  font-weight: 200;
  line-height: 1.8em;
  text-align: center;
}

.md-modal .md-modal-inner {
  padding: 60px 50px;
}

.md-modal .btn-wrap {
  margin-top: 20px;
  text-align: center;
  font-size: 0;
}

.md-modal .btn-wrap .btn {
  width: 45%;
  min-width: 80px;
  margin: 0 2.5%;
}

.md-modal .confirm-tips, .md-modal .alert-tips {
  font-size: 14px;
  font-weight: 200;
  text-align: center;
}

.md-modal .confirm-tips p, .md-modal .alert-tips p {
  line-height: 1.8em;
}

.md-modal .confirm-tips {
  min-height: 5.65em;
}

.md-modal .alert-tips {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 10.25em;
  -ms-flex-align: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.md-modal .alert-tips p {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.md-modal.modal-normal .content-tit {
  margin-bottom: 20px;
  line-height: 20px;
  font-size: 16px;
  color: #333;
}

.md-modal .icon-status-ok {
  width: 20px;
  height: 20px;
  fill: #ee7a23;
  vertical-align: middle;
  margin-right: 15px;
}

.md-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 200;
}

.md-modal-transition .md-modal-inner {
  background: #fff;
  -webkit-transform: translateY(20%);
  -ms-transform: translateY(20%);
  transform: translateY(20%);
  opacity: 0;
  -webkit-transition: all .3s ease-out;
  transition: all .3s ease-out;
}

.md-modal-transition.md-show {
  visibility: visible;
}

.md-modal-transition.md-show .md-modal-inner {
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
  opacity: 1;
  -webkit-transition: all .5s ease-out;
  transition: all .5s ease-out;
}


.regi_form_input{
  position: relative;
  height: 42px;
  line-height: 42px;
  background: none;
  margin-bottom: 15px;
  font-size: 14px;
  overflow: hidden;
  border:1px solid #ccc;
  padding-bottom: 0;
  list-style: none;
}
.regi_form_input .icon {
  display: inline-block;
  float: left;
  width: 25px;
  height: 29px;
  margin: 6px 0 0 14px;
  background-position: 4px 5px;
  background-image: url("/static/icon.png");
  background-repeat: no-repeat;
}
.regi_form_input .IconPwd {
  background-position: -198px 3px;
}
.regi_form_input .regi_login_input{
  position: absolute;
  left:0px;
  top:0;
  padding: 9px 0 10px 5px;
  width: 252px;
  font-size: 14px;
  zoom: 1;
  border: none;
  color: #333;
  /*height: 23px;*/
  line-height: 23px;
  background: 0 0!important;
}
.md-title{
  position: absolute;
  top: 14px;
  line-height: 24px;
  padding: 8px 0;
  color: #333;
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
}
.login-wrap{
  margin-top:30px;
  margin-left: 40px;
}
.login-wrap a{
    text-decoration: none;
}
.md-content .btn-login{
  display: block;
  height: 38px;
  line-height: 38px;
  border: 2px solid #03B964;
  background: #03B964;
  color: #fff;
  font-size: 18px;
  text-align: center;
}
.btn-login:hover {
  background: #03B980;
  border: 2px solid #03B980;
}
.error-wrap .error{
  font-size: 12px;
  color: #d31723;
  visibility: hidden;
  display: block;
  padding: 0 0 7px 17px;
  line-height: 16px;
  height: 16px;
  text-align: left;
  background: url("/static/icon.png") 0 -100px no-repeat;
}
.md-content .error-wrap .error-show{
  visibility: visible;
  height: auto;
}

</style>
