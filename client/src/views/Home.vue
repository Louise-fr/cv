<template>
<body>

  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex flex-column align-items-center justify-content-center">
    <h1>Louise Fresquet</h1>
    <h2>Aspirante Data Scientist</h2>
    <h2>CV et Portfolio</h2>
    <a href="#about" class="btn-get-started scrollto"><i class="icofont-simple-down"></i></a>
  </section><!-- End Hero -->

  <!-- ======= Header ======= -->
  <header id="header">
    <NavbarItem></NavbarItem>
  </header><!-- End Header -->

  <main id="main">

    <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="container">

        <div class="row no-gutters">
          <div class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
          <div class="col-xl-7 pl-0 pl-lg-5 pr-lg-1 d-flex align-items-stretch">
            <div class="content d-flex flex-column justify-content-center">
              <h3>Passionnée de Data Science et de Data Viz</h3>
              <p>
                Aime découvrir de nouvelles technologies et des langages informatiques, notamment en Data Science et Web. Python est mon langage de prédilection.
              </p>
              <div class="row">

                 <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <i class="icofont-clock-time"></i>
                    <span data-toggle="counter-up">2</span>
                    <p><strong>années d'expérience</strong> A CGI Montpellier, j'ai pu acquérir une exigence professionnelle de la qualité de la donnée.</p>
                  </div>
                </div>

                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <i class="icofont-document-folder"></i>
                    <span data-toggle="counter-up">3</span>
                    <p><strong>projets professionnels</strong> qui m'ont permis d'avoir une vision générale de la gestion de la donnée en environnement B2B et B2C.</p>
                  </div>
                </div>

                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <i class="icofont-brainstorming"></i>
                    <span data-toggle="counter-up">5</span>
                    <p><strong>projets personnels</strong> qui me permettent de consolider mes connaissances acquises en Master ainsi que d'apprendre davantage sur la Data Science et le Web</p>
                  </div>
                </div>
              </div>
            </div><!-- End .content-->
          </div>
        </div>

      </div>
    </section><!-- End About Section -->

    <!-- ======= Skills Section ======= -->
    <section id="skills" class="skills section-bg">
      <div class="container">
        <div class="section-title">
          <h2>Compétences</h2>
          <p>Ma formation et mon intérêt pour les projets Web et de Data Analyse m'ont permis de développer mes compétences dans divers langages &amp; technos.</p>
        </div>

        <div class="row skills-content">
          <div class="col-lg-6">
            <h3>Web</h3>
            <br/>
            <div v-for="data in this.Skills['Web']" :key="data['name']">
                <ProgressItem :name="data['name']" :value="data['value']" :level="data['level']"></ProgressItem>
            </div>
          </div>

          <div class="col-lg-6">
            <h3>Data Science</h3>
            <br/>
            <div v-for="data in this.Skills['Data']" :key="data['name']">
                <ProgressItem :name="data['name']" :value="data['value']" :level="data['level']"></ProgressItem>
            </div>
          </div>
        </div>
      </div>
    </section><!-- End Skills Section -->

    <!-- ======= Resume Section ======= -->
    <section id="resume" class="resume section-bg">
      <div class="container">

        <div class="section-title">
          <h2>C.V.</h2>
          <p>Suite à une formation en Master spécialisé données, j'ai pu intégrer la branche Gestion de Données Marketing de l'entreprise CGI France située à Montpellier suite à un stage de 6 mois en 2018. Avec de l'expérience, j'ai pu évoluer vers un nouveau poste sur un nouveau projet en tant que "référente Data Quality".</p>
        </div>

        <div class="row">

          <div class="col-lg-6">
            <h3 class="resume-title">Expérience professionelle</h3>
            <div class="resume-item">
              <h4>Consultante Data Quality (BMW)</h4>
              <h5>2019</h5>
              <p><em>CGI FRANCE</em></p>
              <p>
                <ul>
                  <li>Dans un contexte B2C : Analyse et gestion de la donnée client (Adobe Campaign)</li>
                  <li>Maintenance de la donnée client (XML et JSSP) </li>
                  <li>Conception et développement de campagnes en temps réel</li>
                  <li>Diffusions automatisées multi-canal avec gestion de la donnée client.</li>
                </ul>
              </p>
            </div>
            <div class="resume-item">
              <h4>Ingénieur En Gestion De Données (La Poste &amp; Dior)</h4>
              <h5>2018 - 2019</h5>
              <p><em>CGI FRANCE</em></p>
              <p>
                <ul>
                  <li>Dans un contexte B2B et B2C : Gestion et exploitation des données client (Adobe Campaign, XML, JSSP)</li>
                  <li>Interfaçage avec outils CRM</li>
                  <li>Solutions de campagnes</li>
                  <li>Optimisation des données</li>
                  <li>Développement d’outils de reporting</li>
                  <li>Formatrice Adobe Campaign pour les juniors.</li>
                </ul>
              </p>
            </div>
          </div>


         <div class="col-lg-6">
            <!-- <h3 class="resume-title">Sumary</h3>
            <div class="resume-item pb-0">
              <h4>Alice Barkley</h4>
              <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
              <p>
                <ul>
                  <li>Portland par 127,Orlando, FL</li>
                  <li>(123) 456-7891</li>
                  <li>alice.barkley@example.com</li>
                </ul>
              </p>
            </div> -->

            <h3 class="resume-title">Instruction</h3>
            <div class="resume-item">
              <h4>Master Mention Informatique, Spécialité DECOL </h4>
              <h5>2016 - 2018</h5>
              <p><em>Université de Montpellier - Faculté Des Sciences</em></p>
              <p>Ce Master prépare scientifiquement aux domaines issus de l'ingénierie des connaissances, des données complexes et hétérogènes, et aux industries de la langue. Ces domaines relèvent de l'intersection entre l'intelligence artificielle dans sa partie «&nbsp;représentation », des systèmes d'information pour l'aspect relation aux données et leurs structures, et des systèmes de gestion des documents.</p>
            </div>
            <div class="resume-item">
              <h4>Licence Mathématiques &amp; Informatique</h4>
              <h5>2010 - 2014</h5>
              <p><em>Université de Nîmes</em></p>
              <p>Formation générale permettant d’acquérir des connaissances fondamentales dans les trois disciplines Mathématiques, Informatique et Physique ainsi que dans leurs domaines d’application.</p>
            </div>
          </div>
        </div>

      </div>
    </section><!-- End Resume Section -->

    <!-- ======= Services Section ======= -->
    <!-- <section id="services" class="services section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Services</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box">
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
              <h4 class="title"><a href="">Lorem Ipsum</a></h4>
              <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box">
              <div class="icon"><i class="bx bx-file"></i></div>
              <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
              <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box">
              <div class="icon"><i class="bx bx-tachometer"></i></div>
              <h4 class="title"><a href="">Magni Dolores</a></h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box">
              <div class="icon"><i class="bx bx-world"></i></div>
              <h4 class="title"><a href="">Nemo Enim</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>

        </div>

      </div>
    </section>End Services Section -->

    <!-- ======= Portfolio Section ======= -->
    <section id="portfolio" class="portfolio section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Portfolio</h2>
          <p>Vous trouverez ci-dessous l'ensemble des projets personnels que j'ai pu mener dans les domaines du web et de la Data Science. 
          Je mène également des projets sur la plateforme de Data Science Kaggle. Le lien vers mon profil est indiqué plus bas dans la section "Contact".</p>
        </div>

        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">Tous</li>
              <li data-filter=".filter-ds">Data Science</li>
              <!-- <li data-filter=".filter-data">Données</li> -->
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container">

            <div v-for="data in this.ProjectsNames" :key="data['id']">
                <PortfolioItem :id="data['id']" :name="data['name']" :type="data['type']" :typeFull="data['typeFull']" :img="data['img']" ></PortfolioItem>
            </div>

        </div>

      </div>
    </section><!-- End Portfolio Section -->

    <!-- ======= Testimonials Section ======= -->
    <!-- <section id="testimonials" class="testimonials section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Testimonials</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="owl-carousel testimonials-carousel">

          <div class="testimonial-item">
            <p>
              <i class="bx bxs-quote-alt-left quote-icon-left"></i>
              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
              <i class="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src="../assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="">
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
          </div>

          <div class="testimonial-item">
            <p>
              <i class="bx bxs-quote-alt-left quote-icon-left"></i>
              Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
              <i class="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src="../assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt="">
            <h3>Sara Wilsson</h3>
            <h4>Designer</h4>
          </div>

          <div class="testimonial-item">
            <p>
              <i class="bx bxs-quote-alt-left quote-icon-left"></i>
              Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
              <i class="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src="../assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt="">
            <h3>Jena Karlis</h3>
            <h4>Store Owner</h4>
          </div>

          <div class="testimonial-item">
            <p>
              <i class="bx bxs-quote-alt-left quote-icon-left"></i>
              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
              <i class="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src="../assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt="">
            <h3>Matt Brandon</h3>
            <h4>Freelancer</h4>
          </div>

          <div class="testimonial-item">
            <p>
              <i class="bx bxs-quote-alt-left quote-icon-left"></i>
              Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
              <i class="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src="../assets/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt="">
            <h3>John Larson</h3>
            <h4>Entrepreneur</h4>
          </div>

        </div>

      </div>
    </section> -->
    <!-- End Testimonials Section  -->

    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Contact</h2>
          <p>Je suis actuellement à la recherche d'un emploi ! Si mon profil vous intéresse, n'hésitez pas à me contacter par le moyen de votre choix indiqué ci-dessous. Le formulaire vous permettra de me contacter rapidement, votre message m'est envoyé directement dans ma boite mail.</p>
        </div>

        <div class="row">

          <div class="col-lg-4 col-md-4">
            <div class="contact-about">
              <h3>Ailleurs...</h3>
              <p>{{ infos.description}}</p>
              <div class="social-links">
                <a href="#" ><i class="icofont-github"></i></a>
                <a href="#" ><i class="icofont-stack-overflow"></i></a>
                <a href="https://www.linkedin.com/in/lfresquet/" class="linkedin"><i class="icofont-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="info">
              <div>
                <i class="icofont-google-map"></i>
                <p>{{ infos.adresse }}<br>{{ infos.ville }}</p>
              </div>

              <div>
                <i class="icofont-envelope"></i>
                <p>{{ infos.email }}</p>
              </div>

              <div>
                <i class="icofont-phone"></i>
                <p>{{ infos.telephone }}</p>
              </div>

            </div>
          </div>

          <div class="col-lg-5 col-md-8">
            <form  :action="APIURL" method="post" role="form" class="php-email-form" > 
              <div class="form-group">
                <input v-model="form.formName" type="text" name="name" class="form-control" id="name" placeholder="Votre nom" data-rule="minlen:4" data-msg="Insérer votre nom ici" />
                <div class="validate"></div>
              </div>
              <div class="form-group">
                <input v-model="form.formEmail" type="email" class="form-control" name="email" id="email" placeholder="Votre adresse mail" data-rule="email" data-msg="Veuillez vérifier le format de votre adresse email" />
                <div class="validate"></div>
              </div>
              <div class="form-group">
                <input v-model="form.formSubject" type="text" class="form-control" name="subject" id="subject" placeholder="Sujet" data-rule="minlen:4" data-msg="Le sujet doit contenir au moins 4 caractères" />
                <div class="validate"></div>
              </div>
              <div class="form-group">
                <textarea v-model="form.formMessage" class="form-control" name="message" rows="5" data-rule="required" data-msg="Veuillez vérifier le contenu de votre message" placeholder="Message"></textarea>
                <div class="validate"></div>
              </div>
              <div class="mb-3">
                <div class="loading">Loading</div>
                <div class="sent-message">Votre message a été envoyé. Merci !</div>
              </div>
              <div class="text-center"><button type="submit">Envoyer</button></div>
            </form>
          </div>

        </div>

      </div>
    </section><!-- End Contact Section -->

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
import ProgressItem from '@/components/ProgressItem.vue'
import Skills from '@/json/skills.json'
import PortfolioItem from '@/components/PortfolioItem.vue';
import ProjectsNames from '@/json/projects-names.json'

const API_URL = "http://localhost:4000/send-email"; //test
//const API_URL = "https://cv-fresquet.fr/send-email", //prod

export default {
  name: 'Home',
  components: {
    NavbarItem,
    FooterItem,
    ProgressItem,
    PortfolioItem
  },
  data(){
      return {
        errors: [],
        Skills: Skills,
        ProjectsNames: ProjectsNames,
        infos: {
            adresse: 'Quartier Antigone',
            ville: 'Montpellier 34000',
            email: `louise.fresquet@netcourrier.com`,
            telephone: '+33 06.23.35.70.71',
            nom: 'Louise Fresquet',
            description: 'Je suis également présente sur LinkedIn et sur les plateformes de développement populaires (Github, StackOverflow). '
        },
        form: {
          formName: null,
          formEmail: null,
          formSubject: null,
          formMessage: null
        },
        APIURL: API_URL, 
      }
  },
  methods:{
    checkForm: function (e) {
      if (this.form.formName && this.form.formEmail && this.form.formSubject && this.form.formMessage) {
        return true;
      }
      this.errors = [];
      if (!this.form.formName) {
        this.errors.push('name');
      }
      if (!this.form.formEmail) {
        this.errors.push('email');
      }
      if (!this.form.formSubject) {
        this.errors.push('subject');
      }
      if (!this.form.formMessage) {
        this.errors.push('message');
      }          

      if (this.errors.length){
          console.log({"error":this.errors.join(",")});
          return;
      }
      e.preventDefault();
    }
  },
}
</script>
