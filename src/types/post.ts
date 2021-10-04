export interface IPost {
  id: number;
  space: string;
  avatar: string;
  title: string;
  url: string;
  description: string;
  authors: string[];
  publicationDate: string;
  categories: string[]
  image: string | null;
}
