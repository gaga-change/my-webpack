/**
 * Created by 严俊东 on 2017/3/10.
 */
// var Vue = require('vue');
// var Vue = require('moment');
import Vue from 'vue'
function determineDate() {
    // console.log(Vue);
    window.App = new Vue({
        data(){
            return {
                a: 12345
            }
        }
    })
}

determineDate();