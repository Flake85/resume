<template>
    <div id="preview-employment" v-if="employerInfo.length > 0">
        <hr class="previewHR">
        <h3 align="center" class="headerFont">
            <i class="fas fa-tasks"></i><br>Employment History</h3><br>
        <div v-for="(employer, index) in employerInfo" :key="index">
            <div class="row">
                <p class="col-4"><strong>{{employer.startMonth}}/{{employer.startYear}} - {{employer.endMonth}}/{{employer.endYear}}</strong></p>
                <h3 class="col-4"><strong>{{ employer.companyName }}</strong></h3>
                <p class="col-4"><strong>{{employer.location}}</strong></p>
            </div>
            <div class="row">
                <h5><em>{{ employer.title1 }}</em></h5>
            </div>
            <div class="row">
                <b-card-body align="left">
                    <ul><li v-for="task in employer.title1Tasks" v-if="task !== ''" >{{ task }}</li></ul>
                </b-card-body>
            </div>
            <div class="row">
                <h5><em>{{ employer.title2 }}</em></h5>
            </div>
            <div class="row">
                <b-card-body align="left">
                    <ul><li v-for="task in employer.title2Tasks" v-if="task !== ''" >{{ task }}</li></ul>
                </b-card-body>
            </div>
            <div class="row">
                <h5><em>{{ employer.title3 }}</em></h5>
            </div>
            <div class="row">
                <b-card-body align="left">
                    <ul><li v-for="task in employer.title3Tasks" v-if="task !== ''" >{{ task }}</li></ul>
                </b-card-body>
            </div>
            <hr class="previewHR">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'preview-employment',
        props: {
            employerInfo: { type: Array, required: true }
        }
    }
</script>