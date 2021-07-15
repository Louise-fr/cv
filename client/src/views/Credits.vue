<template>
<body>

  <!-- ======= Header ======= -->
  <header id="header">
      <NavbarItem></NavbarItem>
  </header><!-- End Header -->

  <main id="main">

    <!-- ======= Credits Section ======= -->
    <section id="abstract" class="section section-bg">
      <div class="container">
        <div class="section-title">
          <h2>Crédits divers</h2>
          <p>Ci-dessous la liste des différentes resources visuelles ayant permis la construction de ce site :</p>
          <br/>
          <ul>
              <li>Design du site inspiré du thème Lonely : <a href="https://bootstrapmade.com/">BootstrapMade</a></li>
              <li>Image de l'en-tête : <a href="https://unsplash.com/photos/mYBMP8pW4uQ">Clay Banks</a> sur Unsplash.</li>
              <li>Logo des technologies : <a href="https://icons8.com">Icons8</a></li>
          </ul>
        </div>
      </div>
    </section><!-- End abstract Section -->


  </main>

</body>
</template>

<script>
import NavbarItem from '@/components/NavbarItem.vue';


export default {
  name: 'Credits',
    components :{
      NavbarItem,
    }
}
</script>