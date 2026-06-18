// app/dashboard/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/nextauthOptions";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  console.log("Dashboard Session:", session); // Debug

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">User Information</h2>
        
        <div className="space-y-2">
          <p><strong>ID:</strong> {session.user.id}</p>
          <p><strong>Email:</strong> {session.user.email}</p>
        </div>

        
      </div>
    </div>
  );
}