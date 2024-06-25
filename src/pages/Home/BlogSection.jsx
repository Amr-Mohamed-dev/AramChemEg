import { popularResidence } from "../../db";

const BlogSection = () => {
  return (
    <div className="w-full text-black flex justify-center items-center">
      <section className="bg-white pb-10 pt-20 lg:pb-20 lg:pt-[120px] ">
        <div className="">
          <div className=" flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px]  text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Our Blogs
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Our Recent News
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap">
            {popularResidence.map((item) => (
              <div key={item.image} className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="mb-10 w-full">
                  <div className="mb-8 overflow-hidden rounded">
                    <img src={item.image} alt="" className="w-full" />
                  </div>
                  <div>
                    <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                      {item.date}
                    </span>

                    <h3>
                      <a
                        href="/#"
                        className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                      >
                        {item.CardTitle}
                      </a>
                    </h3>
                    <p className="text-base text-body-color dark:text-dark-6">
                      {item.CardDescription}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <div className="ml-10 lg:mx-52 lg:pt-10 flex flex-col gap-9">
        <div className="flex justify-between">
          <div>
            <h4>Popular</h4>
            <h1>Our popular residence</h1>
          </div>
          <NavLink>Explor All</NavLink>
        </div>
        <div className="flex justify-center items-center gap-10">
          {popularResidence.map((item) => (
            <div key={item.description}>
              <img src={item.img} alt="" className="w-full" />
              <p>{item.description}</p>
              <button>View</button>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default BlogSection;
