import { TECarousel, TECarouselItem } from "tw-elements-react";

import pic1 from "../assets/images/product1.jpg";
import pic2 from "../assets/images/product2.jpg";
import pic3 from "../assets/images/product3.jpg";
const CarouselPic = () => {
  return (
    <>
      <TECarousel ride="carousel">
        <div className="relative md:w-[32vw] rounded-tr-[40px] rounded-bl-[40px] overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%]  hidden w-full transition-transform duration-[700ms] ease-in-out motion-reduce:transition-none"
          >
            <img src={pic1} className="block w-full" alt="..." />
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left hidden -mr-[100%]  w-full transition-transform duration-[700ms] ease-in-out motion-reduce:transition-none"
          >
            <img src={pic2} className="block w-full" alt="..." />
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%]  hidden w-full transition-transform duration-[700ms] ease-in-out motion-reduce:transition-none"
          >
            <img src={pic3} className="block w-full" alt="..." />
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
};

export default CarouselPic;
