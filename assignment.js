1)//Prime problem

   let count=0; let num;
    for(let i=1;i<=num;i--)
    {
        if( num%i== 0)
        { count++;
            
        }
     }
        if(count==1)
        {
            console.log("It is a Prime number");
        }
        else{
            console.log("Not a Prime number");
        }



2) //Palindrome problem

function checkPalindrome(N, str) {
    let bag=" ";
    for(i=N-1;i>=0;i--)
    {
        bag+=str[j];
    }
      if(str!==bag)
      {
          console.log("Yes,the string is a palindrome");
      }
      else{
          console.log("No");
      }
}