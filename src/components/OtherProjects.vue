<template>

    <div class="main">

        <div class="columns">

            <div class="column is-half is-offset-one-quarter">

                <h2>&lt;More Projects/&gt;</h2>

            </div>

        </div>

        <div class="columns">

            <div class="column is-4">
                <a href="https://github.com/jharmon141/cool_vue" target="blank"><h3>&lt;Cool Vue/&gt;</h3></a>
                <a href="https://github.com/jharmon141/cool_vue/" target="blank"><img class="projectLogo" src="../assets/Screen Shot 2017-06-25 at 3.58.25 PM.png"></a>
                <br>
                <br>
                <div class="projectBlurb">
                    <p>Cool Vue is a boilerplate starter forked from the Vue/Webpack template. It includes server-side rendering from a Node/Express server and Connect Histroy API Fallback.</p> 
                    <br>
                    <br>
                    <p>Code: </p>
                    <a href="https://github.com/jharmon141/cool_vue" target="blank">github/jharmon141/cool_vue</a>
                </div>

            </div>

            <div class="column is-4">
                <a href="https://dry-basin-78109.herokuapp.com" target="blank"><h3>&lt;NYT Scrubber/&gt;</h3></a>
                <a href="https://dry-basin-78109.herokuapp.com" target="blank"><img class="projectLogo" src="../assets/Screen Shot 2017-06-25 at 4.24.22 PM.png"></a>
                <br>
                <br>
                <div class="projectBlurb">
                    <p>An article scrubber that uses the New York Times API and a Graph.cool database to save articles of interest. This web app uses a VueJS front-end and GraphQL/Apollo to serve information from the database.</p> 
                    <br>
                    <p>Code: </p>
                    <a href="https://github.com/jharmon141/NYT_Vue" target="blank">github/jharmon141/NYT_Vue</a>
                </div>

            </div>

            <div class="column is-4">
                <a href="https://pure-forest-24470.herokuapp.com/" target="blank"><h3>&lt;Sci Fi Trivia/&gt;</h3></a>
                <a href="https://pure-forest-24470.herokuapp.com/" target="blank"><img class="projectLogo" src="../assets/ScifiTrivia.png"></a>
                <br>
                <br>
                <div class="projectBlurb">
                    <p>A trivia game that uses JavaScript timers to test players knowledge in Science Fiction. A player has 20 seconds for each question before the game automatically moves on to the next question.</p>
                    <br>
                    <br>
                    <p>Code: </p>
                    <a href="https://github.com/jharmon141/TriviaGame" target="blank">github/jharmon141/TriviaGame</a>
                </div>

            </div>

        </div>

        <div class="columns">

            <div class="column is-4">
                <a href="https://powerful-depths-40127.herokuapp.com/" target="blank"><h3>&lt;Giphy API/&gt;</h3></a>
                <a href="https://powerful-depths-40127.herokuapp.com/" target="blank"><img class="projectLogo" src="../assets/giphyapi.png"></a>
                <br>
                <br>
                <div class="projectBlurb">
                    <p>A web app that uses the Giphy API to allow users to search for their favorite GIFs. Users can add search topics to the tool bar to allow for quick, easy, and fun searches.</p>
                    <br>
                    <br>
                    <p>Code: </p>
                    <a href="https://github.com/jharmon141/Giphy-API" target="blank">github/jharmon141/Giphy-API</a>
                </div>

            </div>

            <div class="column is-4">
                <a href="https://shrouded-plateau-91542.herokuapp.com/" target="blank"><h3>&lt;Rock, Paper, Scissors/&gt;</h3></a>
                <a href="https://shrouded-plateau-91542.herokuapp.com/" target="blank"><img class="projectLogo" src="../assets/RPS.png"></a>
                <br>
                <br>
                <div class="projectBlurb">
                    <p>A multiplayer Rock, Paper, Scissors game that uses a Firebase database to store user input. Users can also communicate through the built-in chat box.
                    <br>
                    <br>
                    <br>
                    <br>
                    <p>Code: </p>
                    <a href="https://github.com/jharmon141/RPS_Multiplayer" target="blank">github/jharmon141/RPS_Multiplayer</a>
                </div>

            </div>

            <div class="column is-4">
                <a href="https://powerful-mountain-97549.herokuapp.com/" target="blank"><h3>&lt;Game of Thrones Hangman/&gt;</h3></a>
                <a href="https://powerful-mountain-97549.herokuapp.com/" target="blank"><img class="projectLogo" src="../assets/gothangman.png"></a>
                <br>
                <br>
                <div class="projectBlurb">
                    <p>A twist on the the classic Hangman game, but with a Game of Thrones theme. The user makes letter guess to fill in a selected Game of Thrones related word. Six wrong guesses are allowed before the user loses the game.</p>
                    <br>
                    <p>Code: </p>
                    <a href="https://github.com/jharmon141/week-3-game" target="blank">github/jharmon141/week-3-game</a>
                </div>

            </div>

        </div>

    </div>

</template>

<script>

export default {

    name: 'OtherProjects',

}

</script>

<style scoped>

.is-4 {
    margin-bottom: 40px;
}

p {
    font-size: 14px;
}

.projectBlurb {
    width: 75%;
    margin: auto;
}

.projectLogo {
    height: 100px;
    margin: auto;
    display: block;
}

h2 {
    margin-bottom: 100px !important;
    font-size: 24px !important;
    text-align: center;
}

h3 {
    margin-bottom: 25px !important;
    text-align: center;
    color: #929191;
}

h3:hover {
    color: red;
}

a {
    color: dodgerblue !important;
}

a:hover {
    color: red !important;
}
</style>
