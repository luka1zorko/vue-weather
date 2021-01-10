import Vue from 'vue'

Vue.filter('toDegreeC', function (value) {
    return `${value.toFixed(1)}°C`;
});

Vue.filter('toPercent', function (value) {
    return `${value}%`;
});

Vue.filter('toSpeedMs', function (value) {
    return `${value} m/s`;
});

Vue.filter('toPressureHpa', function (value) {
    return `${value} HPa`;
});

Vue.filter('fullDateToHour', function (value) {
    return `${value.split(" ")[1]}`;
});
