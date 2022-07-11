let header = Vue.createApp({

  data : function () {
    return {
      scrollPosition: null,
      logo : '/img/moiraspace-logo.png',
      logoAlt: 'Moiraspace',
      navigation : {
        left: [
          
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
  template : `
  <header class="header" :class="{'header--sticky': scrollPosition > 100}">
    <div class="header__nav">

    <a class="logo" href="/index.html">
        <img :src="logo" :alt="logoAlt" />
      </a>
      
      <nav class="nav nav--left">
        <ul class="nav__bar">
          <li
            class="nav__item"
            v-for="nav in navigation.left"
            :key="nav.name"
          >
            <a class="nav__link" :href="nav.url">{{nav.name}}</a>
          </li>
        </ul>
      </nav>

      
      

      <nav class="nav nav--right">
        <ul class="nav__bar">
          <li
            class="nav__item"
            v-for="nav in navigation.right"
            :key="nav.name"
          >
            <a class="nav__link" :href="nav.url">{{nav.name}}</a>
          </li>
          <li class="nav__item">
            <button class="nav__icon">
              <span></span><span></span><span></span><span></span
              ><span></span><span></span><span></span><span></span
              ><span></span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  `

})

header.mount('#header')