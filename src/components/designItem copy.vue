<script>
  export default{
    name:"designItem",
    render(){
      return "Hello world";
    },
    props:{
      model: { 
        type: Object,
        default:{}
      },
      activeItem: {
        type: Object,
        default:{}
      }
    }
  }
</script>