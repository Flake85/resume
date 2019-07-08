<template>
    <div id="resume" data-spy="scroll" data-target="#top">
        <div class="container-fluid" id="top">
            <div class="row">
                <div class="col-lg-3">
                    <div class="resume-nav">
                        <div class="row" >
                            <img  src="https://i.imgur.com/vMnEkLC.jpg?2"
                                  alt="Picture of Flechas and his family"
                                  class="picture row">
                        </div>
                        <vertical-btns />
                        <horizontal-btns />
                    </div>
                </div>
                <div class="col-lg-9 ">
                    <b-card border-variant="info"
                            header-bg-variant="info"
                            header-text-variant="white"
                            class="card resume-card"
                            :bg-variant="cardBG">
                        <div :class="cardText">
                            <hr>
                            <b-collapse visible id="employment"><employment /></b-collapse>
                            <b-collapse visible id="education"><education /></b-collapse>
                            <b-collapse visible id="resources"><programming-srcs /></b-collapse>
                        </div>
                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Education from './education/main-education';
    import programmingSrcs from './programming-srcs/programming-srcs-resume';
    import Employment from "./employment/main-employment";
    import VerticalBtns from './resume-components/vertical-stck-btns'
    import HorizontalBtns from "./resume-components/horizontal-stck-btns";
    import { mapGetters } from 'vuex';
    export default {
        name: 'resume',
        components: {
            HorizontalBtns,
            Employment,
            programmingSrcs,
            Education,
            VerticalBtns
        },
        computed: {
            ...mapGetters([ 'cardBG', 'cardText' ])
        }
    }
</script>

<style>
    hr{
        height: 1px;
        color: #17a2b8;
        background-color: #17a2b8;
    }
    #resume{
        margin-top: 100px;
    }
    .resume-nav{
        position: fixed;
        left: 7%;
    }
    .picture{
        margin-bottom: 8px;
        border: 2px solid #17a2b8;
        border-radius: 5px;
    }
    @media screen and (max-width: 993px) {
        .resume-nav{
            position: static;
        }
        .picture{
            margin-left: auto;
            margin-right: auto;
        }
    }
</style>