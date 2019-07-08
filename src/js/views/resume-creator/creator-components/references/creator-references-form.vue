<template>
    <div id="references_form">
        <div id="firstRef">
            <b-form-group label-cols="3" label="Acquaintance:" label-class="text-sm-right" label-for="title" label-size="sm">
                <b-form-input v-model="reference1" id="reference1" type="text" placeholder="Reference's Name"></b-form-input>
                <b-form-group label-cols="3" label="Relation:" label-class="text-sm-right" label-size="sm">
                    <b-form-input v-model="relation1" class="tasks" type="text" placeholder="How do you know this person?"></b-form-input>
                </b-form-group>
                <b-form-group label-cols="3" label="Company:" label-class="text-sm-right" label-size="sm">
                    <b-form-input v-model="company1" class="tasks" type="text" placeholder="What company do they work for?"></b-form-input>
                </b-form-group>
                <b-form-group label-cols="3" label="Title:" label-class="text-sm-right" label-size="sm">
                    <b-form-input v-model="title1" class="tasks" type="text" placeholder="What is their company title?"></b-form-input>
                </b-form-group>
                <b-form-group label-cols="3" label="Contact Number:" label-class="text-sm-right" label-size="sm">
                    <b-form-input v-model="contactNumber1" class="tasks" type="text" placeholder="What is their contact number?"></b-form-input>
                </b-form-group>
            </b-form-group>
        </div>
        <div id="secRef" v-if="firstRef !== ''">
            <b-form-group label-cols="3" label="Acquaintance:" label-class="text-sm-right" label-for="title" label-size="sm">
                <b-form-input v-model="reference2" id="reference2" type="text" placeholder="Reference's Name"></b-form-input>
                <b-form-group label-cols="3" label="Relation:" label-class="text-sm-right" label-size="sm">
                    <b-form-input v-model="relation2" class="tasks" type="text" placeholder="How do you know this person?"></b-form-input>
                </b-form-group>
                <b-form-group label-cols="3" label="Company:" label-class="text-sm-right" label-size="sm">
                    <b-form-input v-model="company2" class="tasks" type="text" placeholder="What company do they work for?"></b-form-input>
                </b-form-group>
                <b-form-group label-cols="3" label="Title:" label-class="text-sm-right" label-size="sm">
                    <b-form-input v-model="title2" class="tasks" type="text" placeholder="What is their company title?"></b-form-input>
                </b-form-group>
                <b-form-group label-cols="3" label="Contact Number:" label-class="text-sm-right" label-size="sm">
                    <b-form-input v-model="contactNumber2" class="tasks" type="text" placeholder="What is their contact number?"></b-form-input>
                </b-form-group>
            </b-form-group>
        </div>
        <div id="thirdRef" v-if="secondRef !== ''">
            <b-form-group label-cols="3" label="Acquaintance:" label-class="text-sm-right" label-for="title" label-size="sm">
                <b-form-input v-model="reference3" id="reference3" type="text" placeholder="Reference's Name"></b-form-input>
                <b-form-group label-cols="3" label="Relation:" label-class="text-sm-right" label-size="sm">
                    <b-form-input v-model="relation3" class="tasks" type="text" placeholder="How do you know this person?"></b-form-input>
                </b-form-group>
                <b-form-group label-cols="3" label="Company:" label-class="text-sm-right" label-size="sm">
                    <b-form-input v-model="company3" class="tasks" type="text" placeholder="What company do they work for?"></b-form-input>
                </b-form-group>
                <b-form-group label-cols="3" label="Title:" label-class="text-sm-right" label-size="sm">
                    <b-form-input v-model="title3" class="tasks" type="text" placeholder="What is their company title?"></b-form-input>
                </b-form-group>
                <b-form-group label-cols="3" label="Contact Number:" label-class="text-sm-right" label-size="sm">
                    <b-form-input v-model="contactNumber3" class="tasks" type="text" placeholder="What is their contact number?"></b-form-input>
                </b-form-group>
            </b-form-group>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'references_form',
        computed: {
            //first reference
            firstRef(){ return this.$store.state.references.reference1 },
            reference1: {
                get() { return this.$store.state.reference1 },
                set(reference) { this.$store.commit('updateReference1', reference) }
            },
            relation1: {
                get() { return this.$store.state.relation1 },
                set(relation) { this.$store.commit('updateRelation1', relation) }
            },
            company1: {
                get() { return this.$store.state.company1 },
                set(company) { this.$store.commit('updateCompany1', company) }
            },
            title1: {
                get() { return this.$store.state.title1 },
                set(title) { this.$store.commit('updateTitle1', title) }
            },
            contactNumber1: {
                get() { return this.$store.state.contactNumber1 },
                set(contactNumber) { this.$store.commit('updateContactNum1', contactNumber) }
            },
            //second reference
            secondRef(){ return this.$store.state.references.reference2 },
            reference2: {
                get() { return this.$store.state.reference2 },
                set(reference) { this.$store.commit('updateReference2', reference) }
            },
            relation2: {
                get() { return this.$store.state.relation2 },
                set(relation) { this.$store.commit('updateRelation2', relation) }
            },
            company2: {
                get() { return this.$store.state.company2 },
                set(company) { this.$store.commit('updateCompany2', company) }
            },
            title2: {
                get() { return this.$store.state.title2 },
                set(title) { this.$store.commit('updateTitle2', title) }
            },
            contactNumber2: {
                get() { return this.$store.state.contactNumber2 },
                set(contactNumber) { this.$store.commit('updateContactNum2', contactNumber) }
            },
            //third reference
            reference3: {
                get() { return this.$store.state.reference3 },
                set(reference) { this.$store.commit('updateReference3', reference) }
            },
            relation3: {
                get() { return this.$store.state.relation3 },
                set(relation) { this.$store.commit('updateRelation3', relation) }
            },
            company3: {
                get() { return this.$store.state.company3 },
                set(company) { this.$store.commit('updateCompany3', company) }
            },
            title3: {
                get() { return this.$store.state.title3 },
                set(title) { this.$store.commit('updateTitle3', title) }
            },
            contactNumber3: {
                get() { return this.$store.state.contactNumber3 },
                set(contactNumber) { this.$store.commit('updateContactNum3', contactNumber) }
            },
        }
    }
</script>