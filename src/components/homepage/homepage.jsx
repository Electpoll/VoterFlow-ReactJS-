import Lefthero from "./left-herosection/lefthero";
import Righthero from "./right-herosection/righthero";
import Votercontent from "./votercontentsection/votercontent";
import Report from "./reportsection/report";
import Footer from "./footersection/footer";

export default function Homepage() {
  return (
    <>
        <div className="flex flex-col-reverse md:flex-row">
        <Lefthero/>
        <Righthero/>
        </div>
        <Votercontent/>
        <Report/>
        <Footer/>
    </>
  )
}
