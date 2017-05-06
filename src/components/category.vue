<template lang="html">
    <div class="category-page">
        <v-header></v-header>
        <ul class="category-info-list">
            <li class="category-info" v-for="item in dataList">
                <router-link to="/sort">
                    <div class="category-msg">
                        <div class="category-title">{{item.title}}</div>
                    </div>
                    <div class="category-img"><img :src="item.pic" :alt="item.title"></div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import vHeader from './header.vue'
export default {
    components: {
        vHeader
    },
    data(){
        return {
            dataList: [
                {
                    'title': "This is a title",
                    'pic': "src/assets/images/test.png"
                },
                {
                    'title': "This is a title",
                    'pic': "src/assets/images/test.png"
                }
            ]
        }
    },
    methods: {}
}
</script>

<style lang="less">
    .category-page {
        width: 100%;
        background-color: #f1f1f1;
        .category-info-list {
            margin-top: 2px;
            .category-info {
                position: relative;
                border-bottom: 10px solid #f1f1f1;
                .category-msg {
                    position: absolute;
                    bottom: 30px;
                    left: 5%;
                    color: #fff;
                    div {
                        font-size: 26px;
                        font-weight: bold;
                    }
                }
                .category-img {
                    img {
                        border-radius: 5px;
                        width: 96%;
                        height: 250px;
                    }
                }
            }
        }
    }
</style>
