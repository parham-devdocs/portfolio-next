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
          <p><strong>Name:</strong> {session.user.name}</p>
          <p><strong>Username:</strong> {session.user.username}</p>
          <p><strong>Email:</strong> {session.user.email}</p>
          <p><strong>Role:</strong> {session.user.role}</p>
        </div>

        {/* Role-based content */}
        {session.user.role === 'admin' && (
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded">
            <p className="text-blue-700">🔑 Admin Access</p>
            <p>You have full administrative privileges.</p>
          </div>
        )}

        {session.user.role === 'user' && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
            <p className="text-green-700">👤 User Access</p>
            <p>You have standard user privileges.</p>
          </div>
        )}

        {session.user.role === 'employer' && (
          <div className="mt-4 p-4 bg-purple-50 border border-purple-200 rounded">
            <p className="text-purple-700">💼 Employer Access</p>
            <p>You have employer privileges.</p>
          </div>
        )}
      </div>
    </div>
  );
}