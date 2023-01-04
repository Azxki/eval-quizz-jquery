let compteur = 0
let question2 = "Vous avez eu faux à la première question, la réponse était Seine-et-Marne. <br>"
let question3 = "Vous avez eu faux à la deuxième question, la réponse était Michel. <br>"
let question6 = "Vous avez eu faux à la troisième question, la réponse était Lieutenant. <br>"
let question7 = "Vous avez eu faux à la quatrième question, la réponse était La vache. <br>"
let question9 = "Vous avez eu faux à la cinquième question, la réponse était La sculpture. <br>"
let question11 = "Vous avez eu faux à la sixième question, la réponse était Real Madrid. <br>"
let question13 = "Vous avez eu faux à la septième question, la réponse était Les Vosges. <br>"
let question15 = "Vous avez eu faux à la huitième question, la réponse était Le bras. <br>"
let question17 = "Vous avez eu faux à la neuvième question, la réponse était Atlantique. <br>"
let question19 = "Vous avez eu faux à la dixième question, la réponse était La guitare. <br>"
let reponse = "Les mauvaises réponses : <br>"
let r1 = $('#r1');
let r2 = $('#r2');
let para = $('#para');


//Question 1
r1.click(() => {
    setTimeout(() => {
        $('#question1').fadeTo('slow', 0);
    }, 1000)
    compteur++;
})

r2.click(() => {
    setTimeout(() => {
        $('#question1').fadeTo('slow', 0);
    }, 1000)
    reponse = reponse + question2;
    console.log(reponse);
})

//Question 2
$('#r3').click(() => {
    setTimeout(() => {
        $('#question2').fadeTo('slow', 0);
    }, 1000)
    reponse = reponse + question3;
    console.log(reponse);
})

$('#r4').click(() => {
    setTimeout(() => {
        $('#question2').fadeTo('slow', 0);
    }, 1000)
    compteur++;
})

//Question 3
$('#r5').click(() => {
    setTimeout(() => {
        $('#question3').fadeTo('slow', 0);
    }, 1000)
    compteur++;
})

$('#r6').click(() => {
    setTimeout(() => {
        $('#question3').fadeTo('slow', 0);
    }, 1000)
    reponse = reponse + question6;
    console.log(reponse);
})

//Question 4
$('#r7').click(() => {
    setTimeout(() => {
        $('#question4').fadeTo('slow', 0);
    }, 1000)
    reponse = reponse + question7;
    console.log(reponse);
})

$('#r8').click(() => {
    setTimeout(() => {
        $('#question4').fadeTo('slow', 0);
    }, 1000)
    compteur++;
})

//Question 5
$('#r9').click(() => {
    setTimeout(() => {
        $('#question5').fadeTo('slow', 0);
    }, 1000)
    reponse = reponse + question9;
    console.log(reponse);
})

$('#r10').click(() => {
    setTimeout(() => {
        $('#question5').fadeTo('slow', 0);
    }, 1000)
    compteur++;
})

//Question 6
$('#r11').click(() => {
    setTimeout(() => {
        $('#question6').fadeTo('slow', 0);
    }, 1000)
    reponse = reponse + question11;
    console.log(reponse);
})

$('#r12').click(() => {
    setTimeout(() => {
        $('#question6').fadeTo('slow', 0);
    }, 1000)
    compteur++;
})

//Question 7
$('#r13').click(() => {
    setTimeout(() => {
        $('#question7').fadeTo('slow', 0);
    }, 1000)
    reponse = reponse + question13;
    console.log(reponse);
})

$('#r14').click(() => {
    setTimeout(() => {
        $('#question7').fadeTo('slow', 0);
    }, 1000)
    compteur++;
})

//Question 8
$('#r15').click(() => {
    setTimeout(() => {
        $('#question8').fadeTo('slow', 0);
    }, 1000)
    reponse = reponse + question15;
    console.log(reponse);
})

$('#r16').click(() => {
    setTimeout(() => {
        $('#question8').fadeTo('slow', 0);
    }, 1000)
    compteur++;
})

//Question 9
$('#r17').click(() => {
    setTimeout(() => {
        $('#question9').fadeTo('slow', 0);
    }, 1000)
    reponse = reponse + question17;
    console.log(reponse);
})

$('#r18').click(() => {
    setTimeout(() => {
        $('#question9').fadeTo('slow', 0);
    }, 1000)
    compteur++;
})

//Question 10
$('#r19').click(() => {
    setTimeout(() => {
        $('#question10').fadeTo('slow', 0);
    }, 1000)
    reponse = reponse + question19;
    console.log(reponse);
})

$('#r20').click(() => {
    setTimeout(() => {
        $('#question10').fadeTo('slow', 0);
    }, 1000)
    compteur++;
})




//QUIZZ Terminé
$('#finish').click(() => {
    setTimeout(() => {
        $('#finish').hide();
        $('body').css("backgroundColor", "black");
        $('#good_rep').html("Bonne réponse : " + compteur + "/10");
        para.html(reponse);
    }, 1000)
})
