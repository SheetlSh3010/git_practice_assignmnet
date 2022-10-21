1)//Prime problem

   let count=0; 
    let num=13;
    for(let i=1;i<=num;i++)
    {
        if( num%i== 0)
        { count++;
            
        }
     }
        if(count==2)
        {
            console.log("It is a Prime number");
        }
        else{
            console.log("Not a Prime number");
        }



2) //Palindrome problem
let str="madam";
let rev_str="";

for(let i=str.length-1;i>=0;i--){
  rev_str+=str[i]

}
if(str==rev_str){
console.log("yes");
}else{
console.log("no");
}