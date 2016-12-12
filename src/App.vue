<template>
<div id="app">
	<div class="login_box">
		<ul class="nav_login_list">
			<router-link to="/login">
				<li class="login_list">
					<i class="fa fa-user"></i>
					<span> 登 录</span>
				</li>
			</router-link>
			<router-link to="/reg">
				<li class="login_list">
					<i class="fa fa-file-text"></i>
					<span> 注 册</span>
				</li>
			</router-link>
		</ul>
	</div>
	<div class="nav" v-show="this.auth===true">
		<ul class="nav_list" ref="listNav">
			<li class="list" v-for="item in dataList">
				<router-link :to="item.link">
					<i class="fa" :class="item.icon"></i>
				</router-link>
			</li>
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
				'icon': 'fa-home'
			}, {
				'link': '/nav',
				'icon': 'fa-paper-plane'
			}, {
				'link': '/remind',
				'icon': 'fa-bell'
			}, {
				'link': '/about',
				'icon': 'fa-user'
			}],
			auth: false
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

.nav ,.login_box{
	position: fixed;
	left: 0;
	bottom: 0;
	height: 50px;
	width: 100%;
	background: #fff;
	border-top: 1px solid #eee;
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
	.router-link-active i {
		color: #42b983;
	}
	list-style-type: none;
	padding: 0;
	font-size: 0;
}
.fade-enter-active, .fade-leave-active{
	transition: all .2s ease;
}

.list {
	display: inline-block;
	vertical-align: middle;
	width: 20%;
	padding: 0 2.5%;
}

.list i {
	line-height: 50px;
	color: #bbb;
	font-size: 1.85rem;
}
</style>
