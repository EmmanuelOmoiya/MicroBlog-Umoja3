import  { createContext, useContext, useState } from 'react';
import {loadStdlib, unsafeAllowMultipleStdlibs} from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import * as backend from './index.main.mjs';

const AccountContext = createContext();

const AccountContextProvider = ({children}) => {
    const [network, setNetwork] = useState('ALGO');
    const reach = loadStdlib(network);
    console.log(network);
    unsafeAllowMultipleStdlibs();
    reach.setWalletFallback(reach.walletFallback( { providerEnv: 'TestNet', MyAlgoConnect } ));

    const [account, setAccount] = useState();
    const [address, setAddress] = useState('');
    const [isConnecting, setIsConnecting] = useState(false);
    const [view, setView] = useState('BloWrap');
    const [contractInfo, setContractInfo] = useState('');
    const [postName, setPostName] = useState('');
    const [pstiinf, setPstiinf] = useState('');
    const [ deploying, setDeploying ] = useState(false);
    const [attaching, setAttaching] = useState(false);
    const creator = 0x1c3be;
    const [pstCnt, setPstCnt] = useState('');
    const [posts, setPosts] = useState([]);
    const [subscriberPosts, setSubscriberPosts] = useState([]);
    const [home, setHome] = useState('');
    const [poster, setPoster] = useState(true);
    const [joinStream, setJoinStream] = useState(false);
    const [subscriber, setSubscriber] = useState(false);
    const [sawFirstPost, setSawFirstPost] = useState(false);
    const [ seePost, setSeePost] = useState(false);
    const [createdFirstPost, setCreatedFirstPost] = useState(false);
    const [resolvePostedP, setResolvePostedP] = useState();
    const [resolveContinueP, setResolveContinueP] = useState();
    const [resolveAcceptedP, setResolveAcceptedP] = useState();
    const [alreadyViewed, setAlreadyViewed] = useState(false);
    const [joining, setJoining] = useState();
    const [postrt, setPostrt] = useState('');
    const [addressPs, setAdressPs] = useState('');
    const [contract, setContract] = useState({});
    const [decision, setDecision] = useState('');

    const connect = async(address) => {
        setIsConnecting(true);
        let accountC;
        let result = ""
        let mnemonic;
        if(address === ""){
            mnemonic = false
        } else {
            mnemonic = true
        }
        try {
          accountC = mnemonic ? await reach.newAccountFromMnemonic(address) : await reach.getDefaultAccount();
          setIsConnecting(false);
          //setAdressPs(accountC.getAddress());
          //setContract(accountC.contract(backend));
          window.sessionStorage.setItem('user', accountC.getAddress());
          console.log(accountC);
          setAccount(accountC)
          alert(accountC);
          console.log(account);
          window.location.href='/';
          result = 'success'; 
        } catch (error) {
            setIsConnecting(false);
          result = `Failed. \n Error: ${error}`;
          alert(error);
        } 
        //setContract(accountC.contract(backend));
        console.log(result);
        setAccount(accountC)
        alert(account);
        //setAccount(accountC);
        console.log(account);
    }

    const userAddress = addressPs.substring(0,6)+'...';

    const common = {
        endStream : async() => setView('End')
    }

    const setStreamName = async() => {
        setView('Deploy');
    }
   

    const Poster = {
        ...common,
        streamName : postName,
        createStream : async() => {
            return postName
        },
        post: async()=>{
            return posts;
        },
        continueStream: async()=>{
            return decision;
        },
    }




    const selectJoin = () => {
        setHome(false);
        setPoster(false);
        setJoinStream(true);
        setSubscriber(true);
        setView('Subscriber');
    }
      
    const selectView = () => {
        if(!sawFirstPost){
            setHome(false);
            setPoster(false);
            setSubscriber(true);
            setView('Subscriber');
        } else {
            setHome(false);
            setPoster(false);
            setJoinStream(false);
            setSubscriber(true);
            setSeePost(false);
            setView('Subscriber');
        }
    }

    const selectCreate = () =>{
        if(createdFirstPost){
            console.log(account);
            alert(account)
            setView('createPost')
        } else {
            console.log(account);
            alert(account);
            setView('Blogger')
        }
    }

    const Subscriber = {
        ...common,
        seeStream: (streanb)=>{
            setPostName(streanb);
            setView('chooseSubscribing');
            return true;
        },
        seeMessage: (post, postName, address)=>{
            let newPost = {
                though: post,
                stream: postName,
                address: address
            }
            setSubscriberPosts(newPost);
            setSeePost(true);
            setSawFirstPost(true);
            setView('PostSection');
            setAlreadyViewed(false);
            setPosts(newPost);
        },
        subscribe: (yesOrNo)=>{
            if(yesOrNo === 'yes'){
                setResolveAcceptedP(true);
                setJoining(true);
            } else {
                setView('Subscriber');
            }
        }
    }

    const subscribe = (yesOrNo)=>{
        if(yesOrNo === 'yes'){
            setResolveAcceptedP(true);
            setJoining(true);
        } else {
            setView('Subscriber');
        }
    }

    const seeStream = (streamName)=>{
        setView('chooseSubscribing');
    }
    const createPost = (post) =>{
        setResolvePostedP(post);
    }

    const Continue = async(desion) => { 
        if(desion === 'Continue') setDecision(0);
        else if(desion === 'Stop') setDecision(1);
    }

    const help = () =>{
        setView('help');
    }

    const deploy = async() =>{
           try{
            alert(account);
            const contract = account.contract(backend);
            setDeploying(true);
            backend.Alice(contract, Poster);
            let ctcInfo = JSON.stringify(await contract.getInfo(), null, 2)
            setContractInfo(ctcInfo);
            setView('WaitingForAttacher');
        } catch(error){
            alert(error);
        }
    }
    const Attach = async()=>{
        try{
            setAttaching(true);
            setView('Subscribing');
            const contract = account.contract(backend);
            backend.Bob(contract, Subscriber);

        } catch(error){
            alert(error);
        }
    }
    
    {/*if(sawFirstPost && !joinStream){
        setView('PostSection');
        setPosts(subscriberPosts);
        setAlreadyViewed(true);
    } else {
        setView('Subscriber');
        setPosts([]);
    }*/}

    const joinNewStream = () =>{
        setJoinStream(false);
        setView('Subscriber');
    }

    const viewPosts = () =>{
        setSeePost(true);
        setView('PostSection');
    }
    const title = 'jello'
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
        view, 
        setView, 
        Continue,
        title, 
        pstCnt, 
        setPstCnt, 
        deploy, 
        deploying, 
        contractInfo, 
        postName, 
        setPostName, 
        pstiinf, 
        setPstiinf, 
        Attach, 
        attaching,
        posts,
        selectCreate,
        selectView,
        selectJoin,
        help,
        setStreamName,
        addressPs,
        userAddress,
        createPost,
        postrt,
        setPostrt,
        subscribe,
        joinNewStream,
        viewPosts,
    }}>{children}</AccountContext.Provider>
}

const useAccountContext = () => useContext(AccountContext);

export {
    AccountContextProvider,
    useAccountContext
}