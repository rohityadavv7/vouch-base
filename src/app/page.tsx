import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  console.log("Session:", session);
  return (
    <div>
      {JSON.stringify(session)}
    </div>
  );
}
