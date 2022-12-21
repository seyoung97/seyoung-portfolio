# Se Young's Portfolio

<br/>

# 소개

그동안 진행한 프로젝트들을 정리한 포트폴리오 사이트 입니다.
직접 디자인 및 기획하여 저만의 개성이 드러나도록 제작했습니다.
모든 데이터는 JSON형식으로 정리하여 적용했으며 React와 TypeScript를 기반으로 제작했습니다.

<br/>

# 기간

2022/11/28 ~ 2022/12/13

<br/>

# 링크

> 배포 링크: https://regal-sherbet-cf1b6b.netlify.app

> 회고록 링크: https://velog.io/@seeyong_0/포트폴리오-사이트-회고록

> 시연 영상 링크: https://www.youtube.com/watch?v=GvEnj2rMITI

<br/>

# 기술 스택

> TypeScript

> React

> Vite

> styled-component

> react-scroll

> react-player

<br/>

# 프로젝트 설치 및 실행 방법

✅ 설치방법

1. Node.JS를 다운받아 설치해주세요. vite를 사용하였기 때문에 최소 14.18 버전 이상이 요구됩니다. https://nodejs.org/

2. 리포지토리를 클론해주세요.

```
 git clone https://github.com/kkukileon305/playkeyboard.git
```

3. dependencies를 설치해주세요.

```
npm install
```

✅ 실행방법

1. 다음 명령어를 이용해 Dev server를 실행해주세요.

```
npm run dev
```

2. 브라우저에서 <http://localhost:5173>에 접속해주세요.

<br/>

# 주요 기능 및 설명

## ✅ 메인 페이지

![portfolio-about](https://user-images.githubusercontent.com/108709932/208818003-30e47bef-6e21-4293-bac6-6f13e5d8cfd6.gif)

- react-scroll라이브러리를 사용하여 Navigation Bar에 scroll event 적용
- About Me 섹션에 탭 UI 구현
- 프로젝트, 인턴쉽 리스트 구현

## ✅ 상세 페이지

- 프로젝트 상세 내용 JSON 형식으로 정리하여 적용, content 컴포넌트 재사용.
- 목차 UI 구현, react-scroll을 활용해 클릭시 해당 내용으로 이동
