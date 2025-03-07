//设置全局变量
window.CESIUM_BASE_URL = "../node_modules/cesium/Build/Cesium";
//设置AccessToken
Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyZDE5MTBkOC02MzM5LTQ0NzYtOTZkOC0wMGRlYjgzMjkzNmEiLCJpZCI6MjM4NTU0LCJpYXQiOjE3MjUyNjk4NTN9.vPxJoqdVKeJHO8M7aHd90ERhVS8s-kZbUOtG-U2cNl4";
//
let viewer = new Cesium.Viewer("cesiumContainer", {
    geocoder: true,
    homeButton: true,
    sceneModePicker: true,
    baseLayerPicker: true,
    navigationHelpButton: true,
    animation: true,
    timeline: true,
    fullscreenButton: true
});

//# sourceMappingURL=index.de158e3a.js.map
