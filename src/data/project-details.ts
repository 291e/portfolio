export interface ProjectDetail {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  features: string[];
  challenges: string[];
  solutions: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const projectDetails: ProjectDetail[] = [
  {
    id: 1,
    title: "MetaBank3D",
    description:
      "Next.js를 기반으로 한 현대적인 웹 애플리케이션입니다. 3D 요소와 인터랙티브한 사용자 경험을 제공하는 프로젝트입니다.",
    tech: [
      "Next.js",
      "TypeScript",
      "React",
      "TailwindCSS",
      "Framer Motion",
      "Lucide React",
      "Swiper",
    ],
    image: "/projects/project1.png",
    features: [
      "3D 요소와 인터랙티브한 사용자 경험",
      "반응형 웹 디자인",
      "최적화된 성능",
      "모던한 UI/UX",
      "애니메이션 효과",
    ],
    challenges: [
      "3D 렌더링 성능 최적화",
      "복잡한 애니메이션 구현",
      "반응형 디자인 구현",
      "사용자 경험 개선",
    ],
    solutions: [
      "Framer Motion을 활용한 효율적인 애니메이션 구현",
      "TailwindCSS를 활용한 반응형 디자인 구현",
      "Next.js의 최적화 기능 활용",
      "사용자 피드백을 통한 지속적인 개선",
    ],
    githubUrl: "https://github.com/291e/metabank3d_NextJS.git",
    demoUrl: "https://www.metabank3d.com/",
  },
  {
    id: 2,
    title: "Meta360",
    description:
      "Next.js 기반의 현대적인 웹 애플리케이션입니다. 메타버스와 360도 콘텐츠를 위한 플랫폼을 제공합니다.",
    tech: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Material-UI",
      "Tailwind CSS",
      "DaisyUI",
      "GraphQL",
      "AWS SDK",
    ],
    image: "/projects/project2.png",
    features: [
      "GraphQL 기반의 효율적인 데이터 관리",
      "실시간 미디어 스트리밍 지원",
      "반응형 UI/UX",
      "보안 인증 시스템",
      "클라우드 통합",
    ],
    challenges: [
      "실시간 데이터 동기화",
      "미디어 스트리밍 최적화",
      "보안 시스템 구현",
      "클라우드 서비스 통합",
    ],
    solutions: [
      "GraphQL을 활용한 효율적인 데이터 관리",
      "AWS SDK를 활용한 클라우드 서비스 통합",
      "Redux Toolkit을 활용한 상태 관리",
      "Material-UI와 Tailwind CSS를 활용한 UI 구현",
    ],
    githubUrl: "https://github.com/metabank3d/meta360.git",
    demoUrl: "https://metabank360.com/",
  },
  {
    id: 3,
    title: "MetaVision",
    description:
      "Next.js 기반의 현대적인 웹 애플리케이션입니다. 3D 시각화와 결제 시스템을 통합한 풀스택 프로젝트입니다.",
    tech: [
      "Next.js",
      "TypeScript",
      "Three.js",
      "GraphQL",
      "Prisma",
      "Toss Payments",
    ],
    image: "/projects/project3.png",
    features: [
      "3D 시각화 및 인터랙션",
      "사용자 인증 및 권한 관리",
      "파일 업로드 및 관리",
      "결제 시스템 통합",
      "실시간 메시징",
      "반응형 디자인",
    ],
    challenges: [
      "3D 렌더링 성능 최적화",
      "실시간 데이터 동기화",
      "결제 시스템 안정성 확보",
      "대용량 파일 처리",
    ],
    solutions: [
      "React Three Fiber를 활용한 효율적인 3D 렌더링",
      "GraphQL을 통한 효율적인 데이터 관리",
      "AWS S3를 활용한 안정적인 파일 스토리지",
      "Toss Payments API를 활용한 안전한 결제 시스템 구현",
    ],
    githubUrl: "https://github.com/291e/metaVision.git",
    demoUrl: "https://realmeta3d.com/",
  },
  {
    id: 4,
    title: "황금단 쇼핑몰",
    description:
      "Next.js와 TypeScript를 기반으로 한 현대적인 이커머스 플랫폼입니다. 다양한 UI 라이브러리와 결제 시스템을 통합했습니다.",
    tech: [
      "Next.js",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Material-UI",
      "shadcn/ui",
    ],
    image: "/projects/project4.png",
    features: [
      "상품 검색 및 필터링",
      "장바구니 및 주문 관리",
      "결제 시스템 통합",
      "사용자 리뷰 및 평점",
      "관리자 대시보드",
      "반응형 디자인",
    ],
    challenges: [
      "대규모 상품 데이터 관리",
      "결제 시스템 안정성",
      "사용자 경험 최적화",
      "성능 최적화",
    ],
    solutions: [
      "Prisma ORM을 활용한 효율적인 데이터 관리",
      "상태 관리 도구를 활용한 안정적인 데이터 흐름",
      "다양한 UI 라이브러리 통합으로 일관된 디자인 시스템 구축",
      "Next.js의 최적화 기능 활용",
    ],
    githubUrl: "https://github.com/291e/goldSilk_Next.git",
    demoUrl: "https://goldsilk.net/",
  },
  {
    id: 5,
    title: "Petbility",
    description:
      "반려동물을 위한 종합 서비스 플랫폼입니다. 반려동물 관련 서비스 예약, 관리, 커뮤니티 기능을 제공합니다.",
    tech: [
      "Next.js",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Supabase",
      "Socket.io",
    ],
    image: "/projects/project5.png",
    features: [
      "반려동물 서비스 예약 시스템",
      "사용자 및 반려동물 프로필 관리",
      "실시간 알림 시스템",
      "결제 시스템 연동",
      "위치 기반 서비스 검색",
      "커뮤니티 기능",
    ],
    challenges: [
      "실시간 예약 시스템 구현",
      "위치 기반 서비스 검색 최적화",
      "결제 시스템 안정성",
      "사용자 데이터 보안",
    ],
    solutions: [
      "Socket.io를 활용한 실시간 통신 구현",
      "Leaflet을 활용한 효율적인 위치 기반 서비스",
      "Supabase를 활용한 안전한 데이터 관리",
      "NextAuth.js를 통한 안전한 인증 시스템 구현",
    ],
    githubUrl: "https://github.com/LIMSONGJIN/petbility_front_ssh.git",
    demoUrl: "https://pet.metashopping.kr/",
  },
  {
    id: 6,
    title: "BogoFit Web",
    description:
      "Next.js를 기반으로 한 모던한 랜딩 페이지입니다. 반응형 UI와 최적화된 성능을 제공합니다.",
    tech: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Radix UI",
      "Lucide React",
    ],
    image: "/projects/project6.png",
    features: [
      "모던하고 반응형 UI",
      "컴포넌트 기반 아키텍처",
      "최적화된 성능",
      "TypeScript를 통한 타입 안정성",
      "애니메이션 효과",
    ],
    challenges: [
      "성능 최적화",
      "반응형 디자인 구현",
      "애니메이션 최적화",
      "타입 안정성 확보",
    ],
    solutions: [
      "Next.js의 최적화 기능 활용",
      "Tailwind CSS를 활용한 반응형 디자인",
      "Framer Motion을 활용한 효율적인 애니메이션",
      "TypeScript를 통한 엄격한 타입 체크",
    ],
    githubUrl: "https://github.com/291e/bogofit_web.git",
    demoUrl: "https://www.bogofit.kr/",
  },
  {
    id: 7,
    title: "Marc AI",
    description:
      "AI 기반 마케팅 최적화 서비스입니다. 다양한 플랫폼의 마케팅 전략을 최적화하고 실시간 모니터링을 제공합니다.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "OpenAI API",
      "Prisma",
    ],
    image: "/projects/project7.png",
    features: [
      "다양한 플랫폼 지원",
      "AI 기반 분석",
      "실시간 모니터링",
      "A/B 테스팅",
      "맞춤형 콘텐츠 생성",
      "데이터 시각화",
    ],
    challenges: [
      "AI 모델 최적화",
      "실시간 데이터 처리",
      "다양한 플랫폼 통합",
      "사용자 경험 개선",
    ],
    solutions: [
      "OpenAI API를 활용한 효율적인 AI 모델 구현",
      "React Query를 활용한 실시간 데이터 관리",
      "통합된 API 설계로 다양한 플랫폼 지원",
      "Framer Motion을 활용한 부드러운 애니메이션 구현",
    ],
    githubUrl: "https://github.com/291e/MarcAI.git",
    demoUrl: "https://www.idoo.kr/",
  },
  {
    id: 8,
    title: "메종트루송",
    description:
      "최고급 송이버섯을 제공하는 전문 쇼핑몰입니다. 한국어와 영어를 지원하는 다국어 웹사이트로, 송이버섯의 품질과 신선도를 최우선으로 생각합니다.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "next-intl",
      "Radix UI",
      "shadcn/ui",
    ],
    image: "/projects/project8.png",
    features: [
      "다국어 지원 (한국어/영어)",
      "반응형 웹 디자인",
      "SEO 최적화",
      "애니메이션 효과",
      "문의하기 기능",
      "뉴스레터 구독",
      "상품 소개 및 구매",
      "커뮤니티 기능",
    ],
    challenges: [
      "다국어 지원 구현",
      "SEO 최적화",
      "애니메이션 성능 최적화",
      "반응형 디자인 구현",
    ],
    solutions: [
      "next-intl을 활용한 효율적인 다국어 지원",
      "Next.js의 메타데이터 API를 활용한 SEO 최적화",
      "GSAP와 Framer Motion을 활용한 부드러운 애니메이션",
      "Tailwind CSS를 활용한 반응형 디자인",
    ],
    githubUrl: "https://github.com/NathanJeong/idoo-mushroom.git",
    demoUrl: "https://maison.trusong.com/ko",
  },
];
