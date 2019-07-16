<template>
    <b-card :bg-variant="secondaryCardBG" text-variant="light">
        <b-form-group label="Company:" label-cols="3" label-class="text-sm-right" label-for="f_name" label-size="sm">
            <b-form-input id="companyName" v-model="companyName" type="text" placeholder="Company Name"></b-form-input>
        </b-form-group>
        <b-form-group label="Start Month:" label-cols="3" label-class="text-sm-right" label-for="startDate" label-size="sm">
            <b-form-select :disabled="isValid" id="startMonth" :options="months" v-model="startMonth"></b-form-select>
        </b-form-group>
        <b-form-group label="Start Year:" label-cols="3" label-class="text-sm-right" label-for="startYear" label-size="sm">
            <b-form-select :disabled="isValid" id="startYear" :options="years" v-model="startYear"></b-form-select>
        </b-form-group>
        <b-form-group label="End Month:" label-cols="3" label-class="text-sm-right" label-for="endMonth" label-size="sm">
            <b-form-select :disabled="isValid" id="endMonth" v-model="endMonth" :options="months"></b-form-select>
        </b-form-group>
        <b-form-group label="End Year:" label-cols="3" label-class="text-sm-right" label-for="endYear" label-size="sm">
            <b-form-select :disabled="isValid" id="endYear" v-model="endYear" :options="years"></b-form-select>
        </b-form-group>
        <b-form-group label="Location:" label-cols="3" label-class="text-sm-right" label-for="location" label-size="sm">
            <b-form-input :disabled="isValid" id="location" v-model="location" type="text" placeholder="Company Location"></b-form-input>
        </b-form-group>

        <div id="jobTitle1">
            <b-form-group label-cols="3" label="Job Title:" label-class="text-sm-right" label-for="title" label-size="sm">
                <b-form-input :disabled="isValid" id="title1" v-model="title1" type="text" placeholder="Job Title #1"></b-form-input>

                <b-form-group label-cols="3" :label="jobDutyTitle1" label-class="text-sm-right" label-size="sm">
                    <b-form-textarea :disabled="isValid" v-if="titleOneTaskCount > 0" v-model="task1A" class="tasks1" type="text" rows="2" placeholder="Job Duty #1"></b-form-textarea>
                    <b-form-textarea v-if="titleOneTaskCount > 1" v-model="task1B" class="tasks1" type="text" rows="2" placeholder="Job Duty #2"></b-form-textarea>
                    <b-form-textarea v-if="titleOneTaskCount > 2" v-model="task1C" class="tasks1" type="text" rows="2" placeholder="Job Duty #3"></b-form-textarea>
                    <b-form-textarea v-if="titleOneTaskCount > 3" v-model="task1D" class="tasks1" type="text" rows="2" placeholder="Job Duty #4"></b-form-textarea>
                    <b-form-textarea v-if="titleOneTaskCount > 4" v-model="task1E" class="tasks1" type="text" rows="2" placeholder="Job Duty #5"></b-form-textarea>
                    <b-form-textarea v-if="titleOneTaskCount > 5" v-model="task1F" class="tasks1" type="text" rows="2" placeholder="Job Duty #6"></b-form-textarea>
                    <b-form-text id="addTask1"
                                 text-variant="light"
                                 class="clickable"
                                 @click="addTitleOneTask"
                                 v-if="titleOneTaskCount < 6">
                        <i class="far fw fa-plus-square"> </i>
                        Add New Job Duty
                    </b-form-text>
                </b-form-group>
                <b-form-text id="addTitle1"
                             text-variant="light"
                             class="clickable"
                             @click="addTitleField"
                             v-if="title_count < 2">
                    <i class="far fw fa-plus-square"> </i>
                    Add New Job Title
                </b-form-text>
            </b-form-group>
        </div>

        <div id="jobTitle2" v-if="title_count >= 2">
            <b-form-group label-for="title2" label-cols="3" label="Job Title:" label-class="text-sm-right" label-size="sm">
                <b-form-input id="title2" v-model="title2" type="text" placeholder="Job Title #2"></b-form-input>
                <b-form-group label-for="tasks2" label-cols="3" :label="jobDutyTitle2" label-class="text-sm-right" label-size="sm">
                    <b-form-textarea v-if="title2TaskCount > 0" v-model="task2A" class="tasks2" type="text" rows="2" placeholder="Job Duty #1"></b-form-textarea>
                    <b-form-textarea v-if="title2TaskCount > 1" v-model="task2B" class="tasks2" type="text" rows="2" placeholder="Job Duty #2"></b-form-textarea>
                    <b-form-textarea v-if="title2TaskCount > 2" v-model="task2C" class="tasks2" type="text" rows="2" placeholder="Job Duty #3"></b-form-textarea>
                    <b-form-textarea v-if="title2TaskCount > 3" v-model="task2D" class="tasks2" type="text" rows="2" placeholder="Job Duty #4"></b-form-textarea>
                    <b-form-textarea v-if="title2TaskCount > 4" v-model="task2E" class="tasks2" type="text" rows="2" placeholder="Job Duty #5"></b-form-textarea>
                    <b-form-textarea v-if="title2TaskCount > 5" v-model="task2F" class="tasks2" type="text" rows="2" placeholder="Job Duty #6"></b-form-textarea>
                    <b-form-text id="addTask2"
                                 text-variant="light"
                                 class="clickable"
                                 @click="addTitle2Task" v-if="title2TaskCount < 6">
                        <i class="far fw fa-plus-square"> </i>
                        Add New Job Duty
                    </b-form-text>
                </b-form-group>
                <b-form-text id="addTitle2" text-variant="light"
                             class="clickable" @click="addTitleField" v-if="title_count < 3">
                    <i class="far fw fa-plus-square"> </i>
                    Add New Job Title
                </b-form-text>
            </b-form-group>
        </div>

        <div id="jobTitle3" v-if="title_count >= 3">
            <b-form-group label-cols="3" label="Job Title:" label-class="text-sm-right" label-for="title" label-size="sm">
                <b-form-input id="title3" v-model="title3" type="text" placeholder="Job Title #3"></b-form-input>

                <b-form-group label-cols="3" :label="jobDutyTitle3" label-class="text-sm-right" label-size="sm">
                    <b-form-textarea v-if="title3TaskCount > 0" v-model="task3A" class="tasks3" type="text" rows="2" placeholder="Job Duty #1"></b-form-textarea>
                    <b-form-textarea v-if="title3TaskCount > 1" v-model="task3B" class="tasks3" type="text" rows="2" placeholder="Job Duty #2"></b-form-textarea>
                    <b-form-textarea v-if="title3TaskCount > 2" v-model="task3C" class="tasks3" type="text" rows="2" placeholder="Job Duty #3"></b-form-textarea>
                    <b-form-textarea v-if="title3TaskCount > 3" v-model="task3D" class="tasks3" type="text" rows="2" placeholder="Job Duty #4"></b-form-textarea>
                    <b-form-textarea v-if="title3TaskCount > 4" v-model="task3E" class="tasks3" type="text" rows="2" placeholder="Job Duty #5"></b-form-textarea>
                    <b-form-textarea v-if="title3TaskCount > 5" v-model="task3F" class="tasks3" type="text" rows="2" placeholder="Job Duty #6"></b-form-textarea>
                    <b-form-text id="addTask3"
                                 text-variant="light"
                                 class="clickable"
                                 @click="addTitle3Task"
                                 v-if="title3TaskCount < 6">
                        <i class="far fw fa-plus-square"> </i>
                        Add New Job Duty
                    </b-form-text>
                </b-form-group>
                <b-form-text id="addTitle3"
                             text-variant="light"
                             class="clickable"
                             @click="addTitleField"
                             v-if="title_count < 3">
                    <i class="far fw fa-plus-square"> </i>
                    Add New Job Title
                </b-form-text>
            </b-form-group>
        </div>
    </b-card>
</template>

<script>
    import months from '../../../../../modules/monthOptions';
    import years from '../../../../../modules/yearOptions';
    import { mapGetters } from 'vuex';
    export default {
        name: 'employment-form',
        data(){
            return{
                months,
                years,
                title_count: 1,
                titleOneTaskCount: 1,
                title2TaskCount: 1,
                title3TaskCount: 1
            }
        },
        computed: {
            ...mapGetters([ 'secondaryCardBG', 'btnColor' ]),
            jobDutyTitle1(){ return this.title1 + " Job Duties:" },
            jobDutyTitle2(){ return this.title2 + " Job Duties:" },
            jobDutyTitle3(){ return this.title3 + " Job Duties:" },
            isValid(){ return !this.$store.state.employment.company5.companyName },
            companyName: {
                get() { return this.$store.state.employment.company5.companyName },
                set(companyName) { this.$store.commit('updateCompanyName5', companyName) }
            },
            startMonth: {
                get() { return this.$store.state.employment.company5.startMonth },
                set(startMonth) { this.$store.commit('updateCompanyStartMonth5', startMonth) }
            },
            startYear: {
                get() { return this.$store.state.employment.company5.startYear },
                set(startYear) { this.$store.commit('updateCompanyStartYear5', startYear) }
            },
            endMonth: {
                get() { return this.$store.state.employment.company5.endMonth },
                set(endMonth) { this.$store.commit('updateCompanyEndMonth5', endMonth) }
            },
            endYear: {
                get() { return this.$store.state.employment.company5.endYear },
                set(endYear) { this.$store.commit('updateCompanyEndYear5', endYear) }
            },
            location: {
                get() { return this.$store.state.employment.company5.location },
                set(location) { this.$store.commit('updateCompanyLocation5', location) }
            },
            title1: {
                get() { return this.$store.state.employment.company5.title1 },
                set(title1) { this.$store.commit('updateCompanyTitle1_5', title1) }
            },
            task1A: {
                get() { return this.$store.state.employment.company5.task1A },
                set(task) { this.$store.commit('updateCompanyTask1A_5', task) }
            },
            task1B: {
                get() { return this.$store.state.employment.company5.task1B },
                set(task) { this.$store.commit('updateCompanyTask1B_5', task) }
            },
            task1C: {
                get() { return this.$store.state.employment.company5.task1C },
                set(task) { this.$store.commit('updateCompanyTask1C_5', task) }
            },
            task1D: {
                get() { return this.$store.state.employment.company5.task1D },
                set(task) { this.$store.commit('updateCompanyTask1D_5', task) }
            },
            task1E: {
                get() { return this.$store.state.employment.company5.task1E },
                set(task) { this.$store.commit('updateCompanyTask1E_5', task) }
            },
            task1F: {
                get() { return this.$store.state.employment.company5.task1F },
                set(task) { this.$store.commit('updateCompanyTask1F_5', task) }
            },
            title2: {
                get() { return this.$store.state.employment.company5.title2 },
                set(title) { this.$store.commit('updateCompanyTitle2_5', title) }
            },
            task2A: {
                get() { return this.$store.state.employment.company5.task2A },
                set(task) { this.$store.commit('updateCompanyTask2A_5', task) }
            },
            task2B: {
                get() { return this.$store.state.employment.company5.task2B },
                set(task) { this.$store.commit('updateCompanyTask2B_5', task) }
            },
            task2C: {
                get() { return this.$store.state.employment.company5.task2C },
                set(task) { this.$store.commit('updateCompanyTask2C_5', task) }
            },
            task2D: {
                get() { return this.$store.state.employment.company5.task2D },
                set(task) { this.$store.commit('updateCompanyTask2D_5', task) }
            },
            task2E: {
                get() { return this.$store.state.employment.company5.task2E },
                set(task) { this.$store.commit('updateCompanyTask2E_5', task) }
            },
            task2F: {
                get() { return this.$store.state.employment.company5.task2F },
                set(task) { this.$store.commit('updateCompanyTask2F_5', task) }
            },
            title3: {
                get() { return this.$store.state.employment.company5.title3 },
                set(title) { this.$store.commit('updateCompanyTitle3_5', title) }
            },
            task3A: {
                get() { return this.$store.state.employment.company5.task3A },
                set(task) { this.$store.commit('updateCompanyTask3A_5', task) }
            },
            task3B: {
                get() { return this.$store.state.employment.company5.task3B },
                set(task) { this.$store.commit('updateCompanyTask3B_5', task) }
            },
            task3C: {
                get() { return this.$store.state.employment.company5.task3C },
                set(task) { this.$store.commit('updateCompanyTask3C_5', task) }
            },
            task3D: {
                get() { return this.$store.state.employment.company5.task3D },
                set(task) { this.$store.commit('updateCompanyTask3D_5', task) }
            },
            task3E: {
                get() { return this.$store.state.employment.company5.task3E },
                set(task) { this.$store.commit('updateCompanyTask3E_5', task) }
            },
            task3F: {
                get() { return this.$store.state.employment.company5.task3F },
                set(task) { this.$store.commit('updateCompanyTask3F_5', task) }
            },
        },
        methods: {
            addTitleField(){
                if(!this.$store.state.employment.company2.companyName){
                    alert("Add company name first!")
                } else if(this.title_count < 3) {
                    return this.title_count++;
                }
            },
            addTitleOneTask(){
                if(!this.$store.state.employment.company2.companyName){
                    alert("Add company name first!")
                } else if(this.titleOneTaskCount < 6){
                    return this.titleOneTaskCount++;
                }
            },
            addTitle2Task(){ if(this.title2TaskCount < 6){ return this.title2TaskCount++; } },
            addTitle3Task(){ if(this.title3TaskCount < 6){ return this.title3TaskCount++; } }

        }
    }
</script>
<style>
    .tasks1, .tasks2, .tasks3{
        margin-top: 8px;
    }
</style>