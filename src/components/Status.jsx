export const Statistic = () => {
  return (
    <div className="bg-black py-4">
      <div className="text-center text-white pb-3">
        <h1 className="text-3xl font-semibold uppercase pb-6">
          We gorw every day
        </h1>
        <p className="text-white/60">
          Here is the numbers of our success partners
        </p>
      </div>
      <div className="bg-projectCard  my-4 px-4 py-10 mx-10 md:mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="flex gap-10 md:gap-5 justify-around items-center flex-wrap">
          <div className="text-center flex flex-col md:gap-0 justify-center items-center w-full md:w-[20%]">
            <h6 className="text-[35px] font-bold tracking-wide text-white">
              2,000+
            </h6>
            <p className="font-semibold text-[22px]  text-white">Employees</p>
          </div>
          <div className="text-center w-full md:w-[20%] flex flex-col md:gap-0 justify-center items-center">
            <h6 className="text-[35px] font-bold tracking-wide text-white">
              10,000+
            </h6>
            <p className="font-semibold text-[22px]  text-white">
              Happy Clients
            </p>
          </div>
          <div className="text-center w-full md:w-[20%] flex flex-col md:gap-0 justify-center items-center">
            <h6 className="text-[35px] font-bold tracking-wide text-white">
              300+
            </h6>
            <p className="font-semibold text-[22px]  text-white">Developers</p>
          </div>
          <div className="text-center w-full md:w-[20%] flex flex-col md:gap-0 justify-center items-center">
            <h6 className="text-[35px] font-bold tracking-wide text-white">
              55+
            </h6>
            <p className="font-semibold text-[22px]  text-white">Franchises</p>
          </div>
        </div>
      </div>
    </div>
  );
};
