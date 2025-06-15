export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "MetaBank3D",
    description:
      "Next.js를 기반으로 한 현대적인 웹 애플리케이션입니다. 3D 요소와 인터랙티브한 사용자 경험을 제공하는 프로젝트입니다.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Swiper"],
    image: "/projects/project1.png",
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
      "Tailwind CSS",
      "DaisyUI",
      "GraphQL",
      "AWS SDK",
    ],
    image: "/projects/project2.png",
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
  },
  {
    id: 6,
    title: "BogoFit Web",
    description:
      "Next.js를 기반으로 한 모던한 랜딩 페이지입니다. 반응형 UI와 최적화된 성능을 제공합니다.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Radix UI",
    ],
    image: "/projects/project6.png",
  },
  {
    id: 7,
    title: "Marc AI",
    description:
      "AI 기반 마케팅 최적화 서비스입니다. 다양한 플랫폼의 마케팅 전략을 최적화하고 실시간 모니터링을 제공합니다.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "Prisma"],
    image: "/projects/project7.png",
  },
  {
    id: 8,
    title: "메종트루송",
    description:
      "최고급 송이버섯을 제공하는 전문 쇼핑몰입니다. 한국어와 영어를 지원하는 다국어 웹사이트로, 송이버섯의 품질과 신선도를 최우선으로 생각합니다.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "next-intl",
      "shadcn/ui",
    ],
    image: "/projects/project8.png",
  },
];
