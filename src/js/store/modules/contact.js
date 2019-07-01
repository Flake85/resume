const state = {
    f_name: '',
    l_name: '',
    street_address: '',
    city: '',
    zip: '',
    email: '',
    num: '',
    state: '',
};

const mutations = {
    updateFname(state, f_name) { state.f_name = f_name; },
    updateLname(state, l_name) { state.l_name = l_name; },
    updateStreet_address(state, street_address) { state.street_address = street_address; },
    updateCity(state, city) { state.city = city },
    updateState(state, value) { state.state = value },
    updateZip(state, zip) { state.zip = zip },
    updateEmail(state, email) { state.email = email },
    updateNum(state, num) { state.num = num }
};

export default {
    state,
    mutations,
};