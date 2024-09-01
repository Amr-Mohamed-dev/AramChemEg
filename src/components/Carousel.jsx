import { TECarousel, TECarouselItem } from "tw-elements-react";
import { carouselImgs } from "../db";

const CarouselPic = () => {
  return (
    <TECarousel ride="carousel">
      <div className="relative md:w-[32vw] rounded-tr-[40px] rounded-bl-[40px] overflow-hidden after:clear-both after:block after:content-['']">
        {carouselImgs.map(({ id, img }) => (
          <TECarouselItem
            key={id}
            itemID={id}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[700ms] ease-in-out motion-reduce:transition-none">
            <img src={img} className="block w-full" alt={`Slide ${id}`} />
          </TECarouselItem>
        ))}
      </div>
    </TECarousel>
  );
};

export default CarouselPic;
