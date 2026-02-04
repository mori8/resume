# Phase 4 Execution Plan: Project Detail Pages Implementation

## 1. 개요
프로젝트 상세 페이지(`/projects/[slug]`)를 동적 라우팅으로 구현합니다.
유저의 요청에 따라 **직관적이고 미디어(이미지, 영상) 중심적인 레이아웃**을 구축하며, 실제 콘텐츠는 유저가 추후 채워넣을 수 있도록 구조를 잡고 더미 텍스트로 초기화합니다.

## 2. 디자인 및 기능 스펙

### 2.1 레이아웃 구조 (스크롤 허용)
- **Hero Section (최상단)**
    - **Full-width Hero Image**: 프로젝트의 썸네일(`thumbnail`)을 고해상도로 크게 배치 (Backdrop filter 적용 가능).
    - **Title & Metadata**: 이미지 위 또는 하단에 타이틀, 기간, 태그 오버레이.
- **Content Section (본문)**
    - **좌측 정렬(Left-aligned)** 텍스트 컨테이너 (max-width 설정).
    - **Overview**: 프로젝트 한 줄 요약 및 핵심 성과.
    - **Details**: 문제 정의, 해결 과정, 역할 등 (더미 텍스트).
    - **Media Gallery**: 스크린샷 그리드 또는 슬라이더.
    - **Video Player**: YouTube 링크나 비디오 파일이 있는 경우 `iframe` 또는 `<video>` 태그로 임베딩.
- **Footer**: 이전/다음 프로젝트 네비게이션.

### 2.2 데이터 구조 확장 (`data/projects-detail.json`)
기존 `projects-summary.json`은 요약본이므로, 상세 내용을 담을 데이터 구조를 정의하거나 `projects.json`을 확장합니다.
일단 `projects.json`을 기반으로 하되, 상세 페이지용 필드(images, video, richText 등)를 추가/정의합니다.

**Draft Data Structure**:
```typescript
interface ProjectDetail {
  slug: string; // ID
  title: string;
  heroImage: string; // 대표 이미지 (썸네일 사용)
  videoUrl?: string; // YouTube or Local Video
  overview: string; // 더미 텍스트
  content: string; // Markdown or HTML (더미 텍스트)
  gallery: string[]; // 추가 이미지 경로들
}
```

## 3. 작업 순서

### 3.1 라우팅 구현
- [ ] `app/projects/[slug]/page.tsx` 생성.
- [ ] `generateStaticParams`를 통해 정적 경로 미리 생성 (빌드 타임 최적화).

### 3.2 상세 페이지 레이아웃 (`ProjectDetail`)
- [ ] **Hero Component**: 썸네일 이미지를 배경으로 사용하는 Hero 섹션 구현.
- [ ] **Content Body**: 텍스트와 미디어가 혼합될 수 있는 유연한 레이아웃.
- [ ] **Media Components**:
    - `VideoPlayer`: YouTube URL 감지 및 임베딩.
    - `ImageGrid`: 이미지 리스트 렌더링.

### 3.3 더미 데이터 적용
- [ ] 각 프로젝트별로 마크다운 형식의 더미 텍스트("Lorem ipsum...") 적용.
- [ ] `data/projects.json`에 `videoUrl` 필드가 있으면 영상 플레이어 렌더링.

## 4. Verification Plan

### Automated Tests
- [ ] Build Check: 동적 라우트 빌드 성공 여부 확인.

### Manual Verification
- [ ] `/projects/mindstock`, `/projects/saera` 등 접속 확인.
- [ ] Hero 이미지가 크게 잘 나오는지 확인.
- [ ] YouTube 영상(Sae:ra, NotiNote 등)이 정상 재생되는지 확인.
- [ ] 더미 텍스트가 잘 렌더링되는지 확인.
- [ ] 반응형(모바일) 레이아웃 확인.
