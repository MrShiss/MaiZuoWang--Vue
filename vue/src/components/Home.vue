<template>
    <div id="home">
    	<navbar></navbar>
        <div style="height: 4.5rem;"></div>
        <!--轮播-->
        <div class="swiper">
		    <swiper auto height="18rem" dots="none" :interval="2000" :show-dots="false">
			     <swiper-item class="black" v-for="item in list" :key="item.name">
			      	<a :href="item.url">
			      		<img width="100%" height="100%" :src="item.imageUrl"/>				      		
			      	</a>
			     </swiper-item>
		    </swiper>
	    </div>
	    <roomitem></roomitem>
    </div>
</template>

<script>
	import Navbar from './Navbar'
	import Roomitem from './Home/Roomitem'
	import { Swiper, SwiperItem } from 'vux'
	export default {
    name:'home',
    data(){
    	return{
    		list:[]
    	}
    },
    components: {
    Swiper,
    SwiperItem,
    Navbar,
    Roomitem
  	},
  	mounted () {
        this.http.get('/mapi/billboard/home?__t=1511101116334').then(res=>{
        	this.list = res.data.data.billboards;
//          console.log(this.list);
            
        });
        
    }
    
   }
</script>

<style scoped>
	
</style>
