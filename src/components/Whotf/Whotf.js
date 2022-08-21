const Whotf = () => {
    const addr = window.localStorage.getItem('user');
    return (
        <div className="whotf trends">
            <span className="trhead">
                <h2 className="trtitle">Who to follow</h2>
                <p className="tropt"></p>
            </span>
            <hr/>
            <div className="trtopic">
                <li className="ttopic">
                    <p className="profimg"></p>
                    <div className="ttoleft whohu">
                        <p className="trname">John Doe</p>
                        <p className="trcount headaddr">@JohnDoe</p>
                    </div>
                    <p className="tropti">+</p>
                </li>
                <li className="ttopic">
                    <p className="profimg"></p>
                    <div className="ttoleft whohu">
                        <p className="trname">Carl Marc</p>
                        <p className="trcount headaddr">@CarlMarc</p>
                    </div>
                    <p className="tropti">+</p>
                </li>
                <button className="trshowmore whshowm">Show more</button>
            </div>
        </div>
    )
}
export default Whotf