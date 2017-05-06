<template lang="html">
	<div class="login_page">
		<div class="close_icon"><i class="fa fa-remove" aria-hidden="true"></i></div>
		<div class="login_wrapper">
			<img src="../assets/images/ico.png">
		</div>
		<div class="login_form" @keyup.enter="login">
			<p>
				<label for="username"><i class="fa fa-user fa-fw"></i></label>
				<input type="text"  v-model="username" id="username" placeholder="账号">
			</p>
			<div class="login_hack"></div>
			<p>
				<label for="password"><i class="fa fa-lock fa-fw"></i></label>
				<input type="password" v-model="password" id="password" placeholder="密码">
			</p>
		</div>
		<div id="button" @click="login">
			登录
		</div>
		<div class="auth_login">
			<p>——————————————————————</p>
			<div class="github_login">
				<i class="fa fa-github"></i>
			</div>
		</div>
		<div class="bug_feedback">
			<router-link to="/feedback">登陆遇到问题？</router-link>
		</div>
	</div>
</template>

<script>
import md5 from 'md5'
export default {
	data(){
		return {
			username: '',
			password: ''
		}
	},
	methods: {
		login() {
			let obj = {
				username: this.username,
				password: md5(this.password)
			}
			this.$http.post('/auth/user', obj)
				.then((res)=>{
					if(res.data.code===1){
						sessionStorage.setItem('Yuan-Token', res.data.token)
						// console.log({
						// 	type: 'success',
						// 	message: '登陆成功'
						// })
						this.$router.push('/about')
					}else{
						//登陆失败清空token
						// console.log(res.data.msg)
						sessionStorage.setItem('Yuan-Token', null)
					}
				},(err)=> {
					// console.log("failed")
					sessionStorage.setItem('Yuan-Token', null)
				})
		}
	}
}
</script>

<style lang="less">
.login_page {
    background-color: #f2f2f2;
    width: 100%;
	position: fixed;
	top:0;
	height: 100%;
	.auth_login{
		position: relative;
		>p{
			color: #ddd;
			margin: 1rem 0;
		}
		i{
			font-size: 3rem;
			color: #333;
			cursor: pointer;
		}
	}
	.bug_feedback{
		position: absolute;
		bottom: 2rem;
		display: block;
		width: 100%;
		text-align: center;
		>a{
			font-size: 1rem;
			color: #999;
		}
	}
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
		margin: .75rem 0;
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
