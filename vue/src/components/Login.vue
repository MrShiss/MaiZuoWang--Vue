
<template>
    <div class="login">
        <navbar>登录</navbar>
        <div style="height: 4.5rem;"></div>
        <div class="login-1">
            <div class="login-1-1">
            	<input v-focus type="text" v-model="params.username" name="username" id="username" placeholder="请输入手机号/邮箱" required/>
            </div>
            <div class="login-1-1">
            	<input type="password" v-model="params.psw" name="password" id="password" placeholder="请输入密码/验证码" required/>
            </div>
            <p style="color: red;width: 80%;margin: 0 auto;" v-if="pswshow">账号或者密码不正确！</p>
            <button @click="loginClick">登录</button>
        </div>
    </div>
</template>

<script>
	import qs from 'qs'
    import Navbar from './Navbar'
    export default{
        name:'login',
        data(){
        	return{
        		params:{
			        username:'',
			        psw:''
			    },
			    pswshow:false
        	}
        },
        components:{
            Navbar
        },
        directives: {
		  focus: {
		    // 指令的定义
		    inserted: function (el) {
		      el.focus()
		    }
		  }
        },
        methods: {
		    loginClick(name, value, exdays){
		       console.log(qs.stringify(this.params));
		      this.http.post('/user/login',qs.stringify(this.params)).then(res=>{
		      	console.log(res.data)
		      	if (res.data.code == 1) {
		      		document.cookie = 'username=' + username
		      		this.$router.push({path:'/'})
		      	}else{
		      		this.pswshow = true
		      	}
		      },err=>{
		        console.log(err);
		      });
		    },
		}
    }
</script>

<style scoped>
	.login{
		background-color: #F6F6F6;
		width: 100%;
		height: 500px;
	}
	.login-1{
		width: 100%;
	}
	.login-1-1{
		width: 80%;
		margin: 0 auto;
		margin-top: 2rem;
		border-bottom: 1px solid #8E8E8E;
		padding: 0.5rem 1rem;
	}
	.login-1-1 input{
		border: none;
		width: 100%;
		background-color: #F6F6F6;
		
	}
	.login button{
		padding: 1rem 0;
		background-color: orangered;
		border-radius: 4rem;
		border: none;
		width: 60%;
		display: block;
		margin: 6rem auto;
	}
</style>
