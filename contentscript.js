/** Developed By Alauddin Ansari
 ** wonder_a7@yahoo.co.in
 ** April 2015
 **/

var port = chrome.runtime.connect({name: "alan-dev"});
//port.postMessage({myProperty: "Hello"});

port.onMessage.addListener(function(request) 
{
	var fld, vle;

	if(("click" in request) && request.click.field != "")
	{
		_a(request.click.field).click();
	}

	for(var f in request)
	{
		fld = _a(request[f].field);
		vle = request[f].value;
		//chng = request[f].change;

		if(fld != null && vle != undefined && vle != "")
		{
			fld.value = vle;

			/*if(chng != null && chng != undefined){
				fld.change();
			}*/
		}
	}
	
	if(("submit" in request) && request.submit.field != "")
	{
		_a(request.submit.field).click();
	}
	
	if(("scroll" in request) && request.scroll.field == true)
	{
		window.scrollTo(0,document.body.scrollHeight);
		_a(request.scroll.focus).focus();
	}

});


function _a(id)
{
	return document.getElementById(id);
}