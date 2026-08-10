import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
    loader: glob({
        pattern: "**/*.{md,mdx}",
        base: "./src/content/blog",
    }),

    schema: z.object({
        title: z.string(),

        subtitle: z.string().optional(),

        description: z.string(),

        date: z.coerce.date(),

        author: z.string(),

        image: z.string(),

        featured: z.boolean().default(false),

        type: z.string().default("КОЛОНКА"),

        readingTime: z.string().default("8 мин"),
    }),
});

export const collections = {
    blog,
};