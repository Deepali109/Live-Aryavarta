// "use client";
// import TiltCard from "./TiltCardAnimation";

// export default function PopularSites() {
//   return (
//     <section className="w-full min-h-screen flex items-center justify-center px-8 py-16">
//       <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         {/* LEFT SIDE - TEXT */}
//         <div className="space-y-6">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
//             Explore the <span className="text-blue-600">India </span> with Us
//           </h1>
//           <p className="text-gray-600 text-lg">
//             Discover amazing destinations, plan unforgettable trips, and enjoy
//             seamless travel experiences. Let’s make your next journey
//             hassle-free and full of memories.
//           </p>
//           <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition">
//             Get Started
//           </button>
//         </div>

//         {/* RIGHT SIDE - CARDS */}
//         <div className="grid grid-cols-2 gap-4">
//           {/* Card */}

//           <div className="relative aspect-[7/8] rounded-xl shadow-md overflow-hidden group">
//             <div
//               className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
//               style={{ backgroundImage: "url('/images/taj-mahal.jpg')" }}
//             ></div>
//             <div className="absolute bottom-0 left-0 py-3 px-4 w-full bg-black/50 text-white">
//               <h3 className="text-lg font-semibold">Taj Mahal</h3>
//               <p className="text-xs mt-1">
//                 Book cheap flights instantly with exclusive offers.
//               </p>
//             </div>
//           </div>

//           {/* Card */}
//           <div className="mt-12 relative aspect-[7/8] rounded-xl shadow-md overflow-hidden group">
//             <div
//               className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
//               style={{ backgroundImage: "url('/images/golden-temple.jpg')" }}
//             ></div>
//             <div className="absolute bottom-0 left-0 py-3 px-4 w-full bg-black/50 text-white">
//               <h3 className="text-lg font-semibold">Golden Temple</h3>
//               <p className="text-xs mt-1">
//                 Experience the divine beauty and peace.
//               </p>
//             </div>
//           </div>

//           {/* Card */}
//           <div className="relative aspect-[7/8] rounded-xl shadow-md overflow-hidden group">
//             <div
//               className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
//               style={{ backgroundImage: "url('/images/bada-bagh.jpg')" }}
//             ></div>
//             <div className="absolute bottom-0 left-0 py-3 px-4 w-full bg-black/50 text-white">
//               <h3 className="text-lg font-semibold">Mandir</h3>
//               <p className="text-xs mt-1">
//                 Discover heritage temples with rich history.
//               </p>
//             </div>
//           </div>

//           {/* Card */}
//           <div className="mt-12 relative aspect-[7/8] rounded-xl shadow-md overflow-hidden group">
//             <div
//               className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
//               style={{ backgroundImage: "url('/images/kashiviswanath.jpg')" }}
//             ></div>
//             <div className="absolute bottom-0 left-0 py-3 px-4 w-full bg-black/50 text-white">
//               <h3 className="text-lg font-semibold">Kashi Vishwanath</h3>
//               <p className="text-xs mt-1">
//                 One of the most sacred temples of India.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import React from "react";

// /**
//  * Honeycomb layout:
//  * - rows: [3, 3, 2]
//  * - places hexes with absolute positioning so rows are offset by half hex widths
//  *
//  * Make sure your images exist in /public/images (or adjust the paths).
//  */

// const hexItems = [
//   { title: "FIND JOBS ?", img: "/images/mandir1.jpg" },
//   { title: "HIRE TALENT?", img: "/images/mandir2.jpg" },
//   { title: "ASSESS TALENT ?", img: "/images/taj-mahal.jpg" },
//   { title: "LEARN & GROW", img: "/images/image3.jpg" },
//   { title: "AI TOOLS", img: "/images/golden-temple.jpg" },
//   { title: "EXPLORE", img: "/images/kashiviswanath.jpg" },
//   { title: "DISCOVER", img: "/images/bada-bagh.jpg" },
//   { title: "VISIT", img: "/images/mandir1.jpg" }, // duplicate OK for demo
// ];

// export default function PopularSitesHoneycomb() {
//   // config: tweak these to scale hexes / spacing
//   const HEX_W = 270; // width (px)
//   const HEX_H = 270; // height (px)
//   const GAP = 4; // horizontal gap between hexes (px)
//   const ROWS = [3, 3, 2]; // first row 3, second row 3 (offset), third row 2 (offset further)

//   // compute positions for each hex (absolute layout)
//   const positions = [];
//   let idx = 0;
//   let prevOffset = 0;
//   for (let r = 0; r < ROWS.length; r++) {
//     const count = ROWS[r];
//     let offsetX;
//     if (r === 0) {
//       offsetX = 0;
//     } else if (r === 1) {
//       // second row starts after half of first row's first hex: w/2 + gap/2
//       offsetX = prevOffset + HEX_W / 2 + GAP / 2;
//     } else {
//       // third row starts after half of second row's first hex: prevOffset + w/2
//       offsetX = prevOffset + HEX_W / 2;
//     }
//     prevOffset = offsetX;

//     // vertical spacing: use 0.75 * height (typical for flat-top hex tiling)
//     const top = Math.round(r * (HEX_H * 0.75));

//     for (let j = 0; j < count; j++) {
//       const left = Math.round(offsetX + j * (HEX_W + GAP));
//       const item = hexItems[idx] ?? {
//         title: "Coming soon",
//         img: "/images/mandir1.jpg",
//       };
//       positions.push({ left, top, item });
//       idx++;
//     }
//   }

//   // determine container size to fit all hexes
//   const maxLeft = Math.max(...positions.map((p) => p.left));
//   const maxTop = Math.max(...positions.map((p) => p.top));
//   const containerWidth = maxLeft + HEX_W + 24;
//   const containerHeight = maxTop + HEX_H + 24;

//   // hex clip-path (flat-top hexagon)
//   const hexClip = "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)";

//   return (
//     <section className="w-full min-h-screen flex items-center justify-center px-8 py-10">
//       <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-2 items-start">
//         {/* LEFT - Text area */}
//         <div className="text-white px-4 md:px-0 w-[2/5]">
//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-lg">
//             Your Career <br />
//             Growth <br />
//             <span className="text-blue-400">Ecosystem</span>
//           </h1>

//           <p className="text-gray-300 text-lg mt-6 max-w-md">
//             Find the right tools to reach your goals, and get the opportunities
//             and support you need to succeed.
//           </p>
//         </div>

//         {/* RIGHT - honeycomb container */}
//         <div className="flex justify-end w-3/5">
//           <div
//             className="relative"
//             style={{
//               width: containerWidth,
//               height: containerHeight,
//               // small right padding so hexes don't touch edge
//               paddingRight: 10,
//             }}
//           >
//             {positions.map((p, i) => (
//               <div
//                 key={i}
//                 className="absolute transition-transform duration-300 hover:translate-y-[-6px] hover:scale-[1.02]"
//                 style={{
//                   left: p.left,
//                   top: p.top,
//                   width: HEX_W,
//                   height: HEX_H,
//                 }}
//               >
//                 {/* Outer frame (dark edged border like screenshot) */}
//                 <div
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     padding: 2,
//                     boxSizing: "border-box",
//                     clipPath: hexClip,
//                     background:
//                       "linear-gradient(180deg, rgba(9,22,30,1), rgba(6,18,25,1))",
//                     boxShadow:
//                       "inset 0 -12px 20px rgba(0,0,0,0.45), 0 8px 28px rgba(0,0,0,0.35)",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   {/* Inner image hex */}
//                   <div
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       clipPath: hexClip,
//                       backgroundImage: `url(${p.item.img})`,
//                       backgroundSize: "cover",
//                       backgroundPosition: "center",
//                       position: "relative",
//                       overflow: "hidden",
//                     }}
//                   >
//                     {/* Bottom title pill */}
//                     <div
//                       style={{
//                         position: "absolute",
//                         left: "50%",
//                         transform: "translateX(-50%)",
//                         bottom: "8%",
//                         padding: "8px 14px",
//                         fontSize: 13,
//                         fontWeight: 700,
//                         color: "#fff",
//                         background: "rgba(2,7,15,0.5)",
//                         borderRadius: 20,
//                         backdropFilter: "blur(4px)",
//                         letterSpacing: 0.6,
//                       }}
//                     >
//                       {p.item.title}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* responsive tweak (smaller hexes on narrow screens) */}
//       <style jsx>{`
//         @media (max-width: 920px) {
//           /* reduce hex size on medium screens */
//           div[style] > div[style] > div[style] {
//             /* no-op fallback; sizing is inline — you can adjust HEX_W / HEX_H above if needed */
//           }
//         }

//         @media (max-width: 720px) {
//           /* on mobile: stack hexes under the text in a simple grid to avoid overlap */
//           section > div > div:nth-child(2) {
//             width: 100% !important;
//             display: block;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";
import React from "react";

const hexItems = [
  { title: "FIND JOBS ?", img: "/images/mandir1.jpg" },
  { title: "HIRE TALENT?", img: "/images/mandir2.jpg" },
  { title: "ASSESS TALENT ?", img: "/images/taj-mahal.jpg" },
  { title: "LEARN & GROW", img: "/images/image3.jpg" },
  { title: "AI TOOLS", img: "/images/golden-temple.jpg" },
  { title: "EXPLORE", img: "/images/kashiviswanath.jpg" },
  { title: "DISCOVER", img: "/images/bada-bagh.jpg" },
  { title: "VISIT", img: "/images/mandir1.jpg" },
];

export default function PopularSitesHoneycomb() {
  const HEX_W = 260;
  const HEX_H = 260;
  const GAP = 0;
  const ROWS = [3, 3, 2];

  const positions = [];
  let idx = 0;
  let prevOffset = 0;

  for (let r = 0; r < ROWS.length; r++) {
    const count = ROWS[r];
    let offsetX;
    if (r === 0) offsetX = 0;
    else if (r === 1) offsetX = prevOffset + HEX_W / 2;
    else offsetX = prevOffset + HEX_W / 2;
    prevOffset = offsetX;

    const top = Math.round(r * (HEX_H * 0.75));
    for (let j = 0; j < count; j++) {
      const left = Math.round(offsetX + j * HEX_W);
      const item = hexItems[idx] ?? {
        title: "Coming soon",
        img: "/images/mandir1.jpg",
      };
      positions.push({ left, top, item });
      idx++;
    }
  }

  const maxLeft = Math.max(...positions.map((p) => p.left));
  const maxTop = Math.max(...positions.map((p) => p.top));
  const containerWidth = maxLeft + HEX_W + 24;
  const containerHeight = maxTop + HEX_H + 24;

  const hexClip = "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)";

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-8 py-10">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-2 items-start">
        {/* LEFT SIDE */}
        <div className="space-y-6 flex flex-col h-full justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Explore the <span className="text-blue-600">India </span> with Us
          </h1>
          <p className="text-gray-600 text-lg">
            Discover amazing destinations, plan unforgettable trips, and enjoy
            seamless travel experiences. Let’s make your next journey
            hassle-free and full of memories.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        {/* RIGHT SIDE - Honeycomb */}
        <div className="flex justify-end w-[60%]">
          <div
            className="relative"
            style={{ width: containerWidth, height: containerHeight }}
          >
            {positions.map((p, i) => (
              <div
                key={i}
                className="absolute "
                style={{
                  left: p.left,
                  top: p.top,
                  width: HEX_W,
                  height: HEX_H,
                }}
              >
                <div className="hex-frame">
                  <div className="flip-container cursor-pointer">
                    <div className="flipper">
                      {/* FRONT */}
                      <div
                        className="face front"
                        style={{
                          backgroundImage: `url(${p.item.img})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          clipPath: hexClip,
                        }}
                      />
                      {/* BACK */}
                      <div className="face back">
                        <div className="text-content">{p.item.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hex-frame {
          width: 100%;
          height: 100%;
          padding: 2px;
          box-sizing: border-box;
          clip-path: ${hexClip};
          background: linear-gradient(
            180deg,
            rgba(9, 22, 30, 1),
            rgba(6, 18, 25, 1)
          );
          box-shadow: inset 0 -12px 20px rgba(0, 0, 0, 0.45),
            0 6px 20px rgba(0, 0, 0, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .flip-container {
          width: 100%;
          height: 100%;
          perspective: 1200px;
        }

        .flipper {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          will-change: transform;
          transition: transform 0.9s cubic-bezier(0.4, 0.2, 0.2, 1);
        }

        .hex-frame:hover .flipper {
          transform: rotateY(180deg);
        }

        .face {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .front {
          transform: rotateY(0deg);
        }

        .back {
          transform: rotateY(180deg);
          clip-path: ${hexClip};
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.8)
          );
        }

        .text-content {
          color: #fff;
          font-size: 18px;
          font-weight: 700;
          text-align: center;
          padding: 12px 20px;
          border-radius: 8px;
        }
      `}</style>
    </section>
  );
}
