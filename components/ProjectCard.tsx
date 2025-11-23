import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { urlFor } from '@/sanity';
import Link from 'next/link';
import { Button } from './ui/button';
import { ExternalLink, GithubIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  year?: string;
  mainImage: any;
  link?: string;
  github?: string;
  slug?: { current: string };
}

export const ProjectCard = ({
  title,
  description,
  year,
  mainImage,
  link,
  github,
  slug,
}: ProjectCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between">
          {link ? (
            <a
              aria-label="external link to website"
              rel="noreferrer"
              target="_blank"
              href={link}
              className="flex underline items-center gap-2 text-xl"
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
          width={600}
          height={200}
          src={urlFor(mainImage).auto('format').url() || ''}
          alt={title}
          className="overflow-hidden w-full h-full object-cover transition-all duration-300 ease-in-out lg:w-[600px] lg:h-[200px] group-hover:scale-150 group-hover:-rotate-[10deg]"
        />
      </CardContent>
      <CardFooter>
        <div className="flex justify-between w-full">
          <div className="flex gap-4">
            {github && (
              <a
                aria-label="external link to github page"
                rel="noreferrer"
                target="_blank"
                href={github}
                className="flex items-center"
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
