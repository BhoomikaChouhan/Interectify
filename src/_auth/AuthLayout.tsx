import React from 'react';
import {Outlet, Navigate} from 'react-router-dom';

const AuthLayout = () => {
    const isAuthenticated = false;
  return (
    <>
    
    {isAuthenticated? (<Navigate to= '/'/>):
    (<>
    <section className='flex flex-1 items-center justify-center flex-col py-10'>
        <Outlet/>
    </section>
    <img 
    src=''
    alt='image'
    />
    </>)
    }
    </>
  )
}

export default AuthLayout