/**
 * Created by 严俊东 on 2017/3/11.
 */

import Vue from 'vue'
import App from './App.vue'

window.app = new Vue({
    el: '#app',
    // template: "<div>haha</div>"
    render: h => h(App)
});
console.log("--");
let a = h => h(1);

a(t => console.log(t));