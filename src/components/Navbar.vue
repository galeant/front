<template>
    <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">Momo Labs</a>
            </div>
            <ul class="nav navbar-nav">
                <router-link tag="li" to="/feed" v-if="auth"><a>Feeds</a></router-link>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <router-link tag="li" to="/login" v-if=" ! auth"><a>Login</a></router-link>
                <router-link tag="li" to="/register" v-if=" ! auth"><a>Register</a></router-link>
                <router-link tag="li" to="/logout" v-if="auth"><a>Logout</a></router-link>
                
                <!-- <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li> -->
            </ul>
        </div>
    </nav>

</template>

<script>
    export default{
        data(){
            return {
                auth:false
            }
        },

        created(){
            this.auth = this.$auth.isAuth()
        }
    }
</script>
<style></style>