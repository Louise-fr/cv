<template>
          <div :class="portfolioClass">
            <div class="portfolio-wrap">
              <img :src="portfolioImg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>{{name}}</h4>
                <p>{{typeFull}}</p>
              </div>
              <div class="portfolio-links">
                <!-- <a :href="portfolioImg" data-gall="portfolioGallery" class="venobox" :title="name"><i class="bx bx-plus"></i></a> -->
                <a :href="portfolioLink" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>
</template>

<script>
export default {
  name: 'PortfolioItem',
  props: ["id","img","type","typeFull","name"],
  computed: {
      portfolioClass: function(){
          return "col-lg-4 col-md-6 portfolio-item filter-" + this.type
      },
      portfolioLink: function(){
          return "/project/" + this.id
      },
      portfolioImg: function(){
          return require( '@/assets/img/portfolio2/' + this.img)
      }
  }
}
</script>