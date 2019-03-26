
export function createTitle(){
    return this.$router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});}