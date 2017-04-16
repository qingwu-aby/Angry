<template>
<div id="app">
	<div class="aside_list">
		<span><i class="fa fa-navicon fa-fw"></i></span>
		<span>K</span>
	</div>
	<div class="nav">
		<ul class="nav_list" ref="listNav">
			<li class="list" v-for="item in dataList">
				<router-link :to="item.link">
					<span>{{item.text}}</span>
				</router-link>
			</li>
		</ul>
	</div>
	<div class="login_box">
		<ul class="nav_login_list">
			<router-link to="/login">
				<li class="login_list">
					<i class="fa fa-user fa-fw"></i>
					<span> 登 录</span>
				</li>
			</router-link>
			<router-link to="/reg">
				<li class="login_list">
					<i class="fa fa-file-text fa-fw"></i>
					<span> 注 册</span>
				</li>
			</router-link>
		</ul>
	</div>
	
	<transition name="fade" mode="out-in">
		<router-view></router-view>
	</transition>
</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			dataList: [{
				'link': '/home',
				'text': '推荐'
			}, {
				'link': '/category',
				'text': '专题'
			}],
			auth: true
		}
	}
}
</script>

<style lang="less">
html {
	font-size: 14px;
	background-color: #f7f7f7;
}

#app {
	width: 100%;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	margin: 0;
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
.login_box{
	width: 100%;
	background: #42b983;
}
.nav_login_list{
	height: 50px;
	overflow: hidden;
	.router-link-active{
		color: #fff !important;
	}
	a:first-child:after{
		position: absolute;
	   	top: 25%;
	   	height: 50%;
	   	left: 50%;
	   	content: '';
	   	width: 0;
	   	border-left: 1px solid #fff;
	}
	a{
		float: left;
		line-height: 50px;
		display: inline-block;
		width: 50%;
		color: #fff;
		text-align: center;
		i{
			font-size: 1.5rem;
		}
		span{
			font-size: 1.25rem;
		}
	}
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
		text-align: center;
		padding: 0 2.5%;
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
