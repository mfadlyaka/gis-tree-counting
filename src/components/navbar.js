// 'use client'

// import React from 'react'
// import { usePathname } from 'next/navigation'
// import Link from 'next/link'

// const Navbar = () => {
//     const pathname = usePathname()
//     console.log(pathname)

//   return (
//     <nav className='relative'>
//     <div className={pathname === "/" ? 'flex justify-between items-center px-20 bg-transparent text-white absolute top-0 z-[999] w-full' : 'flex justify-between items-center px-20 bg-white text-neutral-800 absolute top-0 z-[999] w-full shadow-lg shadow-neutral-800/40'}>
//       <div>
//         <img src='/assets/small/logo-tree-counting.png' className='w-16 h-16'/>
//       </div>

//       <div className='flex items-center gap-5'>
//         <Link href="/" className={pathname === '/' ? 'border-b-[3px] transition-all duration-500 border-white px-2 py-1' : 'border-b-[3px] transition-all duration-500 border-transparent px-2 py-1'}>Home</Link>
//         <Link href="/product" className={pathname === '/product' ? 'border-b-[3px] transition-all duration-500 border-neutral-800 px-2 py-1' : 'border-b-[3px] transition-all duration-500 border-transparent px-2 py-1'}>Product</Link>
//         <Link href="/profile" className={pathname === '/profile' ? 'border-b-[3px] transition-all duration-500 border-neutral-800 px-2 py-1' : 'border-b-[3px] transition-all duration-500 border-transparent px-2 py-1'}>Profile</Link>
//         <Link href="/get-started" className={pathname === '/get-started' ? 'border-b-[3px] transition-all duration-500 border-neutral-800 px-2 py-1' : 'border-b-[3px] transition-all duration-500 border-transparent px-2 py-1'}>Get Started</Link>
//       </div>
//     </div>
//   </nav>
//   )
// }

// export default Navbar