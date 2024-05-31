import * as React from "react"

import { CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Playlist } from "@/types/playlist"
import { Album } from "@/types/ablum"
import HomePlaylistItem from "./homeList/HomePlaylistItem"
import HomeAlbumItem from "./homeList/HomeAlbumItem"

type HomeCarouselProps = {
  items: Playlist[]
  title: string
}

export function HomeCarousel({ items, title }: HomeCarouselProps) {
  const [scrollSize, setScrollSize] = React.useState(4);

  React.useEffect(() => {
    const updateScrollSize = () => {
      if (window.innerWidth >= 1024) {
        setScrollSize(4); // lg:basis-1/4
      } else if (window.innerWidth >= 768) {
        setScrollSize(3); // md:basis-1/3
      } else {
        setScrollSize(2); // sm:basis-1/2
      }
    };

    updateScrollSize();
    window.addEventListener("resize", updateScrollSize);
    return () => window.removeEventListener("resize", updateScrollSize);
  }, []);

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      scrollSize={scrollSize}

      className="w-full"
    >
      <div className="flex justify-between">
        <h1>{title}</h1>
        <div className="flex w-1/2 h-12 justify-end gap-4 pr-4">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </div>
      <CarouselContent className="z-0">
        {Array.from({ length: items.length }).map((_, index) => (
          <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
            <CardContent>
              <HomePlaylistItem playlist={items[index] as Playlist} />
            </CardContent>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
