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
  // Los borradores solo se muestran en desarrollo.
  const posts = await getCollection(
    "blog",
    ({ data }) => import.meta.env.DEV || !data.draft,
  );
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
};

export const formatPostDate = (date: Date): string => dateFormatter.format(date);

export const getReadingTime = (post: Post): number => {
  const words = post.body?.trim().split(/\s+/).length ?? 0;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
};
