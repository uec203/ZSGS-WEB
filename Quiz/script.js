let questionNo = 1;
let scorecontainer;
let viewscore;
let attend;
let contains;
let answers;
let submit;
fetch("question.json").then(x => {
    return x.json();
}).then(y => {
    start(y);
});
function start(y) {
    answers = y;
    scorecontainer = document.getElementById("score");
    viewscore = document.getElementById("span1");
    attend = document.getElementById("span2");
    submit = document.getElementById("submit");
    submit.addEventListener("click", result);
    contains = document.getElementById("questioncontainer");
    for (let title in y) {
        createTitle(title);
        for (let z of y[title]) {
            createCard(z);
        }
    }
}
/*
<div class="questioncard">
                <div class="question">1.E = mc2 is an equation which deals with:</div>
                <div class="options">
                    <div class="option">
                        <input type="radio" name="1" id="s"/>
                        <label for="s">OPTION 1</label>
                    </div>
                    <div class="option">
                        <input type="radio" name="1" id="l"/>
                        <label for="l">OPTION 1</label>
                    </div>
                    <div class="option">
                        <input type="radio" name="1" id="3"/>
                        <label for="3">OPTION 1</label>
                    </div>
                    <div class="option">
                        <input type="radio" name="1" id="5"/>
                        <label for="5">OPTION 1</label>
                    </div>
                </div>
            </div>
*/
function createCard(x) {
    let questioncard = document.createElement("div");
    questioncard.classList.add("questioncard");
    let question = document.createElement("div");
    question.classList.add("question");
    question.innerText = questionNo + "." + x.question;
    let options = document.createElement("div");
    options.classList.add("options");
    let a = 'A';
    for (let op of x.options) {
        let option = document.createElement("div");
        option.classList.add("option");
        let userin = document.createElement("input");
        userin.setAttribute("type", "radio");
        userin.setAttribute("name", questionNo);
        userin.setAttribute("id", questionNo + a);
        userin.setAttribute("value", op);
        let label = document.createElement("label");
        label.setAttribute("for", questionNo + a);
        label.innerText = a + "." + op;
        option.append(userin, label);
        a = String.fromCharCode(a.charCodeAt(0) + 1);
        options.appendChild(option);
    }
    questionNo++;
    questioncard.append(question, options);
    contains.append(questioncard);
}
function createTitle(x) {
    let title = document.createElement("h2");
    title.innerText = x;
    document.getElementById("title").append(title);
}
let result = () => {
    let score = 0;
    let attended = 0;
    questionNo = 1;
    for (let ans of answers["Science MCQ"]) {
        let alloptions = document.querySelectorAll(`input[name="${questionNo}"]`);
        let selected = document.querySelector(`input[name="${questionNo}"]:checked`);
        if (selected != null) {
            if (ans.answer == selected.value) {
                score++;
            }
            else {
                let label = selected.nextElementSibling;
                label.style.backgroundColor = "red";
            }
            attended++;
        }
        questionNo++;
        for(let op of alloptions){
            op.disabled = true;
        }
    }
    scorecontainer.style.display='block';
    viewscore.innerHTML=""+score;
    attend.innerHTML = ""+attended;
};
