
<template>
    <div class="allfilms">
        <navbar></navbar>
        <div style="height: 4.5rem;"></div>
        <div class="all-container">
        	<div class="all-container-top">
        		<p @click="changehotShow" :class="[hotShow ? activeClass : '']">正在热映</p>
        		<p @click="changenewShow" :class="[newShow ? activeClass : '']">即将上映</p>
        	</div>
        	<div v-if="hotShow" class="all-container-1">
        		<div v-for="hf in allhotfilms" class="all-container-1-1">
        			<a :href="'https://m.maizuo.com/v4/#!/film/' + hf.id">
        				<img width="20%" height="80%"  :src="hf.poster.origin" alt="" />
        				<div class="all-container-1-1-2">
        					<div>
        						<span>{{hf.name}}</span>
    							<p>
    								<span>{{hf.grade}}</span>
    								<i class="fa fa-angle-right"></i>
    							</p>      						
        					</div>
        					<p class="m-top-1">{{hf.intro}}</p>
        					<p class="m-top-1">
        						<span style="color: #8AA2BF;">{{hf.cinemaCount}}</span>家影院上映&#x3000;
	    	    				<span style="color: #8AA2BF;">{{hf.watchCount}}</span>人购票
        					</p>
        				</div>
        			</a>
        		</div>
        	</div>
        	<div v-if="newShow" class="all-container-2">
        		<div v-for="nf in allnewfilms" class="all-container-2-1">
        			<a href="'https://m.maizuo.com/v4/#!/film/' + nf.id">
        				<img width="20%" height="80%"  :src="nf.poster.origin" alt="" />
        				<div class="all-container-2-1-2">
        					<p class="all-container-2-1-2-1">
        						<span>{{nf.name}}</span>
        						<i class="fa fa-angle-right"></i>
        					</p>
        					<p class="all-container-2-1-2-2">{{nf.intro}}</p>
        					<p class="all-container-2-1-2-3">
        						<span>{{nf.premiereAt | date1}}上映</span>&#x3000;
        						<span>{{nf.premiereAt | date2}}</span>
        					</p>
        				</div>
        			</a>
        		</div>
        	</div>
        </div>
    </div>
</template>

<script>
    import Navbar from '../Navbar'
    export default{
        name:'allfilms',
        data(){
        	return{
        		allhotfilms:[],
        		allnewfilms:[],
        		page:1,
        		isLoading:false,
        		hotShow:true,
        		newShow:false,
        		activeClass:'active'
        	}
        },
        components:{
            Navbar
        },
        methods:{
        	didScroll(){
        		var bodyH = document.body.clientHeight;//页面的总高度
	            var scrollTop = document.scrollingElement.scrollTop;//页面滚动时被卷去的高度
	            var windowH = document.documentElement.clientHeight;//可视页面的高度
	            if (windowH+scrollTop >= bodyH-10) {
//	                console.log('加载更多');
	                if (!this.isLoading) {
	                	this.page += 1
	                	console.log(this.page)
	                    this.loadMore();
	                }
	            }
	        },
	        loadMore(){
	        	this.isLoading = true;
	            this.http.get('/mapi/film/now-playing?page=' + this.page + '&count=7').then(res=>{
	        		this.allhotfilms = this.allhotfilms.concat(res.data.data.films); 
//	            	console.log(this.allhotfilms)
	            	if (res.data) {
	            		this.isLoading = false;
	            	}                
	            })
	            this.http.get('/mapi/film/coming-soon?page=' + this.page + '&count=7').then(res=>{
	        		this.allnewfilms = this.allnewfilms.concat(res.data.data.films); 
//	            	console.log(this.allnewfilms)
	            	if (res.data) {
	            		this.isLoading = false;
	            	}                
	            })
	        },
	        changehotShow(){
	        	console.log(1)
	        	this.hotShow = true;
	        	this.newShow = false;
	        },
	        changenewShow(){
	        	this.newShow = true;
	        	this.hotShow = false;
	        }
        },
        mounted(){
        	window.onscroll = this.didScroll;
        	this.http.get('/mapi/film/now-playing?page=1&count=7').then(res=>{           
            this.allhotfilms = res.data.data.films
//          console.log(this.allhotfilms);
        });
        this.http.get('/mapi/film/coming-soon?page=1&count=7').then(res=>{
            this.allnewfilms = res.data.data.films
//          console.log(this.allnewfilms);
            
        });
        },
        filters:{
        	date1:function(value){
        		return new Date(value).getMonth()+1 + '月' + new Date(value).getDate() + '日'
        	},
        	date2:function(value){
        		var n = new Date(value)
        		if(n.getDay() == 0){
        			return '星期日'
        		}
        		if(n.getDay() == 1){
        			return '星期一'
        		}
        		if(n.getDay() == 2){
        			return '星期二'
        		}
        		if(n.getDay() == 3){
        			return '星期三'
        		}
        		if(n.getDay() == 4){
        			return '星期四'
        		}
        		if(n.getDay() == 5){
        			return '星期五'
        		}
        		if(n.getDay() == 6){
        			return '星期六'
        		}
        	}
        }
    }
</script>

<style scoped>
	.allfilms{
		background-color: #F9F9F9;
	}
	.all-container{
		padding: 1.5rem;
	}
	.all-container-top{
		display: flex;
		font-size: 1.5rem;
		border-bottom: 1px solid orangered;
		margin-bottom: 1.5rem;
	}
	.all-container-top p{
		width: 50%;
		text-align: center;
		padding-bottom: 1.5rem;
		cursor: pointer;
		color: #6A6A6A;
	}
	.all-container-1-1 a{
		display: flex;
		padding: 1.5rem 0;
		border-bottom: 1px dashed #D8D8D8;
	}
	.all-container-1-1-2{
		padding: 0.5rem 1.5rem;
		width: 80%;
	}
	.all-container-1-1-2 div{
		display: flex;
		justify-content: space-between;
	}
	.all-container-1-1-2 div span{
		font-size: 1.5rem;
		color: black;
		width: 80%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.all-container-1-1-2 div p span{
		color: orangered;
	}
	.all-container-1-1-2 p{
		color: #8E8E8E;
		font-size: 1.2rem;
	}
	.all-container-1-1-2 .m-top-1{
		margin-top: 1rem;
	}
	.all-container-2-1 a{
		display: flex;
		padding: 1.5rem 0;
		border-bottom: 1px dashed #D8D8D8;
	}
	.all-container-2-1-2{
		padding: 0.5rem 1.5rem;
		width: 80%;
	}
	.all-container-2-1-2-1{
		display: flex;
		justify-content: space-between;
	}
	.all-container-2-1-2-2,
	.all-container-2-1-2-3{
		margin-top: 1rem;
		font-size: 1.2rem;
	}
	.all-container-2-1-2-1 span{
		font-size: 1.5rem;
		color: black;
		width: 80%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.all-container-2-1-2-1 i{
		font-size: 1.5rem;
		color: #E1D7D5;
		padding-top: 0.2rem;
	}
	.all-container-2-1-2-2{
		color: #8E8E8E;
	}
	.all-container-2-1-2-3{
		color: #FFB375;
	}
	.active{
		border-bottom: 2px solid orangered;
		color: orangered;
	}
</style>
