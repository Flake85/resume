<template>
    <div id="employment">
        <h3 id="em_title" class="text-white bg-info headerFont"><i class="fas fa-tasks"></i><br>
            Employment History
        </h3>
        <uniti /><hr>
        <pools /><hr>
        <distran /><hr>
        <old_south /><hr>
        <scroll-link />
    </div>
</template>

<script>
    import Uniti from './components/uniti-employment';
    import Pools from './components/djPools-employment';
    import Distran from './components/distran-employment';
    import old_south from './components/old_south-employment';
    import scrollLink from '../common_resume/link-top-of-page';

    export default {
        name: 'employment',
        components: { Uniti, Pools, Distran, old_south, scrollLink }
    }
</script>