
<template>
    <div class="reg">
        <navbar>注册</navbar>
        <div style="height: 4.5rem;"></div>
        <div class="reg-1">
            <div class="reg-1-1">
            	<input type="text" v-model="params.username" name="username" id="username" placeholder="请输入手机号/邮箱" required/>
            </div>
            	<p style="color: red;width: 80%;margin: 0 auto;" v-if="usershow">账号格式不正确！</p>
            <div class="reg-1-1">
            	<input type="password" v-model="params.psw" name="password" id="password" placeholder="请输入密码/验证码" required/>
            </div>
            	<p style="color: red;width: 80%;margin: 0 auto;" v-if="pswshow">密码格式不正确！</p>
            <button @click="regClick">注册</button>
            <button @click="tologinClick">已有帐号，去登陆</button>
        </div>
    </div>
</template>

<script>
    import Navbar from './Navbar'
    export default{
        name:'reg',
        data(){
        	return{
        		params:{
			        username:'',
			        psw:'',
			    },
			    usershow:false,
			    pswshow:false
        	}
        },
        components:{
            Navbar
        },
        methods: {
        	changeShow(){
        		setTimeout(function(){
        			document.querySelector('.alert').style.display = 'none'
        		},2000)
        	},
		    regClick(){
		    	if (!(/^1[34578]\d{9}$/.test(this.params.username))) {
		    		this.usershow = true
		    	}else{
		    		if (!(/^.{6,16}$/.test(this.params.psw))) {
			    		this.pswshow = true
			    	}else{
					    this.http.get('/user/reg',{
					       params:this.params
					    }).then(res=>{
					      if (res.data == '注册成功') {	      		
					      	this.$router.push({path: '/Login'});
					    }
					    },err=>{
					        console.log(err);
					    });
			    	}
		    	}
		    },
		    tologinClick(){
		    	this.$router.push({path: '/Login'});
		    }
		}
    }
</script>

<style scoped>
	.reg{
		background-color: #F6F6F6;
		width: 100%;
		height: 500px;
	}
	.reg-1{
		width: 100%;
	}
	.reg-1-1{
		width: 80%;
		margin: 0 auto;
		margin-top: 2rem;
		border-bottom: 1px solid #8E8E8E;
		padding: 0.5rem 1rem;
	}
	.reg-1-1 input{
		border: none;
		width: 100%;
		background-color: #F6F6F6;
		
	}
	.reg button{
		padding: 1rem 0;
		background-color: orangered;
		border-radius: 4rem;
		border: none;
		width: 60%;
		display: block;
		margin: 6rem auto;
	}
	.alert{
		position: absolute;
		background-color: gray;
		width: 100%;
		height: 100%;
		display: none;
	}
</style>
