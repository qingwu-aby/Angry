<template lang="html">
	<div class="content">
		<div class="head_wrapper">
			<p>我的</p>
		</div>
		<div class="mask _hack">
			<router-link to="/about/personInfo">
				<div class="login_module">
					<div class="login_left">
						<img src="../assets/images/pic.jpg">
					</div>
					<div class="login_middle">
						<p>呆呆萌</p>
					</div>
					<div class="login_right">
						<i class="fa fa-angle-right"></i>
					</div>
				</div>
			</router-link>
		</div>
		<div class="mask _mask">
			<div v-for="item in dataAbout">
				<router-link :to="item.link">
					<div class="about_list">
						<div class="about_left">
							<i class="fa" :class="item.icon"></i>
						</div>
						<div class="about_middle">
							<p>{{item.label}}</p>
						</div>
						<div class="about_right">
							<i class="fa fa-angle-right"></i>
						</div>
					</div>
				</router-link>
			</div>
		</div>
		<div class="mask _mask">
			<div v-for="item in dataAboutInfo">
				<router-link to="/about/bug">
					<div class="about_list">
						<div class="about_left">
							<i class="fa" :class="item.icon"></i>
						</div>
						<div class="about_middle">
							<p>{{item.label}}</p>
						</div>
						<div class="about_right">
							<i class="fa fa-angle-right"></i>
						</div>
					</div>
				</router-link>
			</div>
		</div>
		<div class="mask _mask2">
			<router-link to="about/logout">
				<div class="logout">
					退出登录
				</div>
			</router-link>
		</div>
		<div class="copyright">
			<span>Version 0.0.1</span>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			dataAbout: [{
				'link': '/about/aboutCollection',
				'icon': 'fa-heart',
				'label': '我的收藏'
			}, {
				'link': '/about/aboutArticle',
				'icon': 'fa-file-text-o',
				'label': '我的文章'
			}, {
				'link': '/about/aboutList',
				'icon': 'fa-list',
				'label': '我的分类'
			}],
			dataAboutInfo: [{
				'link': '/about/aboutBug',
				'icon': 'fa-bug',
				'label': '意见反馈'
			}, {
				'link': '/about/aboutInfo',
				'icon': 'fa-info-circle',
				'label': '关于'
			}, {
				'link': '/about/aboutShare',
				'icon': 'fa-share-alt',
				'label': '分享'
			}]
		}
	}
}
</script>

<style lang="css">
	.content{
		margin: 50px 0;
		overflow: hidden;
	}
	.router-link-active i {
		color: #42b983;
	}
	.head_wrapper{
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		height: 50px;
		text-align: center;
		line-height: 50px;
		background: #42b983;
		border-bottom:1px solid #eee;
	}
	.head_wrapper p{
		color:#fff;
		font-size: 1.45rem;
		display:inline-block;
		vertical-align: bottom;
	}
	.mask{
		background: #fff;
		font-size:1.15rem;
		width: 100%;
		border-top: 1px solid #eee;
		border-bottom: 1px solid #eee;
		margin-bottom: 1rem;
	}
	._hack{
		margin-top: .75rem !important;
	}
	._mask{
		border-bottom: none;
	}
	._mask2{
		border: none;
		margin-top: 2rem;
		background: none;
	}
	.logout{
		width: 80%;
    	margin: 0 auto;
		background: #EA4335;
		height: 48px;
		line-height: 48px;
		color: #fff;
		border-radius: 5px;
	}
	.about_list{
		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid #eee;
	}
	.about_list i{
		color: #888;
		font-size: 1.5rem;
	}
	.login_module{
		width: 96%;
		margin: 0 2%;
		height: 6rem;
	}
	.login_left{
		width: 28%;
		float: left;
		height: 6rem;
	}
	.about_left{
		width: 20%;
		float: left;
		height: 50px;
	}
	.about_left i{
		line-height: 50px;
	}
	.login_middle{
		padding-left:2%;
		width: 55%;
		height: 6rem;
		display: inline-block;
		line-height: 6rem;
	}
	.about_middle{
		width: 65%;
		height: 50px;
		display: inline-block;
		line-height: 50px;
	}
	.login_middle p,.about_middle p{
		text-align: left;
	}
	.login_right{
		width: 12%;
		float: right;
		height: 6rem;
		line-height: 6rem;
	}
	.about_right{
		width: 15%;
		float: right;
		height: 50px;
		line-height: 50px;;
	}
	.login_right i{
		color: #222;
	}
	.login_left img{
		border: 2px solid #eee;
		border-radius: 50%;
		margin: 1rem 0;
		width: 4rem;
		height: 4rem;
	}
	.copyright{
		margin-bottom: .5rem;
	}
</style>
