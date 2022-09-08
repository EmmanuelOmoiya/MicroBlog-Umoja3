import './land.css';
import { Illustration } from "../../assets";
import { useAccountContext } from '../AccountContext';

const Land = () =>{
    const { setView } = useAccountContext();
    return(
        <div className="land">
            <div className="laleft">
                <p className="topHead">Welcome to <span className="logo">NullFun()</span></p>
                <div className="laright up">
                    <img src={Illustration} alt="Blogging" className="illusty"/>
                    <br/>
                    <br/>
                </div>
                <p className="intred">We provide microblogging services in a very safe and transparent form by deploying your blogs to the Blockchain Network. We give members priviledges to publish posts and subscribe to their favorite post content. We live in a world where security and transparency of software is of high priority. Join us by clicking the button below.</p>
                <button className="gtstd connectBtn" onClick={()=>setView('Connect')}>Get Started</button>
            </div>
            <div className="laright un">
                <img src={Illustration} alt="Blogging" className="illusty"/>
            </div>
        </div>
    )
}
export default Land;