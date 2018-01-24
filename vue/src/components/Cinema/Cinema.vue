
<template>
    <div class="cinema">
        <navbar>全部影院</navbar>
        <div style="height: 4.5rem;"></div>
        <div class="cinema-1">
        	<button @click="changecShow1">小店区</button>
        	<div v-for="l in list">
        		<div class="cinema-1-1"  v-if="l.district.name == '小店区' && cShow1">
        			<h2>{{l.name}}</h2>
        			<p class="cinema-1-1-1">
        				<span v-for="eat in l.labels">{{eat.name}}</span>
        			</p>
        			<p class="cinema-1-1-2">{{l.address}}</p>
        			<p class="cinema-1-1-3">距离未知</p>
        		</div>
        	</div>
        	<button @click="changecShow2">迎泽区</button>
        	<div v-for="l in list">
        		<div class="cinema-1-1" v-if="l.district.name == '迎泽区' && cShow2">
        			<h2>{{l.name}}</h2>
        			<p class="cinema-1-1-1">
        				<span v-for="eat in l.labels">{{eat.name}}</span>
        			</p>
        			<p class="cinema-1-1-2">{{l.address}}</p>
        			<p class="cinema-1-1-3">距离未知</p>
        		</div>
        	</div>
        	<button @click="changecShow3">万柏林区</button>
        	<div v-for="l in list">
        		<div class="cinema-1-1" v-if="l.district.name == '万柏林区' && cShow3">
        			<h2>{{l.name}}</h2>
        			<p class="cinema-1-1-1">
        				<span v-for="eat in l.labels">{{eat.name}}</span>
        			</p>
        			<p class="cinema-1-1-2">{{l.address}}</p>
        			<p class="cinema-1-1-3">距离未知</p>
        		</div>
        	</div>
        	<button @click="changecShow4">杏花岭区</button>
        	<div v-for="l in list">
        		<div class="cinema-1-1" v-if="l.district.name == '杏花岭区' && cShow4">
        			<h2>{{l.name}}</h2>
        			<p class="cinema-1-1-1">
        				<span v-for="eat in l.labels">{{eat.name}}</span>
        			</p>
        			<p class="cinema-1-1-2">{{l.address}}</p>
        			<p class="cinema-1-1-3">距离未知</p>
        		</div>
        	</div>
        	<button @click="changecShow5">古交区</button>
        	<div v-for="l in list">
        		<div class="cinema-1-1" v-if="l.district.name == '古交区' && cShow5">
        			<h2>{{l.name}}</h2>
        			<p class="cinema-1-1-1">
        				<span v-for="eat in l.labels">{{eat.name}}</span>
        			</p>
        			<p class="cinema-1-1-2">{{l.address}}</p>
        			<p class="cinema-1-1-3">距离未知</p>
        		</div>
        	</div>
        </div>
    </div>
</template>

<script>
    import Navbar from '../Navbar'
    export default{
        name:'cinema',
        data(){
        	return{
        		list:[],
        		cShow1:true,
        		cShow2:false,
        		cShow3:false,
        		cShow4:false,
        		cShow5:false
        	}
        },
        components:{
            Navbar
        },
        methods:{
        	changecShow1(){
        		this.cShow1 = !this.cShow1;
        	},
        	changecShow2(){
        		this.cShow2 = !this.cShow2;
        	},
        	changecShow3(){
        		this.cShow3 = !this.cShow3;
        	},
        	changecShow4(){
        		this.cShow4 = !this.cShow4;
        	},
        	changecShow5(){
        		this.cShow5 = !this.cShow5;
        	}
        },
        mounted () {
        this.http.get('/mapi/cinema?__t=1511229164339').then(res=>{
        	this.list = res.data.data.cinemas;
//          console.log(this.list);
            
        });
        
    }
        
    }
</script>

<style scoped>
	/*.cinema{
		background-color: #EBEBEB;
	}*/
	.cinema-1 button{
		display: block;
		width: 100%;
		border: none;
		border-bottom: 1px solid white;
		height: 4.5rem;
		background-color: #E1E1E1;
		color: #636363;
		-webkit-font-feature-settings: none;
		font-size: 1.5rem;
		cursor: pointer;
	}
	.cinema-1-1{
		background-color: white;
		width: 100%;
		padding: 1.5rem;
		border-bottom: 1px solid #EAEAEA;
		cursor: pointer;
	}
	.cinema-1-1 h2{
		font-weight: normal;
		color: #333333;
	}
	.cinema-1-1 p{
		margin-top: 1rem;
	}
	.cinema-1-1 .cinema-1-1-1 span{
		background-color: #FF9658;
		color: white;
		margin-right: 1rem;
		padding: 0.1rem 0.2rem;
	}
	.cinema-1-1 .cinema-1-1-2,
	.cinema-1-1-3{
		font-size: 1.2rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: #CCCCCC;
	}
</style>
