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
    title: "포트폴리오 웹사이트",
    description:
      "Next.js 14와 Tailwind CSS를 활용한 모던 포트폴리오 웹사이트입니다. Framer Motion을 통한 부드러운 애니메이션과 다크 모드를 지원합니다.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/projects/project1.png",
  },
  {
    id: 2,
    title: "AI 기반 채팅 애플리케이션",
    description:
      "OpenAI API를 활용한 실시간 채팅 애플리케이션입니다. 사용자 맞춤형 대화 기능과 채팅 기록 관리 기능을 제공합니다.",
    tech: ["React", "Node.js", "OpenAI API", "MongoDB"],
    image: "/projects/project2.png",
  },
  {
    id: 3,
    title: "실시간 협업 도구",
    description:
      "Socket.io를 활용한 실시간 협업 도구입니다. 여러 사용자가 동시에 문서를 편집하고 변경사항을 실시간으로 공유할 수 있습니다.",
    tech: ["React", "Socket.io", "Express", "PostgreSQL"],
    image: "/projects/project3.png",
  },
  {
    id: 4,
    title: "이커머스 플랫폼",
    description:
      "Next.js와 Stripe를 활용한 풀스택 이커머스 플랫폼입니다. 결제 시스템, 상품 관리, 주문 추적 기능을 제공합니다.",
    tech: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    image: "/projects/project4.png",
  },
  {
    id: 5,
    title: "소셜 미디어 대시보드",
    description:
      "다양한 소셜 미디어 플랫폼의 데이터를 통합 관리하는 대시보드입니다. 데이터 시각화와 분석 기능을 제공합니다.",
    tech: ["React", "D3.js", "Node.js", "MongoDB"],
    image: "/projects/project5.png",
  },
  {
    id: 6,
    title: "실시간 날씨 앱",
    description:
      "OpenWeather API를 활용한 실시간 날씨 정보 제공 앱입니다. 위치 기반 날씨 예보와 알림 기능을 제공합니다.",
    tech: ["React", "OpenWeather API", "Geolocation API"],
    image: "/projects/project6.png",
  },
  {
    id: 7,
    title: "개인 금융 관리 앱",
    description:
      "사용자의 수입과 지출을 관리하고 분석하는 금융 관리 앱입니다. 차트와 리포트를 통한 시각적 분석을 제공합니다.",
    tech: ["React", "Chart.js", "Firebase", "Tailwind CSS"],
    image: "/projects/project7.png",
  },
  {
    id: 8,
    title: "AI 이미지 생성기",
    description:
      "Stable Diffusion API를 활용한 AI 이미지 생성 웹 애플리케이션입니다. 텍스트 프롬프트를 통한 이미지 생성과 편집 기능을 제공합니다.",
    tech: ["Next.js", "Stable Diffusion API", "Tailwind CSS", "TypeScript"],
    image: "/projects/project8.png",
  },
];
