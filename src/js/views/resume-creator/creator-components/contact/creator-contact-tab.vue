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
        <button @click="modelName('f_name')">test</button>
    </b-card>
</template>

<script>
    import states from '../../../../modules/stateOptions';
    import { mapGetters } from 'vuex';

    export default {
        name: 'contact-tab',
        data() { return{ state_options: states }},
        computed: {
            ...mapGetters([ 'cardBG' ]),
            f_name: {
                get() { return this.$store.state.f_name },
                set(fName) { this.$store.commit('updateFname', fName) }
            },
            l_name: {
                get() { return this.$store.state.l_name },
                set(lName) { this.$store.commit('updateLname', lName) }
            },
            street_address: {
                get() { return this.$store.state.street_address },
                set(stAddress) { this.$store.commit('updateStreet_address', stAddress) }
            },
            city: {
                get() { return this.$store.state.city },
                set(city) { this.$store.commit('updateCity', city) }
            },
            state: {
                get() { return this.$store.state.state },
                set(state) { this.$store.commit('updateState', state) }
            },
            zip: {
                get() { return this.$store.state.zip },
                set(zip) { this.$store.commit('updateZip', zip) }
            },
            email: {
                get() { return this.$store.state.email },
                set(email) { this.$store.commit('updateEmail', email) }
            },
            num: {
                get() { return this.$store.state.num },
                set(num) { this.$store.commit('updateNum', num) }
            }
        }
    }
</script>