
<template>

    <div>
        <div>
            <h1 class="h1">
                {{$store.state.captions[$store.state.language].languageSelection.chooseLanguage}}
            </h1>
        </div>
        <div>
            <div v-for="(lang, code) in $store.state.languageDict" :key="code" @click="selectLanguage(code)">
                <span>{{lang}}</span>
            </div>
        </div>
    </div>

</template>

<script>

    var selectLanguage = function (languageCode) {
        this.$store.state.language = languageCode;
        this.$router.go(-1);
    }
    
    export default {
        name: 'languageSelection',
        data() {
            return {
            }
        },
        methods: {
            selectLanguage
        }
    }

</script>

<style scoped>



</style>