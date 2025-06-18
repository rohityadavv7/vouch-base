import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Hero from "./Components/Hero";
import Marquee from "./Components/Marquee";


export default async function Home() {

  return (
    <div className="overflow-x-hidden">
      <Hero/>
      <Marquee/>
    </div>
  );
}
