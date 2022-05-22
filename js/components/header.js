
export default function() {
  
  let header = Vue.createApp({
    data : function () {
      return {
        title : 'This is moiraspace 1.0.0'
      }
    }
  })
  
  header.mount('#header')
}


