
// import { Tree } from 'element-ui';
import {reqMenuList} from '../../util/request'

const state={
    list:[],
}
const mutations={
    changeList(state,arr){
        state.list = arr;
    }
}
const actions={
    requestMenuList(context){
        reqMenuList({istree:true}).then(res=>{
            context.commit('changeList',res.data.list)
        })
    }
}
const getters={
    list(start){
        return start.list
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced:true
}