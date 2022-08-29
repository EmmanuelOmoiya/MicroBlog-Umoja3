import  { createContext, useContext, useState } from 'react';
import {loadStdlib, unsafeAllowMultipleStdlibs} from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import * as backend from './index.main.mjs';

const AccountContext = createContext();

const AccountContextProvider = ({children}) => {
    const [network, setNetwork] = useState('');
    const reach = loadStdlib(network);
    console.log(network);
    unsafeAllowMultipleStdlibs();
    reach.setWalletFallback(reach.walletFallback( { providerEnv: 'TestNet', MyAlgoConnect } ));

    const [account, setAccount] = useState({});
    const [address, setAddress] = useState('');
    const [isConnecting, setIsConnecting] = useState(false);
    const connect = async(address) => {
        setIsConnecting(true);
        let result = ""
        let mnemonic;
        if(address === ""){
            mnemonic = false
        } else {
            mnemonic = true
        }
        try {
          let accountC = mnemonic ? await reach.newAccountFromMnemonic(address) : await reach.getDefaultAccount();
          setAccount(accountC);
          await console.log(account);
          console.log(account);
          await alert(account);
          setIsConnecting(false)
          window.sessionStorage.setItem('user', accountC.getAddress());
          result = 'success'; 
        } catch (error) {
            setIsConnecting(false);
          result = `Failed. \n Error: ${error}`;
          alert(error);
        }
        console.log(result);
    }

    const ctc = account.contract(backend);
    
    const Post = async (Post) => {
        await ctc.participants.Admin({
            post: ()=> Post,
        })
    }

    const getPost = async() =>{
        const stuff = await ctc.v.Info.post();
        alert(stuff);
    }

    const getPosts = async() =>{
        try{
            await ctc.p.Admin({ getPost });
        } catch(error){
            alert(error);
        }
    }
    return <AccountContext.Provider value={{
        connect,
        network,
        setNetwork,
        address,
        setAddress,
        account,
        setAccount,
        isConnecting, 
        setIsConnecting,
        reach,
        getPosts,
        Post,
    }}>{children}</AccountContext.Provider>
}

const useAccountContext = () => useContext(AccountContext);

export {
    AccountContextProvider,
    useAccountContext
}