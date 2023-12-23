var posts=["2023/12/01/hello-world/","2023/12/07/JUM并发编程/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };