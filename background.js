var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlDoc=xhr.responseXML;

            chrome.browserAction.setBadgeBackgroundColor({ color: [46, 125, 50, 1] });
          chrome.browserAction.setBadgeText({"text" : xmlDoc.getElementsByTagName("ForexBuying")[0].childNodes[0].nodeValue});

        }
    };
    var xmlDoc;
    xhr.open("GET",'http://www.tcmb.gov.tr/kurlar/today.xml', true);
    xhr.send();
    
