<template>
    <div id="left-col-btns">
        <div class="row justify-content-center">
            <b-btn v-b-toggle.employment.employmentCheck class="m-1" variant="info">Employment</b-btn>
            <b-collapse visible id="employmentCheck"><p>&#10004;</p></b-collapse>
        </div>
        <div class="row justify-content-center">
            <b-btn v-b-toggle.education.educationCheck class="m-1" variant="info">Education</b-btn>
            <b-collapse visible id="educationCheck"><p>&#10004;</p></b-collapse>
        </div>
        <div class="row justify-content-center">
            <b-btn v-b-toggle.resources.resourcesCheck class="m-1" variant="info">Resources</b-btn>
            <b-collapse visible id="resourcesCheck"><p>&#10004;</p></b-collapse>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'vertical-btn-group'
    }
</script>

<style>
    @media screen and (max-width: 993px) {
        #left-col-btns{
            display: none;
        }
    }
</style>