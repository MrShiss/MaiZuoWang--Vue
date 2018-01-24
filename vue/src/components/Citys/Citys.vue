
<template>
    <div class="citys">
        <navbar>选择城市</navbar>
        <div style="height: 4.5rem;"></div>
        <div class="citys-1">
            <div class="citys-1-1">
                <p>按字母排序</p>
                <span v-for="w in wList">{{w}}</span>
            </div>
            <div class="citys-1-2">
                <p>A</p>
                <div class="citys-1-2-1" v-for="i in list">
                	<span v-show="i.pinyin.slice(0,1) == 'A'">
                		{{i.name}}
                	</span>
                </div>               
            </div>
            <div class="citys-1-2">
                <p>B</p>
                <div class="citys-1-2-1" v-for="i in list">
                	<span v-if="i.pinyin.slice(0,1) == 'B'">
                		{{i.name}}
                	</span>
                </div>
            </div>
            <div class="citys-1-2">
                <p>C</p>
                <div class="citys-1-2-1" v-for="i in list">
                	<span v-if="i.pinyin.slice(0,1) == 'C'">
                		{{i.name}}
                	</span>
                </div>
            </div>
            <div class="citys-1-2">
                <p>D</p>
                <div class="citys-1-2-1" v-for="i in list">
                	<span v-if="i.pinyin.slice(0,1) == 'D'">
                		{{i.name}}
                	</span>
                </div>
            </div>
            <div class="citys-1-2">
                <p>E</p>
                <div class="citys-1-2-1" v-for="i in list">
                	<span v-if="i.pinyin.slice(0,1) == 'E'">
                		{{i.name}}
                	</span>
                </div>
            </div>
            <div class="citys-1-2">
                <p>F</p>
                <div class="citys-1-2-1" v-for="i in list">
                	<span v-if="i.pinyin.slice(0,1) == 'F'">
                		{{i.name}}
                	</span>
                </div>
            </div>
            <div class="citys-1-2">
                <p>G</p>
                <div class="citys-1-2-1" v-for="i in list">
                	<span v-if="i.pinyin.slice(0,1) == 'G'">
                		{{i.name}}
                	</span>
                </div>
            </div>
            <div class="citys-1-2">
                <p>H</p>
                <div class="citys-1-2-1" v-for="i in list">
                	<span v-if="i.pinyin.slice(0,1) == 'H'">
                		{{i.name}}
                	</span>
                </div>
            </div>
            <div class="citys-1-2">
                <p>I</p>
                <div class="citys-1-2-1" v-for="i in list">
                	<span v-if="i.pinyin.slice(0,1) == 'I'">
                		{{i.name}}
                	</span>
                </div>
            </div>
            <div class="citys-1-2">
                <p>J</p>
                <div class="citys-1-2-1" v-for="i in list">
                	<span v-if="i.pinyin.slice(0,1) == 'J'">
                		{{i.name}}
                	</span>
                </div>
            </div>
            <div class="citys-1-2">
                <p>K</p>
                <div class="citys-1-2-1" v-for="i in list">
                	<span v-if="i.pinyin.slice(0,1) == 'K'">
                		{{i.name}}
                	</span>
                </div>
            </div>
            <div class="citys-1-2">
                <p>L</p>
                <div class="citys-1-2-1" v-for="i in list">
                	<span v-if="i.pinyin.slice(0,1) == 'L'">
                		{{i.name}}
                	</span>
                </div>
            </div>
            <div class="citys-1-2">
                <p>M</p>
                <div class="citys-1-2-1" v-for="i in list">
                	<span v-if="i.pinyin.slice(0,1) == 'M'">
                		{{i.name}}
                	</span>
                </div>
            </div>
            <div class="citys-1-2">
                <p>N</p>
                <div class="citys-1-2-1" v-for="i in list">
                	<span v-if="i.pinyin.slice(0,1) == 'N'">
                		{{i.name}}
                	</span>
                </div>
            </div>
            <div class="citys-1-2">
                <p>P</p>
                <div class="citys-1-2-1" v-for="i in list">
                	<span v-if="i.pinyin.slice(0,1) == 'P'">
                		{{i.name}}
                	</span>
                </div>
            </div>
            <div class="citys-1-2">
                <p>Q</p>
                <div class="citys-1-2-1" v-for="i in list">
                	<span v-if="i.pinyin.slice(0,1) == 'Q'">
                		{{i.name}}
                	</span>
                </div>
            </div>
            <div class="citys-1-2">
                <p>R</p>
                <div class="citys-1-2-1" v-for="i in list">
                	<span v-if="i.pinyin.slice(0,1) == 'R'">
                		{{i.name}}
                	</span>
                </div>
            </div>
            <div class="citys-1-2">
                <p>S</p>
                <div class="citys-1-2-1" v-for="i in list">
                	<span v-if="i.pinyin.slice(0,1) == 'S'">
                		{{i.name}}
                	</span>
                </div>
            </div>
            <div class="citys-1-2">
                <p>T</p>
                <div class="citys-1-2-1" v-for="i in list">
                	<span v-if="i.pinyin.slice(0,1) == 'T'">
                		{{i.name}}
                	</span>
                </div>
            </div>
            <div class="citys-1-2">
                <p>W</p>
                <div class="citys-1-2-1" v-for="i in list">
                	<span v-if="i.pinyin.slice(0,1) == 'W'">
                		{{i.name}}
                	</span>
                </div>
            </div>
            <div class="citys-1-2">
                <p>X</p>
                <div class="citys-1-2-1" v-for="i in list">
                	<span v-if="i.pinyin.slice(0,1) == 'X'">
                		{{i.name}}
                	</span>
                </div>
            </div>
            <div class="citys-1-2">
                <p>Y</p>
                <div class="citys-1-2-1" v-for="i in list">
                	<span v-if="i.pinyin.slice(0,1) == 'Y'">
                		{{i.name}}
                	</span>
                </div>
            </div>
            <div class="citys-1-2">
                <p>Z</p>
                <div class="citys-1-2-1" v-for="i in list">
                	<span v-if="i.pinyin.slice(0,1) == 'Z'">
                		{{i.name}}
                	</span>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
    import Navbar from '../Navbar'
    export default{
        name:'citys',
        data(){
        	return{
        		list:[],
        		wList:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','P','Q','R','S','T','W','X','Y','Z']
        	}
        },
        components:{
            Navbar
        },
        mounted () {
        this.http.get('/mapi/city?__t=1511232959375').then(res=>{
        	this.list = res.data.data.cities;                   
        });
        
    }
        
    }
</script>

<style scoped>
	.citys-1-1 p{
		font-size: 1.3rem;
		padding: 1rem 2rem;
	}
	.citys-1-1 span{
		display: inline-block;
		width: 25%;
		background-color: white;
		border-bottom: 1px solid #E1D7D5;
		text-align: center;
		font-size: 1.5rem;
		color: #838392;
		padding: 1rem 0;
		cursor: pointer;
	}
	.citys-1-2 p{
		font-size: 1.5rem;
		padding: 1rem 1.5rem;
		
	}
	.citys-1-2-1{
		font-size: 1.5rem;
		padding: 0 1.5rem;
		background-color: white;
	}
</style>
