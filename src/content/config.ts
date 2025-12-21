import { defineCollection, z } from 'astro:content';

const artists = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    image: image().optional(),
    year: z.string().optional(),
    video: z.string().optional(),
    spotify: z.string().optional(),
  }),
});

const info = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string().optional(),
    image: image().optional(),
    video: z.string().optional(),
    text1: z.string().optional(),
    text2: z.string().optional(),
    text3: z.string().optional(),
    photo1: image().optional(),
    photo2: image().optional(),
  }),
});

export const collections = {
  artists,
  info,
  pages,
};
