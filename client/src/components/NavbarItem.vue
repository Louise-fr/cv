<template>
    <div class="container d-flex">

      <div class="logo mr-auto">
        <h1 class="text-light"><a href="/"><span>Portfolio L.F.</span></a></h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html"><img src="../assets/img/logo.png" alt="" class="img-fluid"></a>-->
      </div>

      <nav class="nav-menu d-none d-lg-block">
        <ul>
          <li class="active"><a href="/">Accueil</a></li>
          <li><a :href="getPath('about')">A propos </a></li>
          <li><a :href="getPath('resume')">CV</a></li>
          <!-- <li><a href="#services">Domaines</a></li> -->
          <!-- <li><a href="#portfolio">Portfolio</a></li> -->
          <li class="drop-down"><a :href="getPath('portfolio')">Projets</a>
            <ul>
              <li v-for="data in myprojectsNames" :key="data.id">
                <a v-bind:href=hrefLink(data.id)>{{data.name}}</a>
              </li>
            </ul>
          </li>
          <li><a :href="getPath('contact')">Contact</a></li>
        </ul>
      </nav><!-- .nav-menu -->
    </div>
</template>
<script>

import projectsNames from '@/json/projects-names.json'

export default {
  name: 'NavbarItem',
  data() {
    return {
       myprojectsNames : projectsNames,
    }
  },
  methods: {
    hrefLink(num) {
      return "/project/" + num;
    },
    getPath(anchor) {
      if (this.$router.currentRoute.path == '/') {
        return "#" + anchor
      }
      return "/#" + anchor
    }
  },
}
</script>
