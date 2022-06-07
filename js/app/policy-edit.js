const api = 'http://localhost:9000'
export default {
    template:$("#tmpPolicyEdit").html(),
    data:function(){
        return {
            Item:false,
        }
    },
    methods:{
        printPDF:function(){
            var vm = this;
            $(".noprint").css('display', 'none');
            window.electronAPI.printPDF('print',{title:`Policy_${vm.Item.id}`});
            setTimeout(function(){
                $(".noprint").css('display', '');
            }, 2000);
            
        },

        refresh:function(){
            var vm = this;
            axios.get(`${api}/policies/${vm.$route.params.id}`).then(function(res){
                console.log(vm.$route.params);
                console.log(res)
                vm.Item = res.data;
            }).catch(function(err){
                console.log(err);
            });
        },
        cancel:function(){
            var vm = this;
            vm.$router.push({name:'Policies', params:{}});
        },
        valid:function(){
            var vm = this;
            return true;

        },
        save:function(){
            var vm = this;
            if(vm.valid()) {
                var p = JSON.parse(JSON.stringify(vm.Item));
                delete p.id;
                axios.patch(`${api}/policies/${vm.Item.id}`,p).then(function(res){
                    vm.$router.push({name:'Policies'})
                }).catch(function(err){
                    console.log(err);
                });
            }
        }
    },
    mounted:function(){
        var vm = this;
        vm.refresh();
    }
}