<template>
    <div>

        <div class="columns main">

            <div class="animated slideInDown column is-4 is-offset-1">
                <img height="250px" width="250px" src="../assets/IMG_0501 copy 2.jpg">
            </div>

            <div class="animated slideInUp column is-5">
                <h2>&lt;About Me/&gt;</h2>
                <p>Hello! My name is Jeremy. I live in Austin, TX and I'm a full stack web developer with experience using technologies such as Vue.js, React.js, Ember.js, Node.js, Express.js, MySQL, GraphQL, MongoDB, and many more! Please check out some of my projects here and send me a line if you're interested in working together!</p>
            </div>

        </div>

    </div>

</template>

<script>
import VueImgLoader from 'vue-img-loader'

export default {

   components: {
      'vue-img-loader': VueImgLoader
   }

}

</script>

<style scoped>

img {
    margin-top: 30px !important;
    border-radius: 50%;
    z-index: 1;
    margin: auto;
    display: block;
}


h2 {
    margin-bottom: 30px !important;
    font-size: 24px !important;
    text-align: center;
}

p {
    text-align: left;
    font-size: 14px;
    line-height: 35px;
    margin-left: 5px;
}

h1 {
    font-size: 36px !important;
}

</style>
<style src="animate.css/animate.min.css"></style>
