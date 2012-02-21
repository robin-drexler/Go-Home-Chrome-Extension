$(function () {

    function sendRequest() {
        chrome.extension.sendRequest({});
    }

    $(document).bind('keydown', 'ctrl+shift+h', sendRequest)
        .bind('keydown', 'meta+shift+h', sendRequest);
});
