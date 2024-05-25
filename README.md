
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
- 프로젝트 이름 : 포켓몬 미니 팬 게임 - ⚡로켓단이되⚡
- 개발 기간 : 2024.05.14 ~ 2024.05.23
- 개발 환경 : Next.js, mongoDB, scss
- 사용한 오픈 API : [PokeApi](https://pokeapi.co/)
- 작업 관리 : Git (GitFlow)
- 배포 : Vercel  
- #### installed Library
        npm install next-auth
        npm install next-pwa
        npm install axios
        npm install mongodb
        npm i --save @fortawesome/react-fontawesome
        npm install animate.css

## 3. 프로젝트 설명

- ##### Next.js 를 활용하여 가볍게 즐길 수 있는 포켓몬스터 미니 팬게임입니다.
  - 구글링 중 포켓몬의 데이터를 받을 수 있는 API가 있다는 사실을 알게되었고, 반드시 이것을 활용하여 프로젝트를 진행하겠다고 결심했습니다. 포켓몬스터의 핵심 기능은 포켓몬을 몬스터로 포획하는 기능이라고 생각하기에 위 기능을 구현하는 것을 핵심 목표로 잡았습니다. 또한, 간단한 게임적인 요소를 삽입하였습니다.

- ##### 왜 Next 를 썼을까?
    > 가장 큰 이유는 프론트엔드와 백엔드 서버 간의 AJAX 비동기 통신의 이해를 위해서입니다.
      
    - 아직 백엔드와 협업 경험이 없기에 비동기 통신에 대한 개념적인 이해만 있고, 실제로 서버와 통신한 경험은 오픈 API 사용 외에는 전무했습니다. 이는 후일 타인과 협업시에 치명적인 결점이 될 수 있으리라고 판단했고, 백엔드와 통신 경험을 작게나마 경험해보는 것이 좋을 것이라 판단했습니다.
    - Next 는 React 프레임워크로 React와 유사한 문법으로 프론트엔드 개발이 가능하고, 같은 프로젝트 안에서 백앤드 개발도 가능합니다. 이 프로젝트를 통해 프론트엔드에서 백엔드와 어떻게 비동기 통신을 하는지 체득했습니다.
    - 또한, Next-auth를 이용한 소셜로그인이 정말 간편했기에 간편하게 로그인, 로그아웃 API 구현이 가능했습니다.

- ##### 왜 axios를 썼을까?
    - 자바스크립트 내장함수인 fetch 로도 충분히 비동기 통신이 가능합니다. 다만, axios의 JSON 자동 변환, 효과적인 에러 처리 등의 장점이 위 프로젝트에서 사용하기에 적합하다고 판단했습니다.
 
- ##### 왜 mongoDB를 썼을까?
    - mongoDB는 NoSQL 문서 지향 데이터 베이스로 데이터를 JSON 문서 형식으로 저장 가능합니다. 백엔드 개발에 대해 무지하기에 커뮤니티가 방대하여 정보를 얻기 쉽고, 문서 저장, 수정등의 관리가 편리한 mongoDB를 데이터베이스로 선택했습니다.
 
- ##### PWA
    - 모바일 환경에서도 이 프로젝트를 실행하는 것은 물론 실제 게임처럼 사용자 PC / 모바일 환경에 다운도 가능하게 만들고 싶었습니다. 이에 최적화된 기능은 PWA라고 생각합니다. PWA를 활용하여 네이티브 앱처럼 구동하는 웹을 제작하였습니다.
 
- ##### Git Flow
    - Git Flow 전략을 활용하여 프로젝트를 관리하고자 했습니다. Git을 활용한 버전 관리 전략을 미리 체득하는 것이 후일 큰 도움이 되리라 생각하여 최대한 Git Flow 전략의 흐름을 지키고자 노력하였습니다. 다만, realese, hotfix branch 사용은 위 프로젝트에 불필요한 사족이 되리라 판단하여 main, develop, feature 이 3개의 브런치만 이용하여 개발 진행 하였습니다.
    - 2024-05-24 / 로딩중 UX 개선을 위해 spinner를 도입하면서 hotfix branch를 활용하였습니다.

## 4. 이용 방법과 주요 기능

### 4-0 로그인 && 회원 탈퇴 && 로딩 페이지

##### 로그인

<div>
  <img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/e62c0135-0e58-4813-bb16-98bdb5f32b24' width='49%' height='400px'/>

  <img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/394c6247-5ea5-4a0f-9c52-45a15a17588e' width='49%' height='400px' />
</div>

- 로그인 버튼을 눌러서 회원가입하거나 로그인 할 수 있습니다.
- DB에서 현재 로그인 한 회원의 이메일이 존재하는지 확인하고 존재하면 바로 메인페이지로 이동합니다. 
- DB에 현재 로그인 한 회원의 이메일이 존재하지 않으면 회원가입 창을 보여주고, '나옹이' 스크립트를 보여줍니다.

##### 회원 탈퇴

<div align='center'>
    <img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/da1dfd17-5f2e-4716-9f1c-0e3fcdcb9c8e' width='49%'/>
</div>

  - 회원 탈퇴 버튼을 누르면 DB에 저장된 유저 관련 데이터가 모두 삭제됩니다.

##### 로딩 페이지

<div>
  <img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/e5a36325-ccab-44ce-bcb4-9b14f8687fa8' width='49%'/>

  <img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/705c10a9-ccba-4147-ab94-3b839a912f2a' width='49%' />
</div>

- 로딩페이지는 도감 페이지(/pokedex) 혹은 도감 상세페이지 (/pokedex/[detailid]) 로 이동할 때 호출됩니다. 로딩은 PokeApi 를 통한 데이터 get 요청이 완료되고, 전송된 데이터가 state에 저장되는 순간 종료됩니다. 왼쪽 사진은 도감 페이지로 이동할 때, 오른쪽 사진은 도감 상세페이지로 이동할 때 보이는 로딩 컴포넌트입니다.
  
----

### 4-1 마이페이지(/)

<div>
<img src = 'https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/40d7cced-9cbc-4593-8c0a-d1869ed845cd' width='49%'/>

<img src = 'https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/6fa0a463-9663-430b-b9c6-78a7ea4d04a3' width='49%' />  
</div>

- trip 페이지에서 잡은 포켓몬을 판매 가능합니다. 마이페이지의 '보유한 포켓몬' 탭에는 현재 보유중인 포켓몬을 보여줍니다. 이 탭에서 밀매 버튼을 클릭하면 500 골드와 악명 +1을 얻게되고, 해당 포켓몬은 DB에서 삭제됩니다. 또한, 밀매 버튼을 연속으로 클릭하는 것을 방지하기 위해 밀매 버튼을 클릭하면 모든 버튼을 잠시 안보이게 한 후, DB에서 포켓몬이 완전히 삭제된 후 다시 버튼을 보여줍니다.

- 마이페이지의 '보유 아이템' 탭에서는 현재 보유한 몬스터 볼들의 갯수를 알 수 있습니다. 더 구매하기 버튼을 누른다면 포켓몬 센터 페이지 (/trip/center) 페이지로 이동하고, 골드를 사용해 추가적인 몬스터볼 구매가 가능합니다.

----

### 도감페이지(/pokedex)

<div>
  <img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/8fe499dd-67fb-4b65-a7f8-17e88c7d58ab' width = '49%' />
  <img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/4d105fcc-a221-49a2-9521-f559b8997997' width = '49%' />

</div>

- 도감 페이지로 이동하면 PokeApi를 호출하여 50마리 포켓몬의 데이터를 불러옵니다. 불러온 데이터를 기반으로 포켓몬 카드를 html로 보여줍니다. 한번이라도 잡은 포켓몬은 흰색 바탕으로 보여주고, 잡은 적이 없는 포켓몬은 회색 바탕으로 보여줍니다.
  
- 도감 페이지 상단 검색 버튼을 클릭하여 도감 번호 혹은 이름으로 검색이 가능합니다.

<div align='center'>
<img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/51cb6319-12f3-4346-a04c-e944e1cd1801' width='49%' />
</div>

- 흰색 바탕의 포켓몬 카드를 클릭하면 상세 페이지로 이동합니다. 해당 페이지에서는 포켓몬의 구체적인 정보 확인이 가능합니다.  만약, 잡은적이 없는 포켓몬 카드를 클릭하면 alert 메시지를 띄웁니다.

----

### 여행페이지(/trip)

##### 여행지 페이지

<div>
  <img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/48159034-90ae-461e-80d6-2ed2f9e12c57' width='49%' />

<img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/872e2fb4-d8b4-4b2a-ab35-281021df29b9' width='49%' />

<img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/7d07fee2-1918-4eaa-a8fa-fbf5aed24674' width='49%' />

<img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/3c08806f-9010-4669-b4d7-74fc214c577e' width='49%' />
</div>

- 사용자는 trip 페이지 하단 버튼을 눌러 산, 바다, 시내 혹은 깊은 숲을 여행할 수 있습니다.
- 각 여행지에 맞는 서식지를 가진 포켓몬이 랜덤한 확률로 소환됩니다. (ex. 물가에 서식하는 포켓몬인 망나뇽은 바다 여행지에 소환됩니다. habitat.txt 파일에 해당 사항이 기재되어 있습니다.) 소환된 포켓몬은 각자 특수한 capture rate(잡을 확률) 을 가집니다.

<div align='center'>
<img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/323b2c59-0188-4ae4-8002-1daf55ed956b' width='50%'/> 
</div>

- 아주 드물게 전설의 포켓몬 (썬더, 파이어, 프리저, 뮤츠, 뮤) 가 출몰합니다. 이들은 서식지를 가리지 않으며 극도로 낮은 capture rate를 가집니다. 

<div>
<img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/dccc09b0-2723-4ff8-b021-a8230eafed50' width='49%'/>
<img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/033ba01c-af7d-4fc3-8bcb-488e3c5258aa' width='49%'/>  
</div>

- 상황에 맞게 어떤 몬스터 볼을 던질지 선택합니다. (기본 몬스터 볼 이외의 다른 몬스터 볼은 확률 증가의 효과가 존재합니다.)
- 사용자는 몬스터 볼을 던질때마다 javascript random() 함수를 통해서 1~100 사이 임의의 정수를 부여받습니다.
- 만약 부여받은 정수가 포켓몬의 capture rate보다 낮거나 같다면 포켓몬 포획을 성공적으로 마무리합니다. 이외의 상황에서 포켓몬은 도망갑니다.

##### 포켓몬 센터 페이지
<div align='center'>
<img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/e39e40bc-c3ca-4277-a5e4-8f55354fb122' width='49%'/>
</div>

- 포켓몬 센터 버튼을 클릭하면 몬스터볼 추가 구매를 할 수 있는 페이지(/trip/center)로 이동합니다. 구매 가능한 몬스터 볼의 최솟값은 0 입니다. input의 값을 직접 수정하거나, +, - 버튼을 클릭해서 몇개의 몬스터 볼을 구매할지 결정가능합니다.
- input의 default value는 0이고 input에는 숫자만 입력 가능하며 (+, - 사용불가), input값이 0 일때 사용자가 -버튼을 클릭하면 alert 메시지를 띄웁니다. 만약 사용자가 보유한 금액이 구매하고자 하는 금액보다 적으면 alert 메시지를 띄웁니다.

----

### 스크립트(/script)

<details>
  <summary>나옹이 스크립트</summary>
<div align='center'>
<img src = 'https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/14b30519-1151-4d93-9d3e-e094e4a44244' width='49%' />  
</div>

- 회원가입을 최초로 하면 나오는 스크립트입니다. 정확히는 사용자의 악명이 0이고, DB에 저장된 사용자의 스크립트 수치가 0일때 등장합니다. 해당 스크립트를 모두 읽으면 DB의 사용자 스크립트 수치가 1로 변경됩니다.

</details>

<details>
  <summary>비주기 스크립트</summary>
<div>
<img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/bf462b8a-338f-4a4c-a546-a537f3648f45' width='49%' />
<img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/02debeed-8e9b-4c78-943a-b9b2ca43f244' width='49%'/>
</div>

- 사용자의 악명이 50 이상이고, 스크립트 수치가 1일때 등장하는 스크립트입니다. 해당 스크립트가 종료되면 스크립트 수치가 2로 변화합니다. 또한, 스크립트에서 사용자는 특별한 퀘스트를 부여받게 됩니다.

</details>

<details>
  <summary>비주기의 퀘스트 스크립트</summary>
<div align='center'>
  <img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/078bb902-49ac-4247-b859-f843bc1869c7' width='49%' />
</div>

- 사용자의 악명이 50 이상이고, 스크립트 수치가 2일때, trip 페이지의 오박사의 연구실(/trip/DrOhS-lab) 페이지에 입장하면 등장하는 스크립트입니다. 비주기의 퀘스트 (3가지 포켓몬 찾기) 를 해당 스크립트에서 완료할 수 있습니다. 성공적으로 퀘스트를 완료하면 유저에게 1000원과 악명 5 가 부여됩니다. 스크립트 수치는 3이 됩니다

<div>
  <img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/445ab687-2b3b-4b53-9971-6fc00fbc784f' width='49%' height= '210px' />
    <img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/6723f173-7746-4575-afa8-d4520a959489' width='49%' height= '210px' />
</div>

- 또한, 위 스크립트 완료를 기점으로 오박사의 말풍선 내용이 변경됩니다.
  
</details>

<details>
  <summary>한지우 스크립트</summary>
  <div align='center'>
  <img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/93617145-e912-4076-adef-cb8797fdb2b4' width='49%' />
    
  </div>

- 사용자의 악명이 100이고, 스크립트 수치가 3일 때 등장하는 스크립트입니다. 해당 스크립트가 종료되면 스크립트 수치가 4가 됩니다. 마이페이지로 redirect 되는 다른 스크립트와는 다르게 위 스크립트는 바로 엔딩 스크립트로 redirect 됩니다.
  
</details>

<details>
  <summary>엔딩 스크립트</summary>
  <div align='center'>
<img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/d519f2f4-927c-4a22-8c32-0ea5abe44e53' width='49%' />
    
  </div>
  
- 마지막 스크립트로 사용자의 악명이 100이고, 스크립트 수치가 4일때 등장하는 스크립트입니다. 해당 스크립트가 종료되면 사용자의 스크립트 수치가 5가 됩니다. 
  
</details>

## 5. 프로젝트 회고

- ### 5-1. 프로젝트 중 신경 쓴 부분

  - ##### 비동기 통신
    - 프로젝트의 목표가 비동기 통신의 이해였던 만큼 비동기 통신의 적극적 활용을 지향했습니다. fetch, axios 비동기 통신이 어떻게 동작하고 무엇을 반환하는지 받은 데이터의 가공과 저장 방법과 FE와 BE의 통신 방법과 REST API 를 이해하는 시간이 되었습니다. 또한, Promise, async, await 개념을 잘 알고 있다고 생각했는데, 막상 프로젝트에서 사용하려니까 제 공부가 헛되었다는 것을 깨달았습니다. 해당 프로젝트의 핵심 기능이 API를 통한 데이터 호출이었기에 이 3개 개념을 이해하는것은 필수였고, 처음부터 다시 공부하는 시간을 제대로 이해하는 시간을 가져야만 했습니다.
    - 저는 챗지피티를 활용한 나름의 공부법을 활용했습니다. 과정을 간략하게 말씀드리자면 제 코드에서 문제가 되는 부분이나 오류가 발생의 원인으로 추정되는 부분을 뽑고, 스스로 원인 추정을 한 다음 챗지피티의 의견을 묻습니다. 이 과정에서, 챗지피티가 하는 말은 믿어선 안된다. 라는 믿음을 가지고 구글링으로 얻은 다른 자료들과 교차 검증을 거쳤습니다. 교차 검증 후에 코드를 수정해보고 제대로 동작한다면 원인 분석을 시작했습니다. 
    - 가장 오랫동안 고민한 코드인 fetchData 코드의 핵심 기능을 정리한 링크입니다.
    - [fetchData 함수](https://velog.io/@pvvng/async%EC%99%80-await-Promise-%EB%B9%84%EB%8F%99%EA%B8%B0-%ED%86%B5%EC%8B%A0)

  - ##### 재사용 가능한 컴포넌트 / 함수
    - 이전에 진행한 토이 프로젝트 [불편한 가계부](https://github.com/pvvng/account_book_with_react) 에서 컴포넌트 구조화가 얼마나 중요한지 알게 되었습니다. 이번 프로젝트는 기획 단계에서 어떤 페이지에 어떤 기능이 필요한지, 어떤 함수가 전역적으로 사용될지를 노트에 적으면서 프로젝트 구조를 구체화했고, 그것을 프로젝트에 도입하면서 재사용이 가능한 컴포넌트와 함수를 제작했습니다. React 공부를 하면서 컴포넌트의 장점이 재사용이 가능하다는 것이라는 건 개념만 알고 있었고 실제로 장점이라 느낀 적은 없었는데, 이번 프로젝트에서 컴포넌트 / 함수 재사용의 위대함을 느꼈습니다. 코드를 짤 때 유사한 라인을 적는 것이 얼마나 피로한 일인지 알게 되었고, 이후에도 어떤 부분을 수정하면 더 깔끔한 코드를 만들 수 있을지 지속적으로 고민했습니다.
      
  - ##### 더 나은 사용자 경험
    - 위 프로젝트는 비동기 통신을 적극적으로 활용하기에 사용자에게 로딩 상황을 보여주는 것이 중요하다고 생각합니다. 네트워크 환경과 서버 환경에 따라 통신 속도는 크게 달라질 수 있기에 사용자가 피로감을 느끼지 않을 수 있도록 **사용자의 요청이 진행중이다** 라는 것을 확실하게 보여주고 싶었습니다. 따라서 bootstrap의 loading spinner를 로딩이 필요한 부분에 도입하였습니다.

    <div align='center'>
      <img src='https://github.com/pvvng/account_book_with_react/assets/112927193/6e0bcc15-ad69-4e75-b018-2eb01b557fb9' width='49%'/>
      <img src='https://github.com/pvvng/account_book_with_react/assets/112927193/94511282-1899-42d3-8e5b-f542bb1e9202' width='49%'/>
    </div>

- ### 5-1. 프로젝트 중 어려웠던 부분 && 프로젝트의 아쉬운 부분

  - ##### Next.js
    - 프로젝트 기획 의도가 **React를 사용하여 프로젝트를 진행할 때, 비동기 통신이 내 발목을 잡아서는 안된다!** 였기 때문에 프로젝트 기획 당시 Next는 React의 대체품 정도였습니다. 하지만 프로젝트를 진행하면서 Next의 매력을 알아버리고 말았습니다. 특히, SSR에 최적이며 SEO에 특화된 Next 프레임워크이기에 그러한 장점을 활용하지 못하는 점이 아쉽습니다. 추후 이러한 Next의 장점을 살려보는 프로젝트를 기획해보고 싶습니다. 그리고, Next의 App Router 기능을 이용하면서 SPA 패러다임을 구현하지 못한 부분도 아쉽게 다가옵니다. 
      
  - ##### 성능 문제
    - 도감 페이지에 최초 접속할 때, 데이터를 최초로 추가 호출할 때, PokeApi로 부터 데이터를 받아오는 과정이 꽤나 오래 걸립니다. 이후 접속시에는 axios의 cache : 'force-cache' 기능을 통해 데이터 요청 대신 캐싱된 결과를 사용함으로 데이터 호출 시간을 비약적으로 줄일 수 있지만, 최초 접속시 시간이 오래 걸리는 것은 사용자 경험에 악영향을 미칠 것으로 판단됩니다.
   
  - #### 오류 기록
    - 프로젝트를 하면서 발생한 오류들의 해결과정을 기록해두지 않아서 너무 아쉽습니다. 반드시 기억해야 할 중요한 개념이나 코드 등은 블로그에 글로 정리해뒀지만, 그 외에의 것들은 기록해두지 않아 해결 과정을 제대로 기억하지 못합니다. 스스로 문제를 해결하는 것도 중요하지만, 그 해결 과정을 기록하는 것도 개발자의 중요한 자질입니다. 다음 프로젝트를 진행할 땐 블로그든 리드미든 기록하는 습관을 들여야겠습니다.
  - ##### PWA
    - Next로 만든 프로젝트를 배포하는 것은 처음이었는데, 낯선 개념이 많아 생각보다 애를 먹었습니다. 특히 App Router가 도입된 Next 13버전 이후엔 _document.js 파일을 사용해서 manifest 를 명시하는게 아니라, Layout.js의 <head></head> 태그 안에 명시해야 하는 것을 알아내는 과정이 복잡했습니다.
    - [PWA 배포 과정 정리](https://velog.io/@pvvng/Next.js-PWA-%EC%84%B8%ED%8C%85%ED%95%98%EA%B8%B0)

## 6. 후기
### 느낀 점
- 개인적으로 정말 재밌게 했던 프로젝트였습니다. 어렸을 때부터 즐겨 보던 포켓몬스터의 API가 있다는 사실도 신기했고, 그 데이터로 저만의 무언가를 만들 수 있다는 사실이 행복했습니다. 오류가 발생할 때마다 머리를 쥐어뜯으며 해결하는 과정도 지금 생각해보면 재밌었습니다. 정확히는 오류를 해결하는 것이 즐거웠던 걸지도 모르겠네요. 이번 프로젝트 목표였던 AJAX 통신 이해도 어느정도 달성한 것 같아서 꽤 만족합니다. 긴 글 읽어주셔서 감사합니다.

