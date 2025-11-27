/* eslint-disable @typescript-eslint/no-explicit-any */
import { ExternalLink, GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { urlFor } from "@/sanity";

import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface ProjectCardProps {
  description: string;
  github?: string;
  link?: string;
  mainImage: any;
  slug?: { current: string };
  title: string;
  year?: string;
}

export const ProjectCard = ({
  description,
  github,
  link,
  mainImage,
  slug,
  title,
  year,
}: ProjectCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between">
          {link ? (
            <a
              aria-label="external link to website"
              className="flex items-center gap-2 text-xl underline"
              href={link}
              rel="noreferrer"
              target="_blank"
            >
              {title}
              <ExternalLink size="16" />
            </a>
          ) : (
            title
          )}
          {year && <Badge variant="secondary">{year}</Badge>}
        </CardTitle>

        <CardDescription className="min-h-10">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          alt={title}
          className="h-full w-full overflow-hidden object-cover transition-all duration-300 ease-in-out group-hover:scale-150 group-hover:-rotate-[10deg] lg:h-[200px] lg:w-[600px]"
          height={200}
          src={urlFor(mainImage).auto("format").url() || ""}
          width={600}
        />
      </CardContent>
      <CardFooter>
        <div className="flex w-full justify-between">
          <div className="flex gap-4">
            {github && (
              <a
                aria-label="external link to github page"
                className="flex items-center"
                href={github}
                rel="noreferrer"
                target="_blank"
              >
                <GithubIcon size={24} />
              </a>
            )}
          </div>
          {slug?.current && (
            <Button asChild>
              <Link href={slug.current}>Read more..</Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};
