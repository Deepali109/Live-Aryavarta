import Image from "next/image";
import Link from "next/link";

export default function SectionBasedInterest() {
  
  const items = [
    { src: "mountain.jpg", title: "Hill Station", slug: "hill_station" },
    { src: "wildlife.jpg", title: "Wildlife", slug: "wildlife" },
    { src: "heritage.jpg", title: "Heritage", slug: "heritage" },
    { src: "beach.jpg", title: "Beach", slug: "beach" },
    { src: "pilgrimage.jpg", title: "Pilgrimage", slug: "pilgrimage" },
    { src: "adventure.jpg", title: "Adventure", slug: "adventure" },
    { src: "trekking.jpg", title: "Trekking", slug: "trekking" },
  ];

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
          <Link href={`/category/hill_station`}>
            <div className="relative h-full min-h-[500px] cursor-pointer">
              <Image
                fill
                alt="main image"
                src={"/images/interestSection/mountain.jpg"}
                className="object-cover rounded-xl"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/100 to-transparent p-3 rounded-b-lg">
                <h3 className="text-white text-2xl font-semibold">
                  Hill Station
                </h3>
              </div>
            </div>
          </Link>
        </div>

        {/* right */}
        <div className="w-3/5 grid grid-cols-3 grid-rows-2 gap-6 h-full min-h-[500px]">
          {items.slice(1).map((item, i) => (
            <div key={i} className="relative">
              <Link href={`/category/${item.slug}`} key={i}>
                <div className=" cursor-pointer">
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
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
