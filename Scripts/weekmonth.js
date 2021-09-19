
$(document).ready(() => {
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;
    $("#gettoday").attr("value", today);

    gettoday();
})

function showDay() {
    $("#showDay").show();
    $("#showWeek").hide();
    $("#showMonth").hide();
    $("#day_btn").css("background-color", "#343a40");
    $("#week_btn").css("background-color", "");
    $("#mon_btn").css("background-color", "");
}

function showWeek() {
    $("#showWeek").show();
    $("#showDay").hide();
    $("#showMonth").hide();
    $("#week_btn").css("background-color", "#343a40");
    $("#day_btn").css("background-color", "");
    $("#mon_btn").css("background-color", "");
}

function showMonth() {
    $("#showMonth").show();
    $("#showWeek").hide();
    $("#showDay").hide();
    $("#mon_btn").css("background-color", "#343a40");
    $("#week_btn").css("background-color", "");
    $("#day_btn").css("background-color", "");
}

function gettoday() {
    // 取得選取日
    var x = $("#gettoday").val();
    // console.log(x);

    // 建立日期物件
    var weekTime = new Date(x);
    // console.log(weekTime);
    // console.log(weekTime.getDay());

    // 取得選取月最後一天
    var lastDay = new Date(weekTime.getFullYear(), weekTime.getMonth() + 1, 0);
    var _lastday = lastDay.getDate();  //31
    _lastday = _lastday < 10 ? '0' + _lastday : _lastday;  //31
    // console.log(`這個月最後一天是${_lastday}`)

    var getDay = weekTime.getDay();
    var getDate = weekTime.getDate();
    var datetrue_F = true;
    var datetrue = false;
    var cnt = 0;
    var moncnt = 1;

    // 建立tr、td
    var tr_td_all = '<thead class="thead-dark"><tr class="row"><th class="col">日</th><th class="col">一</th>\
                    <th class="col">二</th><th class="col">三</th><th class="col">\
                        四</th><th class="col">五</th><th class="col">六</th></thead>';
    for (let i = 0; i < 6; i++) {
        tr_td_all += "<tr class='row'>";
        for (let k = 0; k < 7; k++) {
            if (datetrue) {
                if (getDate == 1) {
                    tr_td_all += `<td class="col">${weekTime.getMonth() + 1 + moncnt}/${getDate}</td>`;
                    moncnt++;
                } else {
                    tr_td_all += `<td class="col">${getDate}</td>`;
                }
                cnt++;
                getDate++;
                getDate = getDate > _lastday ? getDate - _lastday : getDate;
                if (cnt == 30) { datetrue = false; }
            } else if (getDay == k && datetrue_F) {
                tr_td_all += `<td class='col' style="background-color:#6c757d; color:whitesmoke">${weekTime.getMonth() + 1}/${getDate}</td>`;
                cnt++;
                getDate++;
                datetrue = true;
                datetrue_F = false;
                getDate = getDate > _lastday ? getDate - _lastday : getDate;
            } else {
                tr_td_all += `<td class='col'></td>`;
            }
        }
        tr_td_all += "</tr>";
        // if (cnt == 30) { break; }
    }
    // 輸入trtd標籤
    $("#showMonth").html(tr_td_all);

}
