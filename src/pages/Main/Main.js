import './main.css';
import { useState } from 'react';
import { useAccountContext } from '../AccountContext';
import Connect from '../Connect/Connect';
import Land from '../Land/Land';
import { CSSTransitionGroup } from 'react-transition-group';
import { useLottie } from "lottie-react";
import { write, join } from "../../assets";


const Main = () =>{
    const options = {
      animationData: write,
      loop: true
    };
    const joptions = {
      animationData: join,
      loop: true
    };
    const { create } = useLottie(options);
    const { cjoin } = useLottie(joptions);
    const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));
    const { view, makePost, setView, setSend, subscriberPosts, subscribin, setSubscribin, postrt, createPost, joinNewStream, joinStream, viewPosts, seePosts, sawFirstPost, alreadyViewed, setAlreadyViewed, setSawFirstPost, subscribe, setPostrt, userAddress, setStreamName, posts, setPosts, selectView, selectJoin, selectCreate, help,  Continue,  title, creator,  pstCnt, setPstCnt, deploy, deploying, contractInfo, postName, setPostName, setContractInfo, Attach, attaching } =  useAccountContext();
    const copyToClipborad = async(button) => {
        navigator.clipboard.writeText(contractInfo);
        const origInnerHTML = button.innerHTML;
        button.innerHTML = 'Copied!';
        button.disabled = true;
        await sleep(1000);
        button.innerHTML = origInnerHTML;
        button.disabled = false;
    }
    var today = new Date();
    var month = parseInt(today.getMonth() + 1);
    var months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    today=months[month]+' '+today.getDate();
  
    if(sawFirstPost && !joinStream) {
      setView('PostSection');
      setAlreadyViewed(true);
      setPosts(subscriberPosts);
    }

    if(sawFirstPost && joinStream) joinNewStream();
    if(!joinStream && sawFirstPost && !seePosts) viewPosts();

    if(view === 'ChooseRole'){
    return(
        <div className="main">
            <h1 className="jk">Choose Role</h1>
            <div className="chis">
                <button className="connectBtn blogger" onClick={()=>setView('Blogger')}>Blogger</button>
                <button className="connectBtn subscriber" onClick={()=> setView('Subscriber')}>Subscriber</button>
            </div>
        </div>
    )
    } else if(view === 'Connect'){
      return <Connect />
    } else if(view === 'Landing'){
      return <Land />
    } else if(view === 'Blogger'){
        return(
            <div className="main">
                <h2 className="nmstr">What is the name of your Stream?</h2>
                <input className="inolr" type="text" placeholder="Input name of stream" value={postName} onChange={(e)=> setPostName(e.target.value)}/>
                <br />
                <button className="connectBtn cntu" onClick={()=> setStreamName(postName)}>Create </button>
            </div>
        )
    } else if(view === 'SubWrap'){
        return(
        <div className="Attacher" style={{display:'inline-block', float:'left', width:'100%'}}>
            Hello `Reach` is dope
          </div>
        )
    } else if(view === 'BloWrap'){
        return(
          <div className="main ghy">
            <div className="BsCh">
          <div  onClick={() =>selectCreate()} className="chcrd">
            <p className="">{create}</p>
            <p className="pso">Create Posts</p>
          </div>
          <div  onClick={() => selectView()} className="chcrd">
            <p className="pso">Read Posts</p>
          </div>
          <div  onClick={() =>selectJoin()} className="chcrd">
            <p className="">{cjoin}</p>
            <p className="pso">Join Stream</p>
          </div>
          <div  onClick={() =>help()} className="chcrd">
            <p className="pso">Help</p>
          </div>
         </div>
        </div>
        )
    } else if(view === 'Deploy'){
        return(
            <div className="main">
                <p className="nmstr">Creating Stream: <b>{postName}</b></p>
                {deploying?
                <button className="connectBtn cntu" >Creating Stream...</button>
                :
                <button className="connectBtn cntu" onClick={()=> deploy()}>Create Stream </button>
                }
            </div>
        )                                       
    } else if(view === 'WaitingForAttacher'){
        return(
        <div className="main">
            <h2 className="cntrdep nmstr">Subscribers can join by entering the following contract information</h2>
            <pre className="ccntrinfo">{contractInfo}</pre>
            <button className="connectBtn copyf" onClick={(e)=>copyToClipborad(e.currentTarget)}>Copy to clipboard</button>
        </div>
        )
    } else if(view === 'createPost'){
        return(
            <div className="main">
                <div>
          <p className="nope">New Posts:</p>
          <textarea 
            placeholder='Write Post content'
            onChange={(e) =>setPostrt(e.target.value)}
            className="pinfctr txtad"
          />
        
        </div>
        <button
          onClick={() => {
            alert('The sky is our limit brothers!!')
            setSend(true)
          }}
          className="connectBtn psft"
        >Post</button>

        {posts.map(post => {
          return (
           
            <div key={post} className='Tweet'>
    
            <span style={{fontSize: '20px', display:'inline'}}><img style={{width: '10%', height:'20%', display:'inline', verticalAlign:'top'}} alt="User" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/768px-User_icon_2.svg.png"/><strong>{userAddress}</strong></span>
            <p style={{color:'grey', fontSize:'20px', marginLeft:'1%', display:'inline'}}>@{postName} | {today}</p>
            
              <p style={{fontSize: '20px', marginLeft: '10%'}}>{post}</p>
            </div>
          )
        })}
        
        </div>
        )
    } else if(view === 'uploading'){
     return(
        <div className="main">
            <h2 className="uploading">Uploading your post.... <br/> Please wait.</h2>
        </div>
     )   
    } else if(view === 'Subscriber'){
        return (
        <div className="main">
            <h2 className="pstinf nmstr">Please paste the contract info to join a stream:</h2>
            <textarea className="pinfctr" value={contractInfo} onChange={(e)=>setContractInfo(e.target.value)} />
            <button className="attchctr connectBtn" onClick={()=>Attach()} disabled={!contractInfo}>Join </button>
        </div>
        )
    } else if(view === 'Subscribing'){
        return(
            <div className="main">
                <p className="subscribing">Chill a moment...</p>
            </div>
        )
    } else if(view === "chooseSubscribing"){
        return(
            <div className="main">
                <p className="choosesubscr nmstr">Subscribe to {postName}</p>
                <div className="subcribechoid">
                    <button className="connectBtn yesd" onClick={()=>{
                      alert('confirm')
                      setView('AwaitingPost');
                      alert(subscribin);
                      }}>Confirm</button>
                    <button className="connectBtn no" onClick={()=>setView('Subscriber')}>Leave</button>
                </div>
            </div>
        )
    } else if (view === 'AwaitingPost'){
      return(
      <div className="main">
                <p className="choosesubscr nmstr subscribing">Awaiting Post from Author....</p>
            </div>
      )
    } else if(view === 'SubscriberAttached'){
        return(
        <div className="main">
            <h2 className="subshotit nmstr">The title of the post is {postName}</h2>
            <p className="authorsub">The author is : {creator} </p>
            <button className="connectBtn" onClick={()=>setView('PostSection')}>View Post </button>
        </div>
        )
    } else if(view === 'PostSection'){
        return(
        <div className="main">
            <p className="psft">Posts :</p>
            {posts.map(post => {
              return (
               
                <div key={post.post} className='SubscriberTweet'>
       
                <span style={{fontSize: '20px', display:'inline'}}><img style={{width: '10%', height:'20%', display:'inline', verticalAlign:'top'}} alt="User" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/768px-User_icon_2.svg.png"/><strong>{post.address.substring(0,6)+'....'}</strong></span><p style={{color:'grey', fontSize:'20px', marginLeft:'1%', display:'inline'}}>@{post.postName} | {today}</p>
                
                  <p style={{fontSize: '20px', marginLeft: '10%'}}>{post.post}</p>
                </div>
              )
            })}
          
        </div>
        )
    } else if(view === 'waitingForPost'){
        return(
        <div className="main">
            <p className="wait">Please wait while we retrieve posts....</p>
        </div>
        )
    } else if(view === "ContinuePost"){
        return(
        <div className="main">
            <p className="cntipst nmstr">Do you want to continue or stop posting?</p>
            <div className="conchis">
                <button className="connectBtn cuyt" onClick={()=>Continue('Continue')}>Continue</button>
                <button className="connectBtn stoyp" onClick={()=>Continue('Stop')}>Stop</button>
            </div>
        </div>
        )
    } else if(view === "End"){
        return(
            <div className="main">
                <p className="thanks">Thanks for viewing this Stream</p>
            </div>
        )
    }

}

export default Main;