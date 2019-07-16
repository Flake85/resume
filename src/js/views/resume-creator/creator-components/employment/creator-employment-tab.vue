<template>
    <b-card :bg-variant="cardBG">
        <h3 class="left_align">Employers </h3>
        <div >
            <b-tabs small v-model="tabIndex" pills>
                <b-tab :title="companyName1" :title-link-class="activeTabBG(0)">
                    <EmploymentForm1 /> </b-tab>
                <b-tab :title="companyName2" :title-link-class="activeTabBG(1)">
                    <EmploymentForm2 /> </b-tab>
                <b-tab :title="companyName3" :title-link-class="activeTabBG(2)">
                    <EmploymentForm3 /> </b-tab>
                <b-tab :title="companyName4" :title-link-class="activeTabBG(3)">
                    <EmploymentForm4 /> </b-tab>
                <b-tab :title="companyName5" :title-link-class="activeTabBG(4)">
                    <EmploymentForm5 /> </b-tab>
            </b-tabs>
        </div>
    </b-card>
</template>

<script>
    import EmploymentForm1 from "./employment-form/creator-employment-form1";
    import EmploymentForm2 from './employment-form/creator-employment-form2';
    import EmploymentForm3 from './employment-form/creator-employment-form3';
    import EmploymentForm4 from './employment-form/creator-employment-form4';
    import EmploymentForm5 from './employment-form/creator-employment-form5';
    import { mapGetters } from 'vuex';
    export default {
        name: 'employment-tab',
        components: {EmploymentForm1, EmploymentForm2, EmploymentForm3, EmploymentForm4, EmploymentForm5},
        data(){ return{ tabIndex: 0, } },
        computed: {
            ...mapGetters([ 'cardBG' ]),
            companyName1(){ return !this.$store.state.employment.company1.companyName ? 'Untitled' : this.$store.state.employment.company1.companyName },
            companyName2(){ return !this.$store.state.employment.company2.companyName ? 'Untitled' : this.$store.state.employment.company2.companyName },
            companyName3(){ return !this.$store.state.employment.company3.companyName ? 'Untitled' : this.$store.state.employment.company3.companyName },
            companyName4(){ return !this.$store.state.employment.company4.companyName ? 'Untitled' : this.$store.state.employment.company4.companyName },
            companyName5(){ return !this.$store.state.employment.company5.companyName ? 'Untitled' : this.$store.state.employment.company5.companyName },
        },
        methods: {
            activeTabBG(idx){
                if(this.tabIndex === idx && this.$store.state.darkmode.darkMode) {
                    return ['bg-secondary', 'text-light'];
                } else if (this.tabIndex === idx && !this.darkMode) {
                    return ['bg-info', 'text-light'];
                } else if (this.$store.state.darkmode.darkMode && this.tabIndex !== idx) {
                    return ['bg-dark', 'text-light']
                }
                else { return ['bg-light', 'text-dark'] }
            },
        }
    }
</script>
<style>
    .left_align {
        text-align: left;
    }
</style>