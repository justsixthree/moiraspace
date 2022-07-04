let hero = Vue.createApp({
  data : function () {
    return {
      title : 'Illustrations'
    }
  }
})

hero.mount('#hero')

let portfolio = Vue.createApp({
  data : function () {
    return {
      cards: [
        {
          img : '/img/illustrations/painting-1.jpg',
          id : 1
        },
        {
          img : 'https://cdn.dribbble.com/users/11251912/screenshots/17871839/media/7a46fe2f363c60aa6642f92e4226ec62.png?compress=1&resize=1200x900&vertical=top',
          id : 4
        }
      ]
    }
  }
})

portfolio.mount('#portfolio')