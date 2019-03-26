<template>
    <div id="education" v-if="educationInfo.length > 0">
        <h3 align="center" class="text-dark headerFont"><i class="fas fw fa-graduation-cap"></i><br> Formal Education</h3>
        <div v-for="(educator, idx) in educationInfo" :key="idx">
            <div class="row">
                <p class="col-4"><strong>{{ educator.endYear }}</strong></p>
                <h3 class="col-4"><strong>{{ educator.schoolName }}</strong></h3>
                <p class="col-4"><strong>{{ educator.location }}</strong></p>
            </div>
            <div class="row" align="left">
                <ul><li v-for="merit in educator.merits" v-if="merit !== ''">{{ merit }}</li></ul>
            </div>
        </div>
        <hr class="previewHR">
    </div>
</template>
<script>
    export default{
        name: 'preview-education',
        props: { educationInfo: { type: Array, required: true } }
    }
</script>