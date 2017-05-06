<template>
    <div>
        <v-menu v-show="menuShow"></v-menu>
        <div class="aside_list" @click="isShow">
            <span><i class="fa fa-navicon fa-fw"></i></span>
            <span>K</span>
        </div>
        <div class="nav">
            <ul class="nav_list" ref="listNav" transition="fadeOutLeft">
                <li class="list" v-for="item in dataList">
                    <router-link :to="item.link">
                        <span>{{item.text}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import vMenu from './menu.vue'
import { mapState } from 'vuex'
export default {
    name: 'v-header',
    components: {
        vMenu
    },
    data() {
        return {
            show: true,
            dataList: [{
                'link': '/home',
                'text': '推荐'
            }, {
                'link': '/category',
                'text': '专题'
            }],
            // auth: false
        }
    },
    methods: {
        isShow() {
            this.$store.commit('UPDATE_MENUSHOW')
        }
    },
    computed: {
        ...mapState([
            'menuShow'
        ])
    },
}
</script>
<style lang="less">
html {
    font-size: 14px;
    background-color: #fff;
}

#app {
    width: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin: 0;
}
.slide {
    transition: all .25s ease-in-out;
}
.slide-enter-active,.slide-leave-active{
    transition: all .25s ease-in-out;
}
.aside_list{
    width:100%;
    height:50px;
    line-height:50px;
    color: #666;
    span{
        float: left;
        font-size:1.75rem;
        display:inline-block;
    }
    i{
        font-size:1.75rem;
        padding: 0 1rem;
    }
}
.login_box{
    position: fixed;
    left: 0;
    bottom: 0;
    height: 50px;
    width: 100%;
    border-top: 1px solid #eee;
}
.nav {
    border: none;
    height: 50px;
}

.nav_list {
    border-bottom: 2px solid #e7e7e7;
    li:first-child:after{
        position: absolute;
        height: 30px;
        top:8%;
        left: 50%;
        content: '';
        width: 0;
        border-left: 1px solid #999;
    }
    .router-link-active i {
        color: #42b983;
    }
    list-style-type: none;
    padding: 0;
    font-size: 0;
    .list {
        display: inline-block;
        vertical-align: middle;
        width: 45%;
        height: 50px;
        text-align: center;
        padding: 0 2.5%;
        .router-link-active{
            width: 88%;
            display: inline-block;
            color: #42B983 !important;
            border-bottom: 2px solid #42B983;
        }
        span {
            line-height: 50px;
            color: #333;
            text-align: center;
            display: inline-block;
            font-size: 1rem;
        }
    }
}
.fade-enter-active, .fade-leave-active{
    transition: all .2s ease;
}
</style>