var posts=["2023/12/07/JUM并发编程/","2023/12/01/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };