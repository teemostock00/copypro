// body tag가 불러와진 후 로딩하는 함수
// window.onload
window.onload = function initMap() {
    // 광주 경도 위도
    var gwangju = { lat: 35.1595454 ,lng: 126.8526012};
    var map = new google.maps.Map(
    document.getElementById('map'), {
        zoom: 12,
        center: gwangju
    });
    
    // 지도위에 마커 표시하기
    new google.maps.Marker({
    position: gwangju,
    map: map,
    label: "광주 중심 좌표"
    });
}


