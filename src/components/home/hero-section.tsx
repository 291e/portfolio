"use client";

import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import SendEmailForm from "../email/SendEmailForm";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function HeroSection() {
  return (
    <section className="relative h-full md:h-screen flex items-center justify-center overflow-hidden pt-[84px] px-4 md:px-0">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 pl-0 md:pl-8 ">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            안녕하세요!
            <br />
            <span className="text-primary">프론트엔드 개발자</span>
            <br />
            이규원 입니다
          </h1>
          <p className="max-w-md text-muted-foreground">
            Next.js, TypeScript, Tailwind CSS를 활용한 웹 개발 포트폴리오입니다.
            현대적인 UI/UX를 구현하고 최적화된 웹 애플리케이션을 만드는 것을
            좋아합니다.
          </p>
          <div className="flex flex-row gap-4 items-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline">
                  경력 보기
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-[90vw] w-[1200px] h-[90vh] p-0">
                <VisuallyHidden>
                  <DialogTitle>경력 사이트</DialogTitle>
                </VisuallyHidden>
                <iframe
                  src="https://work.leegyuwon.site"
                  className="w-full h-full border-0"
                  title="경력 사이트"
                />
              </DialogContent>
            </Dialog>
            <SendEmailForm />
          </div>
        </div>
        <div className="relative aspect-square w-full max-w-md mx-auto">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 animate-pulse" />
          <div className="absolute inset-4 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
            <div className="relative h-full w-full rounded-full overflow-hidden bg-white">
              {/* 프로필 이미지를 추가하려면 아래 주석을 해제하고 이미지 경로를 수정하세요 */}
              <Image
                src="/main/profile.jpg"
                alt="프로필 이미지"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Button
          className="hover:bg-transparent"
          variant="ghost"
          size="icon"
          aria-label="스크롤 다운"
        >
          <ArrowDownIcon className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
}
