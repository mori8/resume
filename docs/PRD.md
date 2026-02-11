# PRD: namsuyeon.me 포트폴리오 리팩토링

## 1. 프로젝트 개요

**목표**: 기존 정적 이력서 사이트(namsuyeon.me)를 미니멀하고 인터랙티브한 포트폴리오로 리팩토링

**타겟 오디언스**: 트렌디한 역량을 요구하는 테크/디자인 기업의 채용 담당자 및 동료 연구자

**핵심 콘셉트**: 미니멀 + 도시적 + 노이즈 텍스처. 각 페이지는 스크롤 없이 하나의 뷰포트 안에서 완결 (프로젝트 상세 페이지 제외). 아스키 아트 고양이가 도슨트처럼 이스터에그 코멘트를 제공.

---

## 2. 기술 스택

| 항목 | 선택 | 비고 |
|------|------|------|
| Framework | Next.js (기존 유지) | App Router 사용 |
| Styling | Tailwind CSS (기존 유지) | CSS grain effect 추가 |
| Animation | Framer Motion | 페이지 전환, 호버 효과, 고양이 대사 애니메이션 |
| Language | TypeScript | 타입 안정성 |
| Deployment | Vercel (기존 유지) | |
| Content Management | JSON/YAML 기반 데이터 파일 | 프로젝트 추가/수정 용이 |

---

## 3. 사이트 구조

### 3.1 페이지 맵

```
/                    → 메인 (About + Projects 그리드)
/projects/[slug]     → 프로젝트 상세 페이지 (동적 라우팅)
/publications        → 논문 목록
/experience          → 근무 경력
/education           → 학력 및 수상
/cv                  → CV PDF 뷰어 + 다운로드
```

### 3.2 네비게이션

- 상단 고정 네비게이션 바
- 메뉴 항목: Projects, Publications, Experience, Education, CV
- 우측에 언어 토글 (EN / KR)
- 현재 페이지 표시 (subtle indicator)

### 3.3 다국어 지원

- 영어(EN) / 한국어(KR) 전환
- 상단 네비게이션의 토글 버튼으로 전환
- 전환 시 페이지 새로고침 없이 콘텐츠만 교체
- 언어별 콘텐츠는 별도 JSON 파일로 관리 (`locales/en.json`, `locales/ko.json`)

---

## 4. 페이지별 상세 스펙

### 4.1 메인 페이지 (`/`)

**레이아웃**: 뷰포트 1장에 완결, 스크롤 없음

**구성요소**:
- **About 영역**: 이름, 직함(HCI Researcher & Developer), 한 줄 소개, 연락처/링크(Email, GitHub, LinkedIn)
- **Projects 그리드**: 2×3 균등 그리드, 총 6개 프로젝트
  - MindStock
  - ChatMedi
  - 새라 (Saera)
  - NotiNote
  - GOODLIFELAB - 보고서 자동화
  - GOODLIFELAB - 바라던 바다 테스트
- 각 그리드 아이템: 썸네일 이미지 + 프로젝트명 + 기술 태그
- 호버 시: 썸네일에 미세한 확대 또는 오버레이 효과
- 클릭 시: `/projects/[slug]`로 이동

### 4.2 프로젝트 상세 페이지 (`/projects/[slug]`)

**레이아웃**: 이 페이지만 스크롤 허용

**구성요소**:
- 프로젝트명 + 기간
- 한 줄 요약
- 기술 스택 태그
- 팀 구성 (해당 시)
- 프로젝트 개요 (문제-해결-성과 구조)
- 내 역할 상세
- 스크린샷 / 데모 영상
- 관련 링크 (GitHub, Demo, 논문 등)

**데이터 구조 예시**:
```json
{
  "slug": "mindstock",
  "title": { "en": "MindStock", "ko": "MindStock" },
  "period": "2025.05 - 2025.09",
  "summary": {
    "en": "A mock investment mobile app...",
    "ko": "투자자의 성찰을 돕는 모의 투자..."
  },
  "techStack": ["React Native", "Firebase", "..."],
  "role": { "en": "...", "ko": "..." },
  "details": { "en": "...", "ko": "..." },
  "images": ["mindstock-01.png", "mindstock-02.png"],
  "links": { "github": "...", "demo": "...", "paper": "..." }
}
```

### 4.3 Publications 페이지 (`/publications`)

**레이아웃**: 뷰포트 1장 완결

**구성요소**: 논문 리스트 (4편)
- 각 항목: 제목, 저자 (본인 이름 강조), 학회/저널명, 연도, 링크(DOI 등)
- 논문 목록:
  1. DIS PWiP 2025 (1저자) — AI-Mediated Interventions for Emotionally Biased Investors
  2. NeurIPS 2025 Poster (2저자) — PANORAMA Dataset
  3. IJHCS 2026 — Feed-O-Meter
  4. ACL Industry Track 2025 (2저자) — LLM-Based Virtual Teaching Assistant

### 4.4 Experience 페이지 (`/experience`)

**레이아웃**: 뷰포트 1장 완결

**구성요소**:
- GOODLIFELAB (2022.02 - 2022.12) Full-Stack Software Engineer
  - 보고서 생성 자동화 시스템: 문제-해결-성과
  - 바라던 바다 테스트: 문제-해결-성과

### 4.5 Education 페이지 (`/education`)

**레이아웃**: 뷰포트 1장 완결

**구성요소**:
- 학력: KAIST 석사 (2024.03 - 2026.02), 숙명여대 학사 (2019.03 - 2024.02)
- 수상 및 실적: Solution Challenge, 국가우수장학금, GDSC Outstanding Lead, 최우등졸업 등
- 보유 기술: Programming, Qualitative Research, Design

### 4.6 CV 페이지 (`/cv`)

**레이아웃**: 뷰포트 1장 완결

**구성요소**:
- 인라인 PDF 뷰어 (업로드된 CV PDF 표시)
- 뷰어 내 다운로드 버튼
- react-pdf 또는 iframe 기반 구현

---

## 5. 아스키 고양이 도슨트

### 5.1 기본 스펙

- **위치**: 화면 우측 하단 고정 (CSS `position: fixed`)
- **형태**: 아스키 아트 고양이 (작은 사이즈, ~4-5줄)
- **표시 조건**: 데스크탑 전용 (모바일에서는 숨김)

### 5.2 인터랙션 흐름

1. **기본 상태**: 고양이만 표시, 대사 없음
2. **호버 트리거**: 특정 이스터에그 요소에 마우스를 올리면 대사 버블 표시
3. **대사 버블 등장**: fade-in 애니메이션 (opacity 0 → 0.5 → 1, 최소 2단계 전환)
4. **대사 유지**: 호버가 유지되는 동안 대사 표시
5. **대사 퇴장**: 호버가 해제되면 fade-out (1 → 0.5 → 0)

### 5.3 대사 톤 & 예시

**톤**: 시크하면서 귀여운 고양이. 3인칭으로 주인을 소개하는 느낌.

예시 (한국어):
- MindStock 호버: "이거 만드느라 6주 동안 참가자 20명을 매일 관리했대요."
- NotiNote 호버: "구글 개발자 유튜브에도 나왔다냥."
- 바라던 바다 테스트 호버: "3일 만에 5만 명이 했대요... 서버 안 터진 게 신기하다냥."
- GPA 호버: "4.0이래요. 대단하다냥."

예시 (영어):
- MindStock hover: "She managed 20 participants for 6 weeks straight."
- NotiNote hover: "This one got featured on Google Developers YouTube."

### 5.4 기술 구현

- Framer Motion의 `AnimatePresence` + `motion.div`로 대사 버블 애니메이션
- 전환 duration: 300-400ms, ease-in-out
- 고양이 컴포넌트는 전역 레이아웃에 배치 (모든 페이지에서 표시)
- 대사 데이터는 별도 JSON 파일로 관리
- 호버 대상 요소에 `data-cat-message` 속성으로 대사 ID 매핑

---

## 6. 비주얼 디자인 방향

### 6.1 무드

- **미니멀 + 도시적 + 노이즈**
- 깔끔한 구조에 약간의 raw한 텍스처 (grain/noise)
- 텍스트 중심, 여백 활용

### 6.2 컬러

- 기본: 모노톤 베이스 (흰/오프화이트 배경 + 다크 텍스트)
- 악센트: 1가지 포인트 컬러 (추후 확정)
- 노이즈 오버레이: CSS SVG filter 기반 grain effect

### 6.3 타이포그래피

- 개성 있는 디스플레이 폰트 + 가독성 좋은 본문 폰트
- 한글/영문 모두 지원하는 폰트 페어링 필요
- 후보 (추후 확정):
  - 디스플레이: Playfair Display, Instrument Serif 등
  - 본문(영문): Satoshi, General Sans 등
  - 본문(한글): Pretendard, SUIT 등

### 6.4 노이즈 텍스처 (CSS 구현)

```css
/* grain effect 예시 */
.noise::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,..."); /* SVG noise pattern */
  opacity: 0.03-0.05;
  pointer-events: none;
  z-index: 9999;
}
```

### 6.5 모션 원칙

- 과하지 않되 존재감 있는 애니메이션
- 페이지 전환: 부드러운 fade 또는 slide
- 호버 효과: 미세한 scale, opacity 변화
- 모든 전환은 최소 2단계 (0→0.5→1 수준의 부드러움)
- duration: 200-400ms, easing: ease-in-out

---

## 7. 반응형 디자인

### 데스크탑 (1024px+)
- 전체 레이아웃 적용
- 고양이 도슨트 표시
- Projects 그리드: 3열

### 태블릿 (768px - 1023px)
- 네비게이션 유지
- 고양이 도슨트 숨김
- Projects 그리드: 2열
- 일부 페이지 스크롤 허용 가능

### 모바일 (< 768px)
- 햄버거 메뉴 또는 하단 네비게이션
- 고양이 도슨트 숨김
- Projects 그리드: 1열
- 스크롤 허용

---

## 8. 콘텐츠 데이터 구조

### 파일 구조
```
/data
  /projects
    mindstock.json
    chatmedi.json
    saera.json
    notinote.json
    goodlifelab-report.json
    goodlifelab-test.json
  /locales
    en.json          # 영문 UI 텍스트 + About 등
    ko.json          # 한글 UI 텍스트 + About 등
  cat-messages.json  # 고양이 도슨트 대사
  publications.json  # 논문 목록
  experience.json    # 근무 경력
  education.json     # 학력, 수상, 기술
```

---

## 9. 개발 우선순위

### Phase 1: 기반 구축
- [ ] Next.js 프로젝트 구조 재설정 (App Router)
- [ ] Tailwind + Framer Motion 설정
- [ ] 네비게이션 컴포넌트 (언어 토글 포함)
- [ ] 레이아웃 시스템 (뷰포트 완결 레이아웃)
- [ ] 노이즈 텍스처 CSS
- [ ] 다국어 시스템 구축

### Phase 2: 메인 페이지
- [ ] About 섹션
- [ ] Projects 그리드 (썸네일 + 호버 효과)
- [ ] 페이지 전환 애니메이션

### Phase 3: 서브 페이지
- [ ] Publications 페이지
- [ ] Experience 페이지
- [ ] Education 페이지
- [ ] CV 뷰어 페이지

### Phase 4: 프로젝트 상세
- [ ] 동적 라우팅 설정
- [ ] 상세 페이지 템플릿
- [ ] 각 프로젝트별 콘텐츠 채우기

### Phase 5: 고양이 도슨트
- [ ] 아스키 아트 고양이 컴포넌트
- [ ] 대사 버블 애니메이션
- [ ] 호버 트리거 시스템
- [ ] 이스터에그 대사 콘텐츠 작성

### Phase 6: 마무리
- [ ] 반응형 최적화
- [ ] SEO 메타태그
- [ ] OG 이미지
- [ ] 퍼포먼스 최적화
- [ ] 최종 테스트 및 배포

---

## 10. 참고 사항

- 기존 레포(github.com/mori8/resume)를 베이스로 리팩토링
- 바이브 코딩으로 진행 (단계별로 구현하며 조정)
- 프로젝트 상세 페이지의 구체적 구성은 프로젝트별로 별도 논의
- 폰트, 악센트 컬러 등 비주얼 디테일은 구현 단계에서 확정