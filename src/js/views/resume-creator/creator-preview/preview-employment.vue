<template>
    <div id="preview-employment" v-if="companyName1 || companyName2 || companyName3 || companyName4 || companyName5">
        <hr class="previewHR">
        <h3 class="headerFont">
        <i class="fas fa-tasks"></i><br>Employment History</h3><br>
        <div class="row">
            <div class="col-4">
                <div class="container row">
                    <p v-if="startMonth1 && startYear1">
                        <strong>{{startMonth1}}/{{startYear1}}</strong></p>
                    <p v-else><strong>{{startMonth1}}{{startYear1}}</strong></p>
                    <p v-if="date1Filled"><strong> - </strong></p>
                    <p v-if="endMonth1 && endYear1">
                        <strong>{{endMonth1}}/{{endYear1}}</strong></p>
                    <p v-else><strong>{{endMonth1}}{{endYear1}}</strong></p>
                </div>
            </div>
            <h3 class="col-4"><strong>{{ companyName1 }}</strong></h3>
            <p class="col-4"><strong>{{ location1 }}</strong></p>
        </div>
        <div class="row">
            <h5><em>{{ title1_1 }}</em></h5>
        </div>
        <div class="row">
            <b-card-body align="left">
                <ul>
                    <li v-if="task1A_1">{{ task1A_1 }}</li>
                    <li v-if="task1B_1">{{ task1B_1 }}</li>
                    <li v-if="task1C_1">{{ task1C_1 }}</li>
                    <li v-if="task1D_1">{{ task1D_1 }}</li>
                    <li v-if="task1E_1">{{ task1E_1 }}</li>
                    <li v-if="task1F_1">{{ task1F_1 }}</li>
                </ul>
            </b-card-body>
        </div>
        <div class="row">
            <h5><em>{{ title2_1 }}</em></h5>
        </div>
        <div class="row">
            <b-card-body align="left">
                <ul>
                    <li v-if="task2A_1">{{ task2A_1 }}</li>
                    <li v-if="task2B_1">{{ task2B_1 }}</li>
                    <li v-if="task2C_1">{{ task2C_1 }}</li>
                    <li v-if="task2D_1">{{ task2D_1 }}</li>
                    <li v-if="task2E_1">{{ task2E_1 }}</li>
                    <li v-if="task2F_1">{{ task2F_1 }}</li>
                </ul>
            </b-card-body>
        </div>
        <div class="row">
            <h5 v-if="title3_1"><em>{{ title3_1 }}</em></h5>
        </div>
        <div class="row">
            <b-card-body align="left">
                <ul>
                    <li v-if="task3A_1">{{ task3A_1 }}</li>
                    <li v-if="task3B_1">{{ task3B_1 }}</li>
                    <li v-if="task3C_1">{{ task3C_1 }}</li>
                    <li v-if="task3D_1">{{ task3D_1 }}</li>
                    <li v-if="task3E_1">{{ task3E_1 }}</li>
                    <li v-if="task3F_1">{{ task3F_1 }}</li>
                </ul>
            </b-card-body>
        </div>
<!--company 2-->
        <div class="row">
            <div class="col-4">
                <div class="container row">
                    <p v-if="startMonth2 && startYear2">
                        <strong>{{startMonth2}}/{{startYear2}}</strong></p>
                    <p v-else><strong>{{startMonth2}}{{startYear2}}</strong></p>
                    <p v-if="date2Filled"><strong> - </strong></p>
                    <p v-if="endMonth2 && endYear2">
                        <strong>{{endMonth2}}/{{endYear2}}</strong></p>
                    <p v-else><strong>{{endMonth2}}{{endYear2}}</strong></p>
                </div>
            </div>
            <h3 class="col-4"><strong>{{ companyName2 }}</strong></h3>
            <p class="col-4"><strong>{{ location2 }}</strong></p>
        </div>
        <div class="row">
            <h5 v-if="title1_2"><em>{{ title1_2 }}</em></h5>
        </div>
        <div class="row">
            <b-card-body align="left">
                <ul>
                    <li v-if="task1A_2">{{ task1A_2 }}</li>
                    <li v-if="task1B_2">{{ task1B_2 }}</li>
                    <li v-if="task1C_2">{{ task1C_2 }}</li>
                    <li v-if="task1D_2">{{ task1D_2 }}</li>
                    <li v-if="task1E_2">{{ task1E_2 }}</li>
                    <li v-if="task1F_2">{{ task1F_2 }}</li>
                </ul>
            </b-card-body>
        </div>
        <div class="row">
            <h5 v-if="title2_2"><em>{{ title2_2 }}</em></h5>
        </div>
        <div class="row">
            <b-card-body align="left">
                <ul>
                    <li v-if="task2A_2">{{ task2A_2 }}</li>
                    <li v-if="task2B_2">{{ task2B_2 }}</li>
                    <li v-if="task2C_2">{{ task2C_2 }}</li>
                    <li v-if="task2D_2">{{ task2D_2 }}</li>
                    <li v-if="task2E_2">{{ task2E_2 }}</li>
                    <li v-if="task2F_2">{{ task2F_2 }}</li>
                </ul>
            </b-card-body>
        </div>
        <div class="row">
            <h5 v-if="title3_2"><em>{{ title3_2 }}</em></h5>
        </div>
        <div class="row">
            <b-card-body align="left">
                <ul>
                    <li v-if="task3A_2">{{ task3A_2 }}</li>
                    <li v-if="task3B_2">{{ task3B_2 }}</li>
                    <li v-if="task3C_2">{{ task3C_2 }}</li>
                    <li v-if="task3D_2">{{ task3D_2 }}</li>
                    <li v-if="task3E_2">{{ task3E_2 }}</li>
                    <li v-if="task3F_2">{{ task3F_2 }}</li>
                </ul>
            </b-card-body>
        </div>
<!--company 3-->
        <div class="row">
            <div class="col-4">
                <div class="container row">
                    <p v-if="startMonth3 && startYear3">
                        <strong>{{startMonth3}}/{{startYear3}}</strong></p>
                    <p v-else><strong>{{startMonth3}}{{startYear3}}</strong></p>
                    <p v-if="date3Filled"><strong> - </strong></p>
                    <p v-if="endMonth3 && endYear3">
                        <strong>{{endMonth3}}/{{endYear3}}</strong></p>
                    <p v-else><strong>{{endMonth3}}{{endYear3}}</strong></p>
                </div>
            </div>
            <h3 class="col-4"><strong>{{ companyName3 }}</strong></h3>
            <p class="col-4"><strong>{{ location3 }}</strong></p>
        </div>
        <div class="row">
            <h5><em>{{ title1_3 }}</em></h5>
        </div>
        <div class="row">
            <b-card-body align="left">
                <ul>
                    <li v-if="task1A_3">{{ task1A_3 }}</li>
                    <li v-if="task1B_3">{{ task1B_3 }}</li>
                    <li v-if="task1C_3">{{ task1C_3 }}</li>
                    <li v-if="task1D_3">{{ task1D_3 }}</li>
                    <li v-if="task1E_3">{{ task1E_3 }}</li>
                    <li v-if="task1F_3">{{ task1F_3 }}</li>
                </ul>
            </b-card-body>
        </div>
        <div class="row">
            <h5><em>{{ title2_3 }}</em></h5>
        </div>
        <div class="row">
            <b-card-body align="left">
                <ul>
                    <li v-if="task2A_3">{{ task2A_3 }}</li>
                    <li v-if="task2B_3">{{ task2B_3 }}</li>
                    <li v-if="task2C_3">{{ task2C_3 }}</li>
                    <li v-if="task2D_3">{{ task2D_3 }}</li>
                    <li v-if="task2E_3">{{ task2E_3 }}</li>
                    <li v-if="task2F_3">{{ task2F_3 }}</li>
                </ul>
            </b-card-body>
        </div>
        <div class="row">
            <h5><em>{{ title3_3 }}</em></h5>
        </div>
        <div class="row">
            <b-card-body align="left">
                <ul>
                    <li v-if="task3A_3">{{ task3A_3 }}</li>
                    <li v-if="task3B_3">{{ task3B_3 }}</li>
                    <li v-if="task3C_3">{{ task3C_3 }}</li>
                    <li v-if="task3D_3">{{ task3D_3 }}</li>
                    <li v-if="task3E_3">{{ task3E_3 }}</li>
                    <li v-if="task3F_3">{{ task3F_3 }}</li>
                </ul>
            </b-card-body>
        </div>
<!--        Company 4-->
        <div class="row">
            <div class="col-4">
                <div class="container row">
                    <p v-if="startMonth4 && startYear4">
                        <strong>{{startMonth4}}/{{startYear4}}</strong></p>
                    <p v-else><strong>{{startMonth4}}{{startYear4}}</strong></p>
                    <p v-if="date4Filled"><strong> - </strong></p>
                    <p v-if="endMonth4 && endYear4">
                        <strong>{{endMonth4}}/{{endYear4}}</strong></p>
                    <p v-else><strong>{{endMonth4}}{{endYear4}}</strong></p>
                </div>
            </div>
            <h3 class="col-4"><strong>{{ companyName4 }}</strong></h3>
            <p class="col-4"><strong>{{ location4 }}</strong></p>
        </div>
        <div class="row">
            <h5 v-if="title1_4"><em>{{ title1_4 }}</em></h5>
        </div>
        <div class="row">
            <b-card-body align="left">
                <ul>
                    <li v-if="task1A_4">{{ task1A_4 }}</li>
                    <li v-if="task1B_4">{{ task1B_4 }}</li>
                    <li v-if="task1C_4">{{ task1C_4 }}</li>
                    <li v-if="task1D_4">{{ task1D_4 }}</li>
                    <li v-if="task1E_4">{{ task1E_4 }}</li>
                    <li v-if="task1F_4">{{ task1F_4 }}</li>
                </ul>
            </b-card-body>
        </div>
        <div class="row">
            <h5 v-if="title2_2"><em>{{ title2_4 }}</em></h5>
        </div>
        <div class="row">
            <b-card-body align="left">
                <ul>
                    <li v-if="task2A_4">{{ task2A_4 }}</li>
                    <li v-if="task2B_4">{{ task2B_4 }}</li>
                    <li v-if="task2C_4">{{ task2C_4 }}</li>
                    <li v-if="task2D_4">{{ task2D_4 }}</li>
                    <li v-if="task2E_4">{{ task2E_4 }}</li>
                    <li v-if="task2F_4">{{ task2F_4 }}</li>
                </ul>
            </b-card-body>
        </div>
        <div class="row">
            <h5 v-if="title3_2"><em>{{ title3_4 }}</em></h5>
        </div>
        <div class="row">
            <b-card-body align="left">
                <ul>
                    <li v-if="task3A_4">{{ task3A_4 }}</li>
                    <li v-if="task3B_4">{{ task3B_4 }}</li>
                    <li v-if="task3C_4">{{ task3C_4 }}</li>
                    <li v-if="task3D_4">{{ task3D_4 }}</li>
                    <li v-if="task3E_4">{{ task3E_4 }}</li>
                    <li v-if="task3F_4">{{ task3F_4 }}</li>
                </ul>
            </b-card-body>
        </div>
<!--Company 5-->
        <div class="row">
            <div class="col-4">
                <div class="container row">
                    <p v-if="startMonth5 && startYear5">
                        <strong>{{startMonth5}}/{{startYear5}}</strong></p>
                    <p v-else><strong>{{startMonth5}}{{startYear5}}</strong></p>
                    <p v-if="date5Filled"><strong> - </strong></p>
                    <p v-if="endMonth5 && endYear5">
                        <strong>{{endMonth5}}/{{endYear5}}</strong></p>
                    <p v-else><strong>{{endMonth5}}{{endYear5}}</strong></p>
                </div>
            </div>
            <h3 class="col-4"><strong>{{ companyName5 }}</strong></h3>
            <p class="col-4"><strong>{{ location5 }}</strong></p>
        </div>
        <div class="row">
            <h5 v-if="title1_5"><em>{{ title1_5 }}</em></h5>
        </div>
        <div class="row">
            <b-card-body align="left">
                <ul>
                    <li v-if="task1A_5">{{ task1A_5 }}</li>
                    <li v-if="task1B_5">{{ task1B_5 }}</li>
                    <li v-if="task1C_5">{{ task1C_5 }}</li>
                    <li v-if="task1D_5">{{ task1D_5 }}</li>
                    <li v-if="task1E_5">{{ task1E_5 }}</li>
                    <li v-if="task1F_5">{{ task1F_5 }}</li>
                </ul>
            </b-card-body>
        </div>
        <div class="row">
            <h5 v-if="title2_5"><em>{{ title2_5 }}</em></h5>
        </div>
        <div class="row">
            <b-card-body align="left">
                <ul>
                    <li v-if="task2A_5">{{ task2A_5 }}</li>
                    <li v-if="task2B_5">{{ task2B_5 }}</li>
                    <li v-if="task2C_5">{{ task2C_5 }}</li>
                    <li v-if="task2D_5">{{ task2D_5 }}</li>
                    <li v-if="task2E_5">{{ task2E_5 }}</li>
                    <li v-if="task2F_5">{{ task2F_5 }}</li>
                </ul>
            </b-card-body>
        </div>
        <div class="row">
            <h5 v-if="title3_5"><em>{{ title3_5 }}</em></h5>
        </div>
        <div class="row">
            <b-card-body align="left">
                <ul>
                    <li v-if="task3A_5">{{ task3A_5 }}</li>
                    <li v-if="task3B_5">{{ task3B_5 }}</li>
                    <li v-if="task3C_5">{{ task3C_5 }}</li>
                    <li v-if="task3D_5">{{ task3D_5 }}</li>
                    <li v-if="task3E_5">{{ task3E_5 }}</li>
                    <li v-if="task3F_5">{{ task3F_5 }}</li>
                </ul>
            </b-card-body>
        </div>

        <hr class="previewHR">
    </div>
</template>

<script>
    export default {
        name: 'preview-employment',
        computed: {
            date1Filled(){
                if(this.$store.state.employment.company1.startMonth || this.$store.state.employment.company1.startYear){
                    if(this.$store.state.employment.company1.endMonth || this.$store.state.employment.company1.endYear){
                        return true;
                    }
                }
            },
            date2Filled(){
                if(this.$store.state.employment.company2.startMonth || this.$store.state.employment.company2.startYear){
                    if(this.$store.state.employment.company2.endMonth || this.$store.state.employment.company2.endYear){
                        return true;
                    }
                }
            },
            date3Filled(){
                if(this.$store.state.employment.company3.startMonth || this.$store.state.employment.company3.startYear){
                    if(this.$store.state.employment.company3.endMonth || this.$store.state.employment.company3.endYear){
                        return true;
                    }
                }
            },
            date4Filled(){
                if(this.$store.state.employment.company4.startMonth || this.$store.state.employment.company4.startYear){
                    if(this.$store.state.employment.company4.endMonth || this.$store.state.employment.company4.endYear){
                        return true;
                    }
                }
            },
            date5Filled(){
                if(this.$store.state.employment.company5.startMonth || this.$store.state.employment.company5.startYear){
                    if(this.$store.state.employment.company5.endMonth || this.$store.state.employment.company5.endYear){
                        return true;
                    }
                }
            },
//Company 1
            companyName1(){ return this.$store.state.employment.company1.companyName },
            startMonth1() { return this.$store.state.employment.company1.startMonth },
            startYear1() { return this.$store.state.employment.company1.startYear },
            endMonth1() { return this.$store.state.employment.company1.endMonth },
            endYear1() { return this.$store.state.employment.company1.endYear },
            location1() { return this.$store.state.employment.company1.location },
            title1_1() { return this.$store.state.employment.company1.title1 },
            task1A_1() { return this.$store.state.employment.company1.task1A },
            task1B_1() { return this.$store.state.employment.company1.task1B },
            task1C_1() { return this.$store.state.employment.company1.task1C },
            task1D_1() { return this.$store.state.employment.company1.task1D },
            task1E_1() { return this.$store.state.employment.company1.task1E },
            task1F_1() { return this.$store.state.employment.company1.task1F },

            title2_1() { return this.$store.state.employment.company1.title2 },
            task2A_1() { return this.$store.state.employment.company1.task2A },
            task2B_1() { return this.$store.state.employment.company1.task2B },
            task2C_1() { return this.$store.state.employment.company1.task2C },
            task2D_1() { return this.$store.state.employment.company1.task2D },
            task2E_1() { return this.$store.state.employment.company1.task2E },
            task2F_1() { return this.$store.state.employment.company1.task2F },

            title3_1() { return this.$store.state.employment.company1.title3 },
            task3A_1() { return this.$store.state.employment.company1.task3A },
            task3B_1() { return this.$store.state.employment.company1.task3B },
            task3C_1() { return this.$store.state.employment.company1.task3C },
            task3D_1() { return this.$store.state.employment.company1.task3D },
            task3E_1() { return this.$store.state.employment.company1.task3E },
            task3F_1() { return this.$store.state.employment.company1.task3F },
            //company 2
            companyName2(){ return this.$store.state.employment.company2.companyName },
            startMonth2() { return this.$store.state.employment.company2.startMonth },
            startYear2() { return this.$store.state.employment.company2.startYear },
            endMonth2() { return this.$store.state.employment.company2.endMonth },
            endYear2() { return this.$store.state.employment.company2.endYear },
            location2() { return this.$store.state.employment.company2.location },
            title1_2() { return this.$store.state.employment.company2.title1 },
            task1A_2() { return this.$store.state.employment.company2.task1A },
            task1B_2() { return this.$store.state.employment.company2.task1B },
            task1C_2() { return this.$store.state.employment.company2.task1C },
            task1D_2() { return this.$store.state.employment.company2.task1D },
            task1E_2() { return this.$store.state.employment.company2.task1E },
            task1F_2() { return this.$store.state.employment.company2.task1F },

            title2_2() { return this.$store.state.employment.company2.title2 },
            task2A_2() { return this.$store.state.employment.company2.task2A },
            task2B_2() { return this.$store.state.employment.company2.task2B },
            task2C_2() { return this.$store.state.employment.company2.task2C },
            task2D_2() { return this.$store.state.employment.company2.task2D },
            task2E_2() { return this.$store.state.employment.company2.task2E },
            task2F_2() { return this.$store.state.employment.company2.task2F },

            title3_2() { return this.$store.state.employment.company2.title3 },
            task3A_2() { return this.$store.state.employment.company2.task3A },
            task3B_2() { return this.$store.state.employment.company2.task3B },
            task3C_2() { return this.$store.state.employment.company2.task3C },
            task3D_2() { return this.$store.state.employment.company2.task3D },
            task3E_2() { return this.$store.state.employment.company2.task3E },
            task3F_2() { return this.$store.state.employment.company2.task3F },
            //company 3
            companyName3(){ return this.$store.state.employment.company3.companyName },
            startMonth3() { return this.$store.state.employment.company3.startMonth },
            startYear3() { return this.$store.state.employment.company3.startYear },
            endMonth3() { return this.$store.state.employment.company3.endMonth },
            endYear3() { return this.$store.state.employment.company3.endYear },
            location3() { return this.$store.state.employment.company3.location },
            title1_3() { return this.$store.state.employment.company3.title1 },
            task1A_3() { return this.$store.state.employment.company3.task1A },
            task1B_3() { return this.$store.state.employment.company3.task1B },
            task1C_3() { return this.$store.state.employment.company3.task1C },
            task1D_3() { return this.$store.state.employment.company3.task1D },
            task1E_3() { return this.$store.state.employment.company3.task1E },
            task1F_3() { return this.$store.state.employment.company3.task1F },

            title2_3() { return this.$store.state.employment.company3.title2 },
            task2A_3() { return this.$store.state.employment.company3.task2A },
            task2B_3() { return this.$store.state.employment.company3.task2B },
            task2C_3() { return this.$store.state.employment.company3.task2C },
            task2D_3() { return this.$store.state.employment.company3.task2D },
            task2E_3() { return this.$store.state.employment.company3.task2E },
            task2F_3() { return this.$store.state.employment.company3.task2F },

            title3_3() { return this.$store.state.employment.company3.title3 },
            task3A_3() { return this.$store.state.employment.company3.task3A },
            task3B_3() { return this.$store.state.employment.company3.task3B },
            task3C_3() { return this.$store.state.employment.company3.task3C },
            task3D_3() { return this.$store.state.employment.company3.task3D },
            task3E_3() { return this.$store.state.employment.company3.task3E },
            task3F_3() { return this.$store.state.employment.company3.task3F },
            //company 4
            companyName4(){ return this.$store.state.employment.company4.companyName },
            startMonth4() { return this.$store.state.employment.company4.startMonth },
            startYear4() { return this.$store.state.employment.company4.startYear },
            endMonth4() { return this.$store.state.employment.company4.endMonth },
            endYear4() { return this.$store.state.employment.company4.endYear },
            location4() { return this.$store.state.employment.company4.location },
            title1_4() { return this.$store.state.employment.company4.title1 },
            task1A_4() { return this.$store.state.employment.company4.task1A },
            task1B_4() { return this.$store.state.employment.company4.task1B },
            task1C_4() { return this.$store.state.employment.company4.task1C },
            task1D_4() { return this.$store.state.employment.company4.task1D },
            task1E_4() { return this.$store.state.employment.company4.task1E },
            task1F_4() { return this.$store.state.employment.company4.task1F },

            title2_4() { return this.$store.state.employment.company4.title2 },
            task2A_4() { return this.$store.state.employment.company4.task2A },
            task2B_4() { return this.$store.state.employment.company4.task2B },
            task2C_4() { return this.$store.state.employment.company4.task2C },
            task2D_4() { return this.$store.state.employment.company4.task2D },
            task2E_4() { return this.$store.state.employment.company4.task2E },
            task2F_4() { return this.$store.state.employment.company4.task2F },

            title3_4() { return this.$store.state.employment.company4.title3 },
            task3A_4() { return this.$store.state.employment.company4.task3A },
            task3B_4() { return this.$store.state.employment.company4.task3B },
            task3C_4() { return this.$store.state.employment.company4.task3C },
            task3D_4() { return this.$store.state.employment.company4.task3D },
            task3E_4() { return this.$store.state.employment.company4.task3E },
            task3F_4() { return this.$store.state.employment.company4.task3F },
            //company 5
            companyName5(){ return this.$store.state.employment.company5.companyName },
            startMonth5() { return this.$store.state.employment.company5.startMonth },
            startYear5() { return this.$store.state.employment.company5.startYear },
            endMonth5() { return this.$store.state.employment.company5.endMonth },
            endYear5() { return this.$store.state.employment.company5.endYear },
            location5() { return this.$store.state.employment.company5.location },
            title1_5() { return this.$store.state.employment.company5.title1 },
            task1A_5() { return this.$store.state.employment.company5.task1A },
            task1B_5() { return this.$store.state.employment.company5.task1B },
            task1C_5() { return this.$store.state.employment.company5.task1C },
            task1D_5() { return this.$store.state.employment.company5.task1D },
            task1E_5() { return this.$store.state.employment.company5.task1E },
            task1F_5() { return this.$store.state.employment.company5.task1F },

            title2_5() { return this.$store.state.employment.company5.title2 },
            task2A_5() { return this.$store.state.employment.company5.task2A },
            task2B_5() { return this.$store.state.employment.company5.task2B },
            task2C_5() { return this.$store.state.employment.company5.task2C },
            task2D_5() { return this.$store.state.employment.company5.task2D },
            task2E_5() { return this.$store.state.employment.company5.task2E },
            task2F_5() { return this.$store.state.employment.company5.task2F },

            title3_5() { return this.$store.state.employment.company5.title3 },
            task3A_5() { return this.$store.state.employment.company5.task3A },
            task3B_5() { return this.$store.state.employment.company5.task3B },
            task3C_5() { return this.$store.state.employment.company5.task3C },
            task3D_5() { return this.$store.state.employment.company5.task3D },
            task3E_5() { return this.$store.state.employment.company5.task3E },
            task3F_5() { return this.$store.state.employment.company5.task3F },
        }
    }
</script>