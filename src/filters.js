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
    return `${value.split(" ")[1].slice(0, 5)}`;
});

Vue.filter('fullDateToDayMonth', function (value) {
    var mda = value.slice(5, 10).split("-");
    return mda[1] + "." + mda[0];
});

Vue.filter('toMilimeterPerHour', function (value) {
    return `${value} mm/h`;
});
