<template lang="html">
    <div class="login_page">
        <div class="close_icon"><i class="fa fa-remove" aria-hidden="true"></i></div>
        <div class="login_wrapper">
			<img src="../assets/images/ico.png">
		</div>
		<div class="login_form"  @keyup.enter="reg">
			<p>
				<label for="username"><i class="fa fa-user fa-fw"></i></label>
				<input type="text" v-model="username" id="username" placeholder="请输入您的昵称" >
			</p>
			<div class="login_hack"></div>
			<p>
				<label for="password"><i class="fa fa-lock fa-fw"></i></label>
				<input type="password" v-model="password" placeholder="请输入您的密码" >
			</p>
            <div class="login_hack"></div>
			<p>
				<label for="password"><i class="fa fa-lock fa-fw"></i></label>
				<input type="password" v-model="repeatPsw" placeholder="请再次输入您的密码" >
			</p>
		</div>
		<div id="button" @click="reg">
			注册
		</div>
    </div>
</template>

<script>
import md5 from 'md5'
export default {
	data(){
		return {
			username: '',
			repeatPsw: '',
			password: ''
		}
	},
	methods: {
		reg() {
			let data = {
				username: this.username,
				password: md5(this.repeatPsw===this.password ? this.repeatPsw: '')
			}
			this.$http.post('/auth/reg', data)
				.then((res)=>{
					if(res.data.code===1){
						sessionStorage.setItem('Yuan-Token', res.data.token)
						this.$router.push('/login')
					}else{
						sessionStorage.setItem('Yuan-Token', null)
						console.log(res.data.msg)
					}
				},(err)=>{
					sessionStorage.setItem('Yuan-Token', null)
				})
		}
	}
}
</script>

<style lang="less">
    .close_icon{
        position: absolute;
        top: 3%;
        right: 5%;
    }
</style>
