let score={"correct":0,"wrong":0};
//prompt add 30 items to this array of objects showing geography trivia questions. answer stands for the index of the options[] that has the correct answer. choices stands for the percentage of likelihood of people to choose an option from the option{} array as the answer
const questions=[{
                question:"What is the capital city of the U.S.A",
                options:["New York","Washington","Los Angeles","San Francisco"],
                answer:1,
                choices:[20,40,30,10]
                },
                {
                question:"What is the capital city of Canada?",
                options:["Toronto", "Ottawa", "Montreal", "Vancouver"],
                answer:1,
                choices:[30, 50, 10, 10]
                },
                {
                question:"Which of the following cities is not located in Europe?",
                options:["Barcelona", "Moscow", "Sydney", "Lisbon"],
                answer:2,
                choices:[20, 30, 10, 40]
                },
                {
                question:"What is the tallest mountain in the world?",
                options:["K2", "Kilimanjaro", "Everest", "Denali"],
                answer:2,
                choices:[10, 20, 60, 10]
                },
                {
                question:"Which country has the largest land area?",
                options:["Russia", "Canada", "China", "United States"],
                answer:0,
                choices:[50, 30, 10, 10]
                },
                {
                question:"Which ocean is the largest?",
                options:["Atlantic", "Arctic", "Indian", "Pacific"],
                answer:3,
                choices:[10, 20, 10, 60]
                },
                {
                question:"What is the currency of Japan?",
                options:["Yuan", "Yen", "Dollar", "Euro"],
                answer:1,
                choices:[50, 30, 10, 10]
                },
                {
                question:"Which river is the longest in the world?",
                options:["Nile", "Amazon", "Yangtze", "Mississippi"],
                answer:0,
                choices:[50, 30, 10, 10]
                },
                {
                question:"What is the smallest country in the world?",
                options:["Monaco", "Vatican City", "Nauru", "San Marino"],
                answer:1,
                choices:[40, 40, 10, 10]
                },
                {
                question:"Which African country was formerly known as Abyssinia?",
                options:["Ethiopia", "Ghana", "Congo", "Nigeria"],
                answer:0,
                choices:[60, 20, 10, 10]
                },
                {
                question:"Which continent is also a country?",
                options:["North America", "Africa", "Australia", "Europe"],
                answer:2,
                choices:[20, 30, 40, 10]
                },
                {
                question:"What is the highest waterfall in the world?",
                options:["Niagara Falls", "Iguazu Falls", "Angel Falls", "Victoria Falls"],
                answer:2,
                choices:[10, 20, 60, 10]
                },
                {
                question:"What is the capital city of France?",
                options:["Berlin", "Rome", "Paris", "Madrid"],
                answer:2,
                choices:[50, 30, 10, 10]
                },
                {
                question:"What is the capital city of Australia?",
                options:["Sydney", "Canberra", "Melbourne", "Brisbane"],
                answer:1,
                choices:[30, 50, 10, 10]
                },
                {
                question:"What is the capital city of Mexico?",
                options:["Mexico City", "Guadalajara", "Tijuana", "Cancun"],
                answer:0,
                choices:[50, 30, 10, 10]
                },
                {
                question:"Which of these countries is not located in Asia?",
                options:["Japan", "Peru", "Thailand", "Indonesia"],
                answer:1,
                choices:[20, 50, 20, 10]
                },
                {
                question:"What is the name of the largest hot desert in the world?",
                options:["Sahara", "Gobi", "Arabian", "Kalahari"],
                answer:0,
                choices:[60, 20, 10, 10]
                },
                {
                question:"What is the capital city of Italy?",
                options:["Rome", "Milan", "Naples", "Venice"],
                answer:0,
                choices:[50, 30, 10, 10]
                },
                {
                question:"What is the capital city of South Korea?",
                options:["Seoul", "Busan", "Incheon", "Daegu"],
                answer:0,
                choices:[50, 30, 10, 10]
                },
                {
                question:"Which of these countries is not located in Africa?",
                options:["Egypt", "Brazil", "Nigeria", "South Africa"],
                answer:1,
                choices:[20, 50, 20, 10]
                },
                {
                question:"What is the highest mountain range in the world?",
                options:["Rocky Mountains", "Andes", "Alps", "Himalayas"],
                answer:3,
                choices:[10, 20, 30, 40]
                },
                {
                question:"What is the capital city of Argentina?",
                options:["Buenos Aires", "Cordoba", "Rosario", "Mendoza"],
                answer:0,
                choices:[50, 30, 10, 10]
                },
                {
                question:"What is the largest lake in Africa?",
                options:["Lake Victoria", "Lake Tanganyika", "Lake Malawi", "Lake Chad"],
                answer:0,
                choices:[50, 30, 10, 10]
                },
                {
                question:"What is the capital city of Brazil?",
                options:["Rio de Janeiro", "Sao Paulo", "Brasilia", "Salvador"],
                answer:2,
                choices:[30, 50, 10, 10]
                },
                {
                question:"What is the smallest continent in the world?",
                options:["South America", "Africa", "Europe", "Australia"],
                answer:3,
                choices:[10, 20, 10, 60]
                },
                {
                question:"What is the largest country in South America?",
                options:["Argentina", "Brazil", "Colombia", "Peru"],
                answer:1,
                choices:[50, 30, 10, 10]
                },
                {
                question:"What is the currency of Brazil?",
                options:["Dollar", "Euro", "Pound", "Real"],
                answer:3,
                choices:[20, 30, 10, 40]
                },
                {
                question:"What is the highest mountain peak in Africa?",
                options:["Mount Kilimanjaro", "Mount Kenya", "Mount Meru", "Mount Stanley"],
                answer:0,
                choices:[50, 30, 10, 10]
                },
                {
                question:"What is the smallest ocean in the world?",
                options:["Southern Ocean", "Arctic Ocean", "Indian Ocean", "Atlantic Ocean"],
                answer:0,
                choices:[20, 40, 10, 30]
                },
                {
                question:"Which of these European countries is not part of the European Union?",
                options:["Denmark", "Spain", "Norway", "Poland"],
                answer:2,
                choices:[20, 30, 40, 10]
                },
                {
                question:"What is the largest island in the world?",
                options:["Greenland", "Australia", "Madagascar", "Borneo"],
                answer:0,
                choices:[60, 20, 10, 10]
                },
                {
                question:"What is the capital city of Spain?",
                options:["Barcelona", "Madrid", "Valencia", "Seville"],
                answer:1,
                choices:[40, 40, 10, 10]
                },
                {
                question:"Which of the following countries is not located in the Middle East?",
                options:["Lebanon", "Iran", "Turkey", "Afghanistan"],
                answer:2,
                choices:[20, 30, 40, 10]
                },
                {
                question: "What is the name of the world's largest coral reef system located in Australia?",
                options: ["The Great Barrier Reef", "The Belize Barrier Reef", "The Florida Reef", "The Red Sea Coral Reef"],
                answer: 0,
                choices: [60, 20, 10, 10]
                },
                {
                question: "Which country is home to the famous landmarks: Petra, Dead Sea, and Wadi Rum?",
                options: ["Saudi Arabia", "Egypt", "Oman", "Jordan"],
                answer: 3,
                choices: [20, 30, 10, 40]
                },
                {
                question: "What is the capital city of Portugal?",
                options: ["Barcelona", "Lisbon", "Madrid", "Valencia"],
                answer: 1,
                choices: [50, 30, 10, 10]
                },
                {
                question: "What is the highest active volcano in Europe?",
                options: ["Mount Etna", "Mount Vesuvius", "Stromboli", "Mount Olympus"],
                answer: 0,
                choices: [60, 20, 10, 10]
                },
                {
                question: "Which country is located in both Asia and Europe?",
                options: ["Turkey", "Armenia", "Azerbaijan", "Georgia"],
                answer: 0,
                choices: [50, 30, 10, 10]
                },
                {
                question: "What is the capital city of Egypt?",
                options: ["Alexandria", "Cairo", "Giza", "Luxor"],
                answer: 1,
                choices: [50, 30, 10, 10]
                },
                {
                question: "Which of these countries is not located in the Middle East?",
                options: ["Jordan", "Lebanon", "Bahrain", "Indonesia"],
                answer: 3,
                choices: [20, 30, 10, 40]
                },
                {
                question: "Which of these countries is not located in Europe?",
                options: ["Iceland", "Switzerland", "Norway", "Suriname"],
                answer: 3,
                choices: [20, 20, 20, 40]
                },
                {
                question: "Which of these countries is not located in Asia?",
                options: ["Philippines", "Israel", "Uzbekistan", "Zambia"],
                answer: 3,
                choices: [20, 30, 30, 20]
                },
                {
                question: "Which river runs through Egypt?",
                options: ["Congo River", "Amazon River", "Nile River", "Yangtze River"],
                answer: 2,
                choices: [10, 20, 60, 10]
                },
                {
                question: "Which ocean surrounds the Maldives?",
                options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
                answer: 2,
                choices: [20, 10, 60, 10]
                },
                {
                question: "What is the capital city of Norway?",
                options: ["Oslo", "Bergen", "Stavanger", "Trondheim"],
                answer: 0,
                choices: [50, 30, 10, 10]
                }]
                
let index=0;
display(index);           
function display(index){
    const currentQuestion=questions[index]
    //set question
    const questionDiv = document.querySelector(".questionDiv p");
    questionDiv.textContent=currentQuestion.question;
    //set answer options
    const labels = document.querySelectorAll(".answers label"); 
    for(let i=0;i<labels.length;i++){
        labels[i].textContent=currentQuestion.options[i]
    }
    //remove any styling on all answer options divs
    const answerDivs = document.querySelectorAll(".answers div"); 
    answerDivs.forEach(answerDiv=>{
        answerDiv.classList.remove("selected")
        answerDiv.style.background=""
        answerDiv.classList.remove("unclickable"); 
        answerDiv.querySelector("input").checked=false
    })

    //listen for user choices
    const answers = document.querySelector(".answers");     
    answers.addEventListener("click", choiceHandler)
    function choiceHandler(){
        const clicledDiv = event.target.closest("div")
        if(clicledDiv.children[1].textContent===(currentQuestion.options[currentQuestion.answer])){
            score.correct++
            setScore();
        }else{
            score.wrong++
            setScore();
        } 
        for(let i=0;i<answers.children.length;i++){
            answers.children[i].classList.add("selected")
            answers.children[i].style.background=makeBg("red"," rgb(243, 189, 189)",currentQuestion.choices[i])
            if(answers.children[i].children[1].textContent===currentQuestion.options[currentQuestion.answer]){
                answers.children[i].style.background=makeBg("green","rgb(137, 200, 137)",currentQuestion.choices[i])
            }
            answers.children[i].classList.add("unclickable")
        }
    this.removeEventListener("click",choiceHandler)
}
}

function makeBg(color1,color2,score){
    return `linear-gradient(to right,${color1} 0%,${color1} ${score}%,${color2} ${score}%,${color2} 100%)`;
}

const btn = document.querySelector("#btn")
btn.addEventListener("click",()=>{
    if(index<questions.length-1){
        index=index+1
        display(index)
    } else{
        //handle out of questions
    }
})
function setScore(){
    const meter = document.querySelector("#meter")
    const meterText = document.querySelector("#meterText")

    if(score.correct==0){
        meterText.textContent="0%"
        meter.setAttribute("value",0)
    } else{
        percentage=Math.floor((100*(score.correct/(score.correct+score.wrong))))+""
        meter.setAttribute("value",percentage)
        meterText.textContent=`${percentage}%`
    }   
}
setScore();