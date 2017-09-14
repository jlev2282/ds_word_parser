$(document).ready(function(){
//Define variables for arrays
var stringArray=[];
var usedStrings=[];

// Take input and enter it into an stringArray
$("#submit").on("click", function(event){
    event.preventDefault();
    grabInput();
    alphaString();
    unique(stringArray);
    
});

//function that grabs input and splits into array of substrings
function grabInput(){
    //grab value of input from stringInput
    string1=document.getElementById("stringInput").value;
    usedStrings.push(string1);
    document.getElementById("prevStrings").innerHTML = usedStrings;
    //parse string into an array of substrings equal to stringArray
    stringArray=string1.split(' ');
    return(stringArray);
};

// function that loops over array and add each unique word into a new array
function unique(arr){
    var tempObj={};
    var j = 1;
    for (i = 0; i < arr.length; i++) {
        tempObj[arr[i]]=j;
        j++;
    }
    var uniqueArray=[];
    for(var key in tempObj)
    uniqueArray.push(key);
    console.log(uniqueArray);
    document.getElementById("uniqueCount").innerHTML = uniqueArray.length;
    };

// function that puts stringArray into alphabhetical order
function alphaString(){
    stringArray.sort();
    document.getElementById("alpha").innerHTML = stringArray;
    return(stringArray);
};

});
