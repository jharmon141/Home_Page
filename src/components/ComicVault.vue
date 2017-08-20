<template>

    <div class="columns main">

        <div class="animated flipInY column is-4 is-offset-1">

            <a href="http://comicvault.cool" target="blank">
                <img class="cvimg" src="../assets/comicvault.847936e copy.png">
            </a>

        </div>

        <div class="animated flipInX column is-5">

            <a href="https://comicvault.cool" target="blank"><h2>&lt;Comic Vault/&gt;</h2></a>

            <p>Comic Vault is a personal comic book archiving tool. It uses the <a href="https://comicvine.gamespot.com/" target="blank">Comic Vine API</a> to allow users to search for the individual comic issues they want to add to their customizable collections.</p>
            <br>
            <p>Technologies Used:</p>
            <a href="https://vuejs.org/" target="blank"><img class="techLogo" src="../assets/logo copy.png"></a>
            <a href="https://bulma.io/" target="blank"><img class="techLogo" src="../assets/bulma.png"></a>
            <a href="https://webpack.github.io/" target="blank"><img class="techLogo" src="../assets/webpack.svg.png"></a>
            <a href="http://graphql.org/" target="blank"><img class="techLogo" src="../assets/GraphQL_Logo.svg copy.png"></a>
            <a href="http://www.apollodata.com/" target="blank"><img class="techLogo" src="../assets/agcdgv0j6vh2q55ygu9i.png"></a>
            <a href="http://graph.cool/" target="blank"><img class="techLogo" src="../assets/graphcool-logo-E2E92C1A2B-seeklogo.com.png"></a>
            <a href="https://auth0.com/" target="blank"><img class="techLogo" src="../assets/805765c256ff8617fcad483b5476faf2.png"></a>
            <br>
            <p>Code:</p>
            <a href="https://github.com/jharmon141/comic-vault" target="blank">github/jharmon141/comic-vault</a>
            
        </div>

    </div>


</template>

<script>

export default {
    name: 'ComicVault',
}

</script>

<style scoped>

.cvimg {
    height: 325px;
    margin: auto;
    display: block;
}

.techLogo {
    height: 50px;
    margin-top: 10px;
    margin-right: 2px;
}

a {
    color: dodgerblue !important;
}

p {
    margin-left: 3px;
}

a:hover {
    color: red !important;
}

h2 {
    margin-bottom: 30px !important;
    font-size: 24px !important;
    text-align: center;
    color: #929191;
}

h2:hover {
    color: red;
}
</style>
