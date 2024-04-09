<template>
  <div class="edit_container" :class="{warn_edit_container:warnTextLength}">
        <quill-editor 
            ref="myQuillEditor" 
            toolbar="full"
            theme="snow"
            @textChange="onEditorChange($event)">
        </quill-editor>
        <div class="text_number_tips" :class="{warn_text_number_tips:warnTextLength}">{{currentLength}}/{{maxTextLength}}</div>
    </div>
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
export default {
    components:{
        QuillEditor
    },
    props:{
        value:{
            type:String,
            default:''
        },
        max:{
            type:Number,
            default:0
        },
        validateMaxText:{
            type:Boolean,
            default:false
        },
        id:{
            type:String,
            default:''
        }
    },
    data() {
        return {
            content: this.value,
            currentLength:0,
            defaultMaxLength:2000,
            editorOption: {}
        }
    },
    methods: {
        
        onEditorBlur(editor){
            
        }, // 失去焦点事件
        onEditorFocus(v){
        }, // 获得焦点事件
        onEditorChange(v){
            const text = this.$refs.myQuillEditor.getText();
            const hText = this.$refs.myQuillEditor.getHTML();
            this.currentLength = text.length-1;
            this.$emit('input',hText);
            this.$emit('change',hText);
        }, // 内容改变事件
    },
    computed: {
        editor() {
            return this.$refs.myQuillEditor.quill;
        },
        maxTextLength(){
            let len = this.defaultMaxLength;
            if(this.max>=1){
                len = this.max;
            }
            return len;
        },
        warnTextLength(){
            const warn =this.validateMaxText&&this.currentLength>this.maxTextLength;
            return warn;
        }
    }

}
</script>

<style>
.ql-editor{
    height:400px;
}
.edit_container{
    width: 100%;
}
.edit_container .text_number_tips{
    float:right;
    margin-top:-30px;
    padding-right:10px;
}
.warn_edit_container{
    border: solid 1px #F56C6C;
}
.warn_text_number_tips{
    color:#F56C6C;
}
</style>