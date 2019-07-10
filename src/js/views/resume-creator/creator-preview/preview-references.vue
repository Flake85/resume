

<template>
    <div id="references" v-if="reference1 !== '' || reference2 !== '' || reference3 !== ''">
        <h3 align="center" class="headerFont"><i class="fas fw fa-address-book"></i><br> References</h3>
            <div class="row" align="left">
                <ul>
                    <li v-if="reference1 !== ''">{{ reference1 }}: {{ relation1 }} {{ company1 }} {{ title1 }} {{ number1 }}</li>
                    <li v-if="reference2 !== ''">{{ reference2 }}: {{ relation2 }} {{ company2 }} {{ title2 }} {{ number2 }}</li>
                    <li v-if="reference3 !== ''">{{ reference3 }}: {{ relation3 }} {{ company3 }} {{ title3 }} {{ number3 }}</li>
                </ul>
            </div>

        <hr class="previewHR">
    </div>
</template>
<script>
    export default {
        name: 'preview-references',
        computed: {
            reference1(){ return this.$store.state.references.reference1 },
            relation1(){ return this.$store.state.references.relation1 },
            company1(){ return this.$store.state.references.company1 },
            title1(){ return this.$store.state.references.title1 },
            number1(){ return this.$store.state.references.num1 },
            //ref2
            reference2(){ return this.$store.state.references.reference2 },
            relation2(){ return this.$store.state.references.relation2 },
            company2(){ return this.$store.state.references.company2 },
            title2(){ return this.$store.state.references.title2 },
            number2(){ return this.$store.state.references.num2 },
            //ref3
            reference3(){ return this.$store.state.references.reference3 },
            relation3(){ return this.$store.state.references.relation3 },
            company3(){ return this.$store.state.references.company3 },
            title3(){ return this.$store.state.references.title3 },
            number3(){ return this.$store.state.references.num3 }
        }
    }
</script>