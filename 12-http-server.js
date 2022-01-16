const http=require("http")

const server=http.createServer((req,res)=>{
//    res.write("hello server")
   if(req.url==="/"){
       res.end("welcome to home page")
    //    res.end();
    //    return
   }
   else if(req.url==="/about")
   {
       res.end("welcome ot the about page")
    //    return
        // res.end();

   }
   else if(req.url==="/contact")
   {
       res.end("welcome to the contact page")
    //    return
        // res.end();

   }
   else{
    res.end(
        `
        <h1>cannot find the page you are looking for</h1>
        `
    );
   }
   
})

server.listen(5000)