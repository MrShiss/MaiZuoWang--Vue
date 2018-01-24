
<template>
    <div class="roomitem">
    	<div class="films">
    	    <div v-for="hf in hotfilms" :key="hf.name" class="films-item">
    	    	<a :href="'https://m.maizuo.com/v4/#!/film/' + hf.id">
    	    		<div class="img">
    	    		<img width="100%" :src="hf.cover.origin" alt="" />
	    	    	</div>
	    	    	<div class="words">
	    	    		<div>
	    	    			<h3>{{hf.name}}</h3>
	    	    			<p>
	    	    				<span>{{hf.cinemaCount}}家影院上映</span>&#x3000;
	    	    				<span>{{hf.watchCount}}人购票</span>
	    	    			</p>
	    	    		</div>
	    	    		<div>
	    	    			{{hf.grade}}
	    	    		</div>
	    	    	</div>
    	    	</a>
    	    </div>
    	    <div class="button">
    		    <p>
    		    	<router-link to="/films">更多热映电影</router-link>
    		    </p>
    		</div>
    	</div>
    	<fieldset>
    		<legend>即将上映</legend>	
    	</fieldset>
    	<div class="films">
    	    <div v-for="nf in newfilms" :key="nf.name" class="films-item">
    	    	<a :href="'https://m.maizuo.com/v4/#!/film/' + nf.id">
    	    		<div class="img">
    	    		<img width="100%" :src="nf.cover.origin" alt="" />
	    	    	</div>
	    	    	<div class="words">
	    	    		<div>
	    	    			<h3>{{nf.name}}</h3>
	    	    			<p>
	    	    				<span>{{nf.cinemaCount}}家影院上映</span>&#x3000;
	    	    				<span>{{nf.watchCount}}人购票</span>
	    	    			</p>
	    	    		</div>
	    	    		<div>
	    	    			{{nf.grade}}
	    	    		</div>
	    	    	</div>
    	    	</a>
    	    </div>
    	    <div class="button">
    		    <p>
    		    	<router-link to="/films">更多即将上映电影</router-link>
    		    </p>
    		</div>
    	</div>
    </div>
</template>

<script>
    export default{
        name:'roomitem',
        data(){
        	return{
        		hotfilms:[],
        		newfilms:[]
        	}
        },
        mounted(){
        	this.http.get('/mapi/film/now-playing?__t=1511101116339&page=1&count=5').then(res=>{           
            this.hotfilms = res.data.data.films
//          console.log(this.hotfilms);
        });
        this.http.get('/mapi/film/coming-soon?__t=1511101116342&page=1&count=3').then(res=>{
            this.newfilms = res.data.data.films
//          console.log(this.newfilms);
            
        });
        }
    }
</script>

<style scoped>
	.films{
		padding: 1.5rem;
	}
	.films-item{
		margin-bottom: 1rem;
		background-color: #F9F9F9;
		border: 1px solid #EEEEEE;
	}
	.films-item a .words{
		padding: 1rem;
	}
	.films-item a .words div{
		display: inline-block;
	}
	.films-item a .words div:nth-of-type(1) h3{
		font-size: 1.5rem;
		font-weight: normal;
		color: #333333;
	}
	.films-item a .words div:nth-of-type(1) span{
		color: #B2B2CA;
	}
	.films-item a .words div:nth-of-type(2){
		font-size: 2rem;
		float: right;
		color: #F78360;
	}
	.films .button{
		text-align: center;
	}
	.films .button p{
		width: 60%;
		margin: 1.5rem auto;
		padding: 0.5rem 2rem;
		border: 1px solid #BEBEBE;
		color: #616161;
		border-radius: 2rem;
		font-size: 1.2rem;
	}
	fieldset{
		border-bottom: none;
		border-left: none;
		border-right: none;
	}
	legend{
		background-color: #A7A7A7;
		color: white;
		margin: 0 auto;
		-moz-margin-start: 40%;
		border: 1px solid #BEBEBE;
		padding: 0.5rem 1rem;
		border-radius: 1rem;
	}
</style>
