let header = Vue.createApp({

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
    
  }

})

header.mount('#header')