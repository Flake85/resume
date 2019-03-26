<template>
    <div id="references" v-if="referenceInfo.length > 0">
        <h3 align="center" class="text-dark headerFont"><i class="fas fw fa-address-book"></i><br> References</h3>
        <div v-for="(person, idx) in referenceInfo" :key="idx">
            <div class="row">
                <ul>
                    <li v-if="person.reference1.name !== ''">{{ person.reference1.name }}: {{ person.reference1.relation }}
                    {{ person.reference1.company }} {{ person.reference1.title }} {{ person.reference1.number }}</li>
                    <li v-if="person.reference2.name !== ''">{{ person.reference2.name }}: {{ person.reference2.relation }}
                    {{ person.reference2.company }} {{ person.reference2.title }} {{ person.reference2.number }}</li>
                    <li v-if="person.reference3.name !== ''">{{ person.reference3.name }}: {{ person.reference3.relation }}
                    {{ person.reference3.company }} {{ person.reference3.title }} {{ person.reference3.number }}</li>
                </ul>
            </div>
        </div>
        <hr class="previewHR">
    </div>
</template>
<script>
    export default {
        name: 'preview-references',
        props: {referenceInfo:{type: Array, required: true}}
    }
</script>