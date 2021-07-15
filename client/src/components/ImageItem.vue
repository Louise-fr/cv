<template>
  <div>
      <img class="image"
     :src="linkToImg">
  </div>
</template>

<script>
export default {
  name: 'ImageItem',
  props: ["content"],
  computed: {
    linkToImg: function(){
        return require('@/assets/img/projets/' + this.content)
    }
  }
}
</script>

<style scoped>
.image {
    float: center;
    width:  500px;
    height: 400px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    margin-top: 50px;
    object-fit: cover;
    max-width: 100%;
    height: auto;
    box-shadow: 1px 1px 3px rgb(0, 0, 0);
}
</style>