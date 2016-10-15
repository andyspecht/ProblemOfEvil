/*v 1.1 */
/* By Andy Specht andy[dot][lastname]@gmail.com */

$(document).ready(function(){

//clicking on "ok"
$("#ok").click(function(){
    var current = $(".bigbox").text();
    QA.push(current);
    QA.push("Ok");
    var next = nextQ(current, "ok");
    document.getElementById("questionBox").innerHTML = next;
    if (next == questions[11]){
        hideAns();
        printDialogue();
    }        
});

//clicking on "yes"
$("#yes").click(function(){
    var current = $(".bigbox").text();
    QA.push(current);
    QA.push("Yes");
    var next = nextQ(current, "yes");
    document.getElementById("questionBox").innerHTML = next;
          
});

//clicking on "no"
$("#no").click(function(){
    var current = $(".bigbox").text();
    QA.push(current);
    QA.push("No");
    var next = nextQ(current, "no");
    document.getElementById("questionBox").innerHTML = next;
    
});

//clicking Questionbox
$("#questionBox").click(function(){
   if (document.getElementById("questionBox").innerHTML == questions[11]){
     document.getElementById("questionBox").innerHTML = questions[0];
     displayYN();
    }        
});

//List of Questions
var questions = [
    //Preliminary Section
    "Are you ready to discuss the Problem of Evil?",               //0
    "God is usually considered to have three properties:",             //1
    "Omniscience - God knows about everything.",                                  //2
    "Omnipotence - God is able to do anything.",                                  //3  
    "Omnibenevolence - God is completely good; he always does the right thing.",   //4
    
    //Main Track
    "So begin with this claim: evil exists in the world. Do you accept this?",      //5
    "Does God know about evil?",                                               //6
    "Is God able to prevent evil?",                                            //7
    "Is preventing evil the right thing to do?",                                  //8  
    "So, if God existed, then evil would not exist.",                        //9
    "Therefore, God does not exist, since evil exists.",                        //10
    "END. Click HERE to start over.",                                          //11
    
    //Alternative End
    "Well, ok. I think that's a strange view, and we'll have to continue this conversation another time. I have a symposium to attend soon!",                   //12                        
    
    //Denies Evil Track 
    "Are acts like murder, genocide, and torture evil?",                         //13
    "Do acts like  murder, genocide, and torture ever happen?",                  //14
    "Then evil exists in the world.",                                            //15
    "That's just factually incorrect.",                                           //16  
        
            //Greater Good sub-track
    "Are these acts not evil because they lead to a higher good?",               //17 
    "Consider all of the children who suffer terribly from illness and die; you think the death of each of these children is ultimately a good thing?",                 //18
    "Really?",                                                                    //19                                                                                                 
"If there's no greater good that comes out of them, then it seems like they're evil.",                       //20      

    //Denies knowledge 
    "But since God is omniscient, by definition he knows about EVERYTHING.",   //21
    "So, does God know about this evil?",                                      //22
    
    //Denies power
    "But since God is omnipotent, by definition he is able to do ANYTHING.",     //23
    "So, is God able to prevent this evil?",                                    //24 
    
     //Denies preventing is good
    "Should God not prevent evil in order to respect human free will?",         //25
 "But some evil is not caused by humans. For example: earthquakes and tsunamis.", //26
    "So God should prevent such natural evils from harming innocent people, right?", //27
    "Then I can't think of a reason God shouldn't prevent the evil.",                 //28
    "Wait, do you deny the existence of earthquakes and tsunamis?",                //29
    "But God is completey good, and it's good to save innocent people.",            //30
    "So, if God existed, such evils would not exist.",                             //31
    
    //Denies contradiction
    "But that would mean that a perfectly good being knew about evil, was able to stop evil, and should have stopped evil...but didn't stop evil. That is a contradiction.", //32

    //Not Ready
    "That's fine. I will contemplate the form of the good, until you are ready."  //33
    
];

var QA= [];

//First Question
document.getElementById("questionBox").innerHTML = questions[0];

//Selects next Question
function nextQ (oldtext, answer){
    var i=0;
    while(oldtext != questions[i])
    {
        i++;
    }
    //Main Track Roadmap
    if(i===0 && answer=="yes"){
        displayOk();
        return questions[i+1];
    }
    if(i===0 && answer=="no"){
        displayOk();
        return questions[33];
    }
    if(i>0 && i<4){
        return questions[i+1];
    }
    if(i==4){
        displayYN();
        return questions[5];
    }
    if(i>4 && i<9 && answer=="yes"){
        return questions[i+1];
    }
    if((i==9 || i==31) && answer=="yes"){
        displayOk();
        return questions[10];
    }
    if(i==10){
        return questions[11];
    }
    if(i==11){
        displayYN();
        return questions[0];
    }
    
    //Alternative End
    if(i==12){
        return questions[11];
    }
    
    //Denies Evil Track
    if(i==5 && answer=="no"){
        return questions[13];
    }    
   if(i==13 && answer=="yes"){
        return questions[i+1];
    }   
        
    if(i==14 && answer=="yes"){
        displayOk();
        return questions[i+1];
    }   
    if(i==14 && answer=="no"){
        displayOk();
        return questions[16];
    }   
    if(i==15){
       displayYN();
       return questions[6];
    }
    if(i==16){
       return questions[15];
    }
    
          //Greater Good Subtrack
    if(i==13 && answer=="no"){
        return questions[17];
    }    
    if(i==17 && answer=="yes"){
        return questions[18];
    }   
    if(i==17 && answer=="no"){
        displayOk();
        return questions[20];
    } 
     if(i==18 && answer=="yes"){
        return questions[19];
    }    
    if(i==18 && answer=="no"){
        displayOk();
        return questions[15];
    }     
    if(i==19 && answer=="yes"){
        displayOk();
        return questions[12];
    } 
    if(i==19 && answer=="no"){
        displayOk();
        return questions[15];
    } 
    if(i==20){
        return questions[15];
    }
    
    //Denies knowledge
    if(i==6 && answer=="no"){
          displayOk();
         return questions[21];
    }
    if(i==21){  
         displayYN();
         return questions[22];
    }
    if(i==22 && answer=="yes"){
         return questions[7];
    }
    if(i==22 && answer=="no"){
         displayOk();
         return questions[21];
    }
    
    //Denies ability
     if(i==7 && answer=="no"){
        displayOk();
        return questions[23];      
     }
    if(i==23){  
         displayYN();
         return questions[24];
    }
    if(i==24 && answer=="yes"){
         return questions[8];
    }
    if(i==24 && answer=="no"){
         displayOk();
         return questions[23];
    }
    
    //Denies preventing is good
    if(i==8 && answer=="no"){
        return questions[25];
    }
    if(i==25 && answer=="no"){
        displayOk();
        return questions[28];
    }  
     if(i==28){
        displayYN();
        return questions[8];
    }      
        //Free will defense
    if(i==25 && answer=="yes"){
        return questions[26];
    }
    if(i==26 && answer=="yes"){
        return questions[27];
    }
    if(i==26 && answer=="no"){
        return questions[29];
    }
    if(i==27 && answer=="yes"){
        return questions[31];
    }
    if(i==27 && answer=="no"){
        return questions[30];
    }    
    if(i==29 && answer=="yes"){
        displayOk();
        return questions[12];
    }
    if(i==29 && answer=="no"){
        return questions[27];
    }    
    if(i==30 && answer=="yes"){
        return questions[26];
    }
    if(i==30 && answer=="no"){
        displayOk();
        return questions[12];
    }
    
    //Denies Contradiction
    if((i==9 || i==31) && answer=="no"){
        displayOk();
        return questions[32];
    }
    if(i==32){       
        return questions[10];
    }

    //Not ready
    if(i==33){
      displayYN();
      return questions[0];
    }
    
}

//display just "ok" box
function displayOk() {
       $("#line1").fadeOut(100);
       $("#line3").fadeOut(100);
       $("#yes").fadeOut(100);
       $("#no").fadeOut(100);
       $("#ok").fadeIn();
       $("#line2").fadeIn();
    
}

//display just "yes" and "no" boxes
function displayYN(){
       $("#line1").fadeIn();
       $("#line3").fadeIn();
       $("#yes").fadeIn();
       $("#no").fadeIn();
       $("#ok").fadeOut(100);
       $("#line2").fadeOut(100);
}

//hide all answer buttons
function hideAns(){
      $(".line").fadeOut(100);
      $(".box").fadeOut(100);
       
}

//Prints Dialogue at End
function printDialogue(){
     document.getElementById("QA").innerHTML += "<u>DIALOGUE</u> <br> ";
     i=0;
     while(i<QA.length)
        {
            if(i%2===0){
                 document.getElementById("QA").innerHTML += "<b>Socrates:</b> ";
                 document.getElementById("QA").innerHTML += QA[i];
                 document.getElementById("QA").innerHTML += "<br><br>";
                 i++;
            }
                else{
                 document.getElementById("QA").innerHTML += "<b>You:</b> ";
                 document.getElementById("QA").innerHTML += QA[i];
                 var a = Math.floor((Math.random() * 10) + 1);
                    if(a%2===0){
                         document.getElementById("QA").innerHTML += ", Socrates.";
                 }
                    else{
                     document.getElementById("QA").innerHTML += ".";
                 }
                 document.getElementById("QA").innerHTML += "<br><br>";
                 i++;
                    
                }                   
              
        }   
    
}

});