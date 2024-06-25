import TeamCard from "../../components/TeamCard";

function OurTeam() {
  return (
    <div>
      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <p className="text-secondary text-[40px] text-center pb-3 lg:text-[50px] font-semibold lg:pb-10">
            OUR TEAM
          </p>
          <h1 className="lg:text-4xl text-[20px] text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
            The Talented People Behind the Scenes of the Organization
          </h1>
        </div>
      </div>
      <div className="w-full bg-gray-100 px-10 pt-10">
        <div className=" mx-auto">
          <div className="flex flex-wrap gap-3 justify-center items-center ">
            <TeamCard
              title={"Chief Executive Officer"}
              profileImg={
                "https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
              }
              name={"Andres Berlin"}
              desc={
                "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration. "
              }
            />
            <TeamCard
              title={"Product Design Head"}
              profileImg={
                "https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif"
              }
              name={"Silene Tokyo"}
              desc={
                "The emphasis on innovation and technology in our companies has resulted in a few of them establishing global benchmarks in product design and development."
              }
            />

            <TeamCard
              title={"Manager Development"}
              profileImg={
                "https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif"
              }
              name={"Johnson Stone"}
              desc={
                "Our services encompass the assessment and repair of property damage caused by water, fire, smoke, or mold. We can also be a part of the restoration.   "
              }
            />
            <TeamCard
              title={"Principal Software Engineer"}
              profileImg={
                "https://cdn.tuk.dev/assets/boy-smiling_23-2148155640.jpg"
              }
              name={"Dean Jones"}
              desc={
                "An avid open-source developer who loves to be creative and inventive. I have 20 years of experience in the field. He is a part of the team. "
              }
            />
            <TeamCard
              title={"Product Design Head"}
              profileImg={
                "https://cdn.tuk.dev/assets/blond-man-happy-expression_1194-2873.jpg"
              }
              name={"Rachel Adams"}
              desc={
                "Product designer with interests in immersive computing and XR, political ventures, and emerging technologies. Able to take ideas and give them a life."
              }
            />
            <TeamCard
              title={"UX Designer"}
              profileImg={
                "https://cdn.tuk.dev/assets/photo-1570211776045-af3a51026f4a.jfif"
              }
              name={"Charles Keith"}
              desc={
                "A UX designer is the voice of the customer. Our job is to look beyond the business goals. We don't just experience user interface but also questions it."
              }
            />
            {/* <TeamCard title={""} profileImg={""} name={""} desc={""} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
