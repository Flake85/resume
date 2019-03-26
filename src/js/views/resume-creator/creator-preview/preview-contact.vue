<template>
    <div id="created_contact">
        <div v-for="(contact, index) in contactInfo" :key="index">
            <hr class="previewHR">
            <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
            <p>{{ contact.streetAddress }}</p>
            <div class="row justify-content-center">
                <p v-if="contact.city !==''"> {{ contact.city  }}, {{ contact.state }} {{ contact.zip }}</p>
                <p v-else>{{ contact.state }} {{ contact.zip }}</p>
            </div>
            <p>{{ contact.email }}</p>
            <p>{{ contact.contactNum }}</p>
            <hr class="previewHR">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'preview-contact',
        props: { contactInfo: { type: Array, required: true } }
    }
</script>