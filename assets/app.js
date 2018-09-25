var quiz = [
    {
        question: "What is Rick's last name?",
        answers: {
            a: "Santiago",
            b: "Smith",
            c: "Sanchez",
            d: "Squanch",
        },
        correct: "c",
    },
    {
        question: "Who is Rick's best friend?",
        answers: {
            a: "Mr. Poopybutthole",
            b: "Bird Person",
            c: "Morty",
            d: "Bird Man",
        },
        correct: "b",
    },
    {
        question: "What is Rick's favorite attraction in Anatomy Park",
        answers: {
            a: "The Bone Train",
            b: "Splean Mountain",
            c: "Liver Falls",
            d: "Pirates of the Pancreas",
        },
        correct: "d",
    },
    {
        question: 'What does "wubaluba dub dub" mean?',
        answers: {
            a: "I'm in great pain",
            b: "Let's party!",
            c: "I don't like you",
            d: "None of the above",
        },
        correct: "a",
    },
    {
        question: "Who does Morty have a crush on?",
        answers: {
            a: "Sarah",
            b: "Jessica",
            c: "Rachel",
            d: "Amanda",
        },
        correct: "b",
    },
    {
        question: "What is Scary Terry's son's name?",
        answers: {
            a: "Scary Larry",
            b: "Scary Brandon",
            c: "Scary Jerry",
            d: "Scary Brad",
        },
        correct: "b",
    },
    {
        question: 'Who is the character that makes Morty "uncomfortable" in the bathroom?',
        answers: {
            a: "Scary Terry",
            b: "Mr. Meeseeks",
            c: "King Jellybean",
            d: "Summer",
        },
        correct: "c",
    },
    {
        question: "Which Earth is the main Rick from?",
        answers: {
            a: "C-137",
            b: "C-138",
            c: "C-139",
            d: "C-169",
        },
        correct: "a",
    },
    {
        question: "What state is Beth from?",
        answers: {
            a: "Mississippi",
            b: "Michigan",
            c: "Minnisota",
            d: "Maine",
        },
        correct: "b",
    },
    {
        question: "Who killed Bird Person?",
        answers: {
            a: "Beth",
            b: "Summer",
            c: "Morty",
            d: "Tammy",
        },
        correct: "d",
    },
];

var right = 0;
var wrong = 0;

var timer = {
    time : 30,
    start : function() {
        counter = setInterval(timer.count, 1000);
    },
    stop : function() {
        clearInterval(counter);
    },
    count : function() {
        timer.time--;
        $("#timer").html(timer.time + " Seconds Remaining");
    },
    reset : function() {
        timer.time = 30;
        $("#timer").html(timer.time + " Seconds Remaining");
    },
};

function rightImage() {
    $("#result").html("Right!"+"<img src='assets/images/right.png' height = '300px'>");
  };

function wrongImage() {
    $("#result").html("Wrong!"+"<img src='assets/images/wrong.png' height = '300px'>");
  };

var startGame = function(){
    for (i = 0; i < quiz.length; i++){
        var t = setTimeout(function(i){
            timer.time = 30;
            $("#result").html("");
            timer.start();
            $("#question").html(quiz[i].question);
            $("#a").html(quiz[i].answers.a);
            $("#b").html(quiz[i].answers.b);
            $("#c").html(quiz[i].answers.c);
            $("#d").html(quiz[i].answers.d);
            $(".answer").on("click",function(){
                console.log(this);
                if (this.id == quiz[i].correct){
                    timer.stop();
                    right++;
                    clearTimeout(t);
                    setInterval(rightImage, 3000); 
                }else {
                    timer.stop();
                    wrong++;
                    clearTimeout(t);
                    setInterval(wrongImage, 3000);
                };            
            });
            
            if (timer.time === 0) {
                timer.stop();
                wrong++;
                setTimeout(wrongImage, 3000); 
            };  
        }, i*30000, i);
    };
};

$("button").on("click",function(){
    $(".btn").hide();
    startGame();
});

