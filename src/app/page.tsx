import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log("Session:", session?.user?.roleType);
  return (
    <div>
      {JSON.stringify(session?.user)}
    </div>
  );
}
