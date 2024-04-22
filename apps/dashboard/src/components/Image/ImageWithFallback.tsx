import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { DataGridImageSkeleton } from '../ui/skeleton/data-grid-image-skeleton';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  fallbackSrc: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, alt, width, height, fallbackSrc }) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    fetch(src)
      .then((res) => {
        new Promise((resolve) => setTimeout(resolve, 5000))
        if (!res.ok) {
          throw new Error('Image not found');
        }
      })
      .catch(() => setImageSrc(fallbackSrc))
      .finally(() => setIsLoading(false));
  }, [src, fallbackSrc]);

  return isLoading ? <DataGridImageSkeleton /> : <Image src={imageSrc} alt={alt} width={width} height={height} />;
};

export default ImageWithFallback;