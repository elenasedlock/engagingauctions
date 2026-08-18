import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Every field below is validated at build time. A missing name on a testimonial
 * or an empty service title fails the build, so a broken edit never reaches
 * production -- it shows up as a red check on the pull request instead.
 */

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    name: z.string().min(1),
    org: z.string().min(1),
    role: z.string().optional(),
    logo: z.string().optional(),
    order: z.number().default(99),
    featured: z.boolean().default(false),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string().min(1),
    blurb: z.string().min(20),
    image: z.string().optional(),
    imageHeight: z.number().default(393),
    order: z.number().default(99),
  }),
});

const faqs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faqs' }),
  schema: z.object({
    question: z.string().min(5),
    order: z.number().default(99),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: z.object({
    name: z.string().min(1),
    role: z.string().min(1),
    photo: z.string(),
    photoHeight: z.number().default(511),
    order: z.number().default(99),
  }),
});

const process = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/process' }),
  schema: z.object({
    step: z.number(),
    title: z.string().min(1),
    icon: z.enum(['chat', 'check', 'play']).default('chat'),
  }),
});

const gallery = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/gallery' }),
  schema: z.object({
    image: z.string(),
    alt: z.string().min(3),
    order: z.number().default(99),
  }),
});

const videos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/videos' }),
  schema: z.object({
    title: z.string().min(1),
    youtubeId: z.string().min(5),
    short: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

export const collections = { testimonials, services, faqs, team, process, gallery, videos };
