import './write.css';
import { useState } from 'react'; 
import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from '../index.main.mjs';
import { useAccountContext } from '../AccountContext';

const Write = (account) =>{
    /*sconst [ppostTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useeState('');
    const authorAddr = window.localStorage.getItem('user');
    const authorName = 'JP Miller';
    const likes = 0;
    const Post = async() => {
        const post = await reach.launchToken(account, 'bumple', 'NFT', { supply: 1 });
    } */
    const reach = loadStdlib();
    const [ isPublishing, setIsPublishing ] = useState(false)
    const { Post } =  useAccountContext();
    const [title, setTitle] = useState('');
    const [post, setPost] = useState('');
    const postc = {title, post};
    const Publish = async() => {
        alert('Publishing');
        setIsPublishing(true);
        alert(title, post);
        try{
            Post(postc);
        } catch(error){
            alert(error);
        }
        
    }
    return(
        <div className="write-post">
            <div className="post-container">
                {
                    isPublishing ?
                    <button className="publish-post" >Publishing...</button>
                :
                <button className="publish-post" onClick={()=>Publish()}>Publish</button>

                }
                <div className="post-title">
                    <input type="text" placeholder="Post Title..." className="post-tinps" value={title} onChange={(e)=> setTitle(e.target.value)}/>
                </div>
                <div className="post-body">
                    <textarea  className="post-binp" value={post} onChange={(e)=>setPost(e.target.value)}/>
                </div>
            </div>
        </div>
    );
}
export default Write;