'use client'

import './globals.css'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react';
import axios from 'axios';

const poppins = Poppins({ weight:"400", subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <html lang="en">
      <body className={poppins.className}>
        <nav className='relative'>
          <div className={pathname === "/" ? 'flex justify-between items-center px-20 bg-transparent text-white absolute top-0 z-[999] w-full' : 'flex justify-between items-center px-20 bg-white text-neutral-800 absolute top-0 z-[999] w-full shadow-lg shadow-neutral-800/40'}>
            <div>
              <img src='/assets/small/logo-tree-counting.png' className='w-16 h-16'/>
            </div>

            <div className='flex items-center gap-5'>
              <Link href="/" className={pathname === '/' ? 'border-b-[3px] transition-all duration-500 border-white px-2 py-1' : 'border-b-[3px] transition-all duration-500 border-transparent px-2 py-1'}>Home</Link>
              <Link href="/product" className={pathname === '/product' ? 'border-b-[3px] transition-all duration-500 border-neutral-800 px-2 py-1' : 'border-b-[3px] transition-all duration-500 border-transparent px-2 py-1'}>Product</Link>
              <Link href="/profile" className={pathname === '/profile' ? 'border-b-[3px] transition-all duration-500 border-neutral-800 px-2 py-1' : 'border-b-[3px] transition-all duration-500 border-transparent px-2 py-1'}>Profile</Link>
            </div>
          </div>
        </nav>
        
        {children}

      {/* footer */}
      <div className='px-20 mt-28 py-10 flex border-t-4 border-neutral-400'>
        <div className='w-1/12'>
          <img src='/assets/small/logo-tree-counting.png' className='w-24 h-24'/>
        </div>
        <div className='w-9/12 flex flex-col gap-6'>
          <p>WebGIS merupakan aplikasi Geographic Information System (GIS) yang dapat diakses secara online melalui internet/web. Pada konfigurasi WebGIS ada server yang berfungsi sebagai MapServer yang bertugas memproses permintaan peta dari client dan kemudian mengirimkannya kembali ke client.</p>
          <p>WebGIS memiliki kemampuan untuk melakukan pengolahan data dan melakukan operasi-operasi tertentu dengan menampilkan dan menganalisa data. Sebagai contoh adalah adanya perhitungan pohon kelapa sawit secara otomatis dimana pengguna dapat dengan mudah menghitung jumlah pohon kelapa sawit yang diinginkan secara online melalui jaringan intranet/internet tanpa mengenal batas geografi penggunanya.</p>
        </div>
        <div className='w-2/12 flex flex-col gap-4 items-center'>
          <p className='w-full text-center'>Supported By :</p>
          <div className='flex gap-3'>
            <img src='/assets/small/logo-wika.png' className='w-12 h-12'/>
            <img src='/assets/small/logo-wika-white.png' className='w-12 h-12'/>
            <img src='/assets/small/logo-wika-tect.png' className='w-14 h-12'/>
          </div>
        </div>
      </div>
      </body>
    </html>
  )
}
