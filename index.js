require("./index.css");
var $e5Gb7$cesium = require("cesium");

//设置全局变量(通过浏览器调试可查到)


window.CESIUM_BASE_URL = "/__parcel_source_root/node_modules/cesium/Build/Cesium";
//设置AccessToken
$e5Gb7$cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyZDE5MTBkOC02MzM5LTQ0NzYtOTZkOC0wMGRlYjgzMjkzNmEiLCJpZCI6MjM4NTU0LCJpYXQiOjE3MjUyNjk4NTN9.vPxJoqdVKeJHO8M7aHd90ERhVS8s-kZbUOtG-U2cNl4";
//
let $c71fa76953298963$var$viewer = new $e5Gb7$cesium.Viewer("cesiumContainer", {
    geocoder: true,
    homeButton: true,
    sceneModePicker: true,
    baseLayerPicker: true,
    navigationHelpButton: true,
    animation: true,
    timeline: true,
    fullscreenButton: true
});
// 将三维球定位到吉林大学
$c71fa76953298963$var$viewer.camera.setView({
    destination: {
        x: -2663743.4391046255,
        y: 3758996.000963167,
        z: 4396487.134303591
    },
    orientation: {
        heading: 6.283024824332078,
        pitch: -1.066807701609219,
        roll: 0.0
    }
}); /*
document.addEventListener('click',() => {
    console.log(viewer.camera.position,
        viewer.camera.heading,
        viewer.camera.pitch,
        viewer.camera.roll)
})
*/ 


//# sourceMappingURL=index.js.map
