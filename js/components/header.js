let header = Vue.createApp({

  data : function () {
    return {
      scrollPosition: null,
      logo : '/img/moiraspace-logo.png',
      logoAlt: 'Moiraspace',
      navigation : {
        left: [
          
          {
            name : 'Art',
            url : '/illustrations.html',
          }
        ],
        
        right : [
          
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