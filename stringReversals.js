//Solution 1

//looping on the string, from end to start, and accumulating letters to a 

//new string

const reverse=(str)=>{

    let newStr="";

    for(let i=str.length-1;i>=0;i--){

        newStr+=str[i];

    }
    console.log('My solution is ',newStr)
}

reverse('Muhammed');


//another solution

//using array reversing function

//converting array to string by split, then joining it again to return as string  

const reverse2=(str)=>{
 
    const newStr= str.split('').reverse().join('')

    console.log('Built in solution is ',newStr);


}

reverse2('Muhammad');


//Solution 3 using es6 for of syntax


const reverse3=(str)=>{


    let reversed='';

    for (element of str){
        reversed=element+ reversed;

    }

    console.log('Solution using element of is  ',reversed)

}

reverse3('Muhammad');