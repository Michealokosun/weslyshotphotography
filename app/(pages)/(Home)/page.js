import { CustomButton } from "@/app/components/button";
import { ProductSlider } from "@/app/components/productslider";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" mx-auto ">
      <section className="text-white py-14   overflow-hidden relative p-10 flex flex-col md:flex-row gap-6 justify-between items-start mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div>
          <p className="text-xs text-grayshade2">Stunning Photography by</p>
          <p className="text-5xl">Damien Braun</p>
        </div>

        <Image
          className="absolute hidden md:block -translate-x-1/2 opacity-80 top-0 left-1/2"
          width={200}
          height={200}
          alt="abstract"
          src="/Abstract Design.png"
        />

        <div className="text-4xl md:text-4xl">
          <p>
            Let’s{" "}
            <button className="bg-purpleshade1 p-2 px-5 rounded-full  text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </p>
          <p>Work Together</p>
        </div>
      </section>
      <section className="sliders-cont">
        <ProductSlider />
      </section>

      <section className="">
        <div className="mx-auto   max-w-7xl px-2 sm:px-6 lg:px-8">
          <Image
            className="hidden md:block"
            width={1196}
            height={512}
            alt="bann_ing"
            src="/13.png"
          />
          <Image
            className="block  md:hidden"
            width={1196}
            height={512}
            alt="bann_ing"
            src="/mobile banner.png"
          />
        </div>
      </section>

      <section className="ABOUT_ME_SECTION mt-16 text-white mx-auto  max-w-7xl px-2 sm:px-6 lg:px-8 ">
        <div className="aboutme-header flex justify-between flex-col items-start md:flex-row md:items-center gap-5">
          {/* TEXT --- */}
          <div>
            <span className="text-xs text-gray-400 capitalize pb-3">About</span>
            <h1 className="uppercase text-4xl"> i AM JohnWesley</h1>
          </div>
          {/* BUTTON --- */}
          <CustomButton>
            <div className="flex items-center gap-1">
              <h5>Know More</h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </CustomButton>
        </div>
        <div className="aboutmecontent mt-5">
          <div className="row flex items-center flex-col md:flex-row gap-5">
            <div className="col1">
              <Image
                className=" block md:hidden w-full  "
                width={400}
                height={400}
                alt="aboutme"
                src="/aboutme.png"
              />
              <Image
                className=" hidden md:block   "
                width={1900}
                height={1200}
                alt="aboutme"
                src="/aboutme.png"
              />
            </div>
            <div className="col1 border shadow-xl rounded-lg  border-gray-900 p-">
              <div className="introduction pb-3 border-gray-900 border-b">
                <h3 className="flex gap-2 p-2 items-center">
                  {" "}
                  <Image width={30} height={30} alt="image" src="/star.png" />
                  Introduction
                </h3>
                <p className="text-gray-400 text-sm p-2 mt-5">
                  My journey as a photographer has been a lifelong quest to
                  capture the extraordinary in the ordinary, to freeze fleeting
                  moments in time, and to share the world's beauty as I see it.
                  Based in the enchanting landscapes of the USA, I find
                  inspiration in every corner of this diverse and vibrant
                  country. Join me as we embark on a visual odyssey, where each
                  photograph tells a story, and every frame is a piece of my
                  heart.
                </p>
              </div>
              <div className="contact-info mt- p-2">
                <h3 className="flex capitalize gap-2 items-center">
                  <Image width={30} height={30} alt="image" src="/star.png" />{" "}
                  Contact information
                </h3>
                <div className="flex mt-5 flex-col md:flex-row gap-8 md:gap-40">
                  <p className="flex gap-2 flex-col">
                    <span>Email</span>
                    <span className="text-sm text-gray-400 lowercase">
                      SMidjssjxjxth@gmail.com
                    </span>
                  </p>
                  <p className="flex gap-2 flex-col">
                    <span>Phone Number</span>
                    <span className="text-xs text-gray-400 lowercase">
                      +000 000000000
                    </span>
                  </p>
                </div>
                <div className="socials items-start md:items-center flex justify-between flex-col md:flex-row gap-5 ">
                  <div className="social-icons flex gap-2 border rounded-full border-gray-900 p-1 mt-5">
                    <Image
                      src="/iconfacebook.png"
                      height={30}
                      width={40}
                      alt="facebook"
                    />
                    <Image
                      src="/icontwitter.png"
                      height={40}
                      width={40}
                      alt="facebook"
                    />
                    <Image
                      src="/twitter.png"
                      height={40}
                      width={40}
                      alt="facebook"
                    />
                  </div>
                  <div className="cvs flex-row  flex gap-5 mt-5">
                    <CustomButton>
                      <div className="flex items-center  gap-1">
                        <h5 className="capitalize">let's work</h5>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="size-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                          />
                        </svg>
                      </div>
                    </CustomButton>
                    <CustomButton>
                      <div className="flex items-center gap-1">
                        <h5>Download CV</h5>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="size-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                          />
                        </svg>
                      </div>
                    </CustomButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
