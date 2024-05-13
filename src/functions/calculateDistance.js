// 거리 측정 함수
export function calculateDistance(movingPath) {

    let totalDistance = 0
    let lat1 = movingPath[movingPath.length - 2].lat;
    let lng1 = movingPath[movingPath.length - 2].lng;

    let lat2 = movingPath[movingPath.length - 1].lat;
    let lng2 = movingPath[movingPath.length - 1].lng;

    const R = 6371; // 지구의 반지름 (km)
    let dLat = deg2rad(lat2 - lat1);
    let dLng = deg2rad(lng2 - lng1);

    //오차범위 수정
    if(dLat < 0.01 || dLng < 0.01){
        let a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let distance = R * c; // 거리 (km)
        distance = Math.round(distance*1000) //거리 단위 m으로 변환, round
        totalDistance = totalDistance + distance 
        return totalDistance; 
    }

}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}
