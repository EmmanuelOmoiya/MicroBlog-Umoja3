import './signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
    return(
        <div className="signup">
            <div className="signup-container">
                <div className="login-title">Signup</div>
                <p className="fullnamelabel">Username</p>
                <input type="text" className="signfullname" placeholder='Username' required/>
                <p className="emailabelsign">Email</p>
                <input type="email" className="emailabe" placeholder='Email' required/>
                <p className="passwordlabelsign">Password</p>
                <input type="password" className="passwordinpsign" required placeholder='Password'/>
                <button className="signupbtn">Signup</button>
                <p className="altbt">Have an account? <Link to="/login" className='wolt'>Login</Link></p>
            </div>
        </div>
    );
}
export default Signup;