import Pricing from "@/app/games/minecraft-server-hosting/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minecraft Server Hosting - AstralCloud",
  description:
    "Create the best Minecraft server with AstralCloud. Support provided for modded server hosting, modpacks, mods, and plugins. Play your game how you want.",
  keywords:
    "minecraft server, minecraft servers, create minecraft server, 247 minecraft server",
  openGraph: {
    title: "Minecraft Server Hosting - AstralCloud",
    description:
      "Create the best Minecraft server with AstralCloud. Support provided for modded server hosting, modpacks, mods, and plugins. Play your game how you want.",
  },
  twitter: {
    title: "Minecraft Server Hosting - AstralCloud",
    description:
      "Create the best Minecraft server with AstralCloud. Support provided for modded server hosting, modpacks, mods, and plugins. Play your game how you want.",
  },
};

const MinecraftServerHosting = () => {
  return <Pricing />;
};

export default MinecraftServerHosting;
