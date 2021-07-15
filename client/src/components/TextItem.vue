<template>
    <div>
      <div v-html="cleanContent"></div>
    </div>
      
</template>

<script>
export default {
  name: 'TextItem',
  props: ["content"],
  computed: {
    cleanContent: function(){
      return this.content.replace(/\n/g,"<br><br>")
    }
  }
}
</script>

<style scoped>
div /deep/ a {
    font-weight: 900;
    /* font-style: oblique; */
  }

</style>