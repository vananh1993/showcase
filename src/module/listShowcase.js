import axios from "axios";
export default {
    namespaced: true,
    state: {
        data: {},
        products:[]
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
        getListData(state, products) {
            state.products = products;
        }
    }
}
