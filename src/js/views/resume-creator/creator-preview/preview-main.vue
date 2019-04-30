<template>
    <div id="live-preview" >
        <h1 class="text-center">Preview</h1>
        <b-card border-variant="info" header-bg-variant="info" header-text-variant="white" class="card resume-card"
                :bg-variant="cardBG">
            <div :class="cardText">
                <p v-if="contactInfo.length === 0 &&
                         employerInfo.length === 0 &&
                         educationInfo.length === 0 &&
                         referenceInfo.length === 0">
                    Update the provided forms to see preview!
                </p>
                <preview-contact :contact-info="contactInfo"/>
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
            darkMode: {type: Boolean, required: true},
            contactInfo: {type: Array, required: true},
            employerInfo: {type: Array, required: true},
            educationInfo: {type: Array, required: true},
            referenceInfo: {type: Array, required: true}
        },
        computed: {
            cardText(){ return (this.darkMode ? "darkCardText" : "dayCardText"); },
            cardBG(){ return (this.darkMode ? "dark" : "light"); },
        }
    }
</script>