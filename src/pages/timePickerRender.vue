<script >
import { h,resolveComponent } from 'vue';
  export default {
    props:{
      modelValue:''
    },
    render(props){
      const component = resolveComponent('el-time-picker')
        return h(component, {
          modelValue:props.modelValue,
          'onUpdate:modelValue': (date) => {
            console.log(date);
            props.modelValue=date;
          }
        })
    }
  } 
</script>