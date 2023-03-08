
import {HiMenuAlt3} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';
import { useState } from 'react'

import logo from "../../images/logo.png";

const NavbarItem = ({ title, classProps })=>{
   return (
       <li className={`mx-4 cursor-pointer ${classProps}`}>
           {title}
       </li>
   )
}

const Navbar = ()=>{
    const [toggleMenu,setToggleMenu] = useState(false);
    return (
        <nav className='w-full flex md:justify-center justify-between items-center p-4'>
            <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                <img src={logo} alt="logo" className='w-32 cursor-pointer'/>
            </div>
            <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
               {["market","Exchange","Tutorials","Wallets"].map((item,index)=>(
                   <NavbarItem title={item} key={item+index}/>
               ))}
              <li className='bg-blue-500 py-2 px-7 mx-4 rounded-full cursor-point hover:bg-blue-600'>Login</li>
            </ul>
            <div className='flex relative'>
                {toggleMenu?
                <AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer' onClick={()=>setToggleMenu(false)}/>:
                <HiMenuAlt3 fontSize={28} className='text-white md:hidden cursor-pointer' onClick={()=>setToggleMenu(true)}/>}
                

                {toggleMenu && (
                    <ul className='z-10 fixed top-0 -right-2 p-3 w-48 h-screen shadow-2xl md:hidden list-none flex flex-col
                    justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in
                    '>
                        <li className='text-white w-full my-2'>
                            <AiOutlineClose onClick={()=>setToggleMenu(false)} />
                        </li>
                        {["market","Exchange","Tutorials","Wallets"].map((item,index)=>(
                   <NavbarItem title={item} key={item+index} classProps="my-2 text-lg"/>
               ))}
                    </ul>
                )}
            </div>
        </nav>
    )
}

export default Navbar