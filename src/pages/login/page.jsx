import Footer from "../home/footer"
import Report from "../home/report"
import Righthero from "../home/slide"
import LoginForm from "./login"
import VotersLogin from "./voters-login";

function Login() {
  return (
    <>
        <div className="flex flex-col md:flex-row">
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