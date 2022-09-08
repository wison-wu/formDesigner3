// 模态框
export const remoteData = {
    methods: {
        getRemoteData(){
            //动态数据
            if(this.conf.dataType === 'dynamic'){
                this.$axios.get(this.conf.action).then(res => {
                    if(this.conf.options.length===0){
                        this.conf.options = this.conf.options.concat(res.data);
                    }
                })
            }
        }
    }
}

export const changeId = {
    methods: {
        handlerChangeId(val){
            let idArray = this.getFormId(this.props._id);
            console.log(idArray);
            if(idArray.includes(val)){  //如果存在id相等，则提示
                this.$message.error('该ID已经存在，请修改');
                this.props.id=this.props._id;
            }else{
                this.props._id=val;
            }
        }
    }
}

import {
    ElInput,
    ElInputNumber,
    ElSelect,
    ElCheckbox,
    ElSwitch,
    ElSlider,
    ElRate,
    ElDatePicker,
    ElTimePicker,
    ElColorPicker,
    ElCascader,
    ElUpload,
    ElRadioGroup
}  from "element-plus";
export const renderComp = {
    methods:{
        getRenderComps(){
            const compMap = new Map();
            compMap.set("el-input",ElInput);
            compMap.set("el-input-number",ElInputNumber);
            compMap.set("el-select",ElSelect);
            compMap.set("el-checkbox",ElCheckbox);
            compMap.set("el-radio-group",ElRadioGroup);
            compMap.set("el-switch",ElSwitch);
            compMap.set("el-slider",ElSlider);
            compMap.set("el-rate",ElRate);
            compMap.set("el-date-picker",ElDatePicker);
            compMap.set("el-time-picker",ElTimePicker);
            compMap.set("el-color-picker",ElColorPicker);
            compMap.set("el-cascader",ElCascader);
            compMap.set("el-upload",ElUpload);
            return compMap;
        }
    }
}
