const ImageOverlay = ({ work, Name, photo }) => {
  return (
    <div
      className="relative h-100 lg:w-100 lg:h-100 rounded-2xl px-2 bg-cover bg-center flex justify-start items-end shadow-2xl cursor-pointer text-white"
      style={{ backgroundImage: `url(${photo})` }}
    >
      {/* Overlay Effect */}
      <div className="absolute inset-0 bg-black opacity-50 lg:opacity-40 rounded-2xl lg:hover:opacity-30"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col justify-start items-start w-100 ml-2 mb-2 lg:mb-5 lg:ml-5">
        <p className=" text-xl max-w-2xl font-roboto mb-2">{work}</p>
        <h1 className="text-4xl font-bold font-pop">{Name}</h1>
      </div>
    </div>
  );
};

export default ImageOverlay;
