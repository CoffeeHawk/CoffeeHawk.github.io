var eventBus = new Vue()
Vue.component('projectsPage',{
    template:`
        <div class = "projectsPage">
            <h3>Showcase</h3>

            

            <h3>P.I.P. - Projects in Progress</h3>

            <projectTabs> :projects="projexts"></projectTabs>
        </div>`,
    data(){
        return{}
    }
})

Vue.component('showTab',{
    template:`
    <div class="s-base-container" >
                <img src="MEDIA/Tile1.png" alt="Tile no 1">
                <h4>Proiject header</h4>
                <p>Project description, what it is what part is my work</p>
                <p>Links: gitHub, example page(?), Download page/google/ichio.page</p>
            </div>
    `,
    data(){}
})

Vue.component('pipTab',{
    template:`
    <div class="pip-base-container" >
    <img src="MEDIA/Tile4.png" alt="Tile no 1">
    <h4>Proiject header</h4>
    <p>Project description, what it is what part is my work</p>
    <p>Links: gitHub, example page(?), Download page/google/ichio.page</p>
</div>
    `,
    data(){
        return{}
    }
})

Vue.component('projectTabs',{
    props:{
        projectLists:{
            type:Array,
            required:true
        }
    },
    template:`
        <div>
            <span class="tab"
                :class="{activeTab: selectedTab === tab}"
                v-for="(tab, index) in tabs" 
                :key="index" 
                @click = "selectedTab = tab">
                {{tab}}
            </span>

            <showTab v-show="selectedTab === 'Show'"></showTab>
            <pipTab v-show="selectedTab === 'PIP'"></>

        </div>
    `,
    data(){
        return{
            tabs:['Show','PIP'],
            selectedTab: 'Show'
        }
    }    
})



var app = new Vue
({
    el: '#portfolioApp',
    data:{}
})