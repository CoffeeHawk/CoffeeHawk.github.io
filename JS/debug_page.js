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

var app = new Vue
({
    el: '#portfolioApp',
    data:{
        message: 'Hello Vue!'
    }
})