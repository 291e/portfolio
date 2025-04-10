import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MainLayout } from "@/components/layout/main-layout";
import { ArrowDownIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <MainLayout>
      {/* 히어로 섹션 */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              안녕하세요!
              <br />
              <span className="text-primary">프론트엔드 개발자</span>
              <br />
              입니다
            </h1>
            <p className="max-w-md text-muted-foreground">
              Next.js, TypeScript, Tailwind CSS를 활용한 웹 개발
              포트폴리오입니다. 현대적인 UI/UX를 구현하고 최적화된 웹
              애플리케이션을 만드는 것을 좋아합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/projects">프로젝트 보기</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">연락하기</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-square w-full max-w-md mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 animate-pulse" />
            <div className="absolute inset-4 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
              <div className="relative h-full w-full rounded-full overflow-hidden">
                {/* 여기에 프로필 이미지를 추가 (public/profile.jpg 등으로 저장) */}
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  프로필 이미지
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Button variant="ghost" size="icon" aria-label="스크롤 다운">
            <ArrowDownIcon className="h-6 w-6" />
          </Button>
        </div>
      </section>

      {/* 간략한 소개 섹션 */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight">
              나의 개발 여정
            </h2>
            <p className="text-muted-foreground">
              저는 사용자 중심의 웹 애플리케이션을 개발하는 프론트엔드
              개발자입니다. React, Next.js, TypeScript 등 최신 기술 스택을
              활용하여 효율적이고 확장 가능한 웹 서비스를 구축하는 데 전문성을
              가지고 있습니다. 사용자 경험을 개선하고 비즈니스 목표를 달성하는
              데 기여하는 것을 목표로 합니다.
            </p>
            <Button asChild>
              <Link href="/skills">스킬 더 보기</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 프로젝트 섹션 미리보기 */}
      <section className="py-20">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">주요 프로젝트</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              최근에 작업한 주요 프로젝트들을 소개합니다. 각 프로젝트에서 사용한
              기술과 해결한 문제들을 확인하세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 프로젝트 카드는 나중에 컴포넌트로 분리하고 데이터를 통해 렌더링할 예정 */}
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md space-y-4"
              >
                <div className="aspect-video rounded-md bg-muted w-full" />
                <h3 className="font-semibold text-xl">프로젝트 {item}</h3>
                <p className="text-sm text-muted-foreground">
                  Next.js, TypeScript, Tailwind CSS로 개발된 웹
                  애플리케이션입니다.
                </p>
                <div className="pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/projects/${item}`}>자세히 보기</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <Button asChild>
              <Link href="/projects">모든 프로젝트 보기</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">
              함께 일해보세요
            </h2>
            <p className="text-muted-foreground">
              새로운 프로젝트나 협업 기회가 있으신가요? 언제든지 연락주세요!
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">연락하기</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
