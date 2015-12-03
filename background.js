/** Developed By Alauddin Ansari
 ** wonder_a7@yahoo.co.in
 ** April 2015
 **/

var MyPort = null;

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type) {
        case "field_value":
            if(MyPort != null || MyPort != undefined){
                MyPort.postMessage(request.data);
            }
            else{
                console.log("Port not found!");
            }
        break;
    }
    return true;
});

chrome.runtime.onConnect.addListener(function(port) {
    if(port.name == "alan-dev"){
        MyPort = port;
        //console.log("Port Connected");
    	/*port.onMessage.addListener(function(msg) {
            alert("BG: "+msg.myProperty);
            port.postMessage({myProperty: "World"});
        });*/
    }
});

