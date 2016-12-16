<template lang="html">
	<div class="login_page">
		<div class="login_wrapper">
			<img src="../assets/images/ico.png">
		</div>
		<div class="login_form">
			<p>
				<label for="username"><i class="fa fa-user"></i></label>
				<input type="text" id="username">
			</p>
			<p>
				<label for="password"><i class="fa fa-key"></i></label>
				<input type="text" id="password">
			</p>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="less">
.login_page {
    background-color: #fff;
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
	p{
		margin: 1.5rem 0;
		label{
			font-size: 1rem;
			color: #222;
		}
		input{
			margin-left: 1%;
			width: 50%;
		}
	}
}
</style>
