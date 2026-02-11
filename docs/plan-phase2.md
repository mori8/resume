# Phase 2 실행 계획: 메인 페이지 UI 구현

## 1. 개요
PRD 4.1항에 정의된 메인 페이지(`/`)의 About 섹션과 Projects 그리드를 구현합니다. 뷰포트 1장에 완결되는 레이아웃을 지향하며, Framer Motion을 활용한 애니메이션을 적용합니다.
**구체적인 디자인 레이아웃과 타이포그래피는 `docs/image.png`를 참고하여 구현합니다.**

## 2. 작업 순서

### 2.1 데이터 구조 정의
- [ ] `types/index.ts` 정의 (Project, SocialLink 등 타입)
- [ ] `data/projects/` 내 JSON 파일 아카이빙 또는 구조화
  - `data/projects-summary.json`: 메인 페이지 그리드용 요약 데이터 (썸네일 경로 포함)
  - `data/profile.json`: 프로필 데이터 (이름, 직함, 소개, 스킬, 연락처)

### 2.2 메인 레이아웃 (`app/page.tsx`)
- [ ] **뷰포트 완결형 레이아웃**: `h-[calc(100vh-64px)]` (네비게이션 제외 높이)
- [ ] **2-Column 구조 (Desktop)**:
  - **Left (40~50%)**: `IntroSection` (프로필, 소개, 스킬)
  - **Right (50~60%)**: `ProjectGrid` (2x3 그리드)
- [ ] 반응형 처리: 모바일/태블릿에서는 스크롤 허용 또는 Stack 구조로 변경

### 2.3 Intro Section (`components/home/IntroSection.tsx`)
- [ ] 프로필 이미지 (`/public/images` 활용)
- [ ] 타이포그래피 계층 구조: 국문 이름 + 영문 이름, 직함, 연락처
- [ ] 소개글 및 스킬 리스트 (Programming, Qualitative research, Design)

### 2.4 Projects Grid (`components/home/ProjectGrid.tsx`)
- [ ] **Grid Layout**: 2열 x 3행 (Desktop), `gap` 조정하여 한 화면에 맞춤
- [ ] **Project Card**:
  - 비율 유지된 썸네일 (`/public/images` 활용)
  - 호버 시 오버레이/텍스트 표시 (Framer Motion)

## 3. 디자인 디테일 (From PRD)
- **Mood**: 미니멀 + 도시적 + 노이즈 텍스처 (기적용)
- **Grid**:
  - Desktop: 3열
  - Tablet: 2열
  - Mobile: 1열
- **Interaction**: 카드 호버 시 부드러운 전환 (Duration 200-400ms)

## 4. 검증 계획
- [ ] 반응형 브레이크포인트별 레이아웃 확인 (데스크탑/태블릿/모바일)
- [ ] 데이터 바인딩 정확성 확인 (JSON 데이터 수정 시 반영 여부)
- [ ] 애니메이션 부드러움 및 성능 확인
- [ ] 링크 이동 정상 작동 확인
