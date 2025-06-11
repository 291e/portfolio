"use client";

import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import { skills } from "@/data/skills";
import { cn } from "@/lib/utils";

const SkillCard = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-fit sm:w-36 cursor-pointer overflow-hidden rounded-xl border border-slate-300 p-2",
        // light styles
        "border-gray-950/[.1] bg-black hover:bg-gray-700"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="relative w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
          <Image
            src={icon}
            alt={name}
            width={32}
            height={32}
            className="object-contain p-1"
          />
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export function SkillSection() {
  const chunkSize = Math.ceil(skills.length / 2);
  const firstRow = skills.slice(0, chunkSize);
  const secondRow = skills.slice(chunkSize);

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight">기술 스택</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            주로 사용하는 기술과 라이브러리들입니다. 최신 트렌드를 따라가며
            효율적인 개발을 위해 다양한 도구들을 활용합니다.
          </p>
        </div>

        <div className="relative flex h-[500px] w-full flex-row items-center justify-center gap-8 overflow-hidden">
          <Marquee pauseOnHover vertical className="[--duration:25s]">
            {firstRow.map((skill) => (
              <div key={skill.name} className="p-2">
                <SkillCard {...skill} />
              </div>
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover vertical className="[--duration:30s]">
            {secondRow.map((skill) => (
              <div key={skill.name} className="p-2">
                <SkillCard {...skill} />
              </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 "></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 "></div>
        </div>
      </div>
    </section>
  );
}
