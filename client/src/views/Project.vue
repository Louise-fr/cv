<template>
<body>

  <!-- ======= Hero Section ======= -->
  <!-- <section id="hero" class="d-flex flex-column align-items-center justify-content-center">
    <h1>Hi, I'm Alice!</h1>
    <h2>I am a graphic designer</h2>
    <a href="#about" class="btn-get-started scrollto"><i class="icofont-simple-down"></i></a>
  </section>-->
  <!-- End Hero -->

  <!-- ======= Header ======= -->
  <header id="header">
      <NavbarItem></NavbarItem>
  </header><!-- End Header -->

  <main id="main">

    <!-- ======= abstract Section ======= -->
    <section id="abstract" class="section section-bg">
      <div class="container">
        <div class="section-title">
          <h2>Résumé du projet</h2>
          <!-- <p>{{ projectResume }}</p> -->
          <TextItem :content="projectResume"></TextItem>
        </div>
      </div>
    </section><!-- End abstract Section -->

    <!-- ======= Technologies et langages employés Section ======= -->

    <section id="technos" class="section section-bg">
      <div class="container">
        <div class="section-title">
          <h2>Technologies et langages employés</h2>
          <!-- <p>{{ projectTechno }}</p> -->
          <div class="technologies">
            <div v-for="data in projectTechno" :key="data" >
              <!-- <div>{{data}}</div> -->
              <div v-html=displayTechno(data)></div>
            </div>
          </div>
        </div>
      </div>
    </section><!-- End details Section -->

    <!-- ======= Details Section ======= -->

    <section id="details" class="section section-bg">
      <div class="container">
        <div class="section-title">
          <h2>Mise en œuvre</h2>
          <div v-for="data in projectDetail" :key="data.content" >
            <div v-if="data.type == 'text'">
              <TextItem :content="data.content"></TextItem>
            </div>
            <div v-if="data.type == 'img'">
              <ImageItem :content="data.content"></ImageItem>
            </div>
            <div v-if="data.type == 'code'">
              <CodeItem :content="data.content" :codeClass="data.codeClass" :title="data.title"></CodeItem>
            </div>
            <div v-if="data.type == 'chart'">
              <ChartItem :content="data.content"></ChartItem>
            </div>
             <div v-if="data.type == 'title'">
              <TitleItem :content="data.content"></TitleItem>
            </div>
          </div>
        </div>
      </div>
    </section><!-- End details Section -->

    <section id="bilan" class="section section-bg">
      <div class="container">
        <div class="section-title">
          <h2>Bilan</h2>
          <p>{{ projectBilan }}</p>
        </div>
      </div>
    </section><!-- End details Section -->
 

  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
    <FooterItem></FooterItem>
    <!-- End  Footer -->

  <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>

</body>
</template>

<script>
import NavbarItem from '@/components/NavbarItem.vue';
import FooterItem from '@/components/FooterItem.vue';
import TextItem from '@/components/TextItem.vue'
import ImageItem from '@/components/ImageItem.vue'
import ChartItem from '@/components/ChartItem.vue'
import CodeItem from '@/components/CodeItem.vue'
import TitleItem from '@/components/TitleItem.vue'

import projects from '@/json/projects.json';
import technos from '@/json/techno.json';

export default {
  name: 'Project',
  components :{
      NavbarItem,
      FooterItem,
      TextItem,
      ImageItem,
      ChartItem,
      CodeItem,
      TitleItem
  },
  data() {
    return {
      myprojects: projects,
      projectNum: this.$route.params.project_id,
      technosList: technos
    }
  },
  computed: {
    projectResume: function(){
      return this.myprojects[this.projectNum]["resume"]
    },
    projectTechno: function(){
      return this.myprojects[this.projectNum]["techno"]
    },
    projectDetail: function(){
      return this.myprojects[this.projectNum]["detail"]
    },
    projectBilan: function(){
      return this.myprojects[this.projectNum]["bilan"]
    }
  },
  methods: {
    displayTechno(data){
      var myTechno = this.technosList[data];
      if (myTechno == undefined) { return "" }
      return "<a href="+  myTechno["link"] +" > "+ myTechno["fullName"] +" <img src=" +myTechno["logo"]+ "/></a>"
    }
  }
}
</script>
