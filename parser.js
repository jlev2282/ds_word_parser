$(document).ready(function(){
//Define variables for arrays
var stringArray=[];
var usedStrings=[];
var uniqueArray=[];

// click event listener to start page functions
$("#submit").on("click", function(event){
    uniqueArray=[];//empties array after previous submits
    event.preventDefault();
    grabInput();
    alphaString();
    unique(stringArray);
    wordCount(stringArray, uniqueArray);
});

//function that grabs input and splits into array of substrings
function grabInput(){
    //grab value of input from stringInput
    string1=document.getElementById("stringInput").value;
    string2=string1.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    string3=string2.replace(/\s{2,}/g," ");
    string4=string3.toLowerCase();
    usedStrings.push(string1);
    document.getElementById("prevStrings").innerHTML = usedStrings;
    //parse string into an array of substrings equal to stringArray
    stringArray=string4.split(' ');
    return(stringArray);
};

// function that puts stringArray into alphabhetical order
function alphaString(){
    stringArray.sort();
    document.getElementById("alpha").innerHTML = stringArray;
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
    console.log(tempObj);
    for(var key in tempObj)
    uniqueArray.push(key);
    document.getElementById("uniqueCount").innerHTML = uniqueArray.length;
    return(uniqueArray);
    };


//function that breaks the string into an object with number of occurences
function wordCount(arr,arr2){
    countArray=[];
    result = { };

    // checks for word in result obj and adds it if absent
    for(var i = 0; i < arr.length; ++i) {
        if(!result[arr[i]])
            result[arr[i]] = 0;
        ++result[arr[i]];
        };
    for(var key in result)
    countArray.push(key);

    countArray2=[];

    // collects counts of each word in result obj and adds to own array
    for(var i = 0; i < arr2.length; ++i) {
        value=result[arr2[i]];
        countArray2.push(value);
        };
        
        array3=[];
        // pulls key and value and adds to html document
    for (var i=0; i<countArray.length; ++i) {
        current = " "+countArray[i]+"("+countArray2[i]+")";
        theParent = document.getElementById("timesAppear");
        array3.push(current);
    };
       document.getElementById("timesAppear").innerHTML = array3; 

    };

});
