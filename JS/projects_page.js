var eventBus = new Vue()

Vue.component('projects-page',{
	props: {
		
	},
	template:`
	<div class = "projects-page">
		<div class="portfolio-content">	
			<div class="nav">
				<span class = "pagetab" 
					
					v-for="(tab, index) in navTabs" 
					:key="index" 
					@click = "selectedNavTab = tab"
					:class="{activeNavTab: selectedNavTab === tab}">
					{{tab}}
				</span>
			</div>

			<h1 class="page-header">{{PageTitle}}</h1>

			<div v-show="selectedNavTab === 'About me'">	
				<about-me-page></about-me-page>
			</div>

			<div v-show="selectedNavTab === 'Projects'">	
				<product-tabs></product-tabs>
			</div>

			<div v-show="selectedNavTab === 'For Curious'">	
				<for-curious-page></for-curious-page>
			</div>
		</div>
		<footer class="page-footer">
			<p>Site made by Mika Lintula</p>
		</footer>
	</div>

	
	`,
	data()
	{
		return	{
			headerName:'About me',
			navTabs:['About me', 'Projects', 'For Curious'],
			selectedNavTab: 'Projects'
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
		PageTitle(){
			return this.headerName =this.selectedNavTab
		}
	},
	mounted(){
		
	}
	
})


	
Vue.component('product-tabs', {
	props:{
	},
	template:`
		<div class="projecttab">
			<div class="pr-tabs">
			<span class = "tab" 
				:class="{activeTab: selectedTab === tab}"
				v-for="(tab, index) in tabs" 
				:key="index" 
				@click = "selectedTab = tab">
				{{tab}}
			</span>
		</div>
			<div class="project-lists" v-show="selectedTab === 'ShowCase'">
				<div class="project-container" v-for="scproject in scprojects">
				<table class="project-table">
					<tr v-show="scproject.scLeftRight">
						<td>
							<div class="project-info">
								<p class= "pr-header">{{scproject.scName}}</p>
								<p class="pr-txt">{{scproject.scInfo}}</p>
								<p class="pr-links">
									<a class="pr-link" v-show=scproject.scGithubBool :href="scproject.scLinkGithub" target="_blank">Github</a>
									<a class="pr-link" v-show=scproject.scDemoBool :href="scproject.scLinkDemo" target="_blank">Demo</a>
									<a class="pr-link" v-show=scproject.scIchi oBool :href="scproject.scLinkIchio" target="_blank">Ichi.io</a>
									<a class="pr-link" v-show=scproject.scShopBool :href="scproject.scLinkShop" target="_blank">Shop</a>
								</p>
							</div>
						</td>

						<td>
							<img class="pr-img" v-if="scproject.scImage" :src="scproject.scImage" alt="tile image no 1">
						</td>
					</tr>
					<tr v-show="!scproject.scLeftRight">
						<td class="pr-img-container">
						<img class="pr-img" v-if="scproject.scImage" :src="scproject.scImage" alt="tile image no 1">
						</td>

						<td>
						<div class="project-info">
								<p class="pr-header">{{scproject.scName}}</p>
								<p class="pr-txt">{{scproject.scInfo}}</p>
								<p class="pr-links">
									<a class="pr-link" v-show=scproject.scGithubBool :href="scproject.scLinkGithub" target="_blank">Github</a>
									<a class="pr-link" v-show=scproject.scDemoBool :href="scproject.scLinkDemo" target="_blank">Demo</a>
									<a class="pr-link" v-show=scproject.scIchi oBool :href="scproject.scLinkIchio" target="_blank">Ichi.io</a>
									<a class="pr-link" v-show=scproject.scShopBool :href="scproject.scLinkShop" target="_blank">Shop</a>
								</p>
							</div>
						</td>
					</tr>
				</table>
				</div>
			</div>

			<div class="project-lists" v-show="selectedTab === 'P . I . P'">
				<div class="project-container" v-for="pipproject in pipprojects">
				<table class="project-table">
					<tr v-show="pipproject.pipLeftRight">
						<td>
							<img class="pr-img "v-if="pipproject.pipImage" :src="pipproject.pipImage" alt="tile image no 1">
						</td>
						<td>
							<div class = "project-info">
								<p class= "pr-header">{{pipproject.pipName}}</p>
								<p class="pr-txt">{{pipproject.pipInfo}}</p>
								<p v-show=pipprojects.pipGithubBool>{{pipproject.pipLinkGithub}}</p>
							</div>
						</td>
					</tr>
				</table>
				<table class="project-table">
					<tr v-show="!pipproject.pipLeftRight">
						<td>
							<div class = "project-info">
								<p class= "pr-header">{{pipproject.pipName}}</p>
								<p class="pr-txt">{{pipproject.pipInfo}}</p>
								<p v-show=pipproject.pipGithubBool>{{pipprojects.pipLinkGithub}}</p>
							</div>
						</td>
						
						<td>
							<img v-if="pipproject.pipImage" :src="pipproject.pipImage" alt="tile image no 1">
						</td>
					</tr>
				</table>	
				</div>
			</div>
			
		</div>
	`,
	data(){
		return{
			tabs:['ShowCase', 'P . I . P'],
			selectedTab: 'ShowCase',

			scprojects:[
				{
					scId:001,
					scLeftRight:true,
					scName: 'Moving lists no 1',
					scImageVideo: 0,
					scImage:'../MEDIA/Tile1.png',
					scVideo:'-',
					scInfo:'This is the info or description of the project',
					scGithubBool:true,
					scDemoBool:true,
					scIchioBool:true,
					scShopBool:true,
					scLinkGithub:'https://www.youtube.com/watch?v=7zMyA_a5rSU',
					scLinkDemo:'https://www.youtube.com/watch?v=JYjIlHWBAVo',
					scLinkIchio:'https://www.youtube.com/watch?v=X-2yuGgp_U8',
					scLinkShop:'https://www.youtube.com/watch?v=0CnZh8wnAwo',
					scShopName:'Steam/GooglePlay'
				},
				{
					scId:002,
					scLeftRight:false,
					scName:'Moving lists no 2',
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
				},
				{
					scId:003,
					scLeftRight:true,
					scName: 'Moving lists no 4',
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
					scId:004,
					scLeftRight:false,
					scName:'Moving lists no 5',
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
					pipName: 'Portfolio sivu',
					pipImageVideo: 0,
					pipImage:'../MEDIA/portfoliobp.png',
					pipVideo:'video media',
					pipInfo:'Kyseinen sivu jolla olet juuri on kehityksessä oleva projekti, jota käännetään englanniksi ja tehdään paranteluja sitä mukaan kun opitaan lisää nettisivujen kehityksestä.',
					pipGithubBool:true,
					pipLinkGithub:'Link to the github'
				},
				{
					pipId:022,
					pipLeftRight:false,
					pipName: 'piptemp - RIGHT - moving the list',
					pipImageVideo: 0,
					pipImage:'../MEDIA/Tile4.png',
					pipVideo:'video media',
					pipInfo:'This is the info or description of the project',
					pipGithubBool:true,
					pipLinkGithub:'Link to the github'
				}
			]

		}
	}
})


Vue.component('about-me-page',{
	props:{
	},
	template:`
	<div>	
		<div class="content-container">
			<h1>About me page - I think</h1>
			<div class="main-info">
				<div class="am-left-col">
					<img class="am-img" src="../MEDIA/stream.jpg" alt="placeholder for face">
					<div class="am-info">
						<p>Mika Lintula</p>
						<p>+909 0909 09090</p>
						<p>birdhouse@company.ml</p>
						<!--p>linkedin link</p-->
					</div>
				</div>
				<div class="am-txt">
					<p >Lore ipsum thing is neede here to make sure all the text i write will fit	here</p>
					<p >{{meinfo1}}</p>
					<br>
					<p>{{meinfo2}}</p>
					<p>{{meinfo3}}</p>
				</div>
			</div>
		</div>

		<div class="content-container">
			<div class="skills-container">
				<h2 class="am-h2">Skills</h2>

				<div class="skills-content">
					<h3>Ohjelmat</h3>
					<div class="skills-list">
						<div v-for="(softwares, index) in softwareskill">
							<ul class= "skills-ul">
								<li>{{softwares}}</li>
								<div v-if="index === softwareskill.length-1">
									<li v-show="!testMessage(index)" style="color:#2C2A4A;">-</li>
								</div>
							</ul>	
						</div>
					</div>
				</div>

				<div class="skills-content">
					<h3>Ohjelmointi kielet</h3>
					<div class="skills-list">
						<div v-for="(plskill, index) in plskill">
							<ul class= "skills-ul">
								<li>{{plskill}}</li>
								<div v-if="index === plskill.length-1">
									<li v-show="!testMessage(index)" style="color:#2C2A4A;">-</li>
								</div>
							</ul>
						</div>
					</div>
				</div>

				<div class="skills-content">
					<h3>Sekalaista</h3>
					<div class="skills-list">
						<div v-for="(miscskill, index) in miscskill">
							<ul class= "skills-ul">
								<li>{{miscskill}}</li>
								<div v-if="index === miscskill.length-1">
									<li v-show="!testMessage(index)" style="color:#2C2A4A;">-</li>
								</div>
							</ul>	
						</div>
					</div>
				</div>

				<div class="skills-content">
					<h3>Opettelussa</h3>
					<div class="skills-list">
						<div v-for="(learn, index) in learning">
							<ul class="skills-ul">
								<li>{{learn}}</li>
								<div v-if="index === learning.length-1">
									<li v-show="!testMessage(index)" style="color:#2C2A4A;">-</li>
								</div>
							</ul>
						</div>
					</div>
				</div>

				<div class="skills-content">
					<h3>Harrastuksia</h3>
					<div class="skills-list">
						<div v-for="(hobby, index) in hobbies" >
							<ul class= "skills-ul">
								<li>{{hobby}}</li>
								<div v-if="index === hobbies.length-1">
									<li v-show="!testMessage(index)" style="color:#2C2A4A;">-</li>
								</div>
							</ul>	
						</div>
					</div>
				</div>
			</div>
			
			<div class="history-container" >
				<h2 class="am-h2">School history</h2>

				<div v-for="schoolhistory in schoolList">
					<div class="h-content"">
						<table class="h-header">
							<tr>
								<td class="h-td">{{schoolhistory.name}}</td>
								<td class="h-td">{{schoolhistory.gradu}}</td>
							</tr>
						</table>
						<p>{{schoolhistory.specialzations}}</p>
						<p> {{schoolhistory.school}}</p>
					</div>
				</div>

				<h2 class="am-h2">Work history</h2>
				<div v-for="historyList in historyList">
					<div class="h-content"">
						<table class="h-header">
							<tr>
								<td class="h-td">{{historyList.jobName}}</td>
								<td class="h-td" v-show="historyList.useDate === false">{{historyList.season}} / {{historyList.year}}</td>
								<td class="h-td" v-show="historyList.useDate === true">{{historyList.startDate}} - {{historyList.endDate}}</td>
							</tr>
						</table>
						
						<p class="h-discrpt">{{historyList.jobDescript}}</p>
						<p class="h-place">{{historyList.place}}</p>
					</div>
				</div>
			</div>
		</div>

		<!--div class="content-container">
			<div class="ff-col"><div class="learning-content">
				<h2 class="am-h2">Currently Learningn</h2>
				<div class="skills-list" v-for="learn in learning" >
							<p>{{learn}}</p>	
				</div>
			</div></div>


			<div class="ff-col"><div class="hobbies-content">
				<h2 class="am-h2">Hobbies</h2>
				<div class="skills-list" v-for="hobby in hobbies">
							<p>{{hobby}}</p>	
				</div>
			</div></div>
		</div-->
	</div>	
	`,
	data(){
		return{
			meinfo1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper feugiat nibh sed pulvinar proin. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Sed faucibus turpis in eu mi bibendum neque egestas congue. Enim tortor at auctor urna nunc id cursus metus. Mattis aliquam faucibus purus in massa. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Enim neque volutpat ac tincidunt vitae semper quis lectus. Vel pretium lectus quam id leo in vitae turpis massa. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Nec nam aliquam sem et tortor consequat id. Eget sit amet tellus cras adipiscing enim eu. Risus commodo viverra maecenas accumsan lacus vel facilisis. Metus aliquam eleifend mi in nulla. Eu consequat ac felis donec et odio pellentesque diam volutpat. Pellentesque id nibh tortor id aliquet. Hac habitasse platea dictumst quisque sagittis. Ultrices sagittis orci a scelerisque purus semper.',
			meinfo2:'Nisl purus in mollis nunc sed id. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus. Tincidunt id aliquet risus feugiat. Turpis in eu mi bibendum neque. Eu ultrices vitae auctor eu augue ut lectus. Aliquam sem fringilla ut morbi. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Amet volutpat consequat mauris nunc congue. Egestas congue quisque egestas diam in. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Faucibus nisl tincidunt eget nullam. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Ornare suspendisse sed nisi lacus. Vestibulum sed arcu non odio euismod. Lectus urna duis convallis convallis tellus id interdum velit.',
			meinfo3:'Elementum eu facilisis sed odio. Sed blandit libero volutpat sed cras ornare arcu dui. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Est ultricies integer quis auctor elit sed vulputate mi sit. Sit amet facilisis magna etiam tempor orci eu lobortis. Turpis egestas maecenas pharetra convallis posuere morbi. Ornare massa eget egestas purus viverra accumsan in. Ac odio tempor orci dapibus ultrices in. Vulputate ut pharetra sit amet aliquam id. Volutpat est velit egestas dui id ornare arcu odio ut. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Neque gravida in fermentum et. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Tristique sollicitudin nibh sit amet commodo nulla facilisi. Consectetur adipiscing elit pellentesque habitant.',
			
			softwareskill:['Android Studio','Unity','Toimisto-ohjelmat'],
			plskill:['C#','C++','Java','HTML/CSS','JavaScript'],
			miscskill:['Tietokanta','Mobiili kehitys','Versiohallinta'],
			learning:['Vue.js','Godot Engine', 'Audio editointi'],
			hobbies:['Valokuvaus','Chainmail korut','Käsityöt'],

			schoolList:[
				{
					gradu:'5/2020',
					school:'Kajaanin ammattikorkeakoulu',
					projessionName:'Tradenomi',
					specialzations:'Tieto- ja viestintätekniikka, peliala',
					notes:''
				},
				{
					gradu:'12/2015',
					school:'Ammattiopisto Lappia, Tornio',
					projessionName:'Datanomi',
					specialzations:'Tieto- ja viestintätekniikka, perustutkinto',
					notes:''
				},
			],

			historyList:[
				{
					year:'2015',
					season:'Talvi',
					useDate: true,
					startDate:'10.10.1000',
					endDate:'11.11.1111',
					place:'Yritys, Kajaani',
					jobName:'Ohjelmoija',
					jobDescript:'Toiminnon Y kehittämistä sovellukseen X versioon Z',
				},
				{
					year:'2014',
					season:'Kesä',
					useDate: false,
					startDate:'20.20.2000',
					endDate:'21.21.2111',
					place:'Tornio, Kajaani',
					jobName:'Kehittäjä',
					jobDescript:'Jotain mitä tein työssä tai mikä oli tehtävänä etc.',
				}
			]
		}
	},
	methods: 
	{
		testMessage: function (val) {
			return !!(val%2);
		}
	}
})


Vue.component('for-curious-page',{
	props:{
	},
	template:`
		<div>
			<div class="content-container">
				<h1>For Curious page - I think as well</h1>

				<div class="c-something c-container">
					<p>picture or some explaiation or both</p> 
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper feugiat nibh sed pulvinar proin. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Sed faucibus turpis in eu mi bibendum neque egestas congue. Enim tortor at auctor urna nunc id cursus metus. Mattis aliquam faucibus purus in massa. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Enim neque volutpat ac tincidunt vitae semper quis lectus. Vel pretium lectus quam id leo in vitae turpis massa. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Nec nam aliquam sem et tortor consequat id. Eget sit amet tellus cras adipiscing enim eu. Risus commodo viverra maecenas accumsan lacus vel facilisis. Metus aliquam eleifend mi in nulla. Eu consequat ac felis donec et odio pellentesque diam volutpat. Pellentesque id nibh tortor id aliquet. Hac habitasse platea dictumst quisque sagittis. Ultrices sagittis orci a scelerisque purus semper.</p> 
				</div>

				<div class="c-links c-container">
					<h2 class="am-h2">Links to where to find me</h2>
					<a class = "c-main-l" href="https://www.youtube.com/watch?v=1bGmjnkDTTI">Linkedin</a>
					<ul class="c-link-list">
						<li><a href="about_me.html">Github Profile</a></li>
						<li><a href="about_me.html">Twitter</a></li>
					</ul>
				</div>

				<div class="c-other c-container">
					<h2 class="am-h2">Other Stuff</h2>
					<div class="c-content" v-for="curiousList in forCurious">
						<div class="c-link-img">
							<a :href="curiousList.theLink"><img :src="curiousList.theLinkImg" target="_blank"></a>
						</div>

						<div class="c-info">
							<a class="c-headr" :href="curiousList.theLink" target="_blank">{{curiousList.theThing}}</a>
							<p class="c-discrpt">{{curiousList.theInfo}}</p>
						</div>
						
					</div>
				</div>

			</div>
		</div>
	`,
	data(){
		return{
			forCurious:[
			{
				theThing:'LumiLintuAlien instagram',
				theLink:'https://www.youtube.com/watch?v=4jR6UcY6b9E',
				theLinkImg:'../MEDIA/Tile1.png',
				theInfo:'Linkki instagram profiiliin jonne julkaisen kuvia koruista ja käsitöistä joita teen',
			}
		]
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