<template lang="html">
    <div class="sort-page">
        <div class="sort-wrapper">
            <span><i class="fa fa-angle-left fa-fw"></i></span>
            <span>{{dataList.title}}</span>
        </div>
        <ul class="sort-content">
            <li class="sort-list" v-for="item in dataList.data">
                <router-link to="/article">
                    <div class="sort-hack">
                        <div class="sort-img"><img :src="item.pic" :alt="item.title"></div>
                        <div class="sort-msg">
                            <h3>{{item.title}}</h3>
                            <p>{{item.summary}}</p>
                            <div class="sort-other">
                                <span>{{dataList.title}}</span>
                                <span>{{item.create_time}}</span>
                            </div>
                        </div>
                    </div>
                </router-link>
            </li> 
        </ul>
    </div>
</template>

<script>
export default {
    name:'v-sort',
    data() {
        return {
            dataList: {
                'title': "Code",
                'data': [
                    {
                        'title': "简介",
                        'author': "Yuan",
                        'pic': "src/assets/images/test.png",
                        'summary': "this is a summary",
                        'create_time': "2017-05-05"
                    },
                    {
                        'title': "简介",
                        'author': "Yuan",
                        'pic': "src/assets/images/test.png",
                        'summary': "this is a summary",
                        'create_time': "2017-05-05"
                    }
                ]
            }  
        }     
    }
}
</script>

<style lang="less">
.sort-page {
    width:100%;
    .sort-wrapper{
        height:50px;
        line-height:50px;
        color: #fff;
        background: #666;
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
    .sort-content {
        width: 100%;
        color: #000;
        .sort-list {
            border-bottom: 1px solid #e1e1e1;
            margin-top: 10px;
            padding-bottom: 10px;
            .sort-hack {
                width: 92%;
                margin: 0 auto;
                .sort-img {
                    img {
                        width: 100%;
                        height: 240px;
                    }
                }
                .sort-msg {
                    h3,p {
                        display: flex;
                        justify-content: space-between;
                    }
                    p {
                        color: #999;
                        margin: 10px 0;
                        font-size: 16px;
                    }
                    .sort-other {
                        display: flex;
                        justify-content: space-between;
                        span:nth-child(1) {
                            color: #0549a6;
                        }
                    }
                }
            }
        }
    }
}
</style>
