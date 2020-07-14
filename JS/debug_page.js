var eventBus = new Vue()

Vue.component('products',{
	props: {
		
	},
	template:`
	<div class = "products">
			
			<product-tabs :reviews="reviews"></product-tabs>
			 
		</div>
	`,
	data()
	{
		return	{
		
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
		
	</div>
	`,
		data(){
			return{
				name: null,
				errors: []
			}
		},
		methods:{
			
			
		}
	
    })
    
Vue.component('pip-project-tab', {
    template:`
        <div>
        <h4> Not accepting Reviews right now</h4>
        <base-container></base-container>
        </div>    
    `,
    data(){
        return{}
    }

})
	
Vue.component('product-tabs', {
	props:{
		reviews:{
			type:Array,
			required:true
		}
	},
	template:`
		<div>
			<span class = "tab" 
				:class="{activeTab: selectedTab === tab}"
				v-for="(tab, index) in tabs" 
				:key="index" 
				@click = "selectedTab = tab">
				{{tab}}
			</span>
			
            <pip-project-tab v-show="selectedTab === 'Reviews'"></pip-project-tab>			
            <sc-projects-tab v-show="selectedTab === 'Make a Review'">
            </sc-projects-tab>
		</div>
	`,
	data(){
		return{
			tabs:['Reviews', 'Make a Review'],
			selectedTab: 'Reviews'
		}
	}
})

Vue.component('base-container',{
template:`
    <div>
		<img src="MEDIA/Tile1.png" alt="Tile no 1">
		<h4>Proiject header</h4>
		<p>Project description, what it is what part is my work</p>
		<p>Links: gitHub, example page(?), Download page/google/ichio.page</p>
	</div>
`,data(){
    return{}
}
})

var app = new Vue
({
	el: '#testApp',
	data:{
		
		
	},
	methods:
	{
		
	},
	
})