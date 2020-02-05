let startSelectDom = document.getElementById('recording_type_code_1');
let startTimeDom = document.getElementById('recording_timestamp_time_1');

startSelectDom.selectedIndex = 1;
startTimeDom.value = '09:30';

let endSelectDom = document.getElementById('recording_type_code_2');
let endTimeDom = document.getElementById('recording_timestamp_time_2');

endSelectDom.selectedIndex = 2;
endTimeDom.value = '18:30';



// WIP
const setDefaultVal = function (startTime,endTime) {
    chrome.storage.local.set(
        {
            "startTime": startTime,
            "endTime": endTime
        }
    );
};

const getDefaultVal = function () {
    chrome.storage.local.get(["startTime", "endTime"], function(items) {
        console.log(items.startTime);
        console.log(items.endTime);
        startTimeDom.value = items.startTime;
        endTimeDom.value = items.endTime;
    });
};