<template>
  <div class="nav">
    <nav class="topbar">
    	<div class="left-menu" @click="showsidemenu">
    		<div>
    			<i class="fa fa-list"></i>
    		</div>
    		<div>
    			<slot>{{title}}</slot>
    		</div>
    	</div>
    	<div class="right-menu" @click="hidesidemenu">
    		<router-link to="/Citys">
    			<div class="address">
    				<span>{{address}}</span>
    				<i class="fa fa-angle-down"></i>
    			</div>
    		</router-link>
    		<router-link to="/Reg">
    			<div class="user">
    				<i class="fa fa-user"></i>
    				<span v-if="show">已登录</span>
    			</div>
    		</router-link>
    	</div>
    </nav>
  </div>
</template>

<script>
	import bus from '../bus.js'
export default {
  name: 'nav',
  data () {
    return {
      title: '卖座电影',
      address:'太原',
      show:false
    }
  },
  created(){
  		var username = document.cookie;
		username = window.decodeURIComponent(username);
		username = username.split("=")[1];
		if (username) {
			this.show = true
		}
  	},
  methods:{
  	showsidemenu(){
  		bus.$emit('showmenu')
  	},
  	hidesidemenu(){
			bus.$emit('hidemenu')
		}
  }
}
</script>

<style scoped>
	.topbar{
		height: 4.5rem;
		position: fixed;
		background-color: #282828;
		width: 100%;
		max-width: 800px;
		color: white;
		display: flex;
		justify-content: space-between;
		font-size: 1.4rem;
		z-index: 999;
	}
	.topbar div{
		display: inline-block;
	}
	.topbar .left-menu{
		height: 100%;
		width: 55%;
		cursor: pointer;
	}
	.topbar .left-menu div:nth-of-type(1){
		height: 100%;
		border-right: 1px solid #363636;
		padding: 1.2rem 1.5rem;
		color: #999999;
	}
	.topbar .left-menu div:nth-of-type(2){
		margin-left: 1rem;
	}
	.topbar .right-menu{
		height: 100%;
		width: 40%;
		color: #999999;
	}
	.address{
		padding-right: 1rem;
	}
	.topbar .right-menu a{
		display: inline-block;
		height: 100%;
		line-height: 4.5rem;
	}
</style>
