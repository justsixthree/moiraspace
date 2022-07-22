let header = Vue.createApp({

  data : function () {
    return {
      scrollPosition: null,
      logo : '/img/moiraspace-logo.png',
      logoAlt: 'Moiraspace',
      openDrawer : false,
      navigation : {
        drawer: [
          {
            title : 'About',
            url : '/index.html',
            subnav : false
          },
          {
            title : 'Logofolio',
            url : '/logos.html',
            subnav : false
          },
          {
            title : 'Graphic Art & Design',
            url : '/illustrations.html',
            subnav : false
          },
          {
            title : 'Icons',
            url : '/icons.html',
            subnav : false
          },
          {
            title : 'Art Work Portfolio',
            url : '/bhagya.html',
            subnav: [

            ]
          },
          {
            title : 'Contact',
            url : '/contact.html',
            subnav: false
          }
          
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
    },
    say() {
      document.querySelector('.drawer').classList.toggle('is--active')
      document.body.classList.toggle('drawer--open')
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
      
      <nav class="nav nav--right">
        <ul class="nav__bar">
          <li class="nav__item">
            <button type="button" class="nav__icon js-icon" v-on:click="say">
            <span></span><span></span><span></span>
            </button>
          </li>
        </ul>
      </nav>
    </div>

    <div class="drawer">
      <div class="drawer__overlay"></div>
      <div class="drawer__content">
        <a href="javascript:void(0)" v-on:click="say" class="drawer__close">
            <svg width="16px" class="" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                  <g id="Icons/24x24/close" transform="translate(-4.000000, -4.000000)" stroke="#2E261C">
                      <g id="Group" transform="translate(4.646447, 4.646447)">
                          <line x1="-2.54594155" y1="7.35355339" x2="17.2530483" y2="7.35355339" id="Path" transform="translate(7.353553, 7.353553) rotate(-315.000000) translate(-7.353553, -7.353553) "></line>
                          <line x1="-2.54594155" y1="7.35355339" x2="17.2530483" y2="7.35355339" id="Path" transform="translate(7.353553, 7.353553) rotate(-585.000000) translate(-7.353553, -7.353553) "></line>
                      </g>
                  </g>
              </g>
            </svg>
        </a>
        <ul class="drawer__nav">
          <li class="drawer__list" v-for="nav in navigation.drawer" :key="nav.name">
            <a href="#" class="drawer__link" :href="nav.url">{{nav.title}}</a>
          </li>
        </ul>
        <div class="drawer__socialList">
          <a class="drawer__socialLink" href="#">Facebook</a>
          <a class="drawer__socialLink" href="#">Instagram</a>
          <a class="drawer__socialLink" href="#">LinkeDin</a>
          <a class="drawer__socialLink" href="#">Dribbble</a>
        </div>
      </div>
    </div>
  </header>
  `

})

header.mount('#header')