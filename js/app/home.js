const api = 'http://localhost:9000'
export default {
    template: $("#tmpHome").html(),
    data: function () {
        return {
            title: 'New Era Stats',
            Authorized:false,
            Username:'terrencejohns@gmail.com',
            Password:'1234567890'

        }
    },
    methods: {
        gotoPolicies:function(){
            var vm = this;
            vm.$router.push({name:'Policies'})

        },
        login:function(){
            var vm = this;
            if(vm.Username!='' && vm.Password!=''){
                axios.get(`${api}/users?Username=${vm.Username}&Password=${vm.Password}`).then(function(res){
                    if (res.data.length ==1 ){
                        window.CurrentUser = res.data[0].Username
                        window.CurrentUserID = res.data[0].id
                        window.CurrentRole = res.data[0].Role
                        vm.Authorized = true
                    }

                }).catch(function(err){
                    console.log(err)

                })
            }

        },
        navigate:function(s){
            var vm = this;
            vm.$router.push({name:s});
        }
    },
        
    
    mounted: function () {
        var vm = this;
        if(window.CurrentUser!='' ) {
            vm.Authorized = true

        }
    }
}