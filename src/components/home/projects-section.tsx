"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState } from "react";
import { projects } from "@/data/projects";
import { projectDetails } from "@/data/project-details";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const autoplayRef = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: true,
    })
  );

  const handleProjectClick = (projectId: number) => {
    setSelectedProject(projectId);
  };

  const handleCloseDialog = () => {
    setSelectedProject(null);
  };

  const selectedProjectDetail = selectedProject
    ? projectDetails.find((p) => p.id === selectedProject)
    : null;

  return (
    <section className="py-20 flex justify-center container mx-auto px-10">
      <div className="container space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">주요 프로젝트</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            최근에 작업한 주요 프로젝트들을 소개합니다. 각 프로젝트에서 사용한
            기술과 해결한 문제들을 확인하세요.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[autoplayRef.current]}
          className="w-full"
        >
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem
                key={project.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md h-[450px] flex flex-col">
                    <div className="aspect-video rounded-md bg-muted w-full mb-4 relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-xl line-clamp-1 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-auto">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={() => handleProjectClick(project.id)}
                      >
                        자세히 보기
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="text-center pt-8">
          <Button asChild>
            <Link href="/projects">모든 프로젝트 보기</Link>
          </Button>
        </div>

        <Dialog
          open={selectedProject !== null}
          onOpenChange={handleCloseDialog}
        >
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {selectedProjectDetail?.title || "프로젝트 상세 정보"}
              </DialogTitle>
              <DialogDescription>
                {selectedProjectDetail?.description ||
                  "프로젝트에 대한 자세한 정보를 확인하세요."}
              </DialogDescription>
            </DialogHeader>

            {selectedProjectDetail && (
              <div className="space-y-6">
                <div className="aspect-video rounded-lg bg-muted w-full relative overflow-hidden">
                  <Image
                    src={selectedProjectDetail.image}
                    alt={selectedProjectDetail.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">주요 기능</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedProjectDetail.features.map((feature, index) => (
                        <li key={index} className="text-muted-foreground">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">도전 과제</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedProjectDetail.challenges.map(
                        (challenge, index) => (
                          <li key={index} className="text-muted-foreground">
                            {challenge}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">해결 방법</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedProjectDetail.solutions.map(
                        (solution, index) => (
                          <li key={index} className="text-muted-foreground">
                            {solution}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedProjectDetail.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    {selectedProjectDetail.githubUrl && (
                      <Button asChild variant="outline">
                        <Link
                          href={selectedProjectDetail.githubUrl}
                          target="_blank"
                        >
                          GitHub
                        </Link>
                      </Button>
                    )}
                    {selectedProjectDetail.demoUrl && (
                      <Button asChild>
                        <Link
                          href={selectedProjectDetail.demoUrl}
                          target="_blank"
                        >
                          데모 보기
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
