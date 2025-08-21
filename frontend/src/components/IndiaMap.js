"use client"; // ensure client-only

import { useEffect } from "react";
import Script from "next/script";

export default function IndiaMap() {
  useEffect(() => {
    // Ensure the map only initializes on client
    if (typeof window !== "undefined" && window.simplemaps_countrymap) {
      window.simplemaps_countrymap.load();
    }
  }, []);

  return (
    <div
      className="relative w-full h-auto px-6 bg-[rgb(197, 244, 242, 0.375)]"
      //   style={{
      //     background: `linear-gradient(
      //   to right,
      //   rgb(197, 244, 242) 0%,
      //   rgb(197, 244, 242) 20%,
      //   rgba(197, 244, 242, 0.375) 40%,
      //   rgba(197, 244, 242, 0.375) 60%,
      //   rgb(197, 244, 242) 80%,
      //   rgb(197, 244, 242) 100%
      // )`,
      //   }}
    >
      {/* Map container */}
      <div className="w-full flex justify-center">
        <div id="map" className="w-[900px] h-auto pl-10"></div>
      </div>

      {/* Load mapdata.js and countrymap.js only on client */}
      <Script src="/map/mapdata.js" strategy="afterInteractive" />
      <Script src="/map/countrymap.js" strategy="afterInteractive" />
    </div>
  );
}
