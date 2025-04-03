import Lefthero from "./lefthero";
import Righthero from "./slide";
import Votercontent from "./votercontent";
import Report from "./report";
import Footer from "./footer";

export default function Homepage() {
  return (
    <>
        <div className="flex flex-col md:flex-row">
        <Lefthero/>
        <Righthero/>
        </div>
        <Votercontent/>
        <Report/>
        <Footer/>
    </>
  )
}
