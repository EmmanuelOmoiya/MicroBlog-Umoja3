import './trends.css';
import { FaEllipsisH } from 'react-icons/fa';

const Trends = () => {
    return (
        <div className="trends">
            <span className="trhead">
                <h2 className="trtitle">Topics for you</h2>
                <p className="tropt"></p>
            </span>
            <hr/>
            <div className="trtopic">
                <li className="ttopic">
                    <div className="ttoleft">
                        <p className="trname">#apple</p>
                        <p className="trcount">2.4m posts</p>
                    </div>
                    <p className="tropt"><FaEllipsisH className="ellipsis" /></p>
                </li>
                <li className="ttopic">
                    <div className="ttoleft">
                        <p className="trname">#music</p>
                        <p className="trcount">1.2m posts</p>
                    </div>
                    <p className="tropt"><FaEllipsisH className="ellipsis"/></p>
                </li>
                <button className="trshowmore">Show more</button>
            </div>
        </div>
    );
}
export default Trends