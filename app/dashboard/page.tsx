// app/dashboard/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/nextauthOptions";
import { redirect } from "next/navigation";

export const validate=3600

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);


  if (!session) {
    redirect('/login');
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      
      <div className="bg-white text-black  shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Add Project</h2>
        <input/>
      

        
      </div>
    </div>
  );
}