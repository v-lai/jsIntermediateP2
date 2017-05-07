$(function () {
    let $questions = $(".questions");
    let $results;
    let $counter = 0;
    $(".submit").on("click", function (e) {
        e.preventDefault();
        $questions.children().empty();
        $(".submit").addClass("hidden");
        $("p:first-of-type").addClass("hidden");
        $.get(`https://opentdb.com/api.php?amount=10&category=25`)
            .then(function (res) {
                $results = res.results;
                getAndCheck();
            }).catch(function (res) {
                console.log("a mistake was made in GET");
            });
    });

    $(".next").on("click", function (e) {
        e.preventDefault();
        getAndCheck();
    });

    function getAndCheck() {
        $(".next").addClass("hidden");
        let $para = $("<p>", {
            text: $results[$counter].question,
        });
        let $li0 = $("<li>", {
            text: $results[$counter].incorrect_answers[0],
        });
        let $li1 = $("<li>", {
            text: $results[$counter].incorrect_answers[1],
        });
        let $li2 = $("<li>", {
            text: $results[$counter].incorrect_answers[2],
        });
        let $li3 = $("<li>", {
            text: $results[$counter].correct_answer,
        });
        let arr = [$li0, $li1, $li2, $li3];
        // some T/F questions not multiple choice
        arr = arr.filter(function (el) {
            return el;
        });
        let randNum = Math.floor(Math.random() * arr.length);
        let rand = arr.slice(randNum).concat(arr.slice(0, randNum));
        let $ul = $("<ul>")
            .append(rand);
        $questions.append($para, $ul);
        $("li").on("click", function (e) {
            e.preventDefault();
            if ($(e.target).text() === $results[$counter].correct_answer) {
                // console.log("correct");
                $results.shift();
                $(".next").removeClass("hidden");
                if ($results[$counter] === undefined) {
                    $(".next").addClass("hidden");
                    $(".submit").text("Start New Game")
                        .removeClass("hidden");
                    $("p:first-of-type").removeClass("hidden");
                }
            }
            // else {
            //     console.log("try again");
            // }
        });
    }
});