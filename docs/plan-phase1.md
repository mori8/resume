# Phase 1 실행 계획: App Router 마이그레이션 및 기반 구축

## 1. 개요
기존 Pages Router 기반의 포트폴리오 사이트를 Next.js App Router로 마이그레이션하고, 디자인 리팩토링을 위한 기반(Tailwind, Framer Motion, I18n)을 마련합니다.

## 2. 작업 순서

### 2.1 의존성 및 환경 설정
- [ ] `framer-motion` 패키지 설치
- [ ] `next`, `react`, `react-dom` 최신 버전 확인 및 업데이트
- [ ] `tsconfig.json` 컴파일러 옵션 점검 (`"plugins": [{ "name": "next" }]` 등)

### 2.2 디렉토리 구조 재편
- [ ] `app/` 디렉토리 생성 (루트 레벨)
- [ ] `data/locales/` 디렉토리 확인 및 `en.json`, `ko.json` 초기 파일 생성
- [ ] 기존 `pages/` 디렉토리는 마이그레이션 완료 전까지 유지 (점진적 적용)

### 2.3 Tailwind CSS 설정
- [ ] `tailwind.config.js` 수정: `content` 배열에 `app/**/*.{js,ts,jsx,tsx}` 경로 추가
- [ ] `app/globals.css` 생성: Tailwind directives 및 커스텀 노이즈(Noise) 텍스처 CSS 추가

### 2.4 Root Layout 구현 (`app/layout.tsx`)
- [ ] 기본 HTML/Body 구조 정의
- [ ] 폰트 설정 (`next/font/google` 사용)
  - 영문/한글 모두 SUIT variable font 사용
- [ ] 메타데이터(Metadata API) 설정
- [ ] 클라이언트 상태 관리를 위한 `Providers` 컴포넌트(필요 시) 구성

### 2.5 네비게이션 및 다국어 시스템
- [ ] `components/layout/Navigation.tsx` 구현
  - 메뉴 항목: Projects, Publications, Experience, Education, CV
  - 언어 토글 버튼 (EN/KR State 관리)
- [ ] 다국어 텍스트 로딩 로직 구현 (간단한 JSON 로더 또는 Context)

### 2.6 메인 페이지 골격
- [ ] `app/page.tsx` 생성
- [ ] 기존 `pages/index.tsx`의 내용을 참고하여 App Router 호환 컴포넌트로 변환 (Phase 2에서 고도화, Phase 1은 렌더링 확인 위주)

## 3. 검증 계획
- [ ] `npm run dev`로 개발 서버 실행 시 오류 없음 확인
- [ ] `localhost:3000` 접속 시 App Router 기반 페이지 렌더링 확인
- [ ] Tailwind 스타일 및 폰트 적용 확인
- [ ] 네비게이션 바 언어 토글 작동 확인
