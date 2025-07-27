# My Solid Template

> SolidJS와 TanStack Router를 사용한 현대적인 웹 애플리케이션 템플릿


- **프레임워크**: [SolidJS](https://solidjs.com/) 
- **라우팅**: [TanStack Router](https://tanstack.com/router) 
- **스타일링**: [UnoCSS](https://unocss.dev/) 
- **빌드 도구**: [Vite](https://vitejs.dev/) 
- **언어**: [TypeScript](https://typescriptlang.org/) 
- **코드 품질**: [Biome](https://biomejs.dev/)
- **패키지 매니저**: [Bun](https://bun.sh/)

## 📁 프로젝트 구조

```
my-solid-template/
├── public/                 # 정적 자원
│   ├── favicon.ico        # 파비콘
│   ├── logo192.png        # 앱 로고 (192x192)
│   ├── logo512.png        # 앱 로고 (512x512)
│   ├── manifest.json      # 웹 앱 매니페스트
│   └── robots.txt         # 크롤러 설정
├── src/                   # 소스 코드
│   ├── routes/           # 라우트 컴포넌트
│   │   ├── __root.tsx    # 루트 레이아웃
│   │   └── index.tsx     # 홈페이지
│   ├── logo.svg          # SolidJS 로고
│   ├── main.tsx          # 앱 진입점
│   ├── routeTree.gen.ts  # 자동 생성된 라우트 트리
│   └── styles.css        # 글로벌 스타일
├── biome.jsonc           # Biome 설정
├── package.json          # 패키지 정보 및 스크립트
├── tsconfig.json         # TypeScript 설정
├── uno.config.ts         # UnoCSS 설정
└── vite.config.ts        # Vite 설정
```

## 🛠 실행

- [Bun](https://bun.sh/) (권장) 또는 [Node.js](https://nodejs.org/) 18+
```bash
# 의존성 설치
bun install

# 개발 서버 시작 (포트 3000)
bun dev
```

브라우저에서 http://localhost:3000 을 열어 애플리케이션을 확인하세요.

### 빌드

```bash
# 프로덕션 빌드
bun run build

# 빌드된 애플리케이션 미리보기
bun run serve
```

### 테스트

```bash
# 테스트 실행
bun run test
```

## 🎨 스타일링

이 프로젝트는 UnoCSS를 사용하여 유틸리티 우선 CSS 접근 방식을 제공합니다. 

### UnoCSS 사용 예시

```tsx
<div class="flex items-center justify-center min-h-screen bg-gray-100">
  <h1 class="text-4xl font-bold text-blue-600">안녕하세요!</h1>
</div>
```

## 🧭 라우팅

TanStack Router를 사용하여 타입 안전한 라우팅을 제공합니다.

### 새 라우트 추가

1. `src/routes/` 디렉토리에 새 `.tsx` 파일 생성
2. 라우트 컴포넌트 정의
3. `routeTree.gen.ts`가 자동으로 업데이트됩니다

```tsx
// src/routes/about.tsx
import { createFileRoute } from '@tanstack/solid-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return <div>소개 페이지</div>
}
```

## 📝 코드 품질

### Biome

이 프로젝트는 Biome을 사용하여 코드 린팅과 포맷팅을 자동화합니다.

```bash
# 코드 포맷팅
bun run biome format --write .

# 린팅
bun run biome lint .
```

## 🤝 기여하기

1. 이 저장소를 포크하세요
2. 기능 브랜치를 생성하세요 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋하세요 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시하세요 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성하세요

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 🙏 감사의 말

- [SolidJS](https://solidjs.com/) 팀
- [TanStack](https://tanstack.com/) 팀
- [UnoCSS](https://unocss.dev/) 팀
- [Vite](https://vitejs.dev/) 팀

---

💡 **팁**: 개발 중 문제가 발생하면 `bun install`로 의존성을 재설치하거나 `rm -rf node_modules bun.lock && bun install`로 완전히 새로 설치해보세요.
