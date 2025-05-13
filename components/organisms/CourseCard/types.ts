import { StaticImageData } from "next/image";

export interface Instructor {
  name: string;
  avatar: string;
}

export interface CourseCardProps {
  title: string;
  image: StaticImageData | string;
  category: string;
  originalPrice: number;
  currentPrice: number;
}
