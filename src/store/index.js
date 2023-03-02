import Vue from 'vue'
import Vuex from 'vuex'
import lesson from "@/store/lesson";
import auth from "@/store/auth";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    lesson,
    auth
  }
})
