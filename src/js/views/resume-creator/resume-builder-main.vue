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
                                    <employment-tab :employerInfo="employerInfo"
                                                    @add-employer1="addEmployer1"
                                                    @add-employer2="addEmployer2"
                                                    @add-employer3="addEmployer3"
                                                    @add-employer4="addEmployer4"
                                                    @add-employer5="addEmployer5" /></b-tab>

                                <b-tab title="Education" :title-link-class="activeTabBG(2)">
                                    <education-tab :educationInfo="educationInfo"
                                                   @add-education1="addEducation1"
                                                   @add-education2="addEducation2"
                                                   @add-education3="addEducation3"
                                                   @add-education4="addEducation4"
                                                   @add-education5="addEducation5" /></b-tab>
                                <b-tab title="References" :title-link-class="activeTabBG(3)">
                                    <references-tab @add-references="addReferences" />
                                </b-tab>
                            </b-tabs>
                        </div>
                    </div>
                </b-card>
            </div>
            <div class="col-lg-6">
                <live-preview :employer-info="employerInfo"
                              :education-info="educationInfo"
                              :reference-info="referenceInfo" />
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
        data(){
            return{
                tabIndex: 0,
                employerInfo: [],
                educationInfo: [],
                referenceInfo: []
            }
        },
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
            },
            addEmployer1(employer){ this.employerInfo.length === 0 ? this.employerInfo.push(employer)
                : this.employerInfo.splice(0,1,employer); },
            addEmployer2(employer){ this.employerInfo.length === 1 ? this.employerInfo.push(employer)
                : this.employerInfo.splice(1,1,employer); },
            addEmployer3(employer){ this.employerInfo.length === 2 ? this.employerInfo.push(employer)
                : this.employerInfo.splice(2,1,employer); },
            addEmployer4(employer){ this.employerInfo.length === 3 ? this.employerInfo.push(employer)
                : this.employerInfo.splice(3,1,employer); },
            addEmployer5(employer){ this.employerInfo.length === 4 ? this.employerInfo.push(employer)
                : this.employerInfo.splice(4,1,employer); },
            addEducation1(school){ this.educationInfo.length === 0 ? this.educationInfo.push(school)
                : this.educationInfo.splice(0,1,school); },
            addEducation2(school){ this.educationInfo.length === 1 ? this.educationInfo.push(school)
                : this.educationInfo.splice(1,1,school); },
            addEducation3(school){ this.educationInfo.length === 2 ? this.educationInfo.push(school)
                : this.educationInfo.splice(2,1,school); },
            addEducation4(school){ this.educationInfo.length === 3 ? this.educationInfo.push(school)
                : this.educationInfo.splice(3,1,school); },
            addEducation5(school){ this.educationInfo.length === 4 ? this.educationInfo.push(school)
                : this.educationInfo.splice(4,1,school); },
            addReferences(references){ this.referenceInfo.length === 0 ? this.referenceInfo.push(references)
                : this.referenceInfo.splice(0,1,references); },
        }
    }
</script>
<style>
    #builder{
        padding-top: 90px;
    }
</style>