<template>
    <div id="about" class="container">
        <b-card border-variant="info"
                header='<h3 class="headerFont">About Flechas <i class="fas fw fa-address-book" /></h3>'
                header-bg-variant="info"
                header-text-variant="light"
                :bg-variant="cardBG">
            <div class="row" >
                <b-media class="col">
                    <img src="https://i.imgur.com/vMnEkLC.jpg?2" class="float-left img-responsive" alt="Picture of Flechas"></img>
                    <p :class="cardText">
                        My name is Flechas Bentley and I'm {{ age }} years old. "Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum."
                        <br><br>
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                        est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                        modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                        veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                        commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
                        nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                        <br><br>
                        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                        deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                        provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
                        fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta
                        nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,
                        omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis
                        debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
                        recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
                        maiores alias consequatur aut perferendis doloribus asperiores repellat."
                        <br><br>
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                        est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                        modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                        veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                        commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
                        nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    </p>
                    <router-link :darkMode="darkMode" to="/resume" align="center">Click here to view my employment history!</router-link>
                </b-media>
            </div>
        </b-card>
    </div>
</template>

<script>
    const moment = require('moment');
    export default {
        name: 'about',
        props: {
            darkMode: {type: Boolean, required: true}
        },
        computed: {
            age: ((date)=>{ return moment(date).diff(moment(19851226,'YYYYMMDD'), 'years')}),
            cardText(){ return (this.darkMode ? "darkCardText about-text" : "dayCardText about-text") },
            cardBG(){ return (this.darkMode ? "dark" : "light") }
        }
    }
</script>

<style>
    #about{
        margin-top: 100px;
    }
    img{
        margin-right: 15px;
    }
</style>