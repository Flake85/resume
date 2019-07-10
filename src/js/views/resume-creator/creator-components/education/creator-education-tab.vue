<template>
    <b-card :bg-variant="cardBG">
        <h3 class="left_align">Education </h3>
        <div >
            <b-tabs small v-model="tabIndex" pills>
                <b-tab :title="schoolName1" :title-link-class="activeTabBG(0)">
                    <EducationForm1  /> </b-tab>
                <b-tab :title="schoolName2" :title-link-class="activeTabBG(1)">
                    <EducationForm2 /> </b-tab>
                <b-tab :title="schoolName3" :title-link-class="activeTabBG(2)">
                    <EducationForm3 /> </b-tab>
                <b-tab :title="schoolName4" :title-link-class="activeTabBG(3)">
                    <EducationForm4 /> </b-tab>
                <b-tab :title="schoolName5" :title-link-class="activeTabBG(4)">
                    <EducationForm5 /> </b-tab>
            </b-tabs>
        </div>
    </b-card>
</template>

<script>
    import EducationForm1 from './education-form/creator-education-form1';
    import EducationForm2 from './education-form/creator-education-form2';
    import EducationForm3 from './education-form/creator-education-form3';
    import EducationForm4 from './education-form/creator-education-form4';
    import EducationForm5 from './education-form/creator-education-form5';
    import { mapGetters } from 'vuex';
    export default {
        name: 'education-tab',
        components: {EducationForm1, EducationForm2, EducationForm3, EducationForm4, EducationForm5},
        data(){ return{ tabIndex: 0, } },
        computed: {
            ...mapGetters([ 'cardBG' ]),
            schoolName1(){
                return !this.$store.state.education.school1.schoolName ? 'Untitled' : this.$store.state.education.school1.schoolName
            },
            schoolName2(){
                return !this.$store.state.education.school2.schoolName ? 'Untitled' : this.$store.state.education.school2.schoolName
            },
            schoolName3(){
                return !this.$store.state.education.school3.schoolName ? 'Untitled' : this.$store.state.education.school3.schoolName
            },
            schoolName4(){
                return !this.$store.state.education.school4.schoolName ? 'Untitled' : this.$store.state.education.school4.schoolName
            },
            schoolName5(){
                return !this.$store.state.education.school5.schoolName ? 'Untitled' : this.$store.state.education.school5.schoolName
            }
        },
        methods: {
            activeTabBG(idx){
                if(this.tabIndex === idx && this.$store.state.darkmode.darkMode) {
                    return ['bg-secondary', 'text-light'];
                } else if (this.tabIndex === idx && !this.$store.state.darkmode.darkMode) {
                    return ['bg-info', 'text-light'];
                } else if (this.$store.state.darkmode.darkMode && this.tabIndex !== idx) {
                    return ['bg-dark', 'text-light']
                }
                else { return ['bg-light', 'text-dark'] }
            }

        }
    }
</script>

<style>
    .left_align {
        text-align: left;
    }
</style>