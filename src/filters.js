import Vue from 'vue'

Vue.filter('toDegreeC', function (value) {
    return `${value.toFixed(1)}°C`;
});

Vue.filter('toPercent', function (value) {
    return `${value}%`;
});
