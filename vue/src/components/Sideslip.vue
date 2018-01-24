
<template>
    <div class="sideslip">
        <div class="sideslip-cover" @click="hidesidemenu">
        </div>
        <div class="sideslip-menu">
    		<router-link to="/">
    			<p class="home" @click="hidesidemenu">
    				<span>首页</span>
    				<i class="fa fa-angle-right"></i>
    			</p>
    		</router-link>
    		<router-link to="/Films">
    			<p @click="hidesidemenu">
    				<span>影片</span>
    				<i class="fa fa-angle-right"></i>
    			</p>
    		</router-link>
    		<router-link to="/Cinema">
    			<p @click="hidesidemenu">
    				<span>影院</span>
    				<i class="fa fa-angle-right"></i>
    			</p>
    		</router-link>
    		<router-link to="/Shopping">
    			<p @click="hidesidemenu">
    				<span>商城</span>
    				<i class="fa fa-angle-right"></i>
    			</p>
    		</router-link>
    		<router-link to="/Login">
    			<p @click="hidesidemenu">
    				<span>我的</span>
    				<i class="fa fa-angle-right"></i>
    			</p>
    		</router-link>
    		<router-link to="/">
    			<p @click="hidesidemenu">
    				<span>卖座卡</span>
    				<i class="fa fa-angle-right"></i>
    			</p>
    		</router-link>
    	</div>
    </div>
</template>

<script>
	import bus from '../bus.js'
    export default{
        name:'sideslip',
        methods:{
        	hidesidemenu(){
        		bus.$emit('hidemenu')
        	}
        }
        
    }
</script>

<style scoped>
	.sideslip{
		position:fixed;
		top: 4.5rem;
		width: 100%;
		height: 100%;
		z-index: 666;
	}
	.sideslip .sideslip-cover{
		width: 100%;
		height: 100%;
		z-index: 667;
		background-color: #757575;
		opacity: 0.8;
		position: absolute;
	}
	.sideslip .sideslip-menu{
		width: 65%;
		height: 100%;
		z-index: 668;
		background-color: #282828;
		color: #9A9A9A;
		position: absolute;
	}
	.sideslip .sideslip-menu a .home{
		border-top: 2px solid #363636;
	}
	.sideslip .sideslip-menu a p{
		font-size: 1.3rem;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
		border-bottom: 1px solid #363636;
	}
	.sideslip .sideslip-menu a p i{
		float: right;
	}
</style>
