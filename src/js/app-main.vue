<template>
    <div id="app_main">
        <navigation :darkMode="darkMode" @toggleDarkMode="toggleDarkMode" />
        <transition name="slide-fade">
            <router-view :darkMode="darkMode" />
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
        data(){ return { darkMode: false } },
        methods: {
            toggleDarkMode(){
                if(!this.darkMode){
                    this.darkMode = true;
                    document.body.style.backgroundColor = "#6c757d";
                } else {
                    this.darkMode = false;
                    document.body.style.backgroundColor = "#f8f9fa";
                }
            }
        }
    }
</script>