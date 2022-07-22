


let hero = Vue.createApp({
  data : function () {
    return {
      title : 'Art and design'
    }
  }
})

hero.mount('#hero')



let portfolio = Vue.createApp({
  data : function () {
    return {
      title : 'Portfolio',
      cards: [
        {
          img : 'https://cdn.dribbble.com/users/11251912/screenshots/17871307/media/718072ae0762baf19fc1190bf78a2752.png?compress=1&resize=1200x900&vertical=top',
          id : 1
        },
        {
          img : 'https://cdn.dribbble.com/users/11251912/screenshots/17870976/media/95d9500be09b473249e41a97cf72e3b1.png?compress=1&resize=1200x900&vertical=top',
          id : 2
        },
        {
          img : 'https://cdn.dribbble.com/users/11251912/screenshots/17871255/media/0b480a7584f88ca04e4b900a44e926a9.png?compress=1&resize=1200x900&vertical=top',
          id : 3        
        },
        {
          img : 'https://cdn.dribbble.com/users/11251912/screenshots/17871359/media/a7c3fa9219a3078059c1e818d66c2c75.png?compress=1&resize=1200x900&vertical=top',
          id : 5
        },
        {
          img : 'https://cdn.dribbble.com/users/11251912/screenshots/17870912/media/fff2ea4d3f44411293b73628f3a1b031.png?compress=1&resize=800x600&vertical=top',
          id : 6
        },
        {
          img : 'https://cdn.dribbble.com/users/1118100/screenshots/4725930/media/996a20d5e41489ad5ce2dda9dff9f90b.png?compress=1&resize=800x600&vertical=top',
          id : 7
        },
        {
          img : 'https://cdn.dribbble.com/users/1118100/screenshots/6204105/media/c83c10a75eef2314e6c49f4a44a3e54c.png?compress=1&resize=800x600&vertical=top',
          id : 8
        },
        {
          img : 'https://cdn.dribbble.com/users/1118100/screenshots/6204131/media/20c233f940250b091d3e3c97cfe8805a.png?compress=1&resize=800x600&vertical=top',
          id : 9
        },
        {
          img : 'https://cdn.dribbble.com/users/11251912/screenshots/17871974/media/f169b258f1e79609a50bcdf2ea9edfe2.png?compress=1&resize=700x525&vertical=top',
          id : 10
        },
        {
          img : 'https://cdn.dribbble.com/users/1118100/screenshots/4797612/media/20351bf1c39f2984cbe0054a7a630b88.png?compress=1&resize=800x600&vertical=top',
          id : 11        
        },
        {
          img : 'https://cdn.dribbble.com/users/2089965/screenshots/4715077/media/91a5efee79f86201e95df40446481178.png?compress=1&resize=700x525&vertical=top',
          id : 12
        },
        {
          img : 'https://cdn.dribbble.com/users/11251912/screenshots/17871689/media/2ab3091ce3466fdc4c80fa83942ee856.png?compress=1&resize=400x300&vertical=top',
          id : 13
        }
      ]
    }
  }
})

portfolio.mount('#portfolio')