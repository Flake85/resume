<template>
    <b-card :bg-variant="secondaryCardBG" text-variant="light">
        <b-form-group label="Company:" label-cols="3" label-class="text-sm-right" label-for="f_name" label-size="sm">
            <b-form-input id="companyName" v-model="companyName" type="text" placeholder="Company Name"></b-form-input>
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
            <b-form-input id="location" v-model="location" type="text" placeholder="Company Location"></b-form-input>
        </b-form-group>

        <div id="jobTitle1">
            <b-form-group label-cols="3" label="Job Title:" label-class="text-sm-right" label-for="title" label-size="sm">
                <b-form-input id="title1" v-model="title1" type="text" placeholder="Job Title #1"></b-form-input>

                <b-form-group label-cols="3" :label="jobDutyTitle1" label-class="text-sm-right" label-size="sm">
                    <b-form-textarea v-if="titleOneTaskCount > 0" v-model="task1A" class="tasks1" type="text" rows="2" placeholder="Job Duty #1"></b-form-textarea>
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
                <b-form-text id="addTitle2"
                             text-variant="light"
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
                    <b-form-textarea v-if="title3TaskCount > 0" v-model="task13A" class="tasks3" type="text" rows="2" placeholder="Job Duty #1"></b-form-textarea>
                    <b-form-textarea v-if="title3TaskCount > 1" v-model="task13B" class="tasks3" type="text" rows="2" placeholder="Job Duty #2"></b-form-textarea>
                    <b-form-textarea v-if="title3TaskCount > 2" v-model="task13C" class="tasks3" type="text" rows="2" placeholder="Job Duty #3"></b-form-textarea>
                    <b-form-textarea v-if="title3TaskCount > 3" v-model="task13D" class="tasks3" type="text" rows="2" placeholder="Job Duty #4"></b-form-textarea>
                    <b-form-textarea v-if="title3TaskCount > 4" v-model="task13E" class="tasks3" type="text" rows="2" placeholder="Job Duty #5"></b-form-textarea>
                    <b-form-textarea v-if="title3TaskCount > 5" v-model="task13F" class="tasks3" type="text" rows="2" placeholder="Job Duty #6"></b-form-textarea>
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

        <b-btn v-if="companyName === ''" @click="updateEmployer" :variant="btnColor" btnColor>Update Employer Info</b-btn>
        <b-btn v-else @click="updateEmployer" :variant="btnColor">Update {{ companyName }}</b-btn>
    </b-card>
</template>

<script>
    import months from '../../../../modules/monthOptions'
    import years from '../../../../modules/yearOptions'
    export default {
        name: 'employment-form',
        props: {
            darkMode:{ type: Boolean, required: true }
        },
        data(){
            return{
                months,
                years,
                companyName: '',
                startMonth: '',
                startYear: '',
                endMonth: '',
                endYear: '',
                location: '',
                title1: '',
                task1A: '', task1B: '', task1C: '', task1D: '', task1E: '', task1F: '',
                title2: '',
                task2A: '', task2B: '', task2C: '', task2D: '', task2E: '', task2F: '',
                title3: '',
                task3A: '', task3B: '', task3C: '', task3D: '', task3E: '', task3F: '',
                title_count: 1,
                titleOneTaskCount: 1,
                title2TaskCount: 1,
                title3TaskCount: 1
            }
        },
        computed: {
            secondaryCardBG(){ return (this.darkMode ? "secondary" : "info") },
            btnColor(){ return (this.darkMode ? "info" : "primary") },
            jobDutyTitle1(){ return this.title1 + " Job Duties:" },
            jobDutyTitle2(){ return this.title2 + " Job Duties:" },
            jobDutyTitle3(){ return this.title3 + " Job Duties:" },
        },
        methods: {
            updateEmployer(){
                if(this.companyName !== ''){
                    this.$emit('update-employer',{
                        companyName: this.companyName,
                        startMonth: this.startMonth,
                        startYear: this.startYear,
                        endMonth: this.endMonth,
                        endYear: this.endYear,
                        location: this.location,
                        title1: this.title1,
                        title1Tasks: [ this.task1A, this.task1B, this.task1C, this.task1D, this.task1E, this.task1F ],
                        title2: this.title2,
                        title2Tasks: [ this.task2A, this.task2B, this.task2C, this.task2D, this.task2E, this.task2F ],
                        title3: this.title3,
                        title3Tasks: [ this.task3A, this.task3B, this.task3C, this.task3D, this.task3E, this.task3F ],
                    })
                } else {
                    alert("add a company name and update changes")
                }
            },
            addTitleField(){ if(this.title_count < 3) { return this.title_count++; } },
            addTitleOneTask(){ if(this.titleOneTaskCount < 6){ return this.titleOneTaskCount++; } },
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