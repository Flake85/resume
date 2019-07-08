<template>
    <div id="live-preview" >
        <h1 class="text-center headerFont">Preview</h1>
        <b-card border-variant="info" header-bg-variant="info" header-text-variant="white" class="card resume-card"
                :bg-variant="cardBG">
            <div :class="cardText">
                <preview-contact />
                <preview-employment :employer-info="employerInfo" />
                <preview-education :education-info="educationInfo" />
                <preview-references :reference-info="referenceInfo" />
            </div>
        </b-card>
    </div>
</template>
<script>
    import PreviewContact from "./preview-contact";
    import PreviewEmployment from "./preview-employment";
    import PreviewEducation from "./preview-education";
    import PreviewReferences from "./preview-references";
    export default {
        name: 'live-preview',
        components: {PreviewReferences, PreviewEducation, PreviewEmployment, PreviewContact},
        props: {
            employerInfo: {type: Array, required: true},
            educationInfo: {type: Array, required: true},
            referenceInfo: {type: Array, required: true}
        },
        computed: {
            cardText(){ return (this.$store.state.darkmode.darkMode ? "darkCardText" : "dayCardText"); },
            cardBG(){ return (this.$store.state.darkmode.darkMode ? "dark" : "light"); },
        }
    }
</script>