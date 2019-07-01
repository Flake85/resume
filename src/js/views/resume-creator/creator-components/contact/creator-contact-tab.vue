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
                          v-model="num"
                          type="tel"
                          placeholder="(123)456-7890"></b-form-input>
        </b-form-group>
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
                state_options: states
            }
        },
        computed: {
            f_name: {
                get() { return this.$store.state.f_name },
                set(value) { this.$store.commit('updateFname', value) }
            },
            l_name: {
                get() { return this.$store.state.l_name },
                set(value) { this.$store.commit('updateLname', value) }
            },
            street_address: {
                get() { return this.$store.state.street_address },
                set(value) { this.$store.commit('updateStreet_address', value) }
            },
            city: {
                get() { return this.$store.state.city },
                set(value) { this.$store.commit('updateCity', value) }
            },
            state: {
                get() { return this.$store.state.state },
                set(value) { this.$store.commit('updateState', value) }
            },
            zip: {
                get() { return this.$store.state.zip },
                set(value) {this.$store.commit('updateZip', value)}
            },
            email: {
                get() { return this.$store.state.email },
                set(value) { this.$store.commit('updateEmail', value) }
            },
            num: {
                get() { return this.$store.state.num },
                set(value) { this.$store.commit('updateNum', value) }
            },
            cardBG(){ return (this.darkMode ? "dark" : "light"); },
        }
    }
</script>