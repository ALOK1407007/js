function test(){
     var n=29;
     var flag=false;
     if(n==0||n==1){ 
     console.log("not prime"); }
     else {
          for(var i=2;i<=n;i++){
               if(n%i==0)
               flag=true;
               break;
          }
     }
     if(!flag)
     console.log("prime")
    else 
    console.log("not prime")
}
test()


