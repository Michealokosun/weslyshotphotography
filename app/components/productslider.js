"use client";
const { default: Image } = require("next/image");
import { useEffect, useRef, useState } from "react";

export const ProductSlider = () => {
  const scrollContainerRef = useRef(null);
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) return;

    let scrollAmount = 0; // Current scroll position
    let direction = 1; // 1 for forward, -1 for backward
    const speed = 0.7; // Adjust this for faster or slower scrolling

    const animateScrollbar = () => {
      const maxScroll =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;

      // Update scroll position
      scrollAmount += direction * speed;

      // Reverse direction when reaching the boundaries
      if (scrollAmount >= maxScroll || scrollAmount <= 0) {
        direction *= -1; // Reverse direction
      }

      // Apply the calculated scroll position
      scrollContainer.scrollLeft = scrollAmount;

      // Request the next animation frame
      requestAnimationFrame(animateScrollbar);
    };

    // Start the animation
    const animationFrame = requestAnimationFrame(animateScrollbar);

    // Cleanup on unmount
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <>
      <div
        ref={scrollContainerRef}
        className="slider-container     my-4 grid grid-flow-col  text-white overflow-x-scroll "
      >
        <div className="slider-1 w-[250px]     flex justify-start items-center gap-4">
          <div className="icon">
            <Image
              width={50}
              height={50}
              alt="abstract"
              src="/Clippathgroup.png"
            />
          </div>
          <div className="text capitalize   ">Event photography</div>
        </div>
        <div className="slider-1 w-full flex justify-start items-center gap-4">
          <div className="icon">
            <Image
              width={50}
              height={50}
              alt="abstract"
              src="/Clippathgroup.png"
            />
          </div>
          <div className="text capitalize">Event photography</div>
        </div>
        <div className="slider-1 w-full flex justify-start items-center gap-4">
          <div className="icon">
            <Image
              width={50}
              height={50}
              alt="abstract"
              src="/Clippathgroup.png"
            />
          </div>
          <div className="text capitalize">Event photography</div>
        </div>
        <div className="slider-1 w-full flex justify-start items-center gap-4">
          <div className="icon">
            <Image
              width={50}
              height={50}
              alt="abstract"
              src="/Clippathgroup.png"
            />
          </div>
          <div className="text capitalize">Event photography</div>
        </div>
        <div className="slider-1 w-full flex justify-start items-center gap-4">
          <div className="icon">
            <Image
              width={50}
              height={50}
              alt="abstract"
              src="/Clippathgroup.png"
            />
          </div>
          <div className="text capitalize">Event photography</div>
        </div>
        <div className="slider-1 w-full flex justify-start items-center gap-4">
          <div className="icon">
            <Image
              width={50}
              height={50}
              alt="abstract"
              src="/Clippathgroup.png"
            />
          </div>
          <div className="text capitalize">Event photography</div>
        </div>
        <div className="slider-1 w-full flex justify-start items-center gap-4">
          <div className="icon">
            <Image
              width={50}
              height={50}
              alt="abstract"
              src="/Clippathgroup.png"
            />
          </div>
          <div className="text capitalize">Event photography</div>
        </div>
      </div>
    </>
  );
};
