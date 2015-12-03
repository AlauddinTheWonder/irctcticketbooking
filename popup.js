/** Developed By Alauddin Ansari
 ** wonder_a7@yahoo.co.in
 ** April 2015
 **/
 
var bkg;

chrome.runtime.getBackgroundPage(function(){
	bkg = chrome.extension.getBackgroundPage();
});

window.onload = function() 
{
	bkg = chrome.extension.getBackgroundPage();

	// Binding interface events
    _a("pg").onchange = showPGate;

    _a("toggle1").onclick = toggleThis;
    _a("toggle2").onclick = toggleThis;
    _a("toggle3").onclick = toggleThis;
    
    _a("fillsearchtrain").onclick = fillTrainData;
    _a("fillpasslist").onclick = fillPsgrData;
    _a("fillpgform").onclick = fillPGdata;

    _a("fill_automatic").onclick = fill_automatic;

    // Laoding data from local storage
    loadDataForFields();

    // Binding save events
	_a("save_train").onclick = saveTrainData;
	_a("save_psgr").onclick = savePsgrData;
    _a("save_pg").onclick = savePGData;

    // Binding fill data events
	_a("search_train").onclick = fillTrainData;
    _a("fill_psgr").onclick = fillPsgrData;
    _a("fill_pg").onclick = fillPGdata;
}





function loadDataForFields()
{
	chrome.storage.sync.get(null, function(items){
		//bkg.console.log(items);
		for(var i in items)
		{
			if(items[i] != undefined)
				_a(i).value = items[i];
		}
		showPGate(_a("pg").value);
	});
}

function fill_automatic()
{
	chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
	    var url = tabs[0].url;
	    bkg.console.log(url);
	    if(url != "" && url != undefined)
	    {
	    	if(
	    		url == "https://www.irctc.co.in/eticketing/home" || 
	    		url == "https://www.irctc.co.in/eticketing/journeySummary.jsf?cid=1" ||
	    		url == "https://www.irctc.co.in/eticketing/mainpage.jsf" ||
	    		url == "https://www.irctc.co.in/eticketing/mainpage.jsf?cid=1"
	    	){
	    		fillTrainData();
	    	}
	    	else if(
	    		url == "https://www.irctc.co.in/eticketing/trainbetweenstns.jsf" ||
	    		url == "https://www.irctc.co.in/eticketing/trainbetweenstns.jsf?cid=1"
	    	){
	    		fillPsgrData();
	    	}
	    	else if(url == "https://www.irctc.co.in/eticketing/jpInput.jsf?cid=1"){
	    		fillPGdata();
	    	}
	    }
	});
}

function saveTrainData()
{
	chrome.storage.sync.set({
		"stn_from":_a("stn_from").value,
		"stn_to": _a("stn_to").value,
		"date_jrn": _a("date_jrn").value
	});
}

function fillTrainData() 
{
	chrome.extension.sendMessage({
        type: "field_value",
        data: {
        	stn_from: {
	            field: "jpform:fromStation",
	            value: _a("stn_from").value
	        },
	        stn_to: {
	            field: "jpform:toStation",
	            value: _a("stn_to").value
	        },
	        date_jrn: {
	            field: "jpform:journeyDateInputDate",
	            value: _a("date_jrn").value
	        },
	        submit: {
	        	field: "jpform:jpsubmit"
	        }
        }
    });
}

function savePsgrData()
{
	chrome.storage.sync.set({
		"p_name_1": _a("p_name_1").value,
		"p_age_1": _a("p_age_1").value,
		"p_gender_1": _a("p_gender_1").value,
		"p_birth_1": _a("p_birth_1").value,
		"p_idtype_1": _a("p_idtype_1").value,
		"p_idnum_1": _a("p_idnum_1").value,
		
		"p_name_2": _a("p_name_2").value,
		"p_age_2": _a("p_age_2").value,
		"p_gender_2": _a("p_gender_2").value,
		"p_birth_2": _a("p_birth_2").value,
		"p_idtype_2": _a("p_idtype_2").value,
		"p_idnum_2": _a("p_idnum_2").value,

		"p_name_3": _a("p_name_3").value,
		"p_age_3": _a("p_age_3").value,
		"p_gender_3": _a("p_gender_3").value,
		"p_birth_3": _a("p_birth_3").value,
		"p_idtype_3": _a("p_idtype_3").value,
		"p_idnum_3": _a("p_idnum_3").value,

		"p_name_4": _a("p_name_4").value,
		"p_age_4": _a("p_age_4").value,
		"p_gender_4": _a("p_gender_4").value,
		"p_birth_4": _a("p_birth_4").value,
		"p_idtype_4": _a("p_idtype_4").value,
		"p_idnum_4": _a("p_idnum_4").value,

		"p_name_5": _a("p_name_5").value,
		"p_age_5": _a("p_age_5").value,
		"p_gender_5": _a("p_gender_5").value,
		"p_birth_5": _a("p_birth_5").value,
		"p_idtype_5": _a("p_idtype_5").value,
		"p_idnum_5": _a("p_idnum_5").value,

		"p_name_6": _a("p_name_6").value,
		"p_age_6": _a("p_age_6").value,
		"p_gender_6": _a("p_gender_6").value,
		"p_birth_6": _a("p_birth_6").value,
		"p_idtype_6": _a("p_idtype_6").value,
		"p_idnum_6": _a("p_idnum_6").value
	});
}

function fillPsgrData() 
{
	chrome.extension.sendMessage({
        type: "field_value",
        data: {
        	p_name_1: {
	            field: "addPassengerForm:psdetail:0:psgnName",
	            value: _a("p_name_1").value
	        },
	        p_age_1: {
	            field: "addPassengerForm:psdetail:0:psgnAge",
	            value: _a("p_age_1").value
	        },
	        p_gender_1: {
	            field: "addPassengerForm:psdetail:0:psgnGender",
	            value: _a("p_gender_1").value
	        },
	        p_birth_1: {
	            field: "addPassengerForm:psdetail:0:berthChoice",
	            value: _a("p_birth_1").value
	        },
	        p_idtype_1: {
	            field: "addPassengerForm:psdetail:0:idCardType",
	            value: _a("p_idtype_1").value
	        },
	        p_idnum_1: {
	            field: "addPassengerForm:psdetail:0:idCardNumber",
	            value: _a("p_idnum_1").value
	        },
	        p_adhar_1: {
	            field: "addPassengerForm:psdetail:0:aadhaarCardNumber",
	            value: _a("p_idnum_1").value
	        },
	        
	        p_name_2: {
	            field: "addPassengerForm:psdetail:1:psgnName",
	            value: _a("p_name_2").value
	        },
	        p_age_2: {
	            field: "addPassengerForm:psdetail:1:psgnAge",
	            value: _a("p_age_2").value
	        },
	        p_gender_2: {
	            field: "addPassengerForm:psdetail:1:psgnGender",
	            value: _a("p_gender_2").value
	        },
	        p_birth_2: {
	            field: "addPassengerForm:psdetail:1:berthChoice",
	            value: _a("p_birth_2").value
	        },
	        p_idtype_2: {
	            field: "addPassengerForm:psdetail:1:idCardType",
	            value: _a("p_idtype_2").value
	        },
	        p_idnum_2: {
	            field: "addPassengerForm:psdetail:1:idCardNumber",
	            value: _a("p_idnum_2").value
	        },
	        p_adhar_2: {
	            field: "addPassengerForm:psdetail:1:aadhaarCardNumber",
	            value: _a("p_idnum_2").value
	        },

	        p_name_3: {
	            field: "addPassengerForm:psdetail:2:psgnName",
	            value: _a("p_name_3").value
	        },
	        p_age_3: {
	            field: "addPassengerForm:psdetail:2:psgnAge",
	            value: _a("p_age_3").value
	        },
	        p_gender_3: {
	            field: "addPassengerForm:psdetail:2:psgnGender",
	            value: _a("p_gender_3").value
	        },
	        p_birth_3: {
	            field: "addPassengerForm:psdetail:2:berthChoice",
	            value: _a("p_birth_3").value
	        },
	        p_idtype_3: {
	            field: "addPassengerForm:psdetail:2:idCardType",
	            value: _a("p_idtype_3").value
	        },
	        p_idnum_3: {
	            field: "addPassengerForm:psdetail:2:idCardNumber",
	            value: _a("p_idnum_3").value
	        },
	        p_adhar_3: {
	            field: "addPassengerForm:psdetail:2:aadhaarCardNumber",
	            value: _a("p_idnum_3").value
	        },

	        p_name_4: {
	            field: "addPassengerForm:psdetail:3:psgnName",
	            value: _a("p_name_4").value
	        },
	        p_age_4: {
	            field: "addPassengerForm:psdetail:3:psgnAge",
	            value: _a("p_age_4").value
	        },
	        p_gender_4: {
	            field: "addPassengerForm:psdetail:3:psgnGender",
	            value: _a("p_gender_4").value
	        },
	        p_birth_4: {
	            field: "addPassengerForm:psdetail:3:berthChoice",
	            value: _a("p_birth_4").value
	        },
	        p_idtype_4: {
	            field: "addPassengerForm:psdetail:3:idCardType",
	            value: _a("p_idtype_4").value
	        },
	        p_idnum_4: {
	            field: "addPassengerForm:psdetail:3:idCardNumber",
	            value: _a("p_idnum_4").value
	        },
	        p_adhar_4: {
	            field: "addPassengerForm:psdetail:3:aadhaarCardNumber",
	            value: _a("p_idnum_4").value
	        },

	        p_name_5: {
	            field: "addPassengerForm:psdetail:4:psgnName",
	            value: _a("p_name_5").value
	        },
	        p_age_5: {
	            field: "addPassengerForm:psdetail:4:psgnAge",
	            value: _a("p_age_5").value
	        },
	        p_gender_5: {
	            field: "addPassengerForm:psdetail:4:psgnGender",
	            value: _a("p_gender_5").value
	        },
	        p_birth_5: {
	            field: "addPassengerForm:psdetail:4:berthChoice",
	            value: _a("p_birth_5").value
	        },
	        p_idtype_5: {
	            field: "addPassengerForm:psdetail:4:idCardType",
	            value: _a("p_idtype_5").value
	        },
	        p_idnum_5: {
	            field: "addPassengerForm:psdetail:4:idCardNumber",
	            value: _a("p_idnum_5").value
	        },
	        p_adhar_5: {
	            field: "addPassengerForm:psdetail:4:aadhaarCardNumber",
	            value: _a("p_idnum_5").value
	        },

	        p_name_6: {
	            field: "addPassengerForm:psdetail:5:psgnName",
	            value: _a("p_name_6").value
	        },
	        p_age_6: {
	            field: "addPassengerForm:psdetail:5:psgnAge",
	            value: _a("p_age_6").value
	        },
	        p_gender_6: {
	            field: "addPassengerForm:psdetail:5:psgnGender",
	            value: _a("p_gender_6").value
	        },
	        p_birth_6: {
	            field: "addPassengerForm:psdetail:5:berthChoice",
	            value: _a("p_birth_6").value
	        },
	        p_idtype_6: {
	            field: "addPassengerForm:psdetail:5:idCardType",
	            value: _a("p_idtype_6").value
	        },
	        p_idnum_6: {
	            field: "addPassengerForm:psdetail:5:idCardNumber",
	            value: _a("p_idnum_6").value
	        },
	        p_adhar_6: {
	            field: "addPassengerForm:psdetail:5:aadhaarCardNumber",
	            value: _a("p_idnum_6").value
	        },

	        scroll: {
	        	field: true,
	        	focus: "j_captcha"
	        }
        }
    });
	
}

function savePGData()
{
	chrome.storage.sync.set({
		"pg":_a("pg").value,
		"NB_BANKS": _a("NB_BANKS").value,
		"CC_BANKS": _a("CC_BANKS").value
	});
}

function fillPGdata() 
{
	var pg_value = _a("pg").value;
	
	var pg_field;
	var bank_field;
	var bank_value;

	var data = {};

	if(pg_value == "NB"){
		pg_field = "jpBook:payOption:0";
		bank_field = "jpBook:bankINBList";
		bank_value = _a("NB_BANKS").value;
		
		data.submit = {field: "validate"}
	}
	else if(pg_value = "CC"){
		pg_field = "jpBook:payOption:1";
		bank_field = "jpBook:bankPGList";
		bank_value = _a("CC_BANKS").value;

		data.scroll = {
	        	field: true,
	        	focus: "j_captcha"
	        }
	}

	data.click = {
	            field: pg_field,
	            value: ""
	        };
	data.paygate = {
	        	field: bank_field,
	        	value: bank_value,
	        	change: true
	        };

	chrome.extension.sendMessage({
        type: "field_value",
        data: data
    });
}


function showPGate(e)
{
	var pg_cont = document.getElementsByClassName('payment_containers');
	for(var p=0; p<pg_cont.length; p++)
	{
		pg_cont[p].style.display = 'none';
	}
	var cName = (typeof(e) == "object") ? e.target.value : e;
	_a('cont_'+cName).style.display = 'block';
}

function toggleThis(event)
{
	var h = event.target.href.split("#")[1];
	var ele = _a(h);
	if(ele.className == 'hide')
		ele.className = 'show';
	else
		ele.className = 'hide';

	return false;
}

function _a(id)
{
	return document.getElementById(id);
}