// body tag가 불러와진 후 로딩하는 함수
// window.onload
window.onload = function initMap() {
    // 광주 경도 위도
    var gwangju = { lat: 35.1595454 ,lng: 126.8526012};
    var map = new google.maps.Map(
        document.querySelector('.map'), {
            zoom: 14,
            center: gwangju
        }
    );

    var locations =

}


