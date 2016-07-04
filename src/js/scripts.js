new Vue({
  el: '#app',

  data: {
    message: 'Hello Vue.js!',
    ip: null,
    isp: null
  },

  ready: function() {
    this.fetchIP();
    this.fetchProvider();
  },

  computed: {

    navigator: function() {
      console.log( navigator );
      return navigator;
    }

  },

  methods: {

    fetchIP: function() {
      this.$http.get('https://api.ipify.org?format=json').then((response) => {
        this.ip = response.data.ip;
      }, (response) => {
        console.err(response)
      });
    },

    fetchProvider: function() {
      this.$http.get('http://ip-api.com/json').then((response)=> {
        this.isp = response.data.isp;
      });
    }

  },


});



/**
 * http://stackoverflow.com/questions/11219582/how-to-detect-my-browser-version-and-operating-system-using-javascript
 */