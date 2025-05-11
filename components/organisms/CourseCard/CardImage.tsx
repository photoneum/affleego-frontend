import React from "react";

import Image from "next/image";

interface CardImageProps {
  src: string;
  alt: string;
}

const CardImage: React.FC<CardImageProps> = ({ src, alt }) => {
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className="aspect-w-16 aspect-h-9 relative w-full overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        className="size-full object-cover transition-transform duration-500 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
    </div>
  );
};

export default CardImage;
