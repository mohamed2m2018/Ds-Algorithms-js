const reverse=(str)=>{

    let newStr="";

    for(let i=str.length-1;i>=0;i--){

        newStr+=str[i];

    }
    console.log('My solution is ',newStr)
}

reverse('Muhammed');


//another solution

const reverse2=(str)=>{
 
    const newStr= str.reverse();

    console.log('Built in solution is ',newStr);


}

reverse('Muhammad');