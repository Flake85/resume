<template>
    <div id="education">
        <h3 id="ed_title" class="text-light bg-info headerFont"><i class="fas fw fa-graduation-cap"></i><br> Formal Education</h3>
        <MMI /><hr>
        <pineville-high /><hr>
        <scroll-link />
    </div>
</template>

<script>
    import PinevilleHigh from './components/pineville-high-education';
    import MMI from './components/mmi-education';
    import ScrollLink from './../common resume/link-top-of-page';

    export default {
        name:'education',
        components: { PinevilleHigh, MMI, ScrollLink }
    }
</script>

<style>
    #ed_title {
        text-align: center;
    }
</style>

