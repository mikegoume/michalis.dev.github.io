import React, { useEffect, useRef } from "react";
import useIsInViewport from "../../../components/useIsInViewPort";

function Experience(props) {
  const ref = useRef(null);

  const { img, title, time, expertise, location, tasks } = props;

  const isInViewPort = useIsInViewport(ref);

  useEffect(() => {
    if (isInViewPort) {
      ref.current.style.transform = `translateX(0px)`;
    }
  }, [isInViewPort]);

  return (
    <div
      ref={ref}
      className="bg-white flex flex-col mb-8 lg:flex-row lg:justify-between lg:gap-7 items-center translate-x-full duration-1000"
    >
      <img alt="" src={img} className="w-1/2 lg:w-1/5 mb-3 lg:mb-0" />
      <div className="w-full px-4 py-5">
        <div className="flex flex-row justify-between align-center mb-3">
          <p className="font-sans text-lg lg:text-2xl font-extrabold">
            {title}
          </p>
          <p className="font-sans text-sm lg:text-xl font-medium">{time}</p>
        </div>
        <div className="flex flex-row justify-between align-center mb-5">
          <p className="font-sans text-sm lg:text-xl font-semibold">
            {expertise}
          </p>
          <p className="font-sans text-sm lg:text-xl">
            {location ? location : "-"}
          </p>
        </div>
        <div className="pl-6 pt-5">
          <ul className="list-disc">
            {tasks.map((task) => (
              <li key={task.id} className="text-sm font-normal">
                <p className="font-sans text-sm lg:text-lg text-left">
                  {task.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
