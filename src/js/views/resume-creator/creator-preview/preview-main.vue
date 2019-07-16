<template>
    <div id="live-preview" >
        <h1 class="text-center headerFont">Preview</h1>
        <b-card border-variant="info" header-bg-variant="info" header-text-variant="white" class="card resume-card"
                :bg-variant="cardBG">
            <div :class="cardText">
                <preview-contact />
                <preview-employment />
                <preview-education />
                <preview-references />
            </div>
        </b-card>
    </div>
</template>
<script>
    import PreviewContact from "./preview-contact";
    import PreviewEmployment from "./preview-employment";
    import PreviewEducation from "./preview-education";
    import PreviewReferences from "./preview-references";
    import {mapGetters} from "vuex";
    export default {
        name: 'live-preview',
        components: {PreviewReferences, PreviewEducation, PreviewEmployment, PreviewContact},
        computed: {
            ...mapGetters(['cardText', 'cardBG'])
        }
    }
</script>