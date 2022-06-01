let hero = Vue.createApp({
  data : function () {
    return {
      title : 'Our Illustrations'
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
        }
      ]
    }
  }
})

portfolio.mount('#portfolio')