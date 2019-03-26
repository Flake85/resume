<template>
    <div id="home" class="container">
        <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
            <template slot="header">
                <h1 class="headerFont">Welcome!</h1>
            </template>
            <template slot="lead">
                <h5>Welcome to my website! My name is Flechas Bentley and I am an aspiring software developer looking to
                    advance myself in an always-evolving career. I made this website to display some of the skills I have
                    acquired since March of 2018. I started this project in late January 2019.
                </h5>
            </template>
            <hr class="my-4">
            <div class="row">
                <p>Feel free to browse around and explore. Comments or Questions?
                    <router-link id="contactLink" to="/contact"><strong><em>Contact me</em></strong></router-link>
                    for more information!
                </p>
            </div>
            <div class="row">
                <p>Click <router-link to="/resume" id="resumeLink"><strong><em>here</em></strong></router-link>
                    to see my resume'.
                </p>
            </div>
        </b-jumbotron>
    </div>
</template>

<script>
    export default {
        name: 'home'
    }

</script>

<style>
    #home{
        margin-top: 150px;
    }
    #contactLink, #resumeLink{
        color: white;
    }

</style>