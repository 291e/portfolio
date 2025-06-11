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
    title: "포트폴리오 웹사이트",
    description:
      "Next.js 14와 Tailwind CSS를 활용한 모던 포트폴리오 웹사이트입니다. Framer Motion을 통한 부드러운 애니메이션과 다크 모드를 지원합니다.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/projects/project1.png",
    features: [
      "반응형 디자인으로 모든 디바이스 지원",
      "다크 모드 지원",
      "부드러운 페이지 전환 애니메이션",
      "SEO 최적화",
      "프로젝트 상세 페이지",
    ],
    challenges: [
      "다양한 디바이스에서의 일관된 사용자 경험 제공",
      "성능 최적화와 애니메이션의 균형",
      "SEO 최적화를 위한 메타데이터 관리",
    ],
    solutions: [
      "Tailwind CSS의 반응형 클래스를 활용한 유연한 레이아웃 구현",
      "Framer Motion의 최적화된 애니메이션 사용",
      "Next.js의 메타데이터 API 활용",
    ],
    githubUrl: "https://github.com/username/portfolio",
    demoUrl: "https://portfolio-demo.com",
  },
  {
    id: 2,
    title: "AI 기반 채팅 애플리케이션",
    description:
      "OpenAI API를 활용한 실시간 채팅 애플리케이션입니다. 사용자 맞춤형 대화 기능과 채팅 기록 관리 기능을 제공합니다.",
    tech: ["React", "Node.js", "OpenAI API", "MongoDB"],
    image: "/projects/project2.png",
    features: [
      "실시간 채팅 기능",
      "AI 기반 대화 생성",
      "채팅 기록 저장 및 관리",
      "사용자 인증 시스템",
      "채팅방 생성 및 관리",
    ],
    challenges: [
      "실시간 데이터 동기화",
      "AI 응답 지연 시간 최적화",
      "대규모 채팅 데이터 관리",
    ],
    solutions: [
      "Socket.io를 활용한 실시간 통신 구현",
      "스트리밍 응답으로 사용자 경험 개선",
      "MongoDB의 효율적인 인덱싱 전략",
    ],
    githubUrl: "https://github.com/username/ai-chat",
    demoUrl: "https://ai-chat-demo.com",
  },
  // ... 나머지 프로젝트들도 비슷한 형식으로 추가
];
