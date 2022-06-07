export default {
    template:$("#tmpStart").html(),
    data:function(){
        return {
            title:''
        }
    },
    computed:{
        Authorized:function(){
            return window.Username !=''
        }
    },
    mounted:function(){
       var vm = this;
       vm.$router.push({name:'Home'})
    }

}