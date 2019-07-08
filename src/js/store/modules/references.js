const state = {
    reference1: '',
    relation1: '',
    company1: '',
    title1: '',
    num1: '',
    reference2: '',
    relation2: '',
    company2: '',
    title2: '',
    num2: '',
    reference3: '',
    relation3: '',
    company3: '',
    title3: '',
    num3: ''
};

const mutations = {
    updateReference1(state, reference) { state.reference1 = reference; },
    updateRelation1(state, relation) { state.relation1 = relation },
    updateCompany1(state, relation) { state.company1 = relation },
    updateTitle1(state, title) { state.title1 = title },
    updateContactNum1(state, num) { state.num1 = num },
    updateReference2(state, reference) { state.reference2 = reference; },
    updateRelation2(state, relation) { state.relation2 = relation },
    updateCompany2(state, relation) { state.company2 = relation },
    updateTitle2(state, title) { state.title2 = title },
    updateContactNum2(state, num) { state.num2 = num },
    updateReference3(state, reference) { state.reference3 = reference; },
    updateRelation3(state, relation) { state.relation3 = relation },
    updateCompany3(state, relation) { state.company3 = relation },
    updateTitle3(state, title) { state.title3 = title },
    updateContactNum3(state, num) { state.num3 = num }
};

export default {
    state,
    mutations
};