<template>
    <div id="created_contact">
        <hr class="previewHR">
        <h2>{{ f_name }} {{ l_name }}</h2>
        <p>{{ street_address }}</p>
        <div class="row justify-content-center">
            <p>{{ city }}</p>
            <p v-if="city !== '' && state !== ''">, {{ state }} {{ zip }}</p>
            <p v-else>{{ state }} {{ zip }}</p>
        </div>
        <p>{{ email }}</p>
        <p>{{ num }}</p>
        <hr class="previewHR">
    </div>
</template>

<script>
    export default {
        name: 'preview-contact',
        computed: {
            f_name(){ return this.$store.state.contact.f_name },
            l_name(){ return this.$store.state.contact.l_name },
            street_address(){ return this.$store.state.contact.street_address },
            city(){ return this.$store.state.contact.city },
            state(){ return this.$store.state.contact.state },
            zip(){ return this.$store.state.contact.zip },
            email(){ return this.$store.state.contact.email },
            num(){ return this.$store.state.contact.num }
        }
    }
</script>