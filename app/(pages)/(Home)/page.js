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
          <div className="row flex">
            <div className="col1">
              <Image
                className=" w-full  md:w-80"
                width={400}
                height={400}
                alt="aboutme"
                src="/aboutme.png"
              />
            </div>
            <div className="col1"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
