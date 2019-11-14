$(document).ready(function () {
    $(".myPagination").click(function () {
        console.log('test');
        console.log(this);
        $(this).tab('show');
    });
});

function del() {
    event.target.parentElement.remove();
}

function addQuestion() {
    var breaker=document.createElement('hr');
    var devider=document.createElement('br');
    var div = document.createElement('div');
    var input = document.createElement('input');
    var divForAnsw = document.createElement('div');
    var dltQst = document.createElement('button');
    var saver = document.createElement('div');
    var template = document.getElementById('questionTemplate');
    var buttonAddAns = document.createElement('button');
    buttonAddAns.setAttribute('onclick', 'addAnsw();');
    buttonAddAns.innerText = "добавить ответ";
    // buttonAddAns.className="listPagination";
    divForAnsw.className="div4Answ";
    input.type = 'text';
    input.placeholder = 'Введите вопрос';
    div.className = "название кдасса описать в сиэсэс";
    divForAnsw.className="div4Answ";
    dltQst.innerText = "удалить вопрос";
    dltQst.setAttribute('onclick', 'del();');
    divForAnsw.append(buttonAddAns);
    div.append(input);
    saver.append(divForAnsw);
    drawAnswer(divForAnsw);
    divForAnsw.append(devider);
    div.append(saver);
    div.append(dltQst);
    template.append(div);
    template.append(breaker);
}

function addAnsw() {
    var par = event.target.parentElement.parentElement;
    drawAnswer(par);
}
function drawAnswer(par) {
    var listPagination=document.createElement('ul');
    var pointPagination1=document.createElement('li');
    var pointPagination2=document.createElement('li');
    var link1=document.createElement('a');
    var link2=document.createElement('a');
    listPagination.className="nav nav-tabs listPagination";
    pointPagination1.className="page-item";
    pointPagination2.className="page-item";
    link1.className="page-link myPagination";
    link2.className="page-link myPagination";
    link1.href="#multyChoices";
    link2.href="#monoChoise";
    pointPagination1.append(link1);
    pointPagination2.append(link2);
    listPagination.append(pointPagination1);
    listPagination.append(pointPagination2);
    //
    var cover= document.createElement('div');
    var divForAnsw = document.createElement('div');
    var checkbox = document.createElement('input');
    var inputAnswer = document.createElement('input');
    var x = document.createElement('button');
    cover.className="tab-content";
    inputAnswer.placeholder = "Введите ответ";
    divForAnsw.className="container tab-pane active";
    divForAnsw.setAttribute("id","multyChoices");
    x.className = "close";
    x.innerText = "x";
    divForAnsw.append(listPagination);
    x.setAttribute('onclick', 'del();');
    checkbox.type = 'checkbox';
    divForAnsw.append(checkbox);
    divForAnsw.append(inputAnswer);
    cover.append(x);
    cover.append(divForAnsw);
    par.append(cover);

    var monoChoiceCover=document.createElement("div");
    var monoChoice=document.createElement("div");
    var textFld=document.createElement("input");
    textFld.type="text";
    monoChoiceCover.setAttribute("id","monoChoise");
    monoChoice.append(textFld);
    monoChoiceCover.className="tab-content";
    monoChoice.className="container tab-pane ";
    monoChoiceCover.append(monoChoice);
    monoChoiceCover.append(x);
    par.append(monoChoiceCover);
}
function goToNext() {
    var nextEl;
    var current = document.getElementsByClassName('container tab-pane active');
    var divArray = document.getElementsByClassName('container tab-pane');
    for (var runner = 0; runner < divArray.length; ++runner) {
        if (runner + 1 != divArray.length) {
            if (divArray[runner].id == current[0].id) {
                nextEl = divArray[runner + 1];
                break;
            }
        }
    }
    if (nextEl == undefined) {
        document.getElementById('disIfNeeded').firstChild.className = "disabled";
    }
    else {
        nextEl.className = "container tab-pane active";
        current[0].className = "container tab-pane";
        document.getElementById('disIfNeeded').href = "#" + nextEl.id;
    }
}
function goToPrevious() {
    var prevEl;
    var current = document.getElementsByClassName('container tab-pane active');
    var divArray = document.getElementsByClassName('container tab-pane');
    for (var runner = 1; runner < divArray.length; ++runner) {
        if (divArray[runner].id == current[0].id) {
            prevEl = divArray[runner - 1];
            break;
        }
    }
    if (prevEl == undefined) {
        document.getElementById('disIfNd').firstChild.className = "disabled";
    }
    else {
        current[0].setAttribute('class',"container tab-pane");

        prevEl.className = "container tab-pane active";
        document.getElementById('disIfNd').href = "#" + prevEl.id;
    }
}
