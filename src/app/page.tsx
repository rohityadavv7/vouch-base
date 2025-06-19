import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Hero from "./Components/Hero";
import Pricing from "./Components/Pricing";


export default async function Home() {

  return (
    <div className="overflow-x-hidden">
      <Hero/>
      <Pricing/>
    </div>
  );
}
