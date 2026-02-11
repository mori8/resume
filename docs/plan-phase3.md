# Phase 3 Execution Plan: Sub-pages Implementation

## 1. 개요
PRD에 정의된 서브 페이지들(`/publications`, `/experience`, `/education`, `/cv`)을 구현합니다.
유저는 `public/resume-sooyohn-nam-202601.pdf`의 내용을 적극 활용하기를 요청했으며, 모든 콘텐츠는 **좌측 정렬(Left-aligned)** 디자인을 원칙으로 합니다.

## 2. 디자인 가이드라인
- **Alignment**: 모든 텍스트와 레이아웃 요소는 좌측 정렬 (Left-align).
- **Typography**: 메인 페이지의 IntroSection과 동일한 톤앤매너 유지.
- **Layout**: 뷰포트 1장 완결 원칙 유지 (필요 시에만 스크롤 허용).
- **Navigation**: 상단 네비게이션바 유지.

## 3. 작업 순서 및 상세 스펙

### 3.1 Data Preparation
- [ ] `data/` 디렉토리 내 JSON 파일 현행화
    - `public/resume-sooyohn-nam-202601.pdf`의 최신 내용을 반영하여 JSON 데이터 업데이트.
    - `publications.json`, `experiences.json`, `educations.json` 확인 및 보완.

### 3.2 Publications Page (`/publications`)
- **Source**: `data/publications.json` (기존 `honor_and_awards.json` 등 확인 필요, 없으면 생성)
- **Layout**:
    - 좌측 정렬된 리스트 형태.
    - 저자명에서 본인 이름 Bold 처리.
    - 학회/저널명, 연도, 링크(DOI/PDF) 포함.

### 3.3 Experience Page (`/experience`)
- **Source**: `data/experiences.json`
- **Layout**:
    - Timeline 형태보다는 깔끔한 리스트 형태의 좌측 정렬 디자인.
    - 회사명, 기간, 직함, 주요 성과(Bullet points) 표시.

### 3.4 Education Page (`/education`)
- **Source**: `data/educations.json`, `data/honor_and_awards.json`
- **Layout**:
    - 학력 섹션과 수상/기술 섹션을 구분하되, 심플한 좌측 정렬 배치.
    - **Education**: 학위, 학교, 기간, 전공.
    - **Achievements**: 수상 내역 리스트.
    - **Skills**: 프로그래밍, 연구, 디자인 스킬 나열.

### 3.5 CV Page (`/cv`)
- **Feature**:
    - PDF Viewer 구현 (iframe 또는 `react-pdf` 사용, PRD 4.6 참조).
    - 파일 경로: `/resume-sooyohn-nam-202601.pdf`
    - 다운로드 버튼 제공.
- **Layout**: 풀 사이즈 뷰어.

## 4. Verification Plan
### Automated Tests
- [ ] Build Check: `npm run build` 성공 여부 확인.
- [ ] Lint Check: `npm run lint` 확인.

### Manual Verification
- [ ] 각 페이지(`/publications`, `/experience`, `/education`, `/cv`) 접속 및 렌더링 확인.
- [ ] 모든 텍스트가 **좌측 정렬**되어 있는지 확인.
- [ ] 데이터가 PDF 내용과 일치하는지 대조.
- [ ] 반응형 동작 확인 (모바일/데스크탑).
- [ ] CV 페이지에서 PDF가 정상적으로 로드되고 다운로드 가능한지 확인.
