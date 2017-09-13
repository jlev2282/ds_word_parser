$(document).ready(function(){
//Define variables for arrays
var stringArray=[];
// stringArray2=[];
uniqueWordArray=[];
usedStrings=[];

// Take input and enter it into an stringArray
$("#submit").on("click", function(event){
    event.preventDefault();

    //grab value of input from stringInput
    string1=document.getElementById("stringInput").value;

    //parse string into an array of substrings eaual to stringArray
    stringArray=string1.split(' ');
    console.log(stringArray);//should show up as an array with different words in it

    usedStrings.push(document.getElementById("stringInput").value);
});

// function that loops over array and add each unique word into a new array
function unique(array){};
// function that puts UniqueWordArray into alphabhetical order
function alphaString(string){};
// function that places current string into usedStrings array
});
