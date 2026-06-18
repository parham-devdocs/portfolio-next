// app/login/page.tsx
'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const username = formData.get('username') as string;
    const role = formData.get('role') as string;
    const password = formData.get('password') as string;

    try {
      const result = await signIn('credentials', {
        email,
        username,
        role,
        password,
        redirect: false,
      });

      console.log('SignIn result:',result);

      if (result?.error) {
        setError(result.error || 'Invalid credentials');
        setLoading(false);
      } else if (result?.ok) {
        // Successful login - redirect based on role
        if (role === 'admin') {
          router.push('/dashboard');
        } else if (role === 'user') {
          router.push('/');
        } else {
          router.push('/testimonials');
        }
        router.refresh();
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred during login');
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          defaultValue="employer12@example.com"
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="username" className="block mb-2">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          defaultValue="parham"
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="role" className="block mb-2">
          Role
        </label>
        <select
          id="role"
          name="role"
          defaultValue="admin"
          className="w-full px-3 py-2 border rounded"
          required
        >
          <option value="admin">Admin</option>
          <option value="employer">Employer</option>
          <option value="user">User</option>
        </select>
      </div>
      
      <div className="mb-4">
        <label htmlFor="password" className="block mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          defaultValue="employer"
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      {error && (
        <div className="mb-4 text-red-500 text-sm">{error}</div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? 'Signing in...' : 'Sign In'}
      </button>
    </form>
  );
}