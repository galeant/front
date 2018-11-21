<template>
    <div class="row mt-3">
        <div class='col-md-4 mx-auto'>
            <div class='panel panel-default'>
                <div class='panel-header'>
                    <h3>Register</h3>
                </div>
                <div class='panel-body'>
                     <div class='form-group'>
                        <input
                            v-model="name"
                            class="form-control"
                            type="text"
                            placeholder="Name"
                        >
                    </div>
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
                    <button class="btn btn-block btn-success">Register</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){ 
            return{
                name:'',
                email:'',
                password:''
            }
        }
    }
</script>

<style></style>