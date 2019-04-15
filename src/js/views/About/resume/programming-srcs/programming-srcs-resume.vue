<template>
    <div id="programming-srcs">
        <h3 class="text-white bg-info headerFont resources">
            <i class="fas fw fa-code"></i><br>
            Programming Resources
        </h3>
        <sql-srcs /><hr>
        <html-srcs /><hr>
        <css-srcs /><hr>
        <javascript-srcs /><hr>
        <front-libraries /><hr>
        <tools-srcs /><hr>
        <learning-srcs /><hr>
        <scroll-link />
    </div>
</template>

<script>
    import SqlSrcs from "./components/sql-srcs";
    import HtmlSrcs from "./components/html-srcs";
    import CssSrcs from "./components/css-srcs";
    import JavascriptSrcs from "./components/javascript-srcs";
    import FrontLibraries from "./components/frontLibraries-srcs";
    import ToolsSrcs from "./components/tools-srcs";
    import LearningSrcs from "./components/learning-srcs";
    import scrollLink from './../common resume/link-top-of-page';
    export default {
        name: 'programming-srcs',
        components: {
            LearningSrcs,
            ToolsSrcs,
            FrontLibraries,
            JavascriptSrcs,
            CssSrcs,
            HtmlSrcs,
            SqlSrcs,
            scrollLink
        },
    }
</script>

<style>
    .resources {
        text-align: center;
    }
</style>