var eventBus = new Vue()

Vue.component('projects-page',{
	props: {
		
	},
	template:`
	<div class = "projects-page">
		
		<div class="welcome-page" v-show="!welcomebool">
			<h1 class="page-header" style="margin-top: 70px">To be: Mika Lintula<a  style="text-decoration:none" href = "HTML/portfolio.html">'</a>s portfolio</h1>
			<div class="content">
				<div class="w-col">
					<h2>Huomio</h2>
					<p>Portfoliota rakennellaan parhaillaan ja kyseisellä aluksi se on vain suomenkielisenä mutta englanninkielistä käännöstä työstetään.</p>
				</div>
				<div class="w-col">
					<h2>Please read</h2>
					<p>The portfolio is in construction and will be available only in Finnish at the start but it is undergoing the translation as we go.</p>
				</div>

				<button class="w-link" v-on:click="GoToPortfolio"
				:disabled = "welcomebool"
				:class="{disabledButton: welcomebool}">Portfolio →</button>
			</div>
		</div>

		<div class="portfolio-content" v-show="welcomebool">	
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
				<project-tabs :mobile="isMobile()"></project-tabs>
			</div>

			<div v-show="selectedNavTab === 'For Curious'">	
				<for-curious-page></for-curious-page>
			</div>
		</div>
		<footer class="page-footer" v-show="welcomebool">
			<p>Site made by Mika Lintula</p>
		</footer>
	</div>
	`,
	data()
	{
		return	{
			welcomebool: false,
			headerName:'About me',
			navTabs:['About me', 'Projects', 'For Curious'],
			selectedNavTab: 'Projects'
	}},
	methods: 
	{
		GoToPortfolio: function()
		{
			localStorage.welcomebool = this.welcomebool
			this.welcomebool = true
		},
		updateTile: function(index)
		{
			this.seletedVariant = index
			console.log(index)
		},
		isMobile: function() {
			var check = false;
			(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
			return check;
		}

	},
	computed: 
	{
		PageTitle(){
			return this.headerName =this.selectedNavTab
		}
	},
	mounted(){
		if (localStorage.welcomebool) {
			this.welcomebool = localStorage.welcomebool;
		  }
		},
		watch: {
		  welcome(newuser) {
			localStorage.welcomebool = true;
		  }
	}
	
})


	
Vue.component('project-tabs', {
	props:
		['mobile']
	,
	template:`
	<div class="projecttab" >
	<div class="pr-tabs">
		<span class = "tab" 
			:class="{activeTab: selectedTab === tab}"
			v-for="(tab, index) in tabs" 
			:key="index" 
			@click = "selectedTab = tab">
			{{tab}}
		</span>
	</div>
	<div v-if="!mobile"> 
		<div class="content-container" v-show="selectedTab === 'ShowCase'">
			<div class="project-container" v-for="scproject in scprojects">
				<div class = "bas">
					<div  v-bind:class ="[!scproject.scLeftRight ? righttxtclass : '', lefttxtclass]">
							<p class= "pr-header">{{scproject.scName}}</p>
							<p class="pr-txt">{{scproject.scInfo}}</p>
							<p class="pr-links">
								<a v-show=scproject.scGithubBool :href="scproject.scLinkGithub" target="_blank">Github</a>
								<a v-show=scproject.scDemoBool :href="scproject.scLinkDemo" target="_blank">Demo</a>
								<a v-show=scproject.scIchi oBool :href="scproject.scLinkIchio" target="_blank">Ichi.io</a>
								<a v-show=scproject.scShopBool :href="scproject.scLinkShop" target="_blank">Shop</a>
							</p>
					</div>
					<div class ="prcol2">
						<div class="pr-img">
							<img :src="scproject.scImage" alt="tile image no 1">
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="content-container" v-show="selectedTab === 'P . I . P'">
			<div class="project-container" v-for="pipproject in pipprojects">
				<div class = "bas">
					<div  v-bind:class ="[!pipproject.pipLeftRight ? righttxtclass : '', lefttxtclass]">
							<p class= "pr-header">{{pipproject.pipName}}</p>
							<p class="pr-txt">{{pipproject.pipInfo}}</p>
							<a class="pr-link" v-show=pipproject.pipGithubBool>{{pipproject.pipLinkGithub}}</a>
					</div>
					<div class ="prcol2">
						<div class="pr-img">
							<img :src="pipproject.pipImage" alt="tile image no 1">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div v-else>
	<div class="m-content-container" v-show="selectedTab === 'ShowCase'">

	<div v-for="scproject in scprojects">
		<div class="m-pr-container">
			<div class="m-pr-img">
				<img :src="scproject.scImage" alt="tile image no 1">
			</div>
			<div class="m-pr-info">
				<p class= "pr-header">{{scproject.scName}}</p>
				<p class="m-pr-txt">{{scproject.scInfo}}</p>
				<p class="pr-links">
					<a v-show=scproject.scGithubBool :href="scproject.scLinkGithub" target="_blank">Github</a>
					<a v-show=scproject.scDemoBool :href="scproject.scLinkDemo" target="_blank">Demo</a>
					<a v-show=scproject.scIchi oBool :href="scproject.scLinkIchio" target="_blank">Ichi.io</a>
					<a v-show=scproject.scShopBool :href="scproject.scLinkShop" target="_blank">Shop</a>
				</p>
			</div>
			
		</div>
	</div>
</div>
<div class="content-container" v-show="selectedTab === 'P . I . P'">
<div v-for="pipproject in pipprojects">
		<div class="m-pr-container">
			<div class="m-pr-img">
				<img :src="pipproject.pipImage" alt="tile image no 1">
			</div>
			<div class="m-pr-info">
				<p class= "pr-header">{{pipproject.pipName}}</p>
				<p class="m-pr-txt">{{pipproject.pipInfo}}</p>
				<p class="pr-links">
					<a v-show=pipproject.pipGithubBool :href="pipproject.pipLinkGithub" target="_blank">Github</a>
					<a v-show=pipproject.pipDemoBool :href="pipproject.pipLinkDemo" target="_blank">Demo</a>
					<a v-show=pipproject.pipIchioBool :href="pipproject.pipLinkIchio" target="_blank">Ichi.io</a>
					<a v-show=pipproject.pipShopBool :href="pipproject.pipLinkShop" target="_blank">Shop</a>
				</p>
			</div>
			
		</div>
	</div>
</div>
	</div>
</div>
	`,
	data(){
		return{
			tabs:['ShowCase', 'P . I . P'],
			selectedTab: 'ShowCase',
			rightimgclass: 'prcol2r',
			leftimgclass: 'prcol2',
			righttxtclass: 'prcol1r',
			lefttxtclass: 'prcol1',

			scprojects:[
				{
					scId:001,
					scLeftRight:true,
					scName: 'Unreal: Interaktiivinen viivakaavio VR maailmassa',
					scImageVideo: 0,
					scImage:'MEDIA/vr-linegraph.gif',
					scVideo:'-',
					scInfo:'Viivakaavion arvot haetaan csv-tiedostosta, jonka jälkeen viivakaavion arvoja voidaan tarkastella ja mitata kahden arvon välimatkaa x-axisella. Kulkee vasemman ohjaimen mukana.',
					scGithubBool:false,
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
					scName:'Android Studio: Vedenjuonnin seuraamisen motivointi sovellus',
					scImageVideo: 0,
					scImage:'MEDIA/wt-app.png',
					scVideo:'video media',
					scInfo:'Tämä sovellus tehtiin osana Tradenomi opintojen opinnäytetyötä. Sovelluksen tavoitteena on helpottaa ja motivoida käyttäjää juomaan sekä seuraamaan omaa veden juomista "kasvattamalla" puuta merkityn veden määrän avulla.',
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
					pipImage:'MEDIA/portfoliobp.png',
					pipVideo:'video media',
					pipInfo:'Kyseinen sivu jolla olet juuri on kehityksessä oleva projekti, jota käännetään englanniksi ja tehdään paranteluja sitä mukaan kun opitaan lisää nettisivujen kehityksestä.',
					pipGithubBool:false,
					pipLinkGithub:'Link to the github'
				},
				{
					pipId:022, 
					pipLeftRight:false,
					pipName: 'Kaikkea muuta kivaa ohjelmointi juttuja',
					pipImageVideo: 0,
					pipImage:'MEDIA/bugfix.gif',
					pipVideo:'video media',
					pipInfo:'Ideoita on ja tulee lisää koko ajan, aika ei vaan aina riitä.',
					pipGithubBool:false,
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
					<img class="am-img" src="MEDIA/stream.jpg" alt="placeholder for face">
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

				<skills-list :skills="softwareskill" :title="'Ohjelmat'"></skills-list>
				<skills-list :skills="plskill" :title="'ohjelmointi kielet'"></skills-list>
				<skills-list :skills="miscskill" :title="'Sekalaista'"></skills-list>
				<skills-list :skills="learning" :title="'Opettelussa'"></skills-list>
				<skills-list :skills="hobbies":title="'Harrastukset'"></skills-list>
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
					gradu:'2015',
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

Vue.component('skills-list',{
	props:
		['skills', 'title']
	, 
	template:`
	<div class="skills-content">
		<h3>{{title}}</h3>
		<div class="skills-list">
			<div v-for="(learn, index) in skills">
				<ul class="skills-ul">
					<li>{{learn}}</li>
					<div v-if="index === skills.length-1">
						<li v-show="!testMessage(index)" style="color:#666666;">-</li>
					</div>
				</ul>
			</div>
		</div>
	</div>
	`,
	
	methods:{
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

				<div class="c-something c-container">
					<h2 class="am-h2">Tervetuloa uteliaalle</h2> 
					<p>Sivu sisältää linkkejä mistä minut ja minun vapaa ajan projekteja löytää ja ehkä myös kuvia harrastuksista.</p> 
					<img src="MEDIA/Xt0e.gif">
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
				theThing:'FrostHawk instagram',
				theLink:'https://www.instagram.com/frost_hawk_fi/',
				theLinkImg:'MEDIA/FHlogo.png',
				theInfo:'Linkki instagram profiiliin jonne julkaisen kuvia koruista ja käsitöistä joita teen',
			}
		]
		}
	}
})


Vue.component('nav-bar',{
	props:{
	},
	template:`
	<div class="Header">
		<ul class="nav">
			<li><a href="HTML/about_me.html">About me & Contacts</a></li>
			<li><a href="HTML/projects.html">Projects</a></li>
			<li><a href="HTML/contact.html">Only for curious</a></li>
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