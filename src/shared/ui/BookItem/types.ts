export interface BookData {
  id: string;
  title: string;
  subTitle: string | null;
  frontCover: string;
  flipCover: string;
  author: string;
  publisher: string;
  pubDate: string;
  description: string;
  categoryName: string;
  category: string;
  page: number;
  price: number;

  readDate: string;
  memo?: string;
  grade?: string;
  grade10Count: number;
  readUser?: string[];
  readUserCount: number;
  likeUsers?: string[];

  lastUpdatedTime: string;
}
