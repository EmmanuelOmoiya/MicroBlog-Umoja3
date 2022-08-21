import { Trends, Profile, Write, WhotoFollow } from '../../components';
import './home.css';

const Home = () => {
    return(
        <div className="home">
            <div className="homeBody">
                <div className="homefirst">
                    <Profile />
                </div>
                <div className="homemiddle">
                    <Write />
                </div>
                <div className="homelast">
                    <Trends />
                    <WhotoFollow />
                </div>
            </div>
        </div>
    )
}

export default Home;