<template>
    <div id="education" v-if="schoolName1 || schoolName2 || schoolName3 || schoolName4 || schoolName5">
        <h3 align="center" class="text-dark headerFont"><i class="fas fw fa-graduation-cap"></i><br> Formal Education</h3>
        <!--school 1-->
        <div class="row">
            <p class="col-4"><strong>{{ schoolEndYear1 }}</strong></p>
            <h3 class="col-4"><strong>{{ schoolName1 }}</strong></h3>
            <p class="col-4"><strong>{{ schoolLocation1 }}</strong></p>
        </div>
        <div class="row" align="left">
            <ul>
                <li v-if="merit1_1">{{ merit1_1 }}</li>
                <li v-if="merit2_1">{{ merit2_1 }}</li>
                <li v-if="merit3_1">{{ merit3_1 }}</li>
                <li v-if="merit4_1">{{ merit4_1 }}</li>
                <li v-if="merit5_1">{{ merit5_1 }}</li>
                <li v-if="merit6_1">{{ merit6_1 }}</li>
            </ul>
        </div>
        <!--school 2-->
        <div class="row">
            <p class="col-4"><strong>{{ schoolEndYear2 }}</strong></p>
            <h3 class="col-4"><strong>{{ schoolName2 }}</strong></h3>
            <p class="col-4"><strong>{{ schoolLocation2 }}</strong></p>
        </div>
        <div class="row" align="left">
            <ul>
                <li v-if="merit1_2">{{ merit1_2 }}</li>
                <li v-if="merit2_2">{{ merit2_2 }}</li>
                <li v-if="merit3_2">{{ merit3_2 }}</li>
                <li v-if="merit4_2">{{ merit4_2 }}</li>
                <li v-if="merit5_2">{{ merit5_2 }}</li>
                <li v-if="merit6_2">{{ merit6_2 }}</li>
            </ul>
        </div>
        <!--school 3-->
        <div class="row">
            <p class="col-4"><strong>{{ schoolEndYear3 }}</strong></p>
            <h3 class="col-4"><strong>{{ schoolName3 }}</strong></h3>
            <p class="col-4"><strong>{{ schoolLocation3 }}</strong></p>
        </div>
        <div class="row" align="left">
            <ul>
                <li v-if="merit1_3">{{ merit1_3 }}</li>
                <li v-if="merit2_3">>{{ merit2_3 }}</li>
                <li v-if="merit3_3">>{{ merit3_3 }}</li>
                <li v-if="merit4_3">>{{ merit4_3 }}</li>
                <li v-if="merit5_3">>{{ merit5_3 }}</li>
                <li v-if="merit6_3">>{{ merit6_3 }}</li>
            </ul>
        </div>
        <!--school 4-->
        <div class="row">
            <p class="col-4"><strong>{{ schoolEndYear4 }}</strong></p>
            <h3 class="col-4"><strong>{{ schoolName4 }}</strong></h3>
            <p class="col-4"><strong>{{ schoolLocation4 }}</strong></p>
        </div>
        <div class="row" align="left">
            <ul>
                <li v-if="merit1_4">{{ merit1_4 }}</li>
                <li v-if="merit2_4">{{ merit2_4 }}</li>
                <li v-if="merit3_4">{{ merit3_4 }}</li>
                <li v-if="merit4_4">{{ merit4_4 }}</li>
                <li v-if="merit5_4">{{ merit5_4 }}</li>
                <li v-if="merit6_4">{{ merit6_4 }}</li>
            </ul>
        </div>
        <div class="row">
            <p class="col-4"><strong>{{ schoolEndYear5 }}</strong></p>
            <h3 class="col-4"><strong>{{ schoolName5 }}</strong></h3>
            <p class="col-4"><strong>{{ schoolLocation5 }}</strong></p>
        </div>
        <!--school 5-->
        <div class="row" align="left">
            <ul>
                <li v-if="merit1_5">{{ merit1_5 }}</li>
                <li v-if="merit2_5">{{ merit2_5 }}</li>
                <li v-if="merit3_5">{{ merit3_5 }}</li>
                <li v-if="merit4_5">{{ merit4_5 }}</li>
                <li v-if="merit5_5">{{ merit5_5 }}</li>
                <li v-if="merit6_5">{{ merit6_5 }}</li>
            </ul>
        </div>
        <hr class="previewHR">
    </div>
</template>
<script>
    export default{
        name: 'preview-education',
        computed: {
            //school 1
            schoolName1(){ return this.$store.state.education.school1.schoolName },
            schoolEndYear1(){ return this.$store.state.education.school1.endYear },
            schoolLocation1(){ return this.$store.state.education.school1.location },
            merit1_1(){ return this.$store.state.education.school1.merit1 },
            merit2_1(){ return this.$store.state.education.school1.merit2 },
            merit3_1(){ return this.$store.state.education.school1.merit3 },
            merit4_1(){ return this.$store.state.education.school1.merit4 },
            merit5_1(){ return this.$store.state.education.school1.merit5 },
            merit6_1(){ return this.$store.state.education.school1.merit6 },
            //school2
            schoolName2(){ return this.$store.state.education.school2.schoolName },
            schoolEndYear2(){ return this.$store.state.education.school2.endYear },
            schoolLocation2(){ return this.$store.state.education.school2.location },
            merit1_2(){ return this.$store.state.education.school2.merit1 },
            merit2_2(){ return this.$store.state.education.school2.merit2 },
            merit3_2(){ return this.$store.state.education.school2.merit3 },
            merit4_2(){ return this.$store.state.education.school2.merit4 },
            merit5_2(){ return this.$store.state.education.school2.merit5 },
            merit6_2(){ return this.$store.state.education.school2.merit6 },
            //school3
            schoolName3(){ return this.$store.state.education.school3.schoolName },
            schoolEndYear3(){ return this.$store.state.education.school3.endYear },
            schoolLocation3(){ return this.$store.state.education.school3.location },
            merit1_3(){ return this.$store.state.education.school3.merit1 },
            merit2_3(){ return this.$store.state.education.school3.merit2 },
            merit3_3(){ return this.$store.state.education.school3.merit3 },
            merit4_3(){ return this.$store.state.education.school3.merit4 },
            merit5_3(){ return this.$store.state.education.school3.merit5 },
            merit6_3(){ return this.$store.state.education.school3.merit6 },
            //school4
            schoolName4(){ return this.$store.state.education.school4.schoolName },
            schoolEndYear4(){ return this.$store.state.education.school4.endYear },
            schoolLocation4(){ return this.$store.state.education.school4.location },
            merit1_4(){ return this.$store.state.education.school4.merit1 },
            merit2_4(){ return this.$store.state.education.school4.merit2 },
            merit3_4(){ return this.$store.state.education.school4.merit3 },
            merit4_4(){ return this.$store.state.education.school4.merit4 },
            merit5_4(){ return this.$store.state.education.school4.merit5 },
            merit6_4(){ return this.$store.state.education.school4.merit6 },
            //school5
            schoolName5(){ return this.$store.state.education.school5.schoolName },
            schoolEndYear5(){ return this.$store.state.education.school5.endYear },
            schoolLocation5(){ return this.$store.state.education.school5.location },
            merit1_5(){ return this.$store.state.education.school5.merit1 },
            merit2_5(){ return this.$store.state.education.school5.merit2 },
            merit3_5(){ return this.$store.state.education.school5.merit3 },
            merit4_5(){ return this.$store.state.education.school5.merit4 },
            merit5_5(){ return this.$store.state.education.school5.merit5 },
            merit6_5(){ return this.$store.state.education.school5.merit6 }
        }
    }
</script>