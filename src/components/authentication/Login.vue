<template>
    <div class="row mt-3" >
        <div class='col-md-4 mx-auto'>
            <div class='panel panel-default'>
                <div class='panel-header'>
                    <h3>Login</h3>
                </div>
                <div class='panel-body'>
                    <div class='form-group'>
                        <input
                            v-model="email"
                            class="form-control"
                            type="email"
                            placeholder="Email"
                        >
                    </div>
                    <div class='form-group'>
                        <input
                            v-model="password"
                            class="form-control"
                            type="password"
                            placeholder="Password"
                        >
                    </div>
                    <button @click="login" class="btn btn-block btn-success">Login</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                email: '',
                password: ''
            }
        },
        methods:{
            login(){
                var data = {
                    client_id: 2,
                    client_secret:'EDZrUqJY9NL3op5sBnsQFLPlccB6xP9E7pYZyTOw',
                    grant_type: 'password',
                    username: this.email,
                    password: this.password
                }

                this.$http.post('oauth/token',data)
                    .then(response =>{
                        this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now())
                        this.$router.push('/feed')
                    })
                    // .then(function(response){
                    //     console.log(response)
                    // })
            }
        }
    }
</script>

<style>
</style>