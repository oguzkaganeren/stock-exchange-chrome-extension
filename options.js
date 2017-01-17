var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlDoc=xhr.responseXML;
          //document.getElementById("euro").innerHTML = xmlDoc.getElementsByTagName("ForexBuying")[0].childNodes[0].nodeValue;
          var table=document.getElementById("mytable");
         for(var i=12;i>0 ;i--){
          var row= table.insertRow(1);
          row.className='simple_with_animation';
          row.insertCell(0).innerHTML="<img src='icons/"+xmlDoc.getElementsByTagName("Currency")[(i-1)].getAttribute("Kod")+".png"+"'>"+xmlDoc.getElementsByTagName("Currency")[(i-1)].getAttribute("Kod")+"/TRY";
          row.insertCell(1).innerHTML=xmlDoc.getElementsByTagName("Unit")[(i-1)].childNodes[0].nodeValue;
          row.insertCell(2).innerHTML="<div class='radio'><input type='radio' name='optradio'>"+xmlDoc.getElementsByTagName("ForexBuying")[(i-1)].childNodes[0].nodeValue+"</label></div>";
          row.insertCell(3).innerHTML="<div class='radio'><input type='radio' name='optradio'>"+xmlDoc.getElementsByTagName("ForexSelling")[(i-1)].childNodes[0].nodeValue+"</label></div>";
          row.insertCell(4).innerHTML=xmlDoc.getElementsByTagName("BanknoteBuying")[(i-1)].childNodes[0].nodeValue;
          row.insertCell(5).innerHTML=xmlDoc.getElementsByTagName("BanknoteSelling")[(i-1)].childNodes[0].nodeValue;
          //"<td>"+xmlDoc.getElementsByTagName("Isim")[i].childNodes[0].nodeValue+"</td>";

          }
          $('.sorted_table').sortable({
            containerSelector: 'table',
            itemPath: '> tbody',
            itemSelector: 'tr',
            placeholder: '<tr class="placeholder"/>'
          });
        }
    };
    var xmlDoc;
    xhr.open("GET",'http://www.tcmb.gov.tr/kurlar/today.xml', true);
    xhr.send();
