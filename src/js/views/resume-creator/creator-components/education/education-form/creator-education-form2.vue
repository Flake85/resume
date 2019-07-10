<template>
    <b-card :bg-variant="secondaryCardBG" text-variant="light">
        <b-form-group label="School:" label-cols="3" label-class="text-sm-right" label-for="school" label-size="sm">
            <b-form-input id="schoolName" v-model="schoolName" type="text" placeholder="School Name"></b-form-input>
        </b-form-group>
        <b-form-group label="Start Month:" label-cols="3" label-class="text-sm-right" label-for="startMonth" label-size="sm">
            <b-form-select id="startMonth" :disabled="isValid" :options="months" v-model="startMonth"></b-form-select>
        </b-form-group>
        <b-form-group label="Start Year:" label-cols="3" label-class="text-sm-right" label-for="startYear" label-size="sm">
            <b-form-select id="startYear" :disabled="isValid" :options="years" v-model="startYear"></b-form-select>
        </b-form-group>
        <b-form-group label="End Month:" label-cols="3" label-class="text-sm-right" label-for="endMonth" label-size="sm">
            <b-form-select id="endMonth" :disabled="isValid" v-model="endMonth" :options="months"></b-form-select>
        </b-form-group>
        <b-form-group label="End Year:" label-cols="3" label-class="text-sm-right" label-for="endYear" label-size="sm">
            <b-form-select id="endYear" :disabled="isValid" v-model="endYear" :options="years"></b-form-select>
        </b-form-group>
        <b-form-group label="Location:" label-cols="3" label-class="text-sm-right" label-for="location" label-size="sm">
            <b-form-input id="location" :disabled="isValid" v-model="location" type="text" placeholder="School Location"></b-form-input>
        </b-form-group>

        <div id="school">
            <b-form-group label-cols="3" label="Accomplishments:" label-class="text-sm" label-for="title" label-size="sm">
                <b-form-input class="merit" v-model="merit1" :disabled="isValid" type="text" placeholder="(E.g. degree, diploma, certificate, etc)"></b-form-input>
                <b-form-input v-if="meritCount >= 2" class="merit" v-model="merit2" type="text" placeholder="(E.g. degree, diploma, certificate, etc)"></b-form-input>
                <b-form-input v-if="meritCount >= 3" class="merit" v-model="merit3" type="text" placeholder="(E.g. degree, diploma, certificate, etc)"></b-form-input>
                <b-form-input v-if="meritCount >= 4" class="merit" v-model="merit4" type="text" placeholder="(E.g. degree, diploma, certificate, etc)"></b-form-input>
                <b-form-input v-if="meritCount >= 5" class="merit" v-model="merit5" type="text" placeholder="(E.g. degree, diploma, certificate, etc)"></b-form-input>
                <b-form-input v-if="meritCount >= 6" class="merit" v-model="merit6" type="text" placeholder="(E.g. degree, diploma, certificate, etc)"></b-form-input>
                <b-form-text id="addMerit"
                             text-variant="light"
                             class="clickable"
                             @click="addMeritField"
                             v-if="meritCount < 6">
                    <i class="far fw fa-plus-square"> </i>
                    Add New Achievement
                </b-form-text>
            </b-form-group>
        </div>
    </b-card>
</template>

<script>
    import { mapGetters } from 'vuex';
    import months from '../../../../../modules/monthOptions';
    import years from '../../../../../modules/yearOptions';
    export default {
        name: 'education-form2',
        data(){
            return{
                months,
                years,
                meritCount: 1
            }
        },
        computed: {
            ...mapGetters([ 'secondaryCardBG', 'btnColor' ]),
            isValid(){ return !this.$store.state.education.school2.schoolName },
            schoolName: {
                get() { return this.$store.state.education.school2.schoolName },
                set(schoolName) { this.$store.commit('updateSchoolName2', schoolName) }
            },
            startMonth: {
                get() { return this.$store.state.education.school2.startMonth },
                set(startMonth) { this.$store.commit('updateSchoolStartMonth2', startMonth) }
            },
            startYear: {
                get() { return this.$store.state.education.school2.startYear },
                set(startYear) { this.$store.commit('updateSchoolStartYear2', startYear) }
            },
            endMonth: {
                get() { return this.$store.state.education.school2.endMonth },
                set(endMonth) { this.$store.commit('updateSchoolEndMonth2', endMonth) }
            },
            endYear: {
                get() { return this.$store.state.education.school2.endYear },
                set(endYear) { this.$store.commit('updateSchoolEndYear2', endYear) }
            },
            location: {
                get() { return this.$store.state.education.school2.location },
                set(location) { this.$store.commit('updateSchoolLocation2', location) }
            },
            merit1: {
                get() { return this.$store.state.education.school2.merit1 },
                set(merit) { this.$store.commit('updateSchoolMerit1_2', merit) }
            },
            merit2: {
                get() { return this.$store.state.education.school2.merit2 },
                set(merit) { this.$store.commit('updateSchoolMerit2_2', merit) }
            },
            merit3: {
                get() { return this.$store.state.education.school2.merit3 },
                set(merit) { this.$store.commit('updateSchoolMerit3_2', merit) }
            },
            merit4: {
                get() { return this.$store.state.education.school2.merit4 },
                set(merit) { this.$store.commit('updateSchoolMerit4_2', merit) }
            },
            merit5: {
                get() { return this.$store.state.education.school2.merit5 },
                set(merit) { this.$store.commit('updateSchoolMerit5_2', merit) }
            },
            merit6: {
                get() { return this.$store.state.education.school2.merit6 },
                set(merit) { this.$store.commit('updateSchoolMerit6_2', merit) }
            },
        },
        methods: {
            addMeritField(){
                if(this.$store.state.education.school2.schoolName === ''){
                    alert("Add a school name to do that");
                } else if(this.meritCount < 6) {
                    return this.meritCount++;
                }
            },
        }
    }
</script>
<style>
    .merit{
        margin-top: 8px;
    }
</style>