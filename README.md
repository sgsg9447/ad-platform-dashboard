## 1. 프로젝트 설치 및 실행

```
git clone https://github.com/sgsg9447/ad-platform-dashboard.git

npm i
npm run server
npm start  

```

## 2. 프로젝트 소개

주제: 광고 플랫폼 대시보드

프로젝트 기간: 2022.07.14 ~ 2022.07.20

## 3. 기술 스택
react type-script styled-components axios json server recoil

## 4. 기술스택
typescript json-server recoil styled-components styled-reset react-hook-form react-router-dom mui

## 5. 역할 분담

1. 대시보드 페이지

| 팀원 이름                               | 기능                                                                                                     |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [이유미](https://github.com/ymStudyLog) | 대시보드 차트 구현 |
| [김연진](https://github.com/yunjink)    | 통합관리 테이블 구현 |

2. 광고관리 페이지 

| 팀원 이름                               | 기능                                                                                                     |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [김슬기](https://github.com/sgsg9447)   | 광고카드 보여주기, 수정, 삭제, 생성(CRUD) |

## 6. 광고관리 페이지 상세 제작 과정
[1일차](https://velog.io/@sgsg9447/%EA%B4%91%EA%B3%A0-%ED%94%8C%EB%9E%AB%ED%8F%BC-%EB%8C%80%EC%8B%9C%EB%B3%B4%EB%93%9C-%EA%B3%BC%EC%A0%9C-1%EC%9D%BC%EC%B0%A8-%EC%B4%88%EA%B8%B0-%EC%85%8B%ED%8C%85-%EB%B0%8F-json-server-%EA%B5%AC%EC%B6%95)
[2일차](https://velog.io/@sgsg9447/%EA%B4%91%EA%B3%A0-%ED%94%8C%EB%9E%AB%ED%8F%BC-%EB%8C%80%EC%8B%9C%EB%B3%B4%EB%93%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-2%EC%9D%BC%EC%B0%A8-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%97%B0%EA%B2%B0)
[3일차](https://velog.io/@sgsg9447/220718)
[4일차](https://velog.io/@sgsg9447/%EA%B4%91%EA%B3%A0-%ED%94%8C%EB%9E%AB%ED%8F%BC-%EB%8C%80%EC%8B%9C%EB%B3%B4%EB%93%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%A2%85%EB%A3%8C-%ED%9B%84-%ED%9A%8C%EA%B3%A0)

## 7. 프로젝트 구조

```
database
 ┣ database.json
src
 ┣ api
 ┃ ┗ api.ts
 ┣ components
 ┃ ┣ admanagement
 ┃ ┃ ┣ AdCreateItem.tsx
 ┃ ┃ ┣ AdItem.tsx
 ┃ ┃ ┗ AdList.tsx
 ┃ ┗ dashboard
 ┃ ┃ ┣ channelStatus
 ┃ ┃ ┃ ┣ BasicTable.tsx
 ┃ ┃ ┃ ┣ ChannelStatus.tsx
 ┃ ┃ ┃ ┗ StackedBarChart.tsx
 ┃ ┃ ┗ totalAdStatus
 ┃ ┃ ┃ ┣ LegendItem.tsx
 ┃ ┃ ┃ ┗ TotalAdStatus.tsx
 ┣ layouts
 ┃ ┣ DefaultLayout.tsx
 ┃ ┣ Dropdown.tsx
 ┃ ┣ DropdownItem.tsx
 ┃ ┣ Header.tsx
 ┃ ┗ Sidebar.tsx
 ┣ models
 ┃ ┣ types
 ┃ ┃ ┗ index.d.ts
 ┃ ┣ useAdListModel.ts
 ┃ ┗ useFormatModel.ts
 ┣ pages
 ┃ ┣ AdManagement.tsx
 ┃ ┗ Dashboard.tsx
 ┣ router
 ┃ ┗ Router.tsx
 ┣ store
 ┃ ┣ atom.ts
 ┃ ┣ dateAtom.ts
 ┃ ┣ queryAtom.ts
 ┃ ┗ statusAtom.ts
 ┣ styles
 ┃ ┗ Item.tsx
 ┣ App.css
 ┣ App.tsx
 ┣ index.css
 ┣ index.tsx
 ┣ react-app-env.d.ts
 ┗ setupTests.ts
```
