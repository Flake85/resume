<template>
    <div id="top-center-btns" class="justify-content-center">
        <div class="row">
            <b-btn v-b-toggle.employment.employmentCheck class="m-1" variant="info">Employment</b-btn>
            <b-collapse visible id="employmentCheck"><p>&#10004;</p></b-collapse>
            <b-btn v-b-toggle.education.educationCheck class="m-1" variant="info">Education</b-btn>
            <b-collapse visible id="educationCheck"><p>&#10004;</p></b-collapse>
            <b-btn v-b-toggle.resources.resourcesCheck class="m-1" variant="info">Resources</b-btn>
            <b-collapse visible id="resourcesCheck"><p>&#10004;</p></b-collapse>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'horizontal-btns'
    }
</script>

<style>
    #top-center-btns{
        display: none;
    }
    @media screen and (max-width: 993px){
        #top-center-btns{
            display: flex;
        }
    }
</style>