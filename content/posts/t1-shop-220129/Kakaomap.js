import React, { Component } from 'react';
import './App.css';

class Kakaomap extends Component {

    componentDidMount() {
        const script = document.createElement('script');
        script.async = true;
        script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=74649eb36d8b5432aedca4f91e607d57&autoload=false";
        document.head.appendChild(script);

        script.onload = () => {
            window.kakao.maps.load(() => {
                let el = document.getElementById('map');
                let map = new window.kakao.maps.Map(el, {
                    center: new window.kakao.maps.LatLng(37.5124385001218, 127.04285393878133)
                });

                new window.kakao.maps.Marker({
                    position: new window.kakao.maps.LatLng(37.5124385001218, 127.04285393878133), // 마커의 좌표
                    map: map // 마커를 표시할 지도 객체
                });
            });
        };
    }

    render() {
        return (
            <div className="App" id="map"/>
        );
    }
}

export default Kakaomap;