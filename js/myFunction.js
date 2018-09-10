
function typewrite(str, interval,element ) {

    // var temp = "";
    var i = 0;



    var end = setInterval(function () {
        // return time;
        // temp = temp + str.charAt(i);

        $(element).html($(element).html() + str.charAt(i));
        i++;
        if(str.charAt(i) ==  '<')
        {
            i += 4;
            $(element).html($(element).html() + "<br>");
        }
        if (i == str.length) {
            $(element).html($(element).html() + "<br>");
            clearInterval(end);
        }

    }, interval);
}
