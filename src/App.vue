<template>
<div id="app">
		
		<!-- <div class="login_box">
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
		</div> -->	
	<!-- <keep-alive> -->
    <router-view></router-view>
    <!-- </keep-alive> -->
</div>
</template>

<script>
export default {
	name: 'App'
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

.login_box{
	position: fixed;
	left: 0;
	bottom: 0;
	height: 50px;
	width: 100%;
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

.fade-enter-active, .fade-leave-active{
	transition: all .2s ease;
}


</style>
