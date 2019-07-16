<template>
    <div id="builder" class="container-fluid">
        <div class="row">
            <div class="col-lg-6">
                <h1 class="text-center headerFont">Form</h1>
                <b-card border-variant="dark"
                        header-bg-variant="info"
                        header-text-variant="white"
                        header-text="Preview"
                        class="card resume-card"
                        bg-variant="info">
                    <div :class="cardText">
                        <div>
                            <b-tabs small v-model="tabIndex" pills>
                                <b-tab title="Contact" :title-link-class="activeTabBG(0)">
                                    <contact-tab /></b-tab>
                                <b-tab title="Employment" :title-link-class="activeTabBG(1)">
                                    <employment-tab /></b-tab>
                                <b-tab title="Education" :title-link-class="activeTabBG(2)">
                                    <education-tab /></b-tab>
                                <b-tab title="References" :title-link-class="activeTabBG(3)">
                                    <references-tab />
                                </b-tab>
                            </b-tabs>
                        </div>
                    </div>
                </b-card>
            </div>
            <div class="col-lg-6">
                <live-preview />
            </div>
        </div>
    </div>
</template>

<script>
    import ContactTab from "./creator-components/contact/creator-contact-tab";
    import LivePreview from "./creator-preview/preview-main";
    import EmploymentTab from "./creator-components/employment/creator-employment-tab";
    import EducationTab from "./creator-components/education/creator-education-tab";
    import ReferencesTab from "./creator-components/references/creator-references-tab";
    import { mapGetters } from 'vuex';
    export default {
        name: 'builder',
        components: {ReferencesTab, EducationTab, EmploymentTab, LivePreview, ContactTab},
        data(){ return{ tabIndex: 0, } },
        computed: {
            ...mapGetters([ 'cardText', 'cardBG'])
        },
        methods: {
            activeTabBG(idx){
                if(this.tabIndex === idx && this.$store.state.darkmode.darkMode) {
                    return ['bg-dark', 'text-light'];
                } else if (this.tabIndex === idx && !this.$store.state.darkmode.darkMode) {
                    return ['bg-light', 'text-dark'];
                } else { return ['bg-info', 'text-light'] }
            }
        }
    }
</script>
<style>
    #builder{
        padding-top: 90px;
    }
</style>