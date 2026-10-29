import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

const WORDS_PER_MINUTE = 200;

const dateFormatter = new Intl.DateTimeFormat("es", {
  day: "numeric",
  month: "long",
  year: "numeric",
  // Las fechas del frontmatter (YYYY-MM-DD) se interpretan en UTC.
  timeZone: "UTC",
});

export const getPosts = async (): Promise<Post[]> => {
  const posts = await getCollection("blog");
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
};

export const formatPostDate = (date: Date): string => dateFormatter.format(date);

export const getReadingTime = (post: Post): number => {
  const words = post.body?.trim().split(/\s+/).length ?? 0;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
};
