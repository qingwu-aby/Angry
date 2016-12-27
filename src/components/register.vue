<template lang="html">
    <div class="login_page">
        <div class="close_icon"><i class="fa fa-remove" aria-hidden="true"></i></div>
        <div class="login_wrapper">
			<img src="../assets/images/ico.png">
		</div>
		<div class="login_form">
			<p>
				<label for="username"><i class="fa fa-user fa-fw"></i></label>
				<input type="text" id="username" placeholder="请输入您的昵称" style="color:#27ae60;font-size: 1.15rem;">
			</p>
			<div class="login_hack"></div>
			<p>
				<label for="password"><i class="fa fa-lock fa-fw"></i></label>
				<input type="password" id="password" placeholder="请输入您的密码" style="color:#27ae60;font-size: 1.15rem;">
			</p>
            <div class="login_hack"></div>
			<p>
				<label for="password"><i class="fa fa-lock fa-fw"></i></label>
				<input type="password" id="password" placeholder="请再次输入您的密码" style="color:#27ae60;font-size: 1.15rem;">
			</p>
		</div>
		<div id="button">
			注册
		</div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
    .close_icon{
        position: absolute;
        top: 3%;
        right: 5%;
    }
</style>
