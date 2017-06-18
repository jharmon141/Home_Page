<template>
    <div>

        <div class="columns">

            <div class="animated slideInDown column is-4 is-offset-1">
                <img height="250px" width="250px" src="../assets/photo.jpg">
            </div>

            <div class="animated slideInUp column is-5">
                <h2>&lt;About Me/&gt;</h2>
                <p>Hello! My name is Jeremy. I'm from Austin, TX and I'm a full stack web developer with experience using technologies such as Vue.js, React.js, Ember.js, Node.js, Express.js, MySQL, GraphQL, MongoDB, and many more! Please check out some of my projects here and send me a line if you're interested in working together!</p>
            </div>

        </div>

    </div>


</template>

<script>

</script>

<style scoped>

img {
    margin-top: 30px;
    border-radius: 50%;
    z-index: 1;
    position: relative;
}

h2 {
    margin-bottom: 30px !important;
    font-size: 24px !important;
}

p {
    text-align: left;
    font-size: 14px;
    line-height: 35px;
    margin-left: 5px;
}

p:hover {
    background-color: cyan;
}

h1 {
    font-size: 36px !important;
}

.columns {
    margin-top: 16%;
}
</style>
<style src="animate.css/animate.min.css"></style>
