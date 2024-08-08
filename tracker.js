function SetGoal() {
    var numinput = document.getElementById("target").value;
    var goalParagraph =document.getElementById("textGoal") ;
    var prog = document.getElementById("prog");
    goalParagraph.innerHTML="Your Goal : " + numinput;
    prog.setAttribute("max",numinput);
    localStorage.setItem("goal",numinput);

    Swal.fire({
        title: 'Custom Alert',
        text: 'Goal is Set. Try hard to achieve!',
        icon: 'info',
        confirmButtonText: 'OK'
    });
}

var score = 0;
var score2 = 0;
window.onload = function(){
    if(localStorage.getItem("goal")){
    var goal = localStorage.getItem("goal");
    var goalParagraph =document.getElementById("textGoal") ;
    goalParagraph.innerHTML="Your Goal : " + goal;
    var prog = document.getElementById("prog");
    prog.setAttribute("max",goal);
    }
    
    if(localStorage.getItem("score")){
        score = localStorage.getItem("score");
        var scorep =document.getElementById("textScore") ;
        scorep.innerHTML="Your Score : " + score;
        var prog = document.getElementById("prog");
        prog.setAttribute("value",score);
        }
    else{
        score=0;
    }

    if(localStorage.getItem("goal2")){
        var goal2 = localStorage.getItem("goal2");
        var goalParagraph2 =document.getElementById("textGoal2") ;
        goalParagraph2.innerHTML="Your Goal : " + goal2;
        var prog2 = document.getElementById("prog2");
        prog2.setAttribute("max",goal2);
        }
        if(localStorage.getItem("score2")){
            score2 = localStorage.getItem("score2");
            var scorep2 =document.getElementById("textScore2") ;
            scorep2.innerHTML="Your Score : " + score2;
            var prog2 = document.getElementById("prog2");
            prog2.setAttribute("value",score2);
            }
        else{
            score2=0;
        }
}
function done() {
    var scorep =document.getElementById("textScore");
    var prog = document.getElementById("prog");
    var target = prog.getAttribute("max");
    if((score+1) >= target){
        Swal.fire({
            title: 'Custom Alert',
            text: 'Congratulations,Target is Achieved.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
        if((score+1)==target){
        score++;
        scorep.innerHTML="Your Score : " +score;
    
        prog.setAttribute("value",score);

        localStorage.setItem("score",score);}
    }
    else{
    score++;
    scorep.innerHTML="Your Score : " +score;
    
    prog.setAttribute("value",score);

    localStorage.setItem("score",score);
    }
}

function reset(){
    var scorep =document.getElementById("textScore");
    score = 0;
    var prog = document.getElementById("prog");
    scorep.innerHTML="Your Score : " +score;
    prog.setAttribute("value",score);
    localStorage.setItem("score",score);

    Swal.fire({
        title: 'Custom Alert',
        text: 'Score is Reset',
        icon: 'info',
        confirmButtonText: 'OK'
    });
}


function SetGoal2() {
    var numinput2 = document.getElementById("target2").value;
    var goalParagraph2 =document.getElementById("textGoal2") ;
    var prog2 = document.getElementById("prog2");
    goalParagraph2.innerHTML="Your Goal : " + numinput2;
    prog2.setAttribute("max",numinput2);
    localStorage.setItem("goal2",numinput2);

    Swal.fire({
        title: 'Custom Alert',
        text: 'Goal is Set. Try hard to achieve!',
        icon: 'info',
        confirmButtonText: 'OK'
    });
    
}



function done2() {
    var scorep2 =document.getElementById("textScore2");
    scorep2.innerHTML="Your Score : " +score2;
    var prog2 = document.getElementById("prog2");
    var target2=prog2.getAttribute("max");
    if((score2+1) >= target2){
        Swal.fire({
            title: 'Custom Alert',
            text: 'Congratulations,Target is Achieved.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
        if((score2+1)==target2){
            score2++;
            scorep2.innerHTML="Your Score : " +score2;
        
            prog2.setAttribute("value",score2);
    
            localStorage.setItem("score2",score2);
        }
    }
    else{
    score2++;
    scorep2.innerHTML="Your Score : " +score2;
    
    prog2.setAttribute("value",score2);

    localStorage.setItem("score2",score2);
    }
}

function reset2(){
    var scorep2 =document.getElementById("textScore2");
    score2 = 0;
    var prog2 = document.getElementById("prog2");
    scorep2.innerHTML="Your Score : " +score2;
    prog2.setAttribute("value",score2);
    localStorage.setItem("score2",score2);

    Swal.fire({
        title: 'Custom Alert',
        text: 'Score is Reset',
        icon: 'info',
        confirmButtonText: 'OK'
    });
}