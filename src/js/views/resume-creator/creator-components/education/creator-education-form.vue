<template>
    <b-card :bg-variant="secondaryCardBG" text-variant="light">
        <b-form-group label="School:" label-cols="3" label-class="text-sm-right" label-for="school" label-size="sm">
            <b-form-input id="schoolName" v-model="schoolName" type="text" placeholder="School Name"></b-form-input>
        </b-form-group>
        <b-form-group label="Start Month:" label-cols="3" label-class="text-sm-right" label-for="startDate" label-size="sm">
            <b-form-select id="startMonth" :options="months" v-model="startMonth"></b-form-select>
        </b-form-group>
        <b-form-group label="Start Year:" label-cols="3" label-class="text-sm-right" label-for="startYear" label-size="sm">
            <b-form-select id="startYear" :options="years" v-model="startYear"></b-form-select>
        </b-form-group>
        <b-form-group label="End Month:" label-cols="3" label-class="text-sm-right" label-for="endMonth" label-size="sm">
            <b-form-select id="endMonth" v-model="endMonth" :options="months"></b-form-select>
        </b-form-group>
        <b-form-group label="End Year:" label-cols="3" label-class="text-sm-right" label-for="endYear" label-size="sm">
            <b-form-select id="endYear" v-model="endYear" :options="years"></b-form-select>
        </b-form-group>
        <b-form-group label="Location:" label-cols="3" label-class="text-sm-right" label-for="location" label-size="sm">
            <b-form-input id="location" v-model="location" type="text" placeholder="School Location"></b-form-input>
        </b-form-group>

        <div id="school">
            <b-form-group label-cols="3" label="Accomplishments:" label-class="text-sm" label-for="title" label-size="sm">
                <b-form-input class="merit" v-model="merit1" type="text" placeholder="(E.g. degree, diploma, certificate, etc)"></b-form-input>
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
        <b-btn v-if="schoolName === ''" @click="updateEducation" :variant="btnColor" btnColor>Update School Info</b-btn>
        <b-btn v-else @click="updateEducation" :variant="btnColor">Update {{ schoolName }}</b-btn>
    </b-card>
</template>

<script>
    import { mapGetters } from 'vuex';
    import months from '../../../../modules/monthOptions';
    import years from '../../../../modules/yearOptions';
    export default {
        name: 'education-form',
        data(){
            return{
                months,
                years,
                schoolName: '',
                startMonth: '',
                startYear: '',
                endMonth: '',
                endYear: '',
                location: '',
                merit1: '', merit2: '', merit3: '', merit4: '', merit5: '', merit6: '',
                meritCount: 1
            }
        },
        computed: {
            ...mapGetters([ 'secondaryCardBG', 'btnColor' ]),
        },
        methods: {
            updateEducation(){
                if(this.schoolName !== ''){
                    this.$emit('update-education',{
                        schoolName: this.schoolName,
                        startMonth: this.startMonth,
                        startYear: this.startYear,
                        endMonth: this.endMonth,
                        endYear: this.endYear,
                        location: this.location,
                        merits: [ this.merit1, this.merit2, this.merit3, this.merit4, this.merit5, this.merit6 ]
                    })
                } else {
                    alert("add a school name and update changes")
                }
            },
            addMeritField(){ if(this.meritCount < 6) { return this.meritCount++; } },
        }
    }
</script>
<style>
    .merit{
        margin-top: 8px;
    }
</style>