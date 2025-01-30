import Poster1 from "../assets/poster.png";
import Poster2 from "../assets/poster.png";
import Poster3 from "../assets/poster.png";

export interface SlidesProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

export const slides: SlidesProps[] = [
  {
    image: Poster1,
    title: "محصول ویژه شماره ۱",
    description:
      "این محصول کیفیت فوق‌العاده‌ای دارد و مناسب برای تمامی نیازهای شما است.",
    link: "/products/1",
  },
  {
    image: Poster2,
    title: "محصول ویژه شماره ۲",
    description:
      "این محصول دارای ویژگی‌های منحصر‌به‌فردی است که آن را از سایر محصولات متمایز می‌کند.",
    link: "/products/2",
  },
  {
    image: Poster3,
    title: "محصول ویژه شماره ۳",
    description: "با این محصول تجربه‌ی جدیدی از کیفیت و کارایی را خواهید داشت.",
    link: "/products/3",
  },
];
