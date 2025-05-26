export const AboutMePics = ({ sm, md, photo }) => {
  return (
    <div
      className={`md:w-[45%] lg:w-[50%] mt-4 ${sm} md:flex  md:${md} md:items-center md:justify-center  md:mt-0 `}
    >
      <img
        src={photo}
        alt="pic"
        className=" object-cover h-80 w-80 rounded-2xl overflow-hidden "
      ></img>
    </div>
  );
};
