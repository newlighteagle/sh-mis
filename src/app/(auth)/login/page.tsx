'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Mock login delay
    setTimeout(() => {
      setLoading(false);
      router.push('/dashboard-restricted/dashboard/basic-kpi');
    }, 1000);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100 dark:bg-neutral-900">
      <div className="w-full max-w-md space-y-8 p-8 bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-gray-200 dark:border-neutral-700">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold tracking-tight">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Or{' '}
            <Link href="/register" className="font-medium text-emerald-600 hover:text-emerald-500">
              start your 14-day free trial
            </Link>
          </p>
        </div>
        
        {/* Dummy Credentials Info */}
        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border border-emerald-100 dark:border-emerald-800 text-sm">
          <p className="font-semibold text-emerald-800 dark:text-emerald-300 mb-1">Demo Credentials:</p>
          <div className="space-y-1 text-emerald-700 dark:text-emerald-400">
            <p><span className="font-medium">Email:</span> admin@wri-indonesia.org</p>
            <p><span className="font-medium">Password:</span> password123</p>
          </div>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <Label htmlFor="email-address">Email address</Label>
              <Input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1"
                placeholder="admin@wri-indonesia.org"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-1"
                placeholder="password123"
              />
            </div>
          </div>

          <div>
            <Button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
