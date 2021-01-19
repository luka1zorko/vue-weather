<template>
  <div id="app">
    <div id="nav">
            <button class="headerButton shadowed" @click="home()">
                <div class="headerIconWrapper">
                    <i class="fas fa-home"></i>
                </div>
                <span>{{$store.state.captions[$store.state.language].app.home}}</span>
            </button>
            <button class="headerButton shadowed" @click="back()" v-show="$route.path != '/'">
                <div class="headerIconWrapper">
                    <i class="fas fa-reply"></i>
                </div>
                <span>{{$store.state.captions[$store.state.language].app.buttonBack}}</span>
            </button>
            <button @click="toLanguageSelect()" class="headerButton shadowed" style="margin-left:auto">
                <img :src="images[$store.state.language + 'Flag']" alt="sad" class="headerFlag">
                {{$store.state.languageDict[$store.state.language]}}
            </button>
        </div>
    <router-view/>
  </div>
</template>


<script>

    var home = function () {
      if(this.$route.name == "CitiesList")
        return;
      this.$router.push('/')
    }

    var back = function () {
      this.$router.go(-1)
    }

    var toLanguageSelect = function () {
      console.log("to language select")
      this.$router.push('/languageSelection/' + this.$store.state.language)
    }

    import slFlag from "./assets/flag-sl.png"
    import enFlag from "./assets/flag-en.png"
    export default {
        name: 'app',
        data() {
            return {
                images: {
                    slFlag,
                    enFlag
                },
            }
        },
        methods: {
            home,
            back,
            toLanguageSelect
        }
    }

</script>


<style>

* {
    box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 12vh 5%;
}

.blueButton {
    border-radius: 50px;
    border: 0px;
    padding-right: 15px;
    margin-left: 15px;
    margin-top: 5px;
    color: white;
    background-color: rgb(7,153,226);
    position: relative;
}

.blueButton.pill {
    height: 40px; 
    min-width: 100px;
}

.shadowed {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}

.shadowed:active {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4), 0 3px 10px 0 rgba(0,0,0,0.38);
    transform: translateY(2px);
}

button {
    outline: none !important;
}

button.activated {
    box-shadow: 0 0 10px 1px deepskyblue;
    border: 1px solid white;
}

#nav {
    padding: 30px 2vw;
    background-color:green;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: flex-end;
    font-size: 2.5vh;
}

.headerButton {
    border-radius: 50px;
    border: 0px;
    min-width: 100px;
    padding-right: 15px;
    margin-left: 10px;
}

.headerIconWrapper {
    float:left;
    margin-left: 5px;
    color: rgb(7,153,226);
}

.headerFlag {
    width: 25px;
    margin-right: 5px;
    margin-top: 5px;
    float: left;
}

</style>
