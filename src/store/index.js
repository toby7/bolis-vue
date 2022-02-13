// import { createStore } from 'vuex';

// const store = createStore({
//     state() {
//         return {
//             wines: []
//         }
//     },
//     getters: {
//         memories(state){
//             return (id) => {
//                 state.wines.find(wines => wines.id === id);
//             }; 
//         }
//     }
// });

// export default store;

import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            wineLists: [
            //     {
            //     id: "123",
            //     wines: [
            //         {
            //             name: "tobias test1",
            //             productNumber: "123456"
            //         },
            //         {
            //             name: "tobias test2",
            //             productNumber: "234567"
            //         }
            //     ]
            // },
            // {
            //     id: "1234",
            //     wines: [
            //         {
            //             name: "tobias test1",
            //             productNumber: "123456"
            //         },
            //         {
            //             name: "tobias test2",
            //             productNumber: "234567"
            //         }
            //     ]
            // }

        ]
        }
    },
    mutations: {
        addWineList: (state, actionInfo) => {
            state.wineLists.push(actionInfo)
          },
    },
    getters: {
        wineLists(state) {
            return (id) => {
                //console.log("state id:", id);
                //console.log("state data", state.wines);
                //return state.wines[0];
                return state.wineLists.find((wines) => wines.id === id);
            }; 
        }
    }
});

export default store;




