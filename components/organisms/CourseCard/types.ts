export interface Instructor {
  name: string;
  avatar: string;
}

export interface CourseCardProps {
  title: string;
  image: string;
  category: string;
  originalPrice: number;
  currentPrice: number;
  instructor: Instructor;
  rating: number;
  reviews: number;
  modules: number;
  duration: string;
  lessons: number;
}
