<!-- app.vue -->
<template>
  <div id="app">
  	<transition name="slide">
  		<sideslip v-if="show"></sideslip>
  	</transition>
    <router-view></router-view>
  </div>
</template>

<script>
	import Sideslip from './components/Sideslip'
	import bus from './bus.js'
	export default{		
		components :{
			Sideslip
		},
		data(){
			return{
				show:false
			}
		},
		created () {
    bus.$on('showmenu',()=>{
      this.show = !this.show;
    })
    bus.$on('hidemenu',()=>{
      this.show = false;
    })
  }
	}
</script>

<style>
#app{
	max-width: 800px;
	/*background-color: #EBEBEB;*/
}
.slide-enter,
.slide-leave-to{
	transform: translateX(-100%);
}
.slide-leave,
.slide-enter-to{
	transform: translateX(0);
}
.slide-enter-active,
.slide-leave-active{
  transition: all 0.5s;
}
</style>
