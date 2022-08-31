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
    let accountC;
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
          accountC = mnemonic ? await reach.newAccountFromMnemonic(address) : await reach.getDefaultAccount();
          setAccount(accountC);
          console.log(accountC);
          console.log(account);
          alert(account);
          setIsConnecting(false)
          setAdressPs(accountC.getAddress());
          window.sessionStorage.setItem('user', accountC.getAddress());
          window.location.href='/';
          result = 'success'; 
        } catch (error) {
            setIsConnecting(false);
          result = `Failed. \n Error: ${error}`;
          alert(error);
        }
        console.log(result);
        alert(accountC);
        console.log(accountC);
        return accountC;
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
        setStreamName : async(postName) => {
            setView('Deploy');
            return postName
        },
        createStream : async() => {
            return postName
        },
        post: async()=>{
            const posts = await new Promise(resolvePostedP => {
                setView('WritePost', resolvePostedP);
            });
            setView('uploading');
            return posts;
        },
        continueStream: async()=>{
            const decision = await new Promise(resolveContinueP => {
                setView('ContinuePost',  resolveContinueP);
            });
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
            console.log(accountC);
            alert(accountC)
            setView('createPost')
        } else {
            console.log(accountC);
            alert(accountC);
            setView('Blogger')
        }
    }

    const Subscriber = {
        ...common,
        seeStream: (streamName)=>{
            setView('chooseSubscribing');
            return true
        },
        seeMessage: (post, postName, address)=>{
            let newPost = {
                thought: post,
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

    const Continue = async(decision) => { 
        if(decision === 'Continue') decision = 0;
        else if(decision === 'Stop') decision = 1;
        setResolveContinueP(decision);
    }

    const help = () =>{
        setView('help');
    }

    const deploy = async() =>{
           try{
            alert(accountC);
            const contract = accountC.contract(backend);
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
            const contract = account.contract(backend);
            setAttaching(true);
            setView('Subscribing');
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