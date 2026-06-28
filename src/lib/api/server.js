

import { baseURL } from './baseUrl';
import { getUserToken } from './session';

export const authHeaders = async() => {
  const token = await getUserToken();
  // console.log('Token', token);
  
  const header = {
    authorization : `Bearer ${token}`
  }

  // console.log('headers', header);
  
  return token ? header : {};
}

export const serverMutation = async (path, method, data) => {
  //   console.log(data);

  const res = await fetch(`${baseURL}${path}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      ... await authHeaders()
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteMutation = async (path) => {
  const res = await fetch(`${baseURL}${path}`, {
    method: 'DELETE',
  });
  return res.json();
};

export const serverFetch = async (path) => {
  const res = await fetch(`${baseURL}${path}`, {
    cache: 'no-store',
  });
  return res.json();
};


export const protectedFatch = async(path) => {
   const res = await fetch(`${baseURL}${path}`,{
    headers : await authHeaders()
   });

  return res.json();

}