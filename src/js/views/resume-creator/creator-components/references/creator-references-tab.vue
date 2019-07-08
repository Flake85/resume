<template>
    <b-card :bg-variant="cardBG">
        <h3 class="left_align">References</h3>
            <b-form-group>
                <references_form />
            </b-form-group>
    </b-card>
</template>
<script>
    import { mapGetters } from 'vuex';
    import references_form from './creator-references-form';
    export default {
        name: 'references-tab',
        components: { references_form },
        computed: {
            ...mapGetters([ 'cardBG' ])
        }
    }
</script>

<style>
    .left_align {
        text-align: left;
    }
</style>