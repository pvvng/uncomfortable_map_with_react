
# 실시간 위치 추적 지도 - 🗺️ 불편한 지도 README

## 1. 설치 방법

### click and install 👉 [불편한 지도](https://uncomfortable-map-with-react.vercel.app/)

<details>
  <summary>window 환경에서 설치하기</summary>
  <div align = 'center'>
    <img src='https://github.com/pvvng/uncomfortable_map_with_react/assets/112927193/bd517aa8-ce77-40d7-afc0-84742f20f196' width='50%' />
  </div>
</details>

<details>
  <summary>ios 환경에서 설치하기</summary>
  <div>
    <img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/4a3d0958-72e5-48a2-ab56-52ac3f99ed0f' width='31%' />
        <img align='top' src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/1b0aa4ce-126b-4db6-8c85-1655f9edad7c' width='33%'/>
        <img align='top' src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/59db49ff-5b50-477a-afaa-1b86c2fb00dc' width = '33%'/>
  </div>
</details>

<details>
  <summary>android 환경에서 설치하기</summary>
  <div align='center'>
    <img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/99d8824b-ba02-4cf0-897d-430c45a55176' width='30%' />
  </div>
</details>

## 2. 개요
- 프로젝트 이름 : 실시간 위치 추적 지도 - 🗺️ 불편한 지도
- 개발 기간 : 2024.05.1 ~ 2024.05.22
- 개발 환경 : React, Redux toolkit
- 사용한 오픈 API : [Kakao 지도 API](https://apis.map.kakao.com/) , [공공데이터 날씨 API](https://www.data.go.kr/iim/api/selectAPIAcountView.do)
- 작업 관리 : Git (GitFlow)
- 배포 : Vercel  
- #### installed Library

        npm install react-kakao-maps-sdk
        npm install axios
        npm install @reduxjs/toolkit@1.8.1 react-redux
        npm install react-router-dom@6
        npm install react-bootstrap
        npm i --save @fortawesome/react-fontawesome
        npm install animate.css

## 3. 프로젝트 설명

- ##### React.js와 Kakao map API를 활용하여 제작한 실시간 위치 추적 지도 앱입니다.
  - 길치인 저는 지도 앱이 없으면 살아갈 수 없습니다. 구글링 중 자주 사용하는 카카오 지도의 오픈 API가 있다는 사실을 알게 되었고, 이를 활용해서 간단한 위치 추적 지도 어플을 만들어 보고자 하는 목표를 가지게 되었습니다.
 
- ##### 현재 날씨 공공데이터를 사용합니다.
  - 공공데이터 포털에서 특정 위치의 현재 날씨 데이터를 요청할 수 있는 오픈 API를 사용하여 사용자의 실시간 위치의 날씨 정보 확인이 가능하게 했습니다.
 
- ##### 서버리스 웹 사이트입니다.
  - 프론트엔드만으로 구현된 웹사이트입니다. 다만, localstorage 기능을 활용하여 사용자가 저장하고자 하는 이동 경로를 반영구적으로 저장 가능합니다. 저장한 이동 경로는 메인 페이지에서 버튼을 클릭하여 확인 가능합니다.
 
- ##### PWA
    - 실시간 위치 추적을 위해서는 사용자의 디바이스 이동이 필수적입니다. 그래서 사용자의 모바일 환경에 앱처럼 다운이 가능하게 만들고 싶었습니다. React Native 등의 앱 제작 기술을 알지 못하기에 대체 방안으로 PWA를 도입했습니다.
 
- ##### Git Flow
    - Git Flow 전략을 활용하여 프로젝트를 관리하고자 했습니다. Git을 활용한 버전 관리 전략을 미리 체득하는 것이 후일 큰 도움이 되리라 생각하여 최대한 Git Flow 전략의 흐름을 지키고자 노력하였습니다. 다만, realese, hotfix 브런치 사용은 위 프로젝트에 불필요한 사족이 되리라 판단하여 main, develop, feature 3개의 브런치만 이용하여 개발 진행 하였습니다.

## 4. 이용 방법과 주요 기능

## 5. 프로젝트 회고

- ### 5-1. 프로젝트 중 신경 쓴 부분

  - ##### 실시간 위치 데이터 전송 커스텀 훅
    - geolocation API를 활용한 실시간 위치 확인 커스텀 훅의 존재를 구글링을 통해 알게 되었습니다. 해당 커스텀 훅을 제대로 이해하고 사용하는 것이 프로젝트에 큰 이점이 될 것으로 판단하여, 커스텀 훅의 코드를 읽어보며 어떤 방식으로 동작하는지 이해하는 시간을 가졌습니다. 이는 커스텀 훅의 개념 및 사용, geolocation API의 동작, useRef 훅의 동작과 사용 목정 등을 이해하는 시간이 되었습니다.
    [velog](https://velog.io/@pvvng/%EC%BB%A4%EC%8A%A4%ED%85%80-%ED%9B%85-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)
    
  - ##### 카카오 맵 API 사용과 Redux 상태 관리, localStorage에 이동 경로 저장, 관리하기
    - React를 위한 카카오 맵 라이브러리를 도입하였습니다. 컴포넌트로 쉽게 카카오 맵 API를 사용하는 것이 정말 마음에 들었습니다. 공식 문서에 설명이 자세하게 적혀 있어서 사용에 큰 어려움은 없었던 걸로 기억합니다.
    - 실시간 위치 데이터를 전송하는 커스텀 훅을 통해 사용자의 위치를 파악하는 방식을 채택했습니다. 사용자의 위치는 프로젝트 전반에서 전역적으로 사용되어야 할 상태이기에 Redux store를 이용하여 상태 관리를 실시했습니다. 이 과정에서 Redux의 구독 상태에 대한 지식을 습득했습니다.
    - 프로젝트가 서버리스 웹페이지이기에 사용자의 이동 경로를 서버를 통해 저장하는 것은 불가능했습니다. 대체 방안으로 웹 브라우저 기능인 localstroage를 활용하여 사용자 이동 경로를 어레이 형태로 저장하여, 필요할 때 꺼내서 사용하는 방식을 사용했습니다. 
    [velog](https://velog.io/@pvvng/react-Kakao-map%EA%B3%BC-redux-%EA%B7%B8%EB%A6%AC%EA%B3%A0-localStorage)

  - ##### 공공데이터 API 활용
    - 날씨 공공데이터를 활용하기 위해 여러 과정을 거쳤습니다. 특히, get 요청을 보낼때 기재되어야 하는 위치 좌표 값과 날짜 값 등을 포맷팅 하는 과정을 거쳤습니다. 전송받은 날씨 데이터를 필요한 부분만 가공하여 화면에 보여줌으로서 성공적인 API 활용을 했다고 생각합니다.
    [velog](https://velog.io/@pvvng/%EA%B3%B5%EA%B3%B5%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0)

  - ##### 재사용 가능한 컴포넌트 / 함수
    - 이전에 진행한 토이 프로젝트 [불편한 가계부](https://github.com/pvvng/account_book_with_react) 에서 컴포넌트 구조화가 얼마나 중요한지 알게 되었습니다. 이번 프로젝트는 기획 단계에서 어떤 페이지에 어떤 기능이 필요한지, 어떤 함수가 전역적으로 사용될지를 노트에 적으면서 프로젝트 구조를 구체화했고, 그것을 프로젝트에 도입하면서 재사용이 가능한 컴포넌트와 함수를 제작했습니다. React 공부를 하면서 컴포넌트의 장점이 재사용이 가능하다는 것이라는 건 개념만 알고 있었고 실제로 장점이라 느낀 적은 없었는데, 이번 프로젝트에서 컴포넌트 / 함수 재사용의 위대함을 느꼈습니다. 코드를 짤 때 유사한 라인을 적는 것이 얼마나 피로한 일인지 알게 되었고, 이후에도 어떤 부분을 수정하면 더 깔끔한 코드를 만들 수 있을지 지속적으로 고민했습니다.
      
  - ##### 더 나은 사용자 경험
    - 위 프로젝트의 핵심 기능은 카카오맵 API와 현재 날씨 API와의 통신입니다. 통신이 제대로 되지 않았을 때의 에러 처리와, 통신이 길어질 경우를 대비한 사용자에게 로딩 상황을 보여주는 것이 중요한 요소가 될 것입니다. 이를 위해 bootstrap의 loading spinner를 로딩이 필요한 부분에 도입하여 웹이 동작 중이며, 통신이 진행 중이라는 것을 사용자에게 명시했습니다.


- ### 5-1. 프로젝트 중 어려웠던 부분 && 프로젝트의 아쉬운 부분
  - ##### 상태 관리 및 데이터 가공
    - 프로젝트에서 전역적으로 사용한는 상태가 2개 있었습니다. 사용자의 위치 정보를 구독하는 userLocation 과 사용자의 이동 경로를 구독하는 movingPath 상태입니다. userLocation에 경우 useWatchLocation 커스텀 훅을 활용하여 비교적 간단한 상태 관리가 가능했습니다. 다만, movingPath 상태의 경우 이동 경로 특성 상 지속적인 데이터 변경이 잦고, 카카오 맵 컴포넌트 형식에 맞게 데이터를 가공하여 저장해야 했기 때문에 해당 과정에서 어려움을 겪었습니다. 특히 setInteval()을 사용하여 지속적으로 사용자의 현재 위치 정보를 어레이에 push 했는데, 이 과정에서 clearInterval를 통한 초기화를 진행하지 않아 어레이에 값이 이상하게 저장되는 경우가 있었고, 이를 해결하는데 꽤 오랜 시간이 걸렸던 것으로 기억합니다.
  
  - ##### 위치 데이터 오차 범위 문제
    - 웹을 사용해보면 사용자 위치에 변화가 없음에도 위치 값이 변하는 경우가 생깁니다. useWatchLocation 훅에서 실시간 위치를 지속적으로 추적하기 때문에 발생하는 오류인데, 이를 해결하는 것에는 실패했습니다. 후일 사용자가 움직이지 않는 상태를 파악하는 함수도 짜서 도입하고 싶습니다.
      
  - ##### 성능 저하
    - 이동 모드 컴포넌트는 현재 이동 경로 상태를 확인하고, 변경 사항이 있으면 리렌더링을 통해 화면에 이동 경로선을 그려냅니다. 문제는 이동 경로가 3초에 한번 업데이트 되기 때문에 리렌더링이 매우 잦다는 것입니다. 테스트를 위해 웹을 사용하면서 성능 저하 문제를 체감한 적은 없지만, 후일 프로젝트 규모가 더 커진다면 이는 반드시 문제가 될 것이라 판단했습니다. 성능 최적화를 위해 useMemo, memo 도입을 고려 중입니다.

## 6. 후기
### 느낀 점
- 처음으로 오픈 API를 활용해서 만든 프로젝트입니다. 프로젝트를 하면서 무심하게 사용했던 앱들이 얼마나 경탄스러운 탄생물인지 깨닫게 됩니다. 언젠간 저도 누군가의 데스크탑, 핸드폰에 깔려서 사용되는 프로젝트를 만들 수 있겠죠? 화이팅입니다.
