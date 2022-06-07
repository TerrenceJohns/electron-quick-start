const api = 'http://localhost:9000'
export default {
    template:$("#tmpPolicies").html(),
    data:function(){
        return {
            Authorized:false,
            Items:[],
            searchText:''
        }
    },
    methods:{
        edit:function(itm){
            var vm = this;
            vm.$router.push({name:'PolicyEdit',params:{id:itm.id}});
        },
        search:function(){
            var vm = this;
            axios.get(`${api}/policies?q=${vm.searchText}`).then(function(res){
                console.log(res.data); 
                vm.Items = res.data   
                
            }).catch(function(err){
                console.log(err);
            });
        },
        refresh:function(){
            var vm = this;
            axios.get(`${api}/policies`).then(function(res){
                console.log(res.data); 
                vm.Items = res.data   
                
            }).catch(function(err){
                console.log(err);
            });
        }

    },
    mounted:function(){
        var vm = this;
        vm.$router.push({name:'Policies'})
        if (window.CurrentRole!='Administrator') {
            vm.Authorized = false
        } else {
            vm.Authorized = true
            vm.refresh() 
        } 

    }
}