<template>
    <b-card :bg-variant="cardBG">
        <h3 style="text-align: start">Contact Info</h3><br>
        <b-form-group label-cols="3"
                      label="First Name:"
                      label-class="text-sm-right"
                      label-for="f_name"
                      label-size="sm">
            <b-form-input id="f_name"
                          v-model="f_name"
                          type="text"></b-form-input>
        </b-form-group>
        <b-form-group label-cols="3"
                      label="Last Name:"
                      label-class="text-sm-right"
                      label-for="l_name"
                      label-size="sm">
            <b-form-input id="l_name"
                          v-model="l_name"
                          type="text"></b-form-input>
        </b-form-group>
        <b-form-group label-cols="3"
                      label="Address:"
                      label-class="text-sm-right"
                      label-for="street_address"
                      label-size="sm">
            <b-form-input id="street_address"
                          v-model="street_address"
                          type="text"
                          placeholder="1234 Example St"></b-form-input>
        </b-form-group>
        <b-form-group label-cols="3"
                      label="City:"
                      label-class="text-sm-right"
                      label-for="city"
                      label-size="sm">
            <b-form-input id="city"
                          v-model="city"
                          type="text"
                          placeholder="City"></b-form-input>
        </b-form-group>
        <b-form-group label-cols="3"
                      label="State:"
                      label-class="text-sm-right"
                      label-for="state"
                      label-size="sm">
            <b-form-select id="state"
                           :options="state_options"
                           v-model="state"></b-form-select>
        </b-form-group>
        <b-form-group label-cols="3"
                      label="Zip Code:"
                      label-class="text-sm-right"
                      label-for="zip"
                      label-size="sm">
            <b-form-input id="zip"
                          v-model="zip"
                          placeholder="12345"></b-form-input>
        </b-form-group>
        <b-form-group label-cols="3"
                      label="E-mail:"
                      label-class="text-sm-right"
                      label-for="email"
                      label-size="sm">
            <b-form-input id="email"
                          v-model="email"
                          type="email"
                          placeholder="name@example.com"></b-form-input>
        </b-form-group>
        <b-form-group label-cols="3"
                      label="Contact Number:"
                      label-class="text-sm-right"
                      label-for="contact_number"
                      label-size="sm">
            <b-form-input id="contact_number"
                          v-model="contact_number"
                          type="tel"
                          placeholder="(123)456-7890"></b-form-input>
        </b-form-group>
        <b-btn @click="addContactInfo" variant="info">Update Contact Info</b-btn>
    </b-card>
</template>

<script>
    import states from '../../../../modules/stateOptions';
    export default {
        name: 'contact-tab',
        props: {
            darkMode: { type: Boolean, required: true }
        },
        data(){
            return{
                f_name: '',
                l_name: '',
                street_address: '',
                city: '',
                zip: '',
                email: '',
                contact_number: '',
                state: '',
                state_options: states
            }
        },
        computed: {
            cardBG(){ return (this.darkMode ? "dark" : "light"); },
        },
        methods: {
            addContactInfo(){
                this.$emit('add-contact', {
                    firstName: this.f_name,
                    lastName: this.l_name,
                    streetAddress: this.street_address,
                    city: this.city,
                    state: this.state,
                    zip: this.zip,
                    email: this.email,
                    contactNum: this.contact_number
                })
            }
        }
    }
</script>