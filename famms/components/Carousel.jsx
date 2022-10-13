import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";
import Title from "./ui/Title";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        dots:true,
        autoplaySpeed: 30000,
        appendDots: (dots) => (
          <div className="">
            <ul className="container mx-auto text-start h-10 md:px-0 px-4 ">{dots}</ul>
          </div>
        ),
        customPaging: (i) => (
          <div className="w-3 h-3 bg-white rounded-full"></div>
        ),
      };
  return (
    <div className="relative h-[calc(100vh_-_76px)] w-full">
      <div className="absolute w-full h-full top-0 left-0 -z-10">
        <Image src={"/images/slider-bg.jpg"} alt="slider banne" layout="fill" objectFit="cover" />
      </div>
      <div className="">
        <Slider {...settings}>
            <div className="w-full">
                <div  className="md:mt-60 mt-24 container mx-auto w-full">
                    <div className="md:w-2/5 w-full flex flex-col gap-y-10 md:px-0 px-4">
                        <div className="flex flex-col">
                            <Title addClass={"text-primary"}>Sale 20% Off</Title>
                            <Title addClass={"text-secondary"}>On Everything</Title>
                        </div>
                        <div>
                            <p>
                                Explicabo esse amet tempora quibusdam laudantium, laborum eaque
                                magnam fugiat hic? Esse dicta aliquid error repudiandae earum
                                suscipit fugiat molestias, veniam, vel architecto veritatis
                                delectus repellat modi impedit sequi.
                            </p>
                        </div>
                        <div>
                            <button className="btn-primary">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div  className="md:mt-60 mt-24 container mx-auto  w-full">
                    <div className="md:w-2/5 w-full flex flex-col gap-y-10 md:px-0 px-4">
                        <div className="flex flex-col">
                            <Title addClass={"text-primary"}>Sale 20% Off</Title>
                            <Title addClass={"text-secondary"}>On Everything</Title>
                        </div>
                        <div>
                            <p>
                                Explicabo esse amet tempora quibusdam laudantium, laborum eaque
                                magnam fugiat hic? Esse dicta aliquid error repudiandae earum
                                suscipit fugiat molestias, veniam, vel architecto veritatis
                                delectus repellat modi impedit sequi.
                            </p>
                        </div>
                        <div>
                            <button className="btn-primary">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div  className="md:mt-60 mt-24 container mx-auto  w-full">
                    <div className="md:w-2/5 w-full flex flex-col gap-y-10 md:px-0 px-4">
                        <div className="flex flex-col">
                            <Title addClass={"text-primary"}>Sale 20% Off</Title>
                            <Title addClass={"text-secondary"}>On Everything</Title>
                        </div>
                        <div>
                            <p>
                                Explicabo esse amet tempora quibusdam laudantium, laborum eaque
                                magnam fugiat hic? Esse dicta aliquid error repudiandae earum
                                suscipit fugiat molestias, veniam, vel architecto veritatis
                                delectus repellat modi impedit sequi.
                            </p>
                        </div>
                        <div>
                            <button className="btn-primary">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
