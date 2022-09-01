import './main.css';
import { useState } from 'react';
import { useAccountContext } from '../AccountContext';
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
    const { view, setView, postrt, createPost, subscribe, setPostrt, userAddress, setStreamName, posts, selectView, selectJoin, selectCreate, help,  Continue,  title, creator,  pstCnt, setPstCnt, deploy, deploying, contractInfo, postName, setPostName, pstiinf, setPstiinf, Attach, attaching } =  useAccountContext();
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
    } else if(view === 'Blogger'){
        return(
            <div className="main">
                <h2 className="nmstr">What is the name of your Stream?</h2>
                <input className="inolr" type="text" placeholder="Input name of post" value={postName} onChange={(e)=> setPostName(e.target.value)}/>
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
          <div className="main">
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
                <p className="nmstr">Creating Stream: {postName}</p>
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
            <h2 className="cntrdep">Subscribers can join by entering the following contract information</h2>
            <pre className="ccntrinfo">{JSON.stringify(contractInfo)}</pre>
            <button className="connect" onClick={(e)=>copyToClipborad(e.currentTarget)}>Copy to clipboard</button>
        </div>
        )
    } else if(view === 'createPost'){
        return(
            <div className="main">
                <div>
          <p >New Posts:</p>
          <textarea 
            placeholder='...'
            onChange={(e) =>setPostrt(e.target.value)}
          />
        
        </div>
        <button
          onClick={() => createPost(postrt)}
        >Post</button>

        {posts.map(post => {
          return (
           
            <div key={post} className='Tweet'>
    
            <span style={{fontSize: '20px', display:'inline'}}><img style={{width: '10%', height:'20%', display:'inline', verticalAlign:'top'}} alt="User" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/768px-User_icon_2.svg.png"/><strong>{userAddress}</strong></span><p style={{color:'grey', fontSize:'20px', marginLeft:'1%', display:'inline'}}>@{postName} | {today}</p>
            
              <p style={{fontSize: '20px', marginLeft: '10%'}}>{post}</p>
            </div>
          )
        })}
        
        </div>
        )
    } else if(view === "help"){
        return (
            <div className='Card'>
              <div id='help-page-card-header' style={{textAlign:'center', fontSize:'24px', marginTop:'3%', marginBottom:'3%',marginLeft:'1%'}}>
              <h2>Help Page</h2>
                Null is a microblog in which members can post and subscribe to various streams of content.
              </div>
              <div id='custom-terminology' style={{textAlign:'left', fontSize:'20px', marginTop:'3%', marginBottom:'3%',marginLeft:'1%'}}>
                <h4>Custom Terminology</h4>
                <ul>
                  <li><strong>Post:</strong> a content of any length can be shared by a user.</li><br/>
                  <li><strong>Stream:</strong> a collection of thoughts that a user can post to and other users can subscribe to read posts.</li> <br/>
                  <li><strong>Contract Info:</strong> the Smart Contract (SC) information generated after creating a new stream and is required by a user to subscribe to a stream</li>
                </ul>
              </div>
              <div id='using-the-app' style={{textAlign:'left', fontSize:'20px', marginTop:'3%', marginBottom:'3%',marginLeft:'1%'}}>
                <h4>Using the DApp</h4>
                <strong>Software Requirements:</strong> Google Chrome browser <br/><br/>
                <strong>Creating a new stream:</strong>
                <ul>
                <li>To create a stream, click on Create Posts on the top.</li> <br/>
                <li>After providing a name to the stream and clicking on deploy, the contract information will be displayed on the screen.</li> <br/>
                <li>Share this info with your friends so that they can subscribe to your stream and start following your thoughts</li> <br/>
                <li><strong>Note:</strong> Atleast one user must subscribe to your stream before you can start sharing your thoughts.</li> <br/>
                </ul>
                <strong>Joining a stream:</strong>
                <ul>
                  <li>To join a stream, click on the Join Stream on the top. </li> <br/>
                  <li>You should have received the Contract Info of a stream created by your friend. If not, please ask your friend to share it</li><br/>
                  <li>Enter the contract information shared that your friend (the creator of the stream) shared to subscribe.</li> <br/>
                </ul>
                <strong>Read Posts:</strong>
                <ul>
                  <li>In the Read Posts section, you can view all the posts from the streams you've subscribed to earlier.</li> <br/>
                  <li>You'll be able to view posts made by the creator after subscribing to the stream.</li> <br/>
                  <li>You can join unlimited streams.</li><br/>
                </ul>
                </div>
              </div>
          )   
    } else if(view === 'uploading'){
     return(
        <div className="main">
            <h2 className="uploading">Uploading your post.... please wait.</h2>
        </div>
     )   
    } else if(view === 'Subscriber'){
        return (
        <div className="main">
            <h2 className="pstinf">Please paste the contract info to join a stream:</h2>
            <textarea className="pinfctr" value={pstiinf} onChange={(e)=>setPstiinf(e.target.value)} />
            {attaching ?
            <button className="attachr connectBtn">Chill a moment </button>
            :
            <button className="attchctr connectBtn" onClick={()=>Attach()} disabled={!pstiinf}>Continue </button>
            }
        </div>
        )
    } else if(view === 'Subscribing'){
        return(
            <div className="main">
                <p className="subscribing">Subscribing to {postName}...</p>
            </div>
        )
    } else if(view === "chooseSubscribing"){
        return(
            <div className="main">
                <p className="choosesubscr">Subscribe to {postName}</p>
                <div className="subcribechoid">
                    <button className="connectBtn" onClick={()=>subscribe('yes')}>Confirm</button>
                    <button className="connectBtn no" onClick={()=>subscribe('No')}>Leave</button>
                </div>
            </div>
        )
    } else if(view === 'SubscriberAttached'){
        return(
        <div className="main">
            <h2 className="subshotit">The title of the post is {title}</h2>
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
               
                <div key={post.thought} className='SubscriberTweet'>
       
                <span style={{fontSize: '20px', display:'inline'}}><img style={{width: '10%', height:'20%', display:'inline', verticalAlign:'top'}} alt="User" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/768px-User_icon_2.svg.png"/><strong>{post.address.substring(0,6)+'....'}</strong></span><p style={{color:'grey', fontSize:'20px', marginLeft:'1%', display:'inline'}}>@{post.stream} | {today}</p>
                
                  <p style={{fontSize: '20px', marginLeft: '10%'}}>{post.thought}</p>
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
            <p className="cntipst">Do you want to continue or stop posting?</p>
            <div className="conchis">
                <button className="connectBtn" onClick={()=>Continue('Continue')}>Continue</button>
                <button className="connectBtn" onClick={()=>Continue('Stop')}>Stop</button>
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