export default {
    props:{
        value:{
            type:[String, Number, Date],
            required:true
        },
        type:{
            type:[String],
            default:'text'
        },
        label:{
            type:[String],
            required:true
        },
        cols:{
            type:[Number, String],
            default:6
        }
    },
    template:$("#tmpField").html(),
    data:function(){
        return {
            dateValue:'',
            editable:false
        }
    },
    methods:{
        toggleEdit:function(){
            var vm = this;
            var b = $(vm.$refs.FieldControl).prop('readonly');
            $(vm.$refs.FieldControl).prop('readonly', !b);
            vm.editable = b;
        },
        change:function(){
            var vm = this;
            if(vm.type=='date') {
                var newDateValue = moment(vm.dateValue).format('YYYY-MM-DD'); 
                vm.$emit('input',newDateValue );
            } else {
                vm.$emit('input',$(vm.$refs.FieldControl).val());
            }
            
        }
    },
    mounted:function(){
        var vm = this;
        if (vm.type=='date') {
            vm.dateValue = moment(new Date(vm.value)).format('YYYY-MM-DD');
        }
    }

    

}