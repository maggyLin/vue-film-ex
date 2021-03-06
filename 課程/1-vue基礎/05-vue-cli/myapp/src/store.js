import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { HIDE_TABBAR_MUTATION, SHOW_TABBAR_MUTATION } from '@/type'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 自定义的共享状态
    isTabbarShow: true,
    comingList: []
  },

  getters: {
    comingListGetter (state) {
      return state.comingList.filter((item, index) => index < 1)
    }
  },

  mutations: {// 唯一修改状态的位置
    [HIDE_TABBAR_MUTATION] (state, data) {
      // console.log("HideMaizuoTabbar");
      state.isTabbarShow = data
    },
    [SHOW_TABBAR_MUTATION] (state, data) {
      // console.log("ShowMaizuoTabbar");
      state.isTabbarShow = data
    },
    comingListMutation (state, data) {
      state.comingList = data
    }
  },
  actions: {
    // 异步处理
    getComingListAction (store) {
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=7410232',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        // console.log(res.data);
        store.commit('comingListMutation', res.data.data.films)
      })
    }
  }
})

// var name = "key"
// var obj = {
//   [name]:"aaaa"
// }
// console.log(obj);
