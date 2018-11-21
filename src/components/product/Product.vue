<template>
    <div class='col-md-4 mt-3'>
        <div class="thumbnail">
            <a href="http://baitulmaqdis.com/wp/wp-content/uploads/2016/01/Gambar-anak-kucing-lucu.jpg">
                <img src="http://baitulmaqdis.com/wp/wp-content/uploads/2016/01/Gambar-anak-kucing-lucu.jpg" alt="kucing" style="width:100%">
                <div class="caption">
                    <h3 class="card-title">{{ product.name }}</h3>
                    <p class="card-body">{{ product.price }} </p>
                    <a href="#" class="btn btn-warning">Wish List</a>
                    <a href="#" class="btn btn-success">Buy</a>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default{
        props:['product']
    }
</script>
    
<style>
</style>