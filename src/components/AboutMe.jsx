import Maindetails from "./Maindetails";
import Span from "./Span";

const AboutMe = () => {
  return (
    <div className="w-full h-full ">
      <h1 className="px-2 sm:px-12 md:px-28 lg:px-30  mt-10 text-3xl lg:text-5xl font-bold font-pop relative inline-block ">
        <Span text="ABOUT ME" height="after:h-[0.2em]" />
      </h1>

      <Maindetails />
    </div>
  );
};

export default AboutMe;
