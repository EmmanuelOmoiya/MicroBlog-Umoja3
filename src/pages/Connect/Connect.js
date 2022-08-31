import './connect.css';
import { FaEthereum } from 'react-icons/fa';
import { useAccountContext } from '../AccountContext';

// import { FaAlgo } from '../../assets';

const Connect = () => {
    const { connect, reach, account, setAccount, network, setNetwork, isConnecting, address, setAddress } =  useAccountContext();
    let isEth = false;
    if(network === 'ETH'){
        isEth = true;
    } else {
        isEth = false;
    }
    
    return (
        <div className="connect">
            <h2 className='con-title'>Connect to your account</h2>
            <div className="connect-section">
            <select name="network" className="network" value={network} onChange={(e)=> setNetwork(e.target.value)}>
                <option value="ALGO" className="netval">
                    <p>ALGO</p>
                </option>
                <option value="ETH" className="netval">
                    <p>ETH</p>
                </option>
            </select>
            <br />
            <input type="text" className="addrin" placeholder="Enter Mnemonic Key" value={address} onChange={ (e) => setAddress(e.target.value.trim()) }/>
            <br />
            {isEth ?
            <button onClick={() => connect(address)} className="connectBtn"> { isConnecting ? `Connecting` : 'Connect' } to <FaEthereum /> account </button>
            :
            <button onClick={() => connect(address)} className="connectBtn">{ isConnecting ? `Connecting` : 'Connect' } to  account</button>
            }
            </div>
        </div>
    );
}
export default Connect;