import Footer from "../homepage/footersection/footer"
import Report from "../homepage/reportsection/report"
import Righthero from "../homepage/right-herosection/righthero"
import LoginForm from "./login"
import VotersLogin from "./voters-login";

function Login() {
  return (
    <>
        <div className="flex flex-col-reverse md:flex-row">
        <LoginForm/>
        <Righthero/>
        </div>
        <VotersLogin/>
        <Report/>
        <Footer/>
    </>
  )
}

export default Login;