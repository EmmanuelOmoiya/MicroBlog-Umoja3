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

    const [address, setAddress] = useState('');
    const [isConnecting, setIsConnecting] = useState(false);
    const [view, setView] = useState('Landing');
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
    const [decision, setDecision] = useState(0);
    const [account, setAccount] = useState({});
    const [subscribin, setSubscribin] = useState();
    const [send, setSend] = useState();
    let cool;
    const [isDone, setIsDone ]= useState(false);
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
        cool = mnemonic ? await reach.newAccountFromMnemonic(address) : await reach.getDefaultAccount();
          setAccount(cool);
          setIsConnecting(false);
          //setAdressPs(accountC.getAddress());
          //setContract(accountC.contract(backend));
          window.sessionStorage.setItem('user', cool.getAddress());
          console.log(account)
          alert(account);
          setView('BloWrap');
          result = 'success'; 
        } catch (error) {
            setIsConnecting(false);
          result = `Failed. \n Error: ${error}`;
          alert(error);
        } 
        //setContract(accountC.contract(backend));
        console.log(result);
        console.log(cool);
    }

    console.log(cool);
    console.log(account);

    const userAddress = addressPs.substring(0,6)+'...';

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

    const common = {
        endStream : async() => setView('End')
    }


    const Continue = async(desion) => { 
        if(desion === 'Continue') setDecision(0);
        else if(desion === 'Stop') setDecision(1);
        setResolveContinueP(desion);
    }

    const help = () =>{
        setView('help');
    }

    const setStreamName = async() => {
        setView('Deploy');
    }

    /*async post(){
        const posffd = await new Promise(resolvePostedP => {
          setView('createPost')
          resolvePostedP();
        });

        setView('uploading');
        setCreatedFirstPost(true);
        setPosts(posffd)
        return posffd;
      }
    

    async postThought(postrt) { setResolvePostedP(postrt); }*/

    const Poster = {
        streamName : postName,
        createStream : async() => {
            return postName
        },
        post : async()=>{
            const getPost = await new Promise(resolvue =>{
                setView('createPost');
               setTimeout(()=>{
                resolvue(postrt)
               }, 10000)
            })
            setView('uploading');
            setCreatedFirstPost(true);
            setPosts(getPost);
            return getPost;
        },
        continueStream: async()=>{
            setView('ContinuePost')
            return await new Promise(resolveAcceptedP=>{
                setTimeout(() => {
                    resolveAcceptedP(0)
                }, 2900);
            })
        },
        endStream : async() => setView('End')
    }

    const Subscriber = {
        seeStream: async(streanb) =>{
            setPostName(streanb);
                return await new Promise(resolve=>{
                    setView('chooseSubscribing');
                    setTimeout(()=>{
                        resolve(true);
                    }, 2000)
                    /*if(view === 'AwaitingPost'){
                        alert
                        resolve(true);
                    } else {
                        alert('Olyu')
                    }*/
                })
        },
        seeMessage : async (message, streamName, creator) =>{
            let newPost = {
                post: message,
                postName: streamName,
                author: creator
            }
            setSubscriberPosts(newPost);
            setSeePost(true);
            setSawFirstPost(true);
            setPosts([newPost]);
            alert(newPost);
            console.log(posts);
            console.log(newPost);
            setView('PostSection');
            setAlreadyViewed(false);
        },
        endStream : async() => setView('End')
    }

    const deploy = async() =>{
           try{
            alert(account);
            const contract = account.contract(backend);
            alert(contract);
            setDeploying(true);
            backend.Alice(contract, Poster);
            let ctcInfo = JSON.stringify(await contract.getInfo(), null, 2)
            setContractInfo(ctcInfo);
            setView('WaitingForAttacher');
        } catch(error){
            alert(error);
            setDeploying(false);
        }
    }

    const Attach = async()=>{
        try{
            setAttaching(true);
            const contract = account.contract(backend, JSON.parse(contractInfo));
            setView('Subscribing');
            backend.Bob(contract, Subscriber);
            console.log(backend.Bob(contract, Subscriber));
        } catch(error){
            setView('Subscriber');
            alert(error);
            console.log(error);
        }
    }

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
        viewPosts,
        setSubscribin,
        subscribin,
        seePost,
        joinStream,
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
        setContractInfo,
        postName, 
        setPostName, 
        pstiinf, 
        setPstiinf, 
        Attach, 
        attaching,
        posts,
        setPosts,
        selectCreate,
        selectView,
        selectJoin,
        setSend,
        help,
        addressPs,
        userAddress,
        postrt,
        setPostrt,
        joinNewStream,
        setStreamName,
        sawFirstPost,
        setSawFirstPost,
        alreadyViewed,
        setAlreadyViewed,
        subscriberPosts,
        viewPosts,
    }}>{children}</AccountContext.Provider>
}

const useAccountContext = () => useContext(AccountContext);

export {
    AccountContextProvider,
    useAccountContext
}