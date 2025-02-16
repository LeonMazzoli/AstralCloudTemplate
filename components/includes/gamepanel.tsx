"use client";
import { useState } from "react";
import Image from "next/image";

const elements = [
  {
    name: "dashboard",
    label: "🛖 Dashboard",
    src: "/assets/images/game-panel/dashboard.webp",
  },
  {
    name: "filemanagement",
    label: "🗂️ File Management",
    src: "/assets/images/game-panel/filemanagement.webp",
  },
  {
    name: "plugininstaller",
    label: "🧩 Plugin Installer",
    src: "/assets/images/game-panel/plugininstaller.webp",
  },
];

const GamePanel = () => {
  const [activeElement, setActiveElement] = useState(elements[0]);

  const handleImageChange = (element: any) => {
    setActiveElement(element);
  };

  return (
    <section className="relative overflow-hidden p-5 lg:p-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `radial-gradient(closest-side, rgba(30, 34, 39, .70), #1E2227), url('/assets/images/game-panel/background.webp')`,
        }}
      ></div>
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold lg:text-3xl">
            Experience AstralCloud Control Panel
          </h1>
          <p className="text-gray-300">
            Pterodactyl is the premium panel used by us to control gaming
            services, offering our clients a user-friendly and efficient
            platform.
          </p>
          {elements.map((element) => (
            <div
              key={element.name}
              className={`cursor-pointer rounded-xl bg-teritiary p-5 font-bold duration-200 ease-in-out hover:border-r-8 hover:border-gray-600 hover:px-8 ${
                activeElement.name === element.name
                  ? "cursor-default border-r-8 border-astralcloud duration-200 ease-in-out hover:border-[#1089af] hover:px-5"
                  : ""
              }`}
              onClick={() => handleImageChange(element)}
            >
              {element.label}
            </div>
          ))}
        </div>
        <div>
          <Image
            src={activeElement.src}
            alt="pterodactyl control panel"
            width={600}
            height={400}
            className="rounded-xl opacity-80 outline outline-8 outline-teritiary"
          />
        </div>
      </div>
    </section>
  );
};

export default GamePanel;
