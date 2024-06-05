export const changeId = {
  methods: {
    handlerChangeId(val: any) {
      //@ts-ignore
      const idArray = this.getFormId(this.props._id);
      console.log(idArray);
      if (idArray.includes(val)) {
        //@ts-ignore 如果存在id相等，则提示
        this.$message.error('该ID已经存在,请修改');
        //@ts-ignore
        this.props.id = this.props._id;
      } else {
        //@ts-ignore
        this.props._id = val;
      }
    }
  }
};
export interface FormDesignerMixin {
  handlerChangeId?: Function;
}
