function getHomeUrl(tab) {
    var a = document.createElement('a');
    a.href = tab.url;
    return a.protocol + a.hostname;
}

function updateTabWithUrl(tab) {
    chrome.tabs.update(tab.id, {
        url: getHomeUrl(tab)
    });
}

chrome.browserAction.onClicked.addListener(updateTabWithUrl);
chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        updateTabWithUrl(sender.tab);
    });
chrome.contextMenus.create({
    title: 'Go Home',
    onclick: function(_, tab) {
        updateTabWithUrl(tab);
    }
})

