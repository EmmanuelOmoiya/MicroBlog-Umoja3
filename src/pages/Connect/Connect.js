import { useState } from "react";
import {loadStdlib, unsafeAllowMultipleStdlibs} from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import './connect.css';
import { FaEthereum } from 'react-icons/fa';
// import { FaAlgo } from '../../assets';

const Connect = () => {
    const [network, setNetwork] = useState('');
    const reach = loadStdlib(network);
    console.log(network);
    unsafeAllowMultipleStdlibs();
    reach.setWalletFallback(reach.walletFallback( { providerEnv: 'TestNet', MyAlgoConnect } ));
    const fmt = (x) => reach.formatCurrency(x, 4);
    const [address, setAddress] = useState('');
    const [isConnecting, setIsConnecting] = useState(false);
    const [account, setAccount] = useState({});
    console.log(account);
    const connect = async (address) =>{
        setIsConnecting(true);
        let result = ""
        let mnemonic;
        if(address === ""){
            mnemonic = false
        } else {
            mnemonic = true
        }
        try {
          const account = mnemonic ? await reach.newAccountFromMnemonic(address) : await reach.getDefaultAccount();
          setAccount(account);
          {/*const theNFT = await reach.launchToken(account, 'post', 'PST', { supply: 1 });
          const nftId = theNFT.id;
          const nftOwner = theNFT.owner
          alert(nftId, nftOwner);
          const metadata = account.tokenMetadata(theNFT);
          alert(metadata)
          console.log(metadata);
          const balance = reach.formatCurrency(await reach.balanceOf(account));
        alert(balance)*/}
          setIsConnecting(false)
          window.localStorage.setItem('user', account.getAddress());
          window.location.replace('/');
          result = 'success'; 
        } catch (error) {
            setIsConnecting(false);
          result = `Failed. \n Error: ${error}`;
        }
        console.log(result);
}
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
            <button onClick={() => connect(address)} className="connectBtn">Connect to  account</button>
            }
            </div>
        </div>
    );
}
export default Connect;