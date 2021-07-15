<template>
<div>
    <br>
      <figure>
        <pre><code :class="codeClass">{{content}}</code></pre>
        <figcaption>{{title}}</figcaption>
      </figure>
    <br>
</div>
</template>

<script>

export default {
  name: 'CodeItem',
  props: ["content","title","codeClass"]
}
</script>

<style scoped>


pre {
  box-shadow: 1px 1px 3px rgb(0, 0, 0);
}

figcaption {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-size: smaller;
}

figure {
    margin-left: auto;
    margin-right: auto;
}

</style>