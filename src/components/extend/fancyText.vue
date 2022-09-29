<!--文本扩展-->
<template>
  <div v-show="show" style="width: 100%;">
      <p  style="margin-block-start:0em;margin-block-end:0em;" 
        :style="{   'color':color,
                    'font-size':size+'px',
                    'text-align':align,
                    'font-weight':bold}"
        
        >{{text}}</p>
  </div>
  
</template>

<script>
export default {
    name:"fancy-text", 
    props:{
        text: { 
            type: String,
            default:''
        },
        show:{
            type:Boolean,
            default:true
        },
        align:{
            type:String,
            default:'left'
        },
        color:{
            type:String,
            default:''
        },
        size:{
            type:Number,
            default:14,
        },
        bold:{
            type:Number,
            default:400,
        }
    }
}
</script>
<style scoped>
.text-left{
    
    text-align:left
}
.text-center{
    text-align:center;
    justify-content: center;
}
.text-right{
    margin-left: auto;
    text-align:right;
    justify-content: flex-end;
}
</style>
