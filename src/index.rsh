'reach 0.1';

const Post = Object({
  title: Bytes(218),
  content: UInt,
  author: Address,
  isDeleted: Bool
})

export const main = Reach.App(() => {
  const Admin = Participant('Admin', {
    post : Fun([], Post),
    getPost: Fun([Post], Null),
    observe: Fun([], Null)
  });
  const Info = View('Info', {
    post : Object({
      title: Bytes(218),
      content: UInt,
      author: Address,
      isDeleted: Bool
    }),
  });
  init();
  Admin.only(()=>{
    const post = declassify(interact.post());
  });
  Admin.publish(post);
  Info.post.set(post);
  Admin.interact.getPost(post);

    var [ i ] = [0];
    invariant (balance() == 0);
    while ( i < 5 ) {
      commit();
      Admin.interact.observe();
      Admin.publish();
      i = i + 1;
      continue;
    }
  commit();
  //Admin.interact.getPost([post.some(post)]);
  exit();
})