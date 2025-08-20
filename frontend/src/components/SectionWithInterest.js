import Image from "next/image";

export default function SectionBasedInterest() {
  return (
    <section className="py-4 px-10 bg-gray-50">
      <div className="flex justify-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 font-serif">
          Explore based on <span className="text-blue-600">Interest </span>
        </h1>
      </div>

      {/* images */}
      <div className="p-10 flex flex-row gap-7">
        {/* left image */}
        <div className="w-2/5">
          <div className="relative h-full min-h-[500px]">
            <Image
              fill
              alt="main image"
              src={"/images/interestSection/mountain.jpg"}
              className="object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3 rounded-b-lg">
              <h3 className="text-white text-xl font-semibold">Hill Station</h3>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="w-3/5 grid grid-cols-3 grid-rows-2 gap-6 h-full min-h-[500px]">
          {[
            { src: "wildlife.jpg", title: "Wildlife" },
            { src: "heritage.jpg", title: "Heritage" },
            { src: "beach.jpg", title: "Beach" },
            { src: "pilgrimage.jpg", title: "Pilgrimage" },
            { src: "adventure.jpg", title: "Adventure" },
            { src: "trekking.jpg", title: "Trekking" },
          ].map((item, i) => (
            <div key={i} className="relative">
              <Image
                src={`/images/interestSection/${item.src}`}
                alt={item.title}
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/100 to-transparent p-3 rounded-b-lg">
                <h3 className="text-white text-xl font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
