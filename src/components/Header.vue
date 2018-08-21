<template>
  <div>
 <h1>{{title}}</h1>

  </div>
   
</template>

<script>
export default {
   data(){
       return {
           title:'ELEMENT使用'}
       }
   }

</script>

<style lang="scss" scoped>
   $red:rgb(0, 183, 255);
   h1{
        background:$red;
        color:#ffffff;
        height: 50px;
        line-height: 50px;
   }
  

</style>
