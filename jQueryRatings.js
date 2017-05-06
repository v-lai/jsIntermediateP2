$(function () {
    let $tbody = $("tbody");
    $(".btn-default").on("click", function (e) {
        e.preventDefault();
        let $td1 = $("<td>")
            .append($("#sportsTeam").val());
        let $td2 = $("<td>")
            .append($("#rating").val());
        let $delete = $("<button>")
            .addClass("btn btn-danger")
            .text("Delete")
            .on("click", function (e) {
                e.preventDefault();
                $(e.target).parent().parent().remove();
            });
        let $td3 = $("<td>")
            .append($delete);
        let $tr = $("<tr>")
            .append($td1, $td2, $td3);
        $tbody.append($tr);
    });
});