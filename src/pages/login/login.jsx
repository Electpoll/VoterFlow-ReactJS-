import { useState } from "react";
import { EyeIcon, EyeOff } from "lucide-react";
import Nav from "../../components/nav";
import { Link } from "react-router-dom";

function LoginForm() {

    const [showPassword, setShowPassword] = useState(false);

  
  return (
    <div className="m-5 md:m-10 md:w-1/2 h-screen">
     
        <Nav logo={true} link="home"/>



        {/* Form */}

        <div className="flex items-center justify-start w-full h-full">
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
            <Link to="/voting-portal">
            <button className="w-full bg-black text-amber-500 rounded-lg border-2 border-transparent py-2 px-8 my-5 font-bold hover:bg-amber-500 hover:text-black transition-all">Login</button>
            </Link>
            </div>
        </div>

    </div>
  )
}

export default LoginForm;