const questions =[
    {
   
    question: "What is the main purpose of CSS in HTML5?",
    correct: "CSS is used to determine style, positioning, and layout of a page." ,
    answer1: "CSS is used to define content on a page.",
    answer2: "CSS is used for scripting on an HTML web page.",
    answer3: "None of these",
    light: null,
},
{

    question: "What is true about absoulte positioning?",
    correct: "The element is positioned relative to the upper-left corner of the browser" ,
    answer1: "The element can float right or left",
    answer2: "The element is positioned relative to the upper-left corner of the computer display window",
    answer3: "The element is positioned relative to its parent element",
    light: null,

},
{
    question: "What is the correct syntax for a CSS comment?",
    correct: "/* Comment Goes Here */" ,
    answer1: "// Comment Goes Here",
    answer2: "# Comment Goes Here #",
    answer3: "< !--- Comment Goes Here -- >",
    light: null,

},
{
    question: "How does the new Flexible Box Model eliminate the need for using float?",
    correct: "By providing a container positioned by properties assigned" ,
    answer1: "By positioning objects relative to a parent object",
    answer2: "By allowing the browser to position the objects",
    answer3: "By positioning all objects at the coordinates 0,0",
    light: null,

},
{
    question: "Which CSS style positions an element relative to the browser window?",
    correct: "position: fixed;" ,
    answer1: "position: static;",
    answer2: "position: relative;",
    answer3: "position: absolute;",
    light: null,

},
{
    question: "What is the purpose of the flexbox properties in CSS?",
    correct: "To display an element as a flexbox, allowing its size and position to adjust with the size of the viewport.",
    answer1: "To display an element as a flexbox, allowing the content of a paragraph element to wrap around adjacent images",
    answer2: "To display an element as a flexbox, allow it to be moved dynamically to any position on the page with very little additional code.",
    answer3: "To display an element as a flexbox, allowing the user to drag the edges of the box in and out to change its size.",
    light: null,

},
{
    question: "Which box model establishes content alignment, direction, and orientation?",
    correct: "Flexible Box Model" ,
    answer1: "Fixed Box Model",
    answer2: "Inheritance Box Model",
    answer3: "Parent Box Model",
    light: null,

},
{
    question: "What is the purpose of the flex-flow property?",
    correct: "Flex-flow allows the designer to set both the flex-direction and flex-wrap properties with a single line of code." ,
    answer1: "Flex-flow defines the alignment of child boxes (top, center, bottom) within the flex box.",
    answer2: "Flex-flow ONLY determines whether or not the child boxes will wrap to a new line upon running out of space.",
    answer3: "None of these.",
    light: null,

},
{
    question: "Which is the correct method to define a block element as a grid?",
    correct: "display: grid;" ,
    answer1: "None of these",
    answer2: "show: grid;",
    answer3: "grid: true;",
    light: null,

},
{

    question: "You want to create a CSS style that will modify the strong tag to apply blue color and add 60% transparency. Which of the following code fragments will do this?",
    correct:"strong { color: rgba(0,0,255, 0.40); }",
    answer1: "strong { color: #0000ff, 60%; }",
    answer2: "strong { color: rgba(0%,0%,100%,40%); }",
    answer3: "strong { color: rgba(0,0,255,60); }",
    light: null,


}
]
// having #1 show when the page loads
function startquestions(){
document.getElementById('question').innerHTML = questions[x].question;
document.getElementById('button1').innerHTML = questions[x].correct;
document.getElementById('button2').innerHTML = questions[x].answer1;
document.getElementById('button3').innerHTML = questions[x].answer2;
document.getElementById('button4').innerHTML = questions[x].answer3;
document.getElementById("questionnum").innerHTML = "Question #"  +(x+1)
}
// making buttons variables
var box1 = document.getElementById('button1');
var box2 = document.getElementById('button2');
var box3 = document.getElementById('button3');
var box4 = document.getElementById('button4');

function clickbtn1(){
    box1.style.color = "lightblue";
    box2.style.color = "white";
    box3.style.color = "white";
    box4.style.color = "white";
    questions[x].light = 1
}
function clickbtn2(){
    box1.style.color = "white";
    box2.style.color = "lightblue";
    box3.style.color = "white";
    box4.style.color = "white";
    questions[x].light = 2

}
function clickbtn3(){
    box1.style.color = "white";
    box2.style.color = "white";
    box3.style.color = "lightblue";
    box4.style.color = "white";
    questions[x].light = 3

}
function clickbtn4(){
    box1.style.color = "white";
    box2.style.color = "white";
    box3.style.color = "white";
    box4.style.color = "lightblue";
    questions[x].light = 4

}

function checkhold(){
    if(questions[x].light = null){
        box1.style.color = "white"
        box2.style.color = "white"
        box1.style.color = "white"
        box1.style.color = "white"
    }else if(questions[x].light = 1){
        box1.style.color = "lightblue"
        box2.style.color = "white"
        box3.style.color = "white"
        box4.style.color = "white"
    }else if(questions[x].light = 2){
        box1.style.color = "white"
        box2.style.color = "lightblue"
        box3.style.color = "white"
        box4.style.color = "white"
    }else if(questions[x].light = 3){
        box1.style.color = "white"
        box2.style.color = "white"
        box3.style.color = "lightblue"
        box4.style.color = "white"
    }else if(questions[x].light = 4){
        box1.style.color = "white"
        box2.style.color = "white"
        box3.style.color = "white"
        box4.style.color = "lightblue"
    }
}




// creating an x variable to represent the current number of the array
var x=0
//creating click events for previous and next buttons
var b = document.getElementById("back");
b.addEventListener("click", previousquestion)

var n = document.getElementById("next");
n.addEventListener("click", nextquestion)
//having the x value increase, decrease, and stop from going above or less the value of the amount of questions
function nextquestion(){
    x +=1;
    if(x>=10){
        x=9
    }
    display()
    ridofcolors()
    checkhold()
    
}
function previousquestion(){
    x-=1;
    if(x<=0)
    {
        x=0
    }
    display()
    ridofcolors()
    checkhold()
}

//displaying what is in the array which is specified by x
function display(){
document.getElementById('question').innerHTML = questions[x].question;
document.getElementById('button1').innerHTML = questions[x].correct;
document.getElementById('button2').innerHTML = questions[x].answer1;
document.getElementById('button3').innerHTML = questions[x].answer2;
document.getElementById('button4').innerHTML = questions[x].answer3;
document.getElementById("questionnum").innerHTML = "Question #"+ (x+1)
}

// window alert when submit 
var sub = document.getElementById("submit");
sub.addEventListener("click", submitbtn)
function submitbtn(){
    window.alert("Are you sure you want to submit?")
}

function ridofcolors(){
    document.getElementById('button1').style.color = "white";
    document.getElementById('button2').style.color = "white";
    document.getElementById('button3').style.color = "white";
    document.getElementById('button4').style.color = "white";
} 



