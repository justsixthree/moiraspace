let hero = Vue.createApp({
  data : function () {
    return {
      title : 'Icons'
    }
  }
})

hero.mount('#hero')

let icons = Vue.createApp({
  data : function () {
    return {
      icons: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    }
  }
})

icons.mount('#icons')