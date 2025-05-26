import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useNavigate } from "react-router-dom";

const Projectcard = ({ id, photo, name, work }) => {
  const navigate = useNavigate();
  const cardref = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      cardref.current,
      {
        opacity: 0,
        yPercent: 30,
      },
      {
        opacity: 1,
        yPercent: 0,
        ease: "power4.out",
        scrollTrigger: {
          trigger: cardref.current,
          start: "top 80%",
        },
      }
    );
  }, []);
  return (
    <div
      ref={cardref}
      onClick={() => navigate(`/projects/${id}`)}
      className="  text-black-shade bg-white-shade rounded-3xl cursor-pointer overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ease-in-out transform hover:scale-200 w-90 "
    >
      <div className="w-full h-48 bg-black-shade">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-5">
        <div className="text-xs font-roboto uppercase tracking-widest  font-bold mb-1">
          {work}
        </div>
        <h3 className="text-xl font-pop font-bold">{name}</h3>
      </div>
    </div>
  );
};

export default Projectcard;
