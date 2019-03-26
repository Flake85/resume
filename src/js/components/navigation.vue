<template>
    <div id="navigation">
        <b-navbar toggleable="md" type="dark" variant="info" fixed="top" >
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-navbar-brand>Flechas</b-navbar-brand>
            <b-collapse is-nav id="nav_collapse" >
                <b-navbar-nav class="ml-auto nav-links" >
                    <b-btn variant="info"><router-link to="/" exact class="nav-link">Home</router-link></b-btn>
                    <b-btn variant="info"><router-link to="/contact" exact class="nav-link">Contact</router-link></b-btn>
                    <div>
                        <b-dropdown id="ddown-header" variant="info" right text="About" align="center" class="nav-link">
                            <b-dropdown-item><router-link to="/about" exact>About Flechas</router-link></b-dropdown-item>
                            <b-dropdown-item><router-link to="/resume" exact>Resume'</router-link></b-dropdown-item>
                        </b-dropdown>
                    </div>
                    <div>
                        <b-dropdown id="ddown-header" variant="info" right text="Extras" align="center" class="nav-link">
                            <b-dropdown-item ><router-link to="/creator" exact >resume creator</router-link></b-dropdown-item>
                            <b-dropdown-item v-if="darkMode" @click="toggleDarkMode" >
                                Dark Mode &#10004;
                            </b-dropdown-item>
                            <b-dropdown-item v-else-if="!darkMode" variant="outline-warning" @click="toggleDarkMode">
                                Enable Dark Mode
                            </b-dropdown-item>
                        </b-dropdown>
                    </div>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: 'navigation',
        props: { darkMode: { type: Boolean, required: true }},
        methods: { toggleDarkMode() {this.$emit('toggleDarkMode'); } }
    }
</script>