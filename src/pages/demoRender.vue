<script>
import { h } from 'vue';
import {ElDatePicker} from "element-plus";
console.log
export default {
    render(){
        return h(ElDatePicker, {
          modelValue: '',
          format: 'yyyy/MM/dd',
          type: 'date',
          // Not work
          // But the documetion gives this event. @see https://element-plus.org/#/en-US/component/date-picker
          onChange: (date) => alert(date),
          // Work
          'onUpdate:modelValue': (date) => (this.modelValue==date)
        })
    }

}
</script>