const ojay = {
post : async()=>{
    let postd = 'kiol';
    const getPost = await new Promise(resolvue =>{
        console.log('createPost');
        if(postd){
            resolvue(postd)
        }
    })
    console.log('uploading');
    console.log(true);
    console.log(getPost)
    return getPost;
},
continueStream: async()=>{
    console.log('ContinuePost')
    return await new Promise(resolveAcceptedP=>{
        setTimeout(() => {
            resolveAcceptedP(0)
        }, 1900);
    })
},
}
