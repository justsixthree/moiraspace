let footer = Vue.createApp({

  data : function () {
    return {
      scrollPosition: null,
      logo : '/img/moiraspace-logo.png',
      logoAlt: 'Moiraspace',
      navigation : {
        left: [
          {
            name : 'Logos',
            url : '/about',
          },
          {
            name : 'Graphic design',
            url : '/art',
          },
          {
            name : 'Game design',
            url : '/art',
          }
        ],
        
        right : [
          {
            name : 'Fine art',
            url : '/art',
          },
          {
            name : 'Community work',
            url : '/about',
          },
        ],
        
      } 
    }
  },
  
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },

  created() {
  
  },

  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  },

  computed: {
    
  },
  template: `
  <div class="footer__wrapper">
    <div class="footer__column">
      <a class="footer__logo">
        <img src="img/Moiraspace-logo-White.png"  alt="Moiraspace"/>
      </a>
    </div>
    <div class="footer__column">
      <div class="footer__address">Sector-1 HSR Layout, Bengaluru, India</div>
    </div>

    <div class="footer__column">
      <nav class="footer__nav">
        <a href="https://www.linkedin.com/company/moiraspace/" class="">Linkedin</a>
        <a href="https://www.instagram.com/moiraspace/" class="">Instagram</a>
      </nav>
    </div>
    
    <div class="footer__column">
      <p class="footer__copyright">Copyright © 2022 Moiraspace</p>
    </div>
  </div>
  `
  

})

footer.mount('#footer')