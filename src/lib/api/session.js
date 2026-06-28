'use server'
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';


import { redirect } from 'next/navigation';

export const getUser = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  // console.log(session);
    return session?.user || null;
};

export const getUserToken = async () => {
  const session = await auth.api.getSession({
    headers : await headers()

  });
  // console.log('get user session token', session);
  
  return session?.session?.token || null;
}

export const roleValidator = async (role) => {
  const user = await getUser();
  // console.log(role, user?.role);

  if (!user || user.role !== role) {
    redirect('/unauthorized');
  }
};