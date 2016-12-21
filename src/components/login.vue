<template lang="html">
	<div class="login_page">
		<div class="login_wrapper">
			<img src="../assets/images/ico.png">
		</div>
		<div class="login_form">
			<p>
				<label for="username"><i class="fa fa-user fa-fw"></i></label>
				<input type="text" id="username" placeholder="账号" style="color:#27ae60;font-size: 1.15rem;">
			</p>
			<div class="login_hack"></div>
			<p>
				<label for="password"><i class="fa fa-lock fa-fw"></i></label>
				<input type="password" id="password" placeholder="密码" style="color:#27ae60;font-size: 1.15rem;">
			</p>
		</div>
		<div id="button">
			登录
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="less">
.login_page {
    background-color: #fcfcfc;
    width: 100%;
	position: fixed;
	height: 100%;
}
.login_wrapper{
	margin: 25% 0 15% 0;
	img{
		width: 4rem;
		height: 4rem;
	}
}
.login_form{
	margin: 0 auto;
	width: 75%;
	border: 1px solid #ccc;
	border-radius: 3px;
	.login_hack{
		border-bottom: 1px solid #ccc;
	}
	p{
		margin: 1rem 0;
		line-height: 1.25rem;
		height: 1.25rem;
		label{
			font-size: 1.2rem;
			color: #aaa;
		}
		input{
			padding-left: .5rem;
			margin-left: 1%;
			outline: none;
			width: 78%;
			border: none;
			background: transparent;
		}
	}
}
#button{
	margin: 10% auto 0 auto;
	width:75%;
	height: 40px;
	line-height: 40px;
	font-size: 1.25rem;
	color: #fff;
	background-color: #50BB91;
	border: 1px solid #50BB91;
}
</style>
