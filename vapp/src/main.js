import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
//import { Web3App } from './web3';
import Web3 from 'web3'

Vue.config.productionTip = false

//init web3.js
//Web3App.test();

if (typeof web3 !== 'undefined') {
  console.log('Web3 injected browser: OK.')
  window.web3 = new Web3(window.web3.currentProvider)
} else {
  console.log('Web3 injected browser: Fail. You should consider trying MetaMask.')
  // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
  window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'))
}

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
