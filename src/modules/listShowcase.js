import { createStore } from 'vuex'

const store = createStore({
    state () {
    return {
        data: {},
        showcases:[]
    }
    },
    getters: {
      // data: state => state.data,
    },
    actions: {
      getList({ commit }) {
          commit('getListData');
      },
      loadList(context) {
        axios.get("./data/list-showcases.json")
        .then(res => {
          context.commit('getListData', res.data);
        })
        .catch(error => {
          console.error(error);
        });
      },
    },
    mutations: {
      getListData(state, showcases) {
          state.showcases = showcases;
      }
    }
})




// import axios from "axios";
// export default {
//     namespaced: true,
//     state: {
//         data: {},
//         showcases:[]
//     },
//     getters: {
//         // data: state => state.data,
//     },
//     actions: {
//         getList({ commit }) {
//             commit('getListData');
//         },
//         loadList(context) {
//           axios.get("./data/list-showcases.json")
//           .then(res => {
//             context.commit('getListData', res.data);
//           })
//           .catch(error => {
//             console.error(error);
//           });
//         },
//     },
//     mutations: {
//         getListData(state, showcases) {
//             state.showcases = showcases;
//         }
//     }
// }
