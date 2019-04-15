<template>
    <b-card :bg-variant="cardBG">
        <h3 class="left_align">References</h3>
            <b-form-group>
                <b-form-group horizontal label="Acquaintance:" label-class="text-sm" label-for="title" label-size="sm">
                    <b-form-input v-model="reference1" id="reference1" type="text" placeholder="Reference's Name"></b-form-input>
                    <b-form-group horizontal label="Relation:" label-class="text-sm" label-size="sm">
                        <b-form-input v-model="relation1" class="tasks1" type="text" placeholder="How do you know this person?"></b-form-input>
                    </b-form-group>
                    <b-form-group horizontal label="Company:" label-class="text-sm" label-size="sm">
                        <b-form-input v-model="company1" class="tasks1" type="text" placeholder="What company do they work for?"></b-form-input>
                    </b-form-group>
                    <b-form-group horizontal label="Title:" label-class="text-sm" label-size="sm">
                        <b-form-input v-model="title1" class="tasks1" type="text" placeholder="What is their company title?"></b-form-input>
                    </b-form-group>
                    <b-form-group horizontal label="Contact Number:" label-class="text-sm" label-size="sm">
                        <b-form-input v-model="contactNumber1" class="tasks1" type="text" placeholder="What is their contact number?"></b-form-input>
                    </b-form-group>
                </b-form-group>
                <b-form-group v-if="referenceCount > 0" horizontal label="Acquaintance:" label-class="text-sm" label-for="title" label-size="sm">
                    <b-form-input v-model="reference2" id="reference2" type="text" placeholder="Reference's Name"></b-form-input>
                    <b-form-group horizontal label="Relation:" label-class="text-sm" label-size="sm">
                        <b-form-input v-model="relation2" class="tasks2" type="text" placeholder="How do you know this person?"></b-form-input>
                    </b-form-group>
                    <b-form-group horizontal label="Company:" label-class="text-sm" label-size="sm">
                        <b-form-input v-model="company2" class="tasks2" type="text" placeholder="What company do they work for?"></b-form-input>
                    </b-form-group>
                    <b-form-group horizontal label="Title:" label-class="text-sm" label-size="sm">
                        <b-form-input v-model="title2" class="tasks2" type="text" placeholder="What is their company title?"></b-form-input>
                    </b-form-group>
                    <b-form-group horizontal label="Contact Number:" label-class="text-sm" label-size="sm">
                        <b-form-input v-model="contactNumber2" class="tasks2" type="text" placeholder="What is their contact number?"></b-form-input>
                    </b-form-group>
                </b-form-group>
                <b-form-group v-if="referenceCount > 1" horizontal label="Acquaintance:" label-class="text-sm" label-for="title" label-size="sm" >
                    <b-form-input v-model="reference3" class="reference3" type="text" placeholder="Reference's Name"></b-form-input>
                    <b-form-group horizontal label="Relation:" label-class="text-sm" label-size="sm">
                        <b-form-input v-model="relation3" class="tasks1" type="text" placeholder="How do you know this person?"></b-form-input>
                    </b-form-group>
                    <b-form-group horizontal label="Company:" label-class="text-sm" label-size="sm">
                        <b-form-input v-model="company3" class="tasks1" type="text" placeholder="What company do they work for?"></b-form-input>
                    </b-form-group>
                    <b-form-group horizontal label="Title:" label-class="text-sm" label-size="sm">
                        <b-form-input v-model="title3" class="tasks1" type="text" placeholder="What is their company title?"></b-form-input>
                    </b-form-group>
                    <b-form-group horizontal label="Contact Number:" label-class="text-sm" label-size="sm">
                        <b-form-input v-model="contactNumber3" class="tasks1" type="text" placeholder="What is their contact number?"></b-form-input>
                    </b-form-group>
                </b-form-group>
                <b-form-text v-if="referenceCount < 2" id="addReference1" type="text" align="left" class="clickable" @click="addNewReference">
                    <i class="far fw fa-plus-square"> </i>
                    Add New Reference
                </b-form-text>
            </b-form-group>
        <b-btn @click="updateReferences" :variant="btnColor" btnColor>Update References</b-btn>
    </b-card>
</template>
<script>
    export default {
        name: 'references-tab',
        props: {
            darkMode: { type: Boolean, required: true }
        },
        data(){
            return{
                referenceCount: 0,
                reference1: '', relation1: '', company1: '', title1: '', contactNumber1: '',
                reference2: '', relation2: '', company2: '', title2: '', contactNumber2: '',
                reference3: '', relation3: '', company3: '', title3: '', contactNumber3: '',
            }
        },
        computed: {
            cardBG(){ return (this.darkMode ? "dark" : "light"); },
            referenceTitle1(){ return this.reference1 },
            btnColor(){ return (this.darkMode ? "info" : "primary") },
        },
        methods: {
            addNewReference(){
                if(this.referenceCount < 3){
                    this.referenceCount++;
                }
            },
            updateReferences(){
                if(this.reference1 !== ''){
                    console.log(this.reference1.name);
                    this.$emit('add-references', {
                        reference1: {
                            name: this.reference1, relation: this.relation1, company: this.company1, title: this.title1,
                            number: this.contactNumber1
                        },
                        reference2: {
                            name: this.reference2, relation: this.relation2, company: this.company2, title: this.title2,
                            number: this.contactNumber2
                        },
                        reference3: {
                            name: this.reference3, relation: this.relation3, company: this.company3, title: this.title3,
                            number: this.contactNumber3
                        },
                    })
                } else{console.log('===')}
            }
        }
    }
</script>

<style>
    .left_align {
        text-align: left;
    }
</style>