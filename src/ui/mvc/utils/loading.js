export default {
    showLoading: function() {
        document.getElementById("loading").style.opacity = "1";
        document.getElementById("loading").style.zIndex = "998";
        document.getElementById("layout").style.opacity = "0.2";
    },
    hideLoading: function() {
        document.getElementById("loading").style.opacity = "0";
        document.getElementById("loading").style.zIndex = "0";
        document.getElementById("layout").style.opacity = "1";
    }
}