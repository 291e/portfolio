"use client";

import React from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

export function TimelineSection() {
  const data = [
    {
      title: "2025",
      content: (
        <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-lg">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            웹 애플리케이션 개발 및 UI/UX 디자인 기술 습득
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            사용자 중심의 효율적인 인터페이스 설계와 DB 설계 및 최적화
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-primary/10 dark:bg-primary/20 aspect-video w-full relative overflow-hidden">
              <Image
                src="/projects/project8.png"
                alt="프로젝트 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="rounded-lg bg-primary/10 dark:bg-primary/20 aspect-video w-full relative overflow-hidden">
              <Image
                src="/projects/project7.png"
                alt="프로젝트 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="rounded-lg bg-primary/10 dark:bg-primary/20 aspect-video w-full relative overflow-hidden">
              <Image
                src="/projects/project6.png"
                alt="프로젝트 3"
                fill
                className="object-cover"
              />
            </div>
            <div className="rounded-lg bg-primary/10 dark:bg-primary/20 aspect-video w-full relative overflow-hidden">
              <Image
                src="/projects/project5.png"
                alt="프로젝트 4"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-lg">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            프론트엔드 개발자로서 Legacy 프로젝트 유지보수
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Next.js, TypeScript 기술 스택을 활용한 리팩토링 및 웹 애플리케이션
            개발
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-primary/10 dark:bg-primary/20 aspect-video w-full relative overflow-hidden">
              <Image
                src="/projects/project4.png"
                alt="프로젝트 5"
                fill
                className="object-cover"
              />
            </div>
            <div className="rounded-lg bg-primary/10 dark:bg-primary/20 aspect-video w-full relative overflow-hidden">
              <Image
                src="/projects/project3.png"
                alt="프로젝트 6"
                fill
                className="object-cover"
              />
            </div>
            <div className="rounded-lg bg-primary/10 dark:bg-primary/20 aspect-video w-full relative overflow-hidden">
              <Image
                src="/projects/project2.png"
                alt="프로젝트 7"
                fill
                className="object-cover"
              />
            </div>
            <div className="rounded-lg bg-primary/10 dark:bg-primary/20 aspect-video w-full relative overflow-hidden">
              <Image
                src="/projects/project1.png"
                alt="프로젝트 이미지"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "CMS",
      content: (
        <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-lg">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            콘텐츠 관리 시스템 개발 및 운영
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            다양한 UI 라이브러리를 활용한 웹사이트 구축 및 관리. 사용자 친화적인
            인터페이스와 효율적인 콘텐츠 관리 시스템 설계
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-primary/10 dark:bg-primary/20 aspect-video w-full relative overflow-hidden">
              <Image
                src="/projects/project9.png"
                alt="CMS 프로젝트 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="rounded-lg bg-primary/10 dark:bg-primary/20 aspect-video w-full relative overflow-hidden">
              <Image
                src="/projects/project10.png"
                alt="CMS 프로젝트 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="rounded-lg bg-primary/10 dark:bg-primary/20 aspect-video w-full relative overflow-hidden">
              <Image
                src="/projects/project11.png"
                alt="CMS 프로젝트 3"
                fill
                className="object-cover"
              />
            </div>
            <div className="rounded-lg bg-primary/10 dark:bg-primary/20 aspect-video w-full relative overflow-hidden">
              <Image
                src="/projects/project12.png"
                alt="CMS 프로젝트 4"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="px-4 md:px-0">
      <div className="max-w-7xl mx-auto md:px-8 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            나의 개발 여정
          </h2>
          <p className="text-muted-foreground">
            저는 사용자 중심의 웹 애플리케이션을 개발하는 프론트엔드
            개발자입니다. React, Next.js, TypeScript 등 최신 기술 스택을
            활용하여 효율적이고 확장 가능한 웹 서비스를 구축하는 데 전문성을
            가지고 있습니다. 사용자 경험을 개선하고 비즈니스 목표를 달성하는 데
            기여하는 것을 목표로 합니다.
          </p>
        </div>
      </div>
      <Timeline data={data} />
    </section>
  );
}
