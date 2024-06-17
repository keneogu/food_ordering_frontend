import Image from "next/image";
import React from "react";
import Container from "./Container";

const Homepage = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-12">
          <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-5xl font-bold tracking-tight text-orange-600">
              Tuck into a takeway today
            </h1>
            <span className="text-xl">Food is just a click away!</span>
            {/* <SearchBar
          placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        /> */}
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className=" w-64 relative">
              <Image src="/images/landing.png" fill alt="landing" />
            </div>
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <span className="font-bold text-3xl tracking-tighter">
                Order takeaway even faster!
              </span>
              <span>
                Download the KenzFoods App for faster ordering and personalised
                recommendations
              </span>
              <div className="w-64 h-10 relative">
                <Image
                  src="/images/appDownload.png"
                  fill
                  alt="appDownloadImage-image"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Homepage;
