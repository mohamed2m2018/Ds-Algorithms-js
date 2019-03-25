const palindrome=(str)=>{

    let reversed='';

    for (element of str){

        reversed=element+reversed;
    }

    if(reversed===str)
        console.log('this word is palindrome')
    else
        console.log('this world is not palindrome')    
}


palindrome('abba');
palindrome('salah');
palindrome('a7a')