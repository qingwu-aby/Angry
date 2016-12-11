<template>
<div id="app">
	<div class="nav">
		<ul class="nav_list" ref="listNav">
			<li class="list" v-for="item in dataList">
				<router-link :to="item.link">
					<i class="fa" :class="item.icon"></i>
				</router-link>
			</li>
		</ul>
	</div>
	<div>
		<router-view></router-view>
	</div>
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
		}
	}
}
</script>

<style>
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

.nav {
	position: fixed;
	left: 0;
	bottom: 0;
	height: 50px;
	width: 100%;
	background: #fff;
	border-top: 1px solid #eee;
}

.nav_list {
	list-style-type: none;
	padding: 0;
	font-size: 0;
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
