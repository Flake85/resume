<template>
    <b-card :bg-variant="cardBG">
        <h3 class="left_align">Education </h3>
        <p class="left_align"> ({{ schoolCount }} Remaining)</p>
        <div >
            <b-tabs small v-model="tabIndex" pills>
                <b-tab :title="schoolName1" :title-link-class="activeTabBG(0)">
                    <EducationForm @update-education="addEducation1Info" /> </b-tab>
                <b-tab v-if="schoolName1 !== 'Untitled'" :title="schoolName2" :title-link-class="activeTabBG(1)">
                    <EducationForm @update-education="addEducation2Info"/> </b-tab>
                <b-tab v-if="schoolName2 !== 'Untitled'" :title="schoolName3" :title-link-class="activeTabBG(2)">
                    <EducationForm @update-education="addEducation3Info"/> </b-tab>
                <b-tab v-if="schoolName3 !== 'Untitled'" :title="schoolName4" :title-link-class="activeTabBG(3)">
                    <EducationForm @update-education="addEducation4Info"/> </b-tab>
                <b-tab v-if="schoolName4 !== 'Untitled'" :title="schoolName5" :title-link-class="activeTabBG(4)">
                    <EducationForm @update-education="addEducation5Info"/> </b-tab>
            </b-tabs>
        </div>
    </b-card>
</template>

<script>
    import EducationForm from './creator-education-form';
    import { mapGetters } from 'vuex';
    export default {
        name: 'education-tab',
        components: {EducationForm},
        props: {
            educationInfo: { type: Array, required: true }
        },
        data(){
            return{
                tabIndex: 0,
                schoolName1: 'Untitled',
                schoolName2: 'Untitled',
                schoolName3: 'Untitled',
                schoolName4: 'Untitled',
                schoolName5: 'Untitled'
            }
        },
        computed: {
            ...mapGetters([ 'cardBG' ]),
            schoolCount(){ return 6 - this.educationInfo.length }
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
            },
            addEducation1Info(school){
                this.$emit('add-education1', school);
                this.schoolName1 = school.schoolName;
            },
            addEducation2Info(school){
                this.$emit('add-education2', school);
                this.schoolName2 = school.schoolName;
            },
            addEducation3Info(school){
                this.$emit('add-education3', school);
                this.schoolName3 = school.schoolName;
            },
            addEducation4Info(school){
                this.$emit('add-education4', school);
                this.schoolName4 = school.schoolName;
            },
            addEducation5Info(school){
                this.$emit('add-education5', school);
                this.schoolName5 = school.schoolName;
            },

        }
    }
</script>

<style>
    .left_align {
        text-align: left;
    }
</style>