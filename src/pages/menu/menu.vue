<template>
<div>
    <el-button type='primary' @click="willAdd">添加</el-button>
    <v-add :info='info' ref="one"></v-add>
    <v-list @edit='edit($event)'></v-list>
</div>
</template>
<script>
import vAdd from './components/add'
import vList from './components/list'
export default {
components:{
    vAdd,
    vList
 },
data () {
return {
    info:{
        isShow:false,
        isAdd:true,
        title:'菜单添加'
    }
}
},
methods:{
    willAdd(){
        this.info.isShow = !this.info.isShow
        this.info.isAdd = true
        this.info.title = '菜单添加'
        this.$refs.one.empty()
    },
    edit(e){
        // this.info.isShow = true
        // this.info.isAdd = false
        this.info={
            isShow:true,
            isAdd:false,
            title:'菜单编辑'
        }
        this.$refs.one.look(e)
    }
},
mounted(){
}
}
</script>
<style>
</style>