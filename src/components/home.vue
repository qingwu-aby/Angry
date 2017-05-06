<template lang="html">
	<div class="home-page">
        <v-header></v-header>
        <ul class="article-info-list">
            <li class="article-info" v-for="item in dataList">
                <router-link to="/article">
                    <div class="article-userinfo">
                        <div class="article-author">
                            <span>{{item.author}}</span>
                        </div>
                        <div class="article-category">
                            <span> {{item.category}} </span>
                        </div>
                    </div>
                    <div class="article-msg">
                        <div class="article-title">{{item.title}}</div>
                        <div class="article-summary">{{item.summary}}</div>
                        <div class="article-img"><img :src="item.pic" :alt="item.title"></div>
                    </div>
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
                    'title': "这是一个标题",
                    'summary': "这是一段简介",
                    'author': "Yuan",
                    'category': "Code",
                    'pic': "src/assets/images/code_icon.png",
                },
                {
                    'title': "这是一个标题",
                    'summary': "这是一段简介",
                    'author': "Yuan",
                    'category': "Code",
                    'pic': "src/assets/images/code_icon.png",
                }
            ]
        }
    },
    methods: {}
}
</script>

<style lang="less">
    .home-page {
        width: 100%;
        background: #f1f1f1;
        .article-info-list {
            border-top: 2px solid #f1f1f1;
            background: #fff;
            .article-info {
                border-bottom: 10px solid #f1f1f1;
                padding: 0 5%;
                .article-userinfo {
                    padding-top: 10px;
                    display: flex;
                    justify-content: space-between;
                    font-size: 14px;
                    .article-author {
                        span {
                            color: #000;
                        }
                    }
                    .article-category {
                        span {
                            color: #fff;
                            display: inline-block;
                            min-width: 50px;
                            background: #333;
                            height:24px; 
                            padding: 0 2px;
                            line-height: 24px;
                        }
                    }
                }
                .article-msg {
                    .article-title {
                        display: flex;
                        justify-content: space-between;
                        font-size: 22px;
                        color: #000;
                    }
                    .article-summary {
                        display: flex;
                        justify-content: space-between;
                        color: #ddd;
                        font-size: 18px;
                        padding: 10px 0;
                    }
                    .article-img {
                        img{
                            width: 96%;
                            height: 250px;
                        }
                    }
                }
            }
        }
    }
</style>
