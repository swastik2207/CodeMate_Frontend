'use client'
import SignupForm from '../../components/SignupForm';
import { useRouter } from 'next/navigation';
import { signup } from '@/utils/Auth';

export default function SignupPage() {
  const router = useRouter();

  const handleSignup = async(name, email, password) => {
    try{
    await signup(name, email, password);
    console.log("registration successful");
   // router.push('/login');
    }
  catch(err)  {

    console.log(err.message)

    }
  };

  return <SignupForm onSignup={handleSignup} onSwitchToLogin={() => router.push('/login')} />;
}
