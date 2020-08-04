var eventBus = new Vue()

Vue.component('projects-page',{
	props: {
		
	},
	template:`
	<div class = "projects-page">
			
			<product-tabs :reviews="reviews" :scprojectArray="scprojects" :pipprojectArray="pipprojects"></product-tabs>

			 
		</div>
	`,
	data()
	{
		return	{
        scprojects:[
            {
                scId:001,
				scLeftRight:true,
                scName: 'SCtemp img to right',
                scImageVideo: 0,
                scImage:'../MEDIA/Tile1.png',
                scVideo:'-',
                scInfo:'This is the info or description of the project',
                scGithubBool:true,
				scDemoBool:false,
				scIchioBool:false,
				scShopBool:false,
                scLinkGithub:'https://www.youtube.com/watch?v=7zMyA_a5rSU',
				scLinkDemo:'Link to demo',
				scLinkIchio:'Link to the Ichio',
				scLinkShop:'Link to Shop',
				scShopName:'Steam/GooglePlay'
			},
			{
				scId:002,
				scLeftRight:false,
                scName:'SCtemporary img to left',
                scImageVideo: 0,
                scImage:'../MEDIA/Tile1.png',
                scVideo:'video media',
                scInfo:'This is the info or description of the project',
				scGithubBool:false,
				scDemoBool:false,
				scIchioBool:false,
				scShopBool:false,
				scLinkGithub:'https://www.youtube.com/watch?v=7zMyA_a5rSU',
				scLinkDemo:'Link to demo',
				scLinkIchio:'Link to the Ichio',
				scLinkShop:'',
				scShopName:''
			}
        ],
        pipprojects:[
			{
				pipId:011,
				pipLeftRight:true,
                pipName: 'piptemp - LEFT',
                pipImageVideo: 0,
                pipImage:'../MEDIA/Tile4.png',
                pipVideo:'video media',
                pipInfo:'This is the info or description of the project',
                pipGithubBool:true,
                pipLinkGithub:'Link to the github'
			},
			{
				pipId:022,
				pipLeftRight:false,
                pipName: 'piptemp - RIGHT',
                pipImageVideo: 0,
                pipImage:'../MEDIA/Tile4.png',
                pipVideo:'video media',
                pipInfo:'This is the info or description of the project',
                pipGithubBool:true,
                pipLinkGithub:'Link to the github'
			}
		],
		reviews: []
	}},
	methods: 
	{
		updateTile: function(index)
		{
			this.seletedVariant = index
			console.log(index)
		}
	},
	computed: 
	{
		
	},
	mounted(){
		eventBus.$on('review-submitted', productReview =>{
			this.reviews.push(productReview)
		})
	}
	
})

Vue.component('sc-projects-tab',{
	
	template:`
	<div>
		<h4>Wrong site</h4>
		<p>----------------------------------</p>
        <base-container :projectstatus="projectstatus" ></base-container>
	</div>
	`,
		data(){
			return{
				projectstatus: false
			}
		},
		methods:{
			
		}
	
    })
    
Vue.component('pip-project-tab', {
    template:`
        <div>
        <h4> Not accepting Reviews right now</h4>
        <base-container :projectstatus="projectstatus" ></base-container>
        </div>    
    `,
    data(){
        return{
            projectstatus: true
        }
    }
})
	
Vue.component('product-tabs', {
	props:{
		reviews:{
			type:Array,
			required:true
		},
		scprojectArray:{
			type:Array,
			required:true
		},
		pipprojectArray:{
			type:Array,
			required: true
		}
	},
	template:`
		<div class="pagetab">
			<span class = "tab" 
				:class="{activeTab: selectedTab === tab}"
				v-for="(tab, index) in tabs" 
				:key="index" 
				@click = "selectedTab = tab">
				{{tab}}
			</span>

			<div style="background-color:gray;" v-show="selectedTab === 'ShowCase'">
				<div class="project-container" v-for="scprojects in scprojectArray">
				<table class="project-table">
					<tr v-show="scprojects.scLeftRight">
						<td>
							<div class="project-info">
								<p class= "pr-header">{{scprojects.scName}}</p>
								<p class="pr-txt">{{scprojects.scInfo}}</p>
								<p>
									<a v-show=scprojects.scGithubBool :href="scprojects.scLinkGithub" target="_blank">Github</a>
									<a v-show=scprojects.scDemoBool :href="scprojects.scLinkDemo" target="_blank">Demo</a>
									<a v-show=scprojects.scIchi oBool :href="scprojects.scLinkIchio" target="_blank">Ichi.io</a>
									<a v-show=scprojects.scShopBool :href="scprojects.scLinkShop" target="_blank">Shop</a>
								</p>
							</div>
						</td>

						<td>
							<img v-if="scprojects.scImage" :src="scprojects.scImage" alt="tile image no 1">
						</td>
					</tr>
					<tr v-show="!scprojects.scLeftRight">
						<td>
						<img v-if="scprojects.scImage" :src="scprojects.scImage" alt="tile image no 1">
						</td>

						<td>
						<div class="project-info">
								<p class="pr-header">{{scprojects.scName}}</p>
								<p class="pr-txt">{{scprojects.scInfo}}</p>
								<p>
									<a v-show=scprojects.scGithubBool :href="scprojects.scLinkGithub" target="_blank">Github</a>
									<a v-show=scprojects.scDemoBool :href="scprojects.scLinkDemo" target="_blank">Demo</a>
									<a v-show=scprojects.scIchi oBool :href="scprojects.scLinkIchio" target="_blank">Ichi.io</a>
									<a v-show=scprojects.scShopBool :href="scprojects.scLinkShop" target="_blank">Shop</a>
								</p>
							</div>
						</td>
					</tr>
				</table>
				</div>
			</div>

			<div v-show="selectedTab === 'PIP'">
				<div class="project-container" v-for="pipprojects in pipprojectArray">
				<table class="project-table">
					<tr v-show="pipprojects.pipLeftRight">
						<td>
							<img v-if="pipprojects.pipImage" :src="pipprojects.pipImage" alt="tile image no 1">
						</td>
						<td>
							<div class = "project-info">
								<p class= "pr-header">{{pipprojects.pipName}}</p>
								<p class="pr-txt">{{pipprojects.pipInfo}}</p>
								<p v-show=pipprojects.pipGithubBool>{{pipprojects.pipLinkGithub}}</p>
							</div>
						</td>
					</tr>
				</table>
				<table class="project-table">
					<tr v-show="!pipprojects.pipLeftRight">
						<td>
							<div class = "project-info">
								<p class= "pr-header">{{pipprojects.pipName}}</p>
								<p class="pr-txt">{{pipprojects.pipInfo}}</p>
								<p v-show=pipprojects.pipGithubBool>{{pipprojects.pipLinkGithub}}</p>
							</div>
						</td>
						
						<td>
							<img v-if="pipprojects.pipImage" :src="pipprojects.pipImage" alt="tile image no 1">
						</td>
					</tr>
				</table>	
				</div>
			</div>
		</div>
	`,
	data(){
		return{
			tabs:['ShowCase', 'PIP'],
			selectedTab: 'ShowCase',

		}
	}
})

Vue.component('base-container',{
    props:{
        projectstatus:{
            type: Boolean,
            required:true,
            default: false
		}
    },
    template:`
        <div>
            <div class = "project-image">
                <img v-if = "prstatus" src="./MEDIA/Tile1.png"alt="tile image no 1">
                <img v-else src="./MEDIA/Tile4.png"alt="tile image no 4">
            </div>
    		<h4>Project header</h4>
    		<p>Project description, what it is what part is my work</p>
    		<p>Links: gitHub, example page(?), Download page/google/ichio.page</p>
            <p>This is the status: {{prstatus}}</p>
            </div>
    `,
    data(){
        return{
        }
    },
    computed:
    {
        prstatus()
        {
            return this.pstatus = this.projectstatus
        }
    }
})

Vue.component('test-thing',{
	template:`
		
	<about-me-tabs></about-me-tabs>
	`,
	data(){
		return{}
	}

})

Vue.component('about-me-tabs', {
	template:`
	<div class="pagetab">
		<span class = "tab" 
		:class="{activeTab: selectedTab === tab}"
		v-for="(tab, index) in tabs" 
		:key="index" 
		@click = "selectedTab = tab">
		{{tab}}
		</span>

		<div class="aboutmetab" v-show="selectedTab === 'aboutme'">
			<h2>About me tab</h2>

		</div>
		<div v-show="selectedTab === 'cv'">
			<h2>CV</h2>
		</div>
	</div>

	`,
	data(){
		return{
			tabs:['aboutme', 'cv'],
			selectedTab: 'aboutme'
		
		}
	}
})

Vue.component('nav-bar',{
	props:{
	},
	template:`
	<div class="Header">
		<ul class="nav">
			<li><a href="../HTML/about_me.html">About me & Contacts</a></li>
			<li><a href="../HTML/projects.html">Projects</a></li>
			<li><a href="../HTML/contact.html">Only for curious</a></li>
		</ul>
		<h1>BirdHouse Company</h1>
	</div>
	`,
	data(){
		return{
			
		}
	}
})

var app = new Vue
({
	el: '#projectsApp',
	data:{
		
	},
	methods:
	{
	},
	
})