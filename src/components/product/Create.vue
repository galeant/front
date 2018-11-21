<template>
    <div class='row'>
        <div class='col-md-4 mx-auto'>
            <div class='panel panel-default'>
                <div class='panel-header'>
                    <h3>Create Product</h3>
                </div>
                <div class='panel-body'>
                    <label>Name: </label>
                    <div class='form-group'>
                        <input
                            v-model="product.name"
                            class="form-control"
                            type="text"
                        >
                    </div>
                    <label>Price: </label>
                    <div class='form-group'>
                        <input
                            v-model="product.price"
                            class="form-control"
                            type="number"
                        >
                    </div>
                    <label>Description: </label>
                    <div class='form-group'>
                        <textarea
                            v-model="product.description"
                            class="form-control"
                        ></textarea>
                    </div>
                    <button 
                        @click="create" 
                        class="btn btn-block btn-success"
                        v-show="product.name && product.price && product.description"
                    >Login</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                product:{
                    name: '',
                    price: 0,
                    description: ''
                }
            }
        },
        methods: {
            create(){
                this.$http.post('api/products',this.product)
                    .then(response=>{
                        this.$router.push('/feed')
                    })
            }
        }
    }
</script>
    
<style>
</style>