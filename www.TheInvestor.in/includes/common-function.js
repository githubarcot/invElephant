// JavaScript Document
var admin_folder_default = 'admin';
function makeObject(){
	var x;
	if (window.ActiveXObject) {
		x = new ActiveXObject("Microsoft.XMLHTTP");
	}else if (window.XMLHttpRequest) {
		x = new XMLHttpRequest();
	}
	return x;
}

function  checkEnterLogin(e){ //e is event object passed from function invocation
	var characterCode ;//literal character code will be stored in this variable	
	if(e && e.which){ //if which property of event object is supported (NN4)
	e = e;
	characterCode = e.which; //character code is contained in NN4's which property
	}
	else{
	//e = event
	characterCode = e.keyCode; //character code is contained in IE's keyCode property
	}	
	if(characterCode == 13){ //if generated character code is equal to ascii 13 (if enter key)
		userLoginValidate();			
	}
}

function joinUsValidate() {
	var form = document.form1;
	if(TextValidate(form.name,"Name")==false) { return false;}
	if(TextValidate(form.phoneno,"Phone / Mobile No")==false) { return false;}
	if(TextValidate(form.email,"Email")==false) { return false;}
	if(EmailValidate(form.email,"Email")==false) { return false;}	
	if(TextValidate(form.city,"City")==false) { return false;}
	if(TextValidate(form.postal,"Zip/Postal Code")==false) { return false;}	
	if(SelectValidate(form.contactcountry,"Country")==false) { return false;}	
	if(TextValidate(form.howdid,"How did you find this site?")==false) { return false;}	
	if(TextAreaValidate(form.requirements,"Your Comments")==false) { return false;	}
	if(trim(form.filepc.value)!=""){
		var filename = form.filepc.value.split(".");
		var len = filename.length-1;
		var file_ext = filename[len];
		file_ext = file_ext.toLowerCase(); 
		if(file_ext!="pdf" && file_ext!="doc" && file_ext!="rtf") {
		  alert("Please select a valid file of pdf, doc or rtf formats");
		  form.filepc.focus();
		  return false;
		}  
	}else {
		  alert("Please select a file");
		  form.filepc.focus();
		  return false;
	}
	if(TextValidate(form.security_code,"Security Code")==false) { return false;}
	if(captcha_code_checkdummy(document.form1.security_code.value)==false) return false;
	form.submit();
}

function ContactValidate() {
	var form = document.form1;
	if(TextValidate(form.name,"Name")==false) { return false;}
	if(TextValidate(form.email,"Email")==false) { return false;}
	if(EmailValidate(form.email,"Email")==false) { return false;}	
	if(TextValidate(form.phoneno,"Phone / Mobile No")==false) { return false;}
	if(TextValidate(form.city,"City")==false) { return false;}
	if(TextValidate(form.company,"Company / Organization")==false) { return false;}		
	if(SelectValidate(form.country,"Country")==false) { return false;}
	if(checkURL(form.websireadd)==false) { return false;}
	if(TextValidate(form.howdid,"How did you find this site?")==false) { return false;}	
	
	var interest= document.forms[0].foo1;
	var interest_text = ""
	for (i=0;i<interest.length;++ i)	{
		if (interest[i].checked)	{
			if(interest_text=="")	{
				interest_text=interest[i].value;
			}else{
				interest_text=interest_text +", " + interest[i].value;
			}
		}
	}
	if(interest_text=="") {
		alert("Please choose an option for Services Interested In");
		return false;
	}else {
		form.foo2.value = 	interest_text;	
	}
	
	if(TextAreaValidate(form.requirements,"Your Requirement")==false) { return false;	}
	if(trim(form.filepc.value)!=""){
		var filename = form.filepc.value.split(".");
		var len = filename.length-1;
		var file_ext = filename[len];
		file_ext = file_ext.toLowerCase(); 
		if(file_ext!="pdf" && file_ext!="doc" && file_ext!="rtf") {
		  alert("Please select a valid file of pdf, doc or rtf formats");
		  form.filepc.focus();
		  return false;
		}  
	}else {
		  alert("Please select a file");
		  form.filepc.focus();
		  return false;
	}
	if(TextValidate(form.security_code,"Security Code")==false) { return false;}
	if(captcha_code_checkdummy(document.form1.security_code.value)==false) return false;
	form.submit();
}


function captcha_code_checkdummy(textval){
	//var textval = document.contactForm.security_code.value;				
	var xmlhttp1 = makeObject();
	var url = "refresh_captcha.php?text="+textval;			
	xmlhttp1.open('GET', url, true);
	xmlhttp1.onreadystatechange = function() {				
		if(xmlhttp1.readyState == 4 && xmlhttp1.status == 200) {					
			var answer = xmlhttp1.responseText;							
			if(answer=="1"){					
				document.form1.submit();
				return true;
			}else {
				document.form1.security_code.focus();
				//document.getElementById("captcha_div").innerHTML = answer ;
				//document.getElementById("security_code").focus();				
				alert("The entered captcha code is incorrect");				
				return false;
			}
		}
	}
	xmlhttp1.send(null);
	return false;
}

function ajax_email_phone_display(){
	//var textval = document.contactForm.security_code.value;				
	var xmlhttp1 = makeObject();
	var url = "ajax_email_phone.php?";			
	xmlhttp1.open('GET', url, true);
	xmlhttp1.onreadystatechange = function() {				
		if(xmlhttp1.readyState == 4 && xmlhttp1.status == 200) {					
			var answer = xmlhttp1.responseText;							
			document.getElementById("email_phone").innerHTML = answer;
		}
	}
	xmlhttp1.send(null);
	return false;
}


	
/* --------------------------------------------------------------------------------------------- */
