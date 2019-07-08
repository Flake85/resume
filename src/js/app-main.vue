<template>
    <div id="app_main">
        <navigation />
        <transition name="slide-fade">
            <router-view />
        </transition>
        <foot />
    </div>
</template>

<script>
    import Navigation from "./components/navigation";
    import Foot from './components/foot';

    export default {
        name: 'app-main',
        components: { Navigation, Foot },
    }
</script>