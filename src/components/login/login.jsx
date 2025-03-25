import { useState } from "react";
import logo from '/logo.jpg'
import { EyeIcon, EyeOff } from "lucide-react";

function LoginForm() {
    const [activeLink, setActiveLink] = useState("home");
    const [showPassword, setShowPassword] = useState(false);

  
  return (
    <div className="m-5 md:m-10 md:w-1/2 h-screen">
         {/* Nav  */}
        <div className="flex items-center justify-between">
            <div className="hidden sm:block">
                 <img src={logo} alt="" className='' />
            </div>
            <div className="nav">
                <ul className='flex justify-around cursor-pointer'>
                    <a href="" className='font-bold text-sm md:text-lg mx-2 md:mx-5 relative py-1'>
                      <li className={activeLink === 'home' ? 'active' : ''} onClick={() => setActiveLink('home')}>Home</li>
                    </a>
                    <a href="" className='font-bold text-sm md:text-lg mx-3 md:mx-5 relative py-1'>
                      <li className={activeLink === 'result' ? 'active' : ''} onClick={() => setActiveLink('result')}>Results</li>
                    </a>
                    
                </ul>
            </div>
        </div>



        {/* Form */}

        <div className="flex items-center justify-start h-full">
            <div className="">
            <h1 className="my-5 font-bold text-3xl">NAMSSN UI Elections is live!</h1>
            <p className="my-5">Enter your login details to begin voting.</p>
            <div className="flex flex-col my-3">
                <label htmlFor="Email" className="font-semibold my-2">E-mail Address</label>
                <input type="text" className="border-2 border-gray-500 rounded-lg outline-none p-2" placeholder="bukola@electpoll.com"/>
            </div>
            <div className="flex flex-col my-3">
                <label htmlFor="Password" className="font-semibold my-2">Password</label>
                <div className="relative">
                <input type={showPassword ? 'text' : 'password'} className="border-2 border-gray-500 rounded-lg outline-none p-2 w-full" placeholder="*********"/>
                {showPassword ? (
                     <EyeIcon className="absolute right-3 top-1/2 transform -translate-y-1/2" onClick={() => setShowPassword(!showPassword)}/>
                ) : (
                    <EyeOff className="absolute right-3 top-1/2 transform -translate-y-1/2" onClick={() => setShowPassword(!showPassword)}/>
                )}
                </div>
            </div>
            <a href="/portal">
            <button className="w-full bg-black text-amber-500 rounded-lg border-2 border-transparent py-2 px-8 my-5 font-bold hover:bg-amber-500 hover:text-black transition-all">Login</button>
            </a>
            </div>
        </div>

    </div>
  )
}

export default LoginForm;