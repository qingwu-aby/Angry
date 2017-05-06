<template lang="html">
    <div class="article-page">
        <div class="article-title">
            <div class="article-wrapper">
                <i class="fa fa-angle-left"></i>
                <p class="article-name"> {{dataList.title}} </p>
                <div>  </div>
            </div>
        </div>
        <div class="article-content">
            <div class="article-msg">
                <div class="category-msg">
                    <div class="category-title">{{dataList.title}}</div>
                </div>
                <div class="category-img"><img :src="dataList.pic" :alt="dataList.title"></div>
            </div>
            <div class="article-summary">
                {{dataList.summary}}
            </div>
            <div class="article-info">
                {{dataList.content}}
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            dataList: {
            'title': "简介",
            'author': "Yuan",
            'pic': "src/assets/images/test.png",
            'summary': "<p>本文不是官方文档的翻译。你可以在阅读官方文档之前和之后阅读本文，以加深其中的重点概念。根据该项目源码的习惯，示例都是基于 ES2015 的语法来写的。Redux 应用状态管理服务。虽然本身受到了 Flux 很深的影响，但是其核心概念却非常简单，就是 Map/Reduce 中的 Reduce。我们看一下 Javascript 中 Array.prototype.reduce 的用法：</p>",
            'content': "<p>本文不是官方文档的翻译。你可以在阅读官方文档之前和之后阅读本文，以加深其中的重点概念。根据该项目源码的习惯，示例都是基于 ES2015 的语法来写的。Redux 是应用状态管理服务。虽然本身受到了 Flux 很深的影响，但是其核心概念却非常简单，就是 Map/Reduce 中的 Reduce。我们看一下 Javascript 中 Array.prototype.reduce 的用法：本文不是官方文档的翻译。你可以在阅读官方文档之前和之后阅读本文，以加深其中的重点概念。根据该项目源码的习惯，示例都是基于 ES2015 的语法来写的。Redux 是应用状态管理服务。虽然本身受到了 Flux 很深的影响，但是其核心概念却非常简单，就是 Map/Reduce 中的 Reduce。我们看一下 Javascript 中 Array.prototype.reduce 的用法：本文不是官方文档的翻译。你可以在阅读官方文档之前和之后阅读本文，以加深其中的重点概念。根据该项目源码的习惯，示例都是基于 ES2015 的语法来写的。Redux 是应用状态管理服务。虽然本身受到了 Flux 很深的影响，但是其核心概念却非常简单，就是 Map/Reduce 中的 Reduce。我们看一下 Javascript 中 Array.prototype.reduce 的用法：<p>"

            }  
        }     
    }
}
</script>

<style lang="less">
    .article-page {
        width: 100%;
        .article-title {
            height: 50px;
            background: #666;
            line-height: 50px;
            .article-wrapper {
                margin: 0 4%;
                display: flex;
                justify-content: space-between;
                color: #fff;  
                i {
                    line-height: 50px;
                    display: inline-block;
                    font-size: 26px;
                }
                p {
                    font-size: 18px;
                }
            }
        }
        .article-content {
            width: 92%;
            margin: 1rem auto;
            color: #222;
            .article-msg {
                position: relative;
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
                        width: 100%;
                        height: 250px;
                    }
                }
            }
            .article-summary {
                text-indent: 2em;
                margin: 1rem 0;
                padding: 0 1rem;
                font-size: 16px;
                background-color: #f1f1f1;
            }
        }
    }
</style>
