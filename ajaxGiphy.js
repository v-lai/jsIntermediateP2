$(function () {
    let $gifs = $(".gifs");
    let $nevDiv;
    $(".submit").on("click", function (e) {
        e.preventDefault();
        let $searchTerm = $("#searchTerm").val();
        $.get(`http://api.giphy.com/v1/gifs/search?q=${$searchTerm}&api_key=dc6zaTOxFJmzC`)
            .then(function (res) {
                // console.log(res.data[0].images.downsized.url);
                let $img = $("<img>")
                    .attr("src", res.data[0].images.downsized.url)
                    .attr("alt", $searchTerm)
                    .addClass("img-responsive center-block");
                $newDiv = $("<div>")
                    .addClass("col-xs-4 gif-item")
                    .append($img);
                $gifs.append($newDiv);
            }).catch(function (res) {
                console.log("a mistake was made in GET");
            });
    });

    $(".remove").on("click", function (e) {
        e.preventDefault();
        $gifs.children().remove();
    });
});