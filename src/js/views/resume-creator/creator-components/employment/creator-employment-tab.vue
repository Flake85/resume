<template>
    <b-card :bg-variant="cardBG">
        <h3 align="left">Employers </h3>
        <p align="left"> ({{ employerCount }} Remaining)</p>
        <div >
            <b-tabs small v-model="tabIndex" pills>
                <b-tab :title="companyName1" :title-link-class="activeTabBG(0)">
                    <EmploymentForm :dark-mode="darkMode" @update-employer="addEmployer1Info" /> </b-tab>
                <b-tab v-if="companyName1 !== 'Untitled'" :title="companyName2" :title-link-class="activeTabBG(1)">
                    <EmploymentForm :dark-mode="darkMode" @update-employer="addEmployer2Info"/> </b-tab>
                <b-tab v-if="companyName2 !== 'Untitled'" :title="companyName3" :title-link-class="activeTabBG(2)">
                    <EmploymentForm :dark-mode="darkMode" @update-employer="addEmployer3Info"/> </b-tab>
                <b-tab v-if="companyName3 !== 'Untitled'" :title="companyName4" :title-link-class="activeTabBG(3)">
                    <EmploymentForm :dark-mode="darkMode" @update-employer="addEmployer4Info"/> </b-tab>
                <b-tab v-if="companyName4 !== 'Untitled'" :title="companyName5" :title-link-class="activeTabBG(4)">
                    <EmploymentForm :dark-mode="darkMode" @update-employer="addEmployer5Info"/> </b-tab>
            </b-tabs>
        </div>
    </b-card>
</template>

<script>
    import EmploymentForm from "./creator-employment-form";

    export default {
        name: 'employment-tab',
        components: {EmploymentForm},
        props: {
            darkMode: { type: Boolean, required: true },
            employerInfo: { type: Array, required: true }
        },
        data(){
            return{
                tabIndex: 0,
                companyName1: 'Untitled',
                companyName2: 'Untitled',
                companyName3: 'Untitled',
                companyName4: 'Untitled',
                companyName5: 'Untitled'
            }
        },
        computed: {
            cardBG(){ return (this.darkMode ? "dark" : "light"); },
            employerCount(){ return 5 - this.employerInfo.length } },
        methods: {
            activeTabBG(idx){
                if(this.tabIndex === idx && this.darkMode) {
                    return ['bg-secondary', 'text-light'];
                } else if (this.tabIndex === idx && !this.darkMode) {
                    return ['bg-info', 'text-light'];
                } else if (this.darkMode && this.tabIndex !== idx) {
                    return ['bg-dark', 'text-light']
                }
                else { return ['bg-light', 'text-dark'] }
            },
            addEmployer1Info(employer){
                this.$emit('add-employer1', employer);
                this.companyName1 = employer.companyName;
            },
            addEmployer2Info(employer){
                this.$emit('add-employer2', employer);
                this.companyName2 = employer.companyName;
            },
            addEmployer3Info(employer){
                this.$emit('add-employer3', employer);
                this.companyName3 = employer.companyName;
            },
            addEmployer4Info(employer){
                this.$emit('add-employer4', employer);
                this.companyName4 = employer.companyName;
            },
            addEmployer5Info(employer){
                this.$emit('add-employer5', employer);
                this.companyName5 = employer.companyName;
            },

        }
    }
</script>