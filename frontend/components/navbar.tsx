"use client"
import React from 'react'
import Link from 'next/link'
import { NavItem } from '@/app/types'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './toggleButton'



const Navbar = ({naItems}:{naItems:NavItem[]}) => {
const path=usePathname()
  return (
<div className=' w-full py-2.5 flex md:px-16 px-4  justify-between '>
<Link href="/" className="font-mono  text-2xl">
               <span className=' text-cyan-600'>&lt;</span> parham_pazargadi <span className='text-cyan-600'>/&gt;</span> 
            </Link>    <ul className=' flex items-center gap-7'>
      {naItems.map((item,index)=>{
        return <div className=' flex flex-col items-center gap-1' key={ index}>
          <Link   href={item.href} >{item.label}</Link>
          <span className={`${path === item.href ? "w-full" : "w-0"} h-[2.5px] rounded-full bg-cyan-400 transition-all duration-500`}></span>
                    </div>
      })}
      <ThemeToggle/>

    </ul>
</div>

  )
}

export default Navbar