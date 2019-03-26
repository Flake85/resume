<template>
    <div id="contact" class="container">
        <h1 class="text-info headerFont">Contact</h1>
        <b-card :bg-variant="cardBG"
                align="center"
                border-variant="info"
                class="card"
                header='<h3 class="headerFont">Contact Info <i class="far fa-paper-plane"></i></h3>'
                header-bg-variant="info"
                header-text-variant="light">
            <p :class="cardText">
                <i class="fas fw fa-envelope"></i> E-mail Address: Flechas.Bentley@gmail.com (<em>Preferred Method</em>)<br>
                <i class="fas fw fa-phone"></i> Contact #: 1(318)880-3181<br>
                <i class="fas fa-location-arrow"></i> Location: Pineville, LA
            </p>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: 'contact',
        props: {
            darkMode: {type: Boolean, required: true}
        },
        computed: {
            cardText(){ return (this.darkMode ? "darkCardText" : "dayCardText") },
            cardBG(){ return (this.darkMode ? "dark" : "light") }
        }
    }
</script>

<style>
    #contact{
        margin-top: 100px;
    }
</style>