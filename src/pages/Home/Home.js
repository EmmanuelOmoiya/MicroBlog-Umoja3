import { Trends, Profile, Write } from '../../components';
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
                </div>
            </div>
        </div>
    )
}

export default Home;