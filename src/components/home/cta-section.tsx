import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-20 bg-primary/5 flex justify-center">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">함께 일해보세요</h2>
          <p className="text-muted-foreground">
            새로운 프로젝트나 협업 기회가 있으신가요? 언제든지 연락주세요!
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">연락하기</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
