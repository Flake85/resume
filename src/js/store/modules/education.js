

const state = {
    school1: {
        schoolName: '',
        startMonth: '',
        startYear: '',
        endMonth: '',
        endYear: '',
        location: '',
        merit1: '', merit2: '', merit3: '', merit4: '', merit5: '', merit6: '',
    },
    school2: {
        schoolName: '',
        startMonth: '',
        startYear: '',
        endMonth: '',
        endYear: '',
        location: '',
        merit1: '', merit2: '', merit3: '', merit4: '', merit5: '', merit6: '',
    },
    school3: {
        schoolName: '',
        startMonth: '',
        startYear: '',
        endMonth: '',
        endYear: '',
        location: '',
        merit1: '', merit2: '', merit3: '', merit4: '', merit5: '', merit6: '',
    },
    school4: {
        schoolName: '',
        startMonth: '',
        startYear: '',
        endMonth: '',
        endYear: '',
        location: '',
        merit1: '', merit2: '', merit3: '', merit4: '', merit5: '', merit6: '',
    },
    school5: {
        schoolName: '',
        startMonth: '',
        startYear: '',
        endMonth: '',
        endYear: '',
        location: '',
        merit1: '', merit2: '', merit3: '', merit4: '', merit5: '', merit6: '',
    },
    school6: {
        schoolName: '',
        startMonth: '',
        startYear: '',
        endMonth: '',
        endYear: '',
        location: '',
        merit1: '', merit2: '', merit3: '', merit4: '', merit5: '', merit6: '',
    }
};

const getters = {

};

const actions = {

};

const mutations = {
    //school 1
    updateSchoolName1(state, schoolName) { state.school1.schoolName = schoolName; },
    updateSchoolStartMonth1(state, startMonth) { state.school1.startMonth = startMonth; },
    updateSchoolStartYear1(state, startYear) { state.school1.startYear = startYear; },
    updateSchoolEndMonth1(state, endMonth) { state.school1.endMonth = endMonth; },
    updateSchoolEndYear1(state, endYear) { state.school1.endYear = endYear; },
    updateSchoolLocation1(state, location) { state.school1.location = location; },
    updateSchoolMerit1_1(state, merit) { state.school1.merit1 = merit; },
    updateSchoolMerit2_1(state, merit) { state.school1.merit2 = merit; },
    updateSchoolMerit3_1(state, merit) { state.school1.merit3 = merit; },
    updateSchoolMerit4_1(state, merit) { state.school1.merit4 = merit; },
    updateSchoolMerit5_1(state, merit) { state.school1.merit5 = merit; },
    updateSchoolMerit6_1(state, merit) { state.school1.merit6 = merit; },

    //school 2
    updateSchoolName2(state, schoolName) { state.school2.schoolName = schoolName; },
    updateSchoolStartMonth2(state, startMonth) { state.school2.startMonth = startMonth; },
    updateSchoolStartYear2(state, startYear) { state.school2.startYear = startYear; },
    updateSchoolEndMonth2(state, endMonth) { state.school2.endMonth = endMonth; },
    updateSchoolEndYear2(state, endYear) { state.school2.endYear = endYear; },
    updateSchoolLocation2(state, location) { state.school2.location = location; },
    updateSchoolMerit1_2(state, merit) { state.school2.merit1 = merit; },
    updateSchoolMerit2_2(state, merit) { state.school2.merit2 = merit; },
    updateSchoolMerit3_2(state, merit) { state.school2.merit3 = merit; },
    updateSchoolMerit4_2(state, merit) { state.school2.merit4 = merit; },
    updateSchoolMerit5_2(state, merit) { state.school2.merit5 = merit; },
    updateSchoolMerit6_2(state, merit) { state.school2.merit6 = merit; },

    //school 3
    updateSchoolName3(state, schoolName) { state.school3.schoolName = schoolName; },
    updateSchoolStartMonth3(state, startMonth) { state.school3.startMonth = startMonth; },
    updateSchoolStartYear3(state, startYear) { state.school3.startYear = startYear; },
    updateSchoolEndMonth3(state, endMonth) { state.school3.endMonth = endMonth; },
    updateSchoolEndYear3(state, endYear) { state.school3.endYear = endYear; },
    updateSchoolLocation3(state, location) { state.school3.location = location; },
    updateSchoolMerit1_3(state, merit) { state.school3.merit1 = merit; },
    updateSchoolMerit2_3(state, merit) { state.school3.merit2 = merit; },
    updateSchoolMerit3_3(state, merit) { state.school3.merit3 = merit; },
    updateSchoolMerit4_3(state, merit) { state.school3.merit4 = merit; },
    updateSchoolMerit5_3(state, merit) { state.school3.merit5 = merit; },
    updateSchoolMerit6_3(state, merit) { state.school3.merit6 = merit; },

    //school 4
    updateSchoolName4(state, schoolName) { state.school4.schoolName = schoolName; },
    updateSchoolStartMonth4(state, startMonth) { state.school4.startMonth = startMonth; },
    updateSchoolStartYear4(state, startYear) { state.school4.startYear = startYear; },
    updateSchoolEndMonth4(state, endMonth) { state.school4.endMonth = endMonth; },
    updateSchoolEndYear4(state, endYear) { state.school4.endYear = endYear; },
    updateSchoolLocation4(state, location) { state.school4.location = location; },
    updateSchoolMerit1_4(state, merit) { state.school4.merit1 = merit; },
    updateSchoolMerit2_4(state, merit) { state.school4.merit2 = merit; },
    updateSchoolMerit3_4(state, merit) { state.school4.merit3 = merit; },
    updateSchoolMerit4_4(state, merit) { state.school4.merit4 = merit; },
    updateSchoolMerit5_4(state, merit) { state.school4.merit5 = merit; },
    updateSchoolMerit6_4(state, merit) { state.school4.merit6 = merit; },

    //school 5
    updateSchoolName5(state, schoolName) { state.school5.schoolName = schoolName; },
    updateSchoolStartMonth5(state, startMonth) { state.school5.startMonth = startMonth; },
    updateSchoolStartYear5(state, startYear) { state.school5.startYear = startYear; },
    updateSchoolEndMonth5(state, endMonth) { state.school5.endMonth = endMonth; },
    updateSchoolEndYear5(state, endYear) { state.school5.endYear = endYear; },
    updateSchoolLocation5(state, location) { state.school5.location = location; },
    updateSchoolMerit1_5(state, merit) { state.school5.merit1 = merit; },
    updateSchoolMerit2_5(state, merit) { state.school5.merit2 = merit; },
    updateSchoolMerit3_5(state, merit) { state.school5.merit3 = merit; },
    updateSchoolMerit4_5(state, merit) { state.school5.merit4 = merit; },
    updateSchoolMerit5_5(state, merit) { state.school5.merit5 = merit; },
    updateSchoolMerit6_5(state, merit) { state.school5.merit6 = merit; },
};

export default {
    state,
    getters,
    actions,
    mutations,
};