
export const signup = async (name, email, password) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/user/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username:name, email, password }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || 'Signup failed');
  }

  return data;
};
