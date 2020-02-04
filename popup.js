let button = document.getElementById('#btn');

button.addEventListener('click',()=>{
    chrome.runtime.sendMessage({ greeting: "hello" },
        function(response) {
        console.log(response);
    });

});