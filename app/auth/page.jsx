'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { supabase } from '@/services/supabaseclient';
import Image from "next/image";


function Page() {

  /** Sign in with Google */

  const signInWithGoogle=async()=>{
    const {error}=await supabase.auth.signInWithOAuth({
      provider: 'google'
    });

    if (error) {
      console.error('Error signing in:', error.message);
    } else {
      console.log('Sign-in successful!');
    }

  }



  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <div className='flex flex-col items-center border rounded-2xl p-8'>
        <img src="/logo.png" alt="logo" width={400} height={100}
        className='w-[180px] '
        
        />

        <div className='flex items-center flex-col'>
          <img src={"/login.png"} alt="Login" width={600} height={400} className='w-[400px] h-[250px] rounded-2xl'/>
          <h2 className='text-2xl font-bold text-center mt-5'>Welcome to Mock Mate</h2>
          <p className='text-gray-500 text-center'>Sign it with Google Authentication</p>
        
          <Button className='mt-7 w-full'
          onClick={signInWithGoogle}
          > Login with Google </Button>


        </div>
      </div>
    </div>
  );
}

export default Page;
