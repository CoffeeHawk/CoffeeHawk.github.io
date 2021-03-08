var eventBus = new Vue()

Vue.component('projects-page',{
	props: {
		
	},
	template:`
	<div class = "projects-page">
		
		<div class="portfolio-content" v-show="welcomebool">	

			<h1 class="page-header">Kuka olen</h1>
			<div >	
				<for-curious-page></for-curious-page>
			</div>

			<h1 class="page-header">Projekteja</h1>
			<div>	
				<project-tabs :mobile="isMobile()"></project-tabs>
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
			navTabs:[ 'Projects', 'For Curious'],
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
	
	<div v-if="!mobile"> 
		<div class="content-container">
			<h2>Valmiita projekteja</h2>
			<div class="project-container" v-for="scproject in scprojects">
				<div class = "bas">
					<div  v-bind:class ="[!scproject.scLeftRight ? righttxtclass : '', lefttxtclass]">
							<p class= "pr-header">{{scproject.scName}}<p class="pr-time">{{scproject.scId}}</p></p>
							<p class="pr-txt">{{scproject.scInfo}}</p>
							<p class="pr-links">
								<a v-show=scproject.scGithubBool :href="scproject.scLinkGithub" target="_blank">Github</a>
								<a v-show=scproject.scDemoBool :href="scproject.scLinkDemo" target="_blank">Demo</a>
								<a v-show=scproject.scIchi oBool :href="scproject.scLinkIchio" target="_blank">Ichi.io</a>
								<a v-show=scproject.scShopBool :href="scproject.scLinkShop" target="_blank">{{scproject.scShopName}}</a>
							</p>
					</div>
					<div class ="prcol2">
						<div class="pr-img" v-if="scproject.scImageVideo">
							<img :src="scproject.scImage" alt="tile image no 1">
						</div>
						<div class="pr-img" v-else>
							<video width="320" height="240" controls>
								<source :src="scproject.scVideo" type="video/webm">
					   			Your browser does not support the video tag.
				  			</video>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="content-container">
			<h2>Aktiivisia projekteja</h2>
			<div class="project-container" v-for="pipproject in pipprojects">
				<div class = "bas">
					<div  v-bind:class ="[!pipproject.pipLeftRight ? righttxtclass : '', lefttxtclass]">
							<p class= "pr-header">{{pipproject.pipName}}</p>
							<p class="pr-txt">{{pipproject.pipInfo}}</p>
							<a class="pr-link" v-show=pipproject.pipGithubBool>{{pipproject.pipLinkGithub}}</a>
					</div>
					<div class ="prcol2">
						<div class="pr-img">
							<!--img :src="pipproject.pipImage" alt="No Image Yet / or something went wrong again"-->
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
					<a v-show=scproject.scIchioBool :href="scproject.scLinkIchio" target="_blank">Ichi.io</a>
					<a v-show=scproject.scShopBool :href="scproject.scLinkShop" target="_blank">{{scproject.scShopName}}</a>
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
					scId:'2020/12',
					scLeftRight:true,
					scName: 'Unreal: Interaktiivinen viivakaavio VR maailmassa',
					scImageVideo: false,
					scImage:'MEDIA/vr-linegraph.gif',
					scVideo:'MEDIA/vr-linegraphy.webm',
					scInfo:'Viivakaavion tehdään csv-tiedostosta löytyvästä tiedosta, joka perustuu oikeaan tärinämittaukseen. Viivakaavion luonnin jälkeen arvoja voidaan tarkastella ja mitata kahden arvon välimatkaa x-axisella.',
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
					scId:'2021/02',
					scLeftRight:false,
					scName:'Linna Games Oy:n kotisivut',
					scImageVideo: true,
					scImage:'MEDIA/linnagamesPage.png',
					scVideo:'video media',
					scInfo:'Linna Games Oy kotisivut on tehty HTML5, CSS ja Bootstrap-5 hyödyntäen. Sivujen kehitystä jatketaan ja sisältöä muokataan yhteistyössä Linna Games Oy:n tiimin kanssa.',
					scGithubBool:false,
					scDemoBool:false,
					scIchioBool:false,
					scShopBool:true,
					scLinkGithub:'https://www.youtube.com/watch?v=7zMyA_a5rSU',
					scLinkDemo:'Link to demo',
					scLinkIchio:'Link to the Ichio',
					scLinkShop:'https://www.linnagames.com',
					scShopName:'Linna Games'
				},
				{
					scId:'2020/05',
					scLeftRight:true,
					scName:'Android Studio: Vedenjuonnin seuraamisen motivointi sovellus',
					scImageVideo: true,
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
					pipId:'-',
					pipLeftRight:true,
					pipName: 'Portfolio sivu',
					pipImageVideo: 0,
					pipImage:'MEDIA/portfoliobp.png',
					pipVideo:'video media',
					pipInfo:'Kyseinen sivu jolla olet juuri on kehityksessä oleva projekti, joka odottaa täydellistä uudelleen aloitusta. Tätä projektia on käytetään opettelemaan Vue.js perusteita ja nyt enemmän oppineena on paljon ideoita miten tehdä tästä parempi kokonaisuus niin  ulkonäöltään ja toimivuudeltaan.',
					pipGithubBool:false,
					pipLinkGithub:'Link to the github'
				},
				{
					pipId:'<->', 
					pipLeftRight:false,
					pipName: 'GoDot Engine Nettikoodi',
					pipImageVideo: 0,
					pipImage:'MEDIA/fiverow.png',
					pipVideo:'video media',
					pipInfo:'Ystävän kanssa opetellaan Godoti Enginen saloja kehitettämällä yksinkertaista ristinolla peliä, siten että minä ohjelmoin serverin sekä muun nettikoodin ja hän pelimekaniikat. Tavoitteena on saada peli toimimaan netin välityksellä.',
					pipGithubBool:false,
					pipLinkGithub:'Link to the github'
				}
			]

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
					<h2 class="c-h2">Tervetuloa uteliaalle</h2> 
					<p class="c-txt">Nimeni on Mika Lintula, valmistuin keväällä 2020 Viestintä ja tietotekniikan Tradenomiksi. Ohjelmointi osaamiseni on monipuolisella pohjalla, koska osaan monen ohjelmointi kielenperusteet.</p>
					<p class="c-txt">Ja tässä on portfolio sivuni, jossa esittelen mitä projekteja teen vapaa-ajallani tai palasia työprojekteistani(työnantajan luvalla). Tarkoituksena on lisäillä niin valmiita kuin keskeneräisiä projekteja tai mitä uutta opettelen kyseisellä hetkellä.</p> 
					<p class="c-txt">Sivu on vielä suurelta osalti kesken, jonka takia projektitkaan ei pääse esittäytymään täydessä kunniassaan.</p> 
					<!--img class = "c-persona"src="MEDIA/IMG_ME.jpg"-->
				</div>

				<div class="c-other c-container">
					<h2 class="c-h2">Muuta kivaa</h2>
					<div class="c-content" v-for="curiousList in forCurious">
						
						<div class="c-info">
							<h3><a class="c-headr" :href="curiousList.theLink" target="_blank">{{curiousList.theThing}}</a></h3>
							<p class="c-txt">{{curiousList.theInfo}}</p>
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
				theThing:'Linkedin',
				theLink:'https://www.linkedin.com/in/mika-lintula-9946b4131/',
				theInfo:'Linkedin, jota on vasta aloitettu täydentämään ja käyttämään aktiivisemmin',
			},
			{
				theThing:'Github',
				theLink:'https://github.com/CoffeeHawk',
				theInfo:'Hyvin hiljainen github nykyisellä hetkellä. Löytyy enemmän opiskeluajan peli projekteja',
			},
			{
				theThing:'FrostHawk instagram',
				theLink:'https://www.instagram.com/frost_hawk_fi/',
				theInfo:'Linkki instagram profiiliin jonne julkaisen kuvia koruista ja käsitöistä joita teen harrastuksena',
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
