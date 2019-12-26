$(function () {
    if ($.browser.msie) {
        if ($.browser.version < 7)
            return;
    }

    // check for what is/isn't already checked and match it on the fake ones
    $("input:checkbox").each(function () {
        var $realbox = $(this);
        var $reallabel = $("label[for=" + this.id + "]");
        var $fakebox = $("<span></span>");

        $fakebox.addClass("fakecheck");
        $fakebox.attr("id", "fake" + this.id);
        $fakebox.attr("alt", '#' + this.id);
        $fakebox.text($reallabel.text());

        $reallabel.after($fakebox);

        $realbox.css("display", "none");
        $reallabel.css("display", "none");

        (this.checked) ? $("#fake" + this.id).addClass('fakechecked') : $("#fake" + this.id).removeClass('fakechecked');
    });
    // function to 'check' the fake ones and their matching checkboxes
    $(".fakecheck").click(function () {
        var $fakebox = $(this);
        ($fakebox.hasClass('fakechecked')) ? $fakebox.removeClass('fakechecked') : $fakebox.addClass('fakechecked');
        $($fakebox.attr('alt')).trigger("click");
        return false;
    });
});
