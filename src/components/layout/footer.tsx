import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background py-8 mt-16">
      <div className="container flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Portfolio</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              개발자 포트폴리오 사이트입니다. Next.js, TypeScript, Tailwind CSS,
              Shadcn UI를 사용하여 제작되었습니다.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h4 className="font-medium">페이지</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    홈
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    프로젝트
                  </Link>
                </li>
                <li>
                  <Link
                    href="/skills"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    스킬
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    연락처
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">연락처</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:example@example.com"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    이메일
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+821012345678"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    전화번호
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">소셜</h4>
              <div className="flex gap-2">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border hover:bg-accent transition-colors"
                >
                  <GitHubLogoIcon className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border hover:bg-accent transition-colors"
                >
                  <LinkedInLogoIcon className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} 포트폴리오. All rights reserved.</p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              개인정보 처리방침
            </Link>
            <Link
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
