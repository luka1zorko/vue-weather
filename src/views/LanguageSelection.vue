
<template>

    <div>
        <div>
            <h1 class="h1">
                {{$store.state.captions[$store.state.language].languageSelection.chooseLanguage}}
            </h1>
        </div>
        <div id="langElementWrapper">
            <div v-for="(lang, code) in $store.state.languageDict" :key="code" @click="selectLanguage(code)" class="flex-item col-12 col-sm-6 col-lg-4 col-xl-3">
                <div class="card">
                    <img class="card-img-top" :src="images[code + 'Flag']" alt="Card image cap">
                    <div class="card-body">
                        <h3 class="card-title">{{lang}}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    var selectLanguage = function (languageCode) {
        this.$store.state.language = languageCode;
        this.$router.go(-1);
        localStorage.setItem('language', languageCode)
    }
    

    import slFlag from "../assets/flag-sl-rec.png"
    import enFlag from "../assets/flag-en-rec.png"
    export default {
        name: 'languageSelection',
        data() {
            return {
                images: {
                    slFlag,
                    enFlag
                },
            }
        },
        methods: {
            selectLanguage
        }
    }

</script>

<style scoped>

#langElementWrapper {
    display: flex;
    flex-wrap: wrap;
}

.flex-item {
    margin-bottom: 5vw;
}

h1 {
    margin: 5vw;
}

</style>