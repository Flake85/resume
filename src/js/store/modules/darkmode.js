const state = {
    darkMode: false
};

const getters = {
    cardText(){ return (state.darkMode ? "darkCardText about-text" : "dayCardText about-text") },
    cardBG(){ return (state.darkMode ? "dark" : "light") },
    secondaryCardBG(){ return (state.darkMode ? "secondary" : "info") },
    btnColor(){ return (state.darkMode ? "info" : "primary") }
};

const mutations = {
    toggleDark(state){
        if(!state.darkMode){
            state.darkMode = true;
            document.body.style.backgroundColor = "#6c757d";
        } else {
            state.darkMode = false;
            document.body.style.backgroundColor = "#f8f9fa";
        }
    }
};

const actions = {
    toggleDark(context){
        context.commit('toggleDark');
    }
};

export default {
    getters,
    state,
    mutations,
    actions
};
