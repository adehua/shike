function getdate() {
    if (arguments.length > 0) {
        var today = new Date();
        today.setDate(today.getDate() - arguments[0])
    } else {
        var today = new Date();
    }
    var data = [];
    data['y'] = today.getFullYear();
    data['m'] = (today.getMonth() + 1) > 9 ? (today.getMonth() + 1) : "0" + (today.getMonth() + 1);
    data['d'] = today.getDate() > 9 ? today.getDate() : "0" + today.getDate();
    data['h'] = today.getHours();
    data['i'] = today.getMinutes();
    data['s'] = today.getSeconds();
    data['w'] = today.getDay();
    return data;
}

// 天
function days() {
    var date = getdate();
    return date['y'] + "." + date['m'] + "." + (date['d'] - 1) + " (00:00 - 24:00) ";
}

// 周
function weeks() {
    var date = getdate();
    console.log(date);
    if (date['w'] > 1) {
        var date1 = getdate('1');
        var date2 = getdate('2');
        return date2['y'] + "." + date2['m'] + "." + date2['d'] + " - " + date1['y'] + "." + date1['m'] + "." + date1['d'];
    } else {
        var date1 = getdate('1');
        var date2 = getdate('7');
        return date2['y'] + "." + date2['m'] + "." + date2['d'] + " - " + date1['y'] + "." + date1['m'] + "." + date1['d'];
    }
}

// 月
function months() {
    var date = getdate();
    return date['y'] + "." + date['m'] + ".01 - " + date['y'] + "." + date['m'] + "." + (date['d'] - 1);
}

function totals() {
    var date = getdate();
    return "2016.01.01 - " + date['y'] + "." + date['m'] + "." + (date['d'] - 1)
}

//日期转换成字符串
function getDateString(_date) {
    var month = _date.getMonth();
    var result = _date.getFullYear() + '-' + (parseInt(month) + 1) + '-' + _date.getDate();
    return result;
}


$(".ranks-time").text(days());
$('.tab-content-block a').on('click', function () {
    var data = $(this).data("info");
    var text = "";
    if (data == "days") {
        text = days();
    } else if (data == "weeks") {
        text = weeks();
    } else if (data == "months") {
        text = months();
    } else {
        text = totals();
    }
    $(".ranks-time").empty().text(text);
})