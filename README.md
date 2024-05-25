
# 실시간 위치 추적 지도 - 🗺️ 불편한 지도 README

## 1. 설치 방법

### click and install 👉 [불편한 지도](https://uncomfortable-map-with-react.vercel.app/)

<details>
  <summary>window 환경에서 설치하기</summary>
  <div align = 'center'>
    <img src='https://github.com/pvvng/pvvng.github.io/assets/112927193/85f131a5-41ae-496e-aa15-5db551236de4' width='33%' />
    <img src='https://github.com/pvvng/pvvng.github.io/assets/112927193/34e7f2a3-dbcd-484a-8136-89aff62374d1' width='33%' />
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
 
- ##### PWA
    - 실시간 위치 추적을 위해서는 사용자의 디바이스 이동이 필수적입니다. 그래서 사용자의 모바일 환경에 앱처럼 다운이 가능하게 만들고 싶었습니다. React Native 등의 앱 제작 기술을 알지 못하기에 대체 방안으로 PWA를 도입했습니다.
 
- ##### Git Flow
    - Git Flow 전략을 활용하여 프로젝트를 관리하고자 했습니다. Git을 활용한 버전 관리 전략을 미리 체득하는 것이 후일 큰 도움이 되리라 생각하여 최대한 Git Flow 전략의 흐름을 지키고자 노력하였습니다. 다만, realese, hotfix branch 사용은 위 프로젝트에 불필요한 사족이 되리라 판단하여 main, develop, feature 이 3개의 브런치만 이용하여 개발 진행 하였습니다.

## 4. 이용 방법과 주요 기능

## 5. 프로젝트 회고

- ### 5-1. 프로젝트 중 신경 쓴 부분

  - ##### 카카오 맵 API 사용과 Redux 상태 관리, localStorage에 이동 경로 저장, 관리하기
    [velog](https://velog.io/@pvvng/react-Kakao-map%EA%B3%BC-redux-%EA%B7%B8%EB%A6%AC%EA%B3%A0-localStorage)
  - ##### 공공데이터 API 활용
    [velog](https://velog.io/@pvvng/%EA%B3%B5%EA%B3%B5%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0)
  - ##### 커스텀 훅
    [velog](https://velog.io/@pvvng/%EC%BB%A4%EC%8A%A4%ED%85%80-%ED%9B%85-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)
  - ##### 재사용 가능한 컴포넌트 / 함수
    - 이전에 진행한 토이 프로젝트 [불편한 가계부](https://github.com/pvvng/account_book_with_react) 에서 컴포넌트 구조화가 얼마나 중요한지 알게 되었습니다. 이번 프로젝트는 기획 단계에서 어떤 페이지에 어떤 기능이 필요한지, 어떤 함수가 전역적으로 사용될지를 노트에 적으면서 프로젝트 구조를 구체화했고, 그것을 프로젝트에 도입하면서 재사용이 가능한 컴포넌트와 함수를 제작했습니다. React 공부를 하면서 컴포넌트의 장점이 재사용이 가능하다는 것이라는 건 개념만 알고 있었고 실제로 장점이라 느낀 적은 없었는데, 이번 프로젝트에서 컴포넌트 / 함수 재사용의 위대함을 느꼈습니다. 코드를 짤 때 유사한 라인을 적는 것이 얼마나 피로한 일인지 알게 되었고, 이후에도 어떤 부분을 수정하면 더 깔끔한 코드를 만들 수 있을지 지속적으로 고민했습니다.
      
  - ##### 더 나은 사용자 경험
    - 위 프로젝트는 비동기 통신을 적극적으로 활용하기에 사용자에게 로딩 상황을 보여주는 것이 중요하다고 생각합니다. 네트워크 환경과 서버 환경에 따라 통신 속도는 크게 달라질 수 있기에 사용자가 피로감을 느끼지 않을 수 있도록 **사용자의 요청이 진행중이다** 라는 것을 확실하게 보여주고 싶었습니다. 따라서 bootstrap의 loading spinner를 로딩이 필요한 부분에 도입하였습니다.


- ### 5-1. 프로젝트 중 어려웠던 부분 && 프로젝트의 아쉬운 부분



## 6. 후기
### 느낀 점
- 개인적으로 정말 재밌게 했던 프로젝트였습니다. 어렸을 때부터 즐겨 보던 포켓몬스터의 API가 있다는 사실도 신기했고, 그 데이터로 저만의 무언가를 만들 수 있다는 사실이 행복했습니다. 오류가 발생할 때마다 머리를 쥐어뜯으며 해결하는 과정도 지금 생각해보면 재밌었습니다. 정확히는 오류를 해결하는 것이 즐거웠던 걸지도 모르겠네요. 이번 프로젝트 목표였던 AJAX 통신 이해도 어느정도 달성한 것 같아서 꽤 만족합니다. 긴 글 읽어주셔서 감사합니다.

