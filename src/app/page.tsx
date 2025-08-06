"use client";

import Navbar from "@/component/Navbar";
import Image from "next/image";
import InstaEmbed from "@/component/InstaEmbed";
import { useState } from "react";
import type { Fraksi } from "@/component/InstaEmbed";

export default function Page() {
  const [activeFraksi, setActiveFraksi] = useState<Fraksi>("elektro");

  const fraksiList = [
    { id: "sipil", src: "/image/sipil.png", alt: "Fraksi Sipil" },
    { id: "mesin", src: "/image/mesin.png", alt: "Fraksi Mesin" },
    { id: "elektro", src: "/image/elektro.png", alt: "Fraksi Elektro" },
    { id: "metal", src: "/image/metal.png", alt: "Fraksi Metal" },
    { id: "ars", src: "/image/ars.png", alt: "Fraksi Arsitektur" },
    { id: "tekkim", src: "/image/tekkim.png", alt: "Fraksi Kimia" },
    { id: "industri", src: "/image/industri.png", alt: "Fraksi Industri" },
    { id: "pi", src: "/image/pi.png", alt: "Fraksi Program Internasional" },
  ];

  return (
    <main>
      <Navbar />

      {/* Title Section */}
      <section className="Title relative w-full flex bg-gray-100">
        <Image
          src="/image/Title.jpg"
          alt="Title Image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </section>

      {/* About Section */}
      <section className="About w-full h-screen flex flex-col items-center bg-white py-24 gap-24">
        <div className="relative flex items-center w-full">
          <Image
            src="/image/Rectangle 411.webp"
            alt="Decoration Left"
            width={0}
            height={0}
            sizes="100vw"
            className="object-cover w-full h-auto"
          />
          <h2 className="mx-4 text-4xl font-bold gradient-1 tracking-[0.15em] whitespace-nowrap">
            KENALI LEBIH DALAM
          </h2>
          <Image
            src="/image/Rectangle 411.webp"
            alt="Decoration Right"
            width={0}
            height={0}
            sizes="100vw"
            className="object-cover w-full h-auto rotate-180"
          />
        </div>

        <div className="flex items-center justify-center w-full gap-16">
          <Image
            src="/image/logoMPM.webp"
            alt="Logo MPM FTUI"
            width={0}
            height={0}
            sizes="100vw"
            className="object-cover w-1/4 h-auto"
          />
          <div className="flex flex-col w-2/5">
            <h3 className="text-8xl font-bold gradient-1">APA ITU</h3>
            <h2 className="text-9xl font-bold gradient-1">MPM FTUI?</h2>
            <p className="text-4xl text-justify text-navy">
              Majelis Permusyawaratan Mahasiswa Fakultas Teknik Universitas Indonesia adalah lembaga tertinggi dalam IKM FTUI dan pemegang kekuasaan legislatif dan yudikatif.
            </p>
          </div>
        </div>
      </section>

      {/* Structure Section */}
      <section className="Structure w-full min-h-screen flex flex-col items-center bg-diagonal-gradient py-16">
        <h2 className="text-6xl font-bold text-white mb-16 text-center">
          MPM FTUI terdiri atas
        </h2>

        <div className="flex w-full justify-center gap-36">
          <div className="w-full max-w-4xl">
            {/* Fraksi Departemen */}
            <div className="mb-16">
              <h3 className="text-5xl font-semibold text-white mb-12 text-center">Fraksi Departemen</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
                {fraksiList.map(({ id, src, alt }) => (
                  <div
                    key={id}
                    className={`flex justify-center cursor-pointer transition-transform duration-300 ${
                      activeFraksi === id ? "scale-110" : ""
                    }`}
                    onClick={() => setActiveFraksi(id as Fraksi)}
                  >
                    <Image
                        src={src}
                        alt={alt}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Komisi, Baleg & Kesekjenan - All in one row */}
            <div className="flex justify-center items-center gap-24">
              {/* Komisi */}
              <div className="flex flex-col items-center">
                <h3 className="text-4xl font-semibold text-white mb-8 text-center">Komisi</h3>
                <div className="flex justify-center gap-8">
                  <Image src="/image/kolega.png" alt="Kolega" width={80} height={80} />
                  <Image src="/image/komsis.png" alt="Komsis" width={80} height={80} />
                  <Image src="/image/komandan.png" alt="Komandan" width={80} height={80} />
                </div>
              </div>

              {/* Baleg */}
              <div className="flex flex-col items-center">
                <h4 className="text-4xl text-white font-semibold mb-8">Baleg</h4>
                <Image src="/image/baleg.png" alt="Baleg" width={80} height={80} />
              </div>

              {/* Kesekjenan */}
              <div className="flex flex-col items-center">
                <h4 className="text-4xl text-white font-semibold mb-8">Kesekjenan</h4>
                <Image src="/image/kesekjenan.png" alt="Kesekjenan" width={80} height={80} />
              </div>
            </div>
          </div>

          {/* Instagram Embed */}
          <div className="w-[500px] flex-shrink-0">
            <InstaEmbed fraksi={activeFraksi} />
          </div>
        </div>
      </section>
    </main>
  );
}
