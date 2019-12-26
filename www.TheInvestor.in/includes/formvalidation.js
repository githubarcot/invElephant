<!-- Hide From the old browsers

function DateValidate1(txtCtrl,val)  
{
	var ctrName = val;
//	alert (ctrName);		
	Remove_Spaces(txtCtrl);
	if(txtCtrl.value != "")
	{		
		var strarr = txtCtrl.value.split("/");
		var d = strarr[0];
		var m = strarr[1];
		var y = strarr[2];
		var len = strarr.length;
		var result = true;
		date =new Date();
		if(len > 3 || isNaN(d) || isNaN(m) || isNaN(y) || d<1 || m<1 || m>12 )
		{
			result = false;
		}

		if (m==1 || m==3 || m==5 || m==7 || m==8 || m==10 || m==12)
		{
			if(d>31 || d<=0)
			{
				result = false;
			}	
		}
		else if(m==2)
		{	
			if(y%4 ==0)
			{
				if(d >29 || d<1)
				{
					result = false;
				}
			}
			else
			{
				if(d >28 || d<1)
				{
					result = false;
				}
			}
		}
		else
		{	
			if(d >30 || d<=0)
			{
				result = false;
			}
		}	

		if(result == false)
		{
			alert("Please enter valid " + ctrName + ".");		
			txtCtrl.focus();
			txtCtrl.select();
			return false;		
		}
	}
}

function trim(str)
{
   return str.replace(/^\s+|\s+$/g,'');
}


function TextValidate(txtCtrl,val)
{
	var ctrName = val;	
	//Remove_Spaces(txtCtrl);
	if (trim(txtCtrl.value) == "")
	{
		alert("Please enter the "+ctrName +".");
		txtCtrl.focus();
		return false;		
	}
	/*if(txtCtrl.value.indexOf("'") > -1)
	{
		alert("Please Don't enter ' in " + ctrName + ".");		
		txtCtrl.focus();   	
		return false;		
	}*/			
}

//DummyValidate

function TextValidateDummy(txtCtrl,val)
{
	var ctrName = val;
	//Remove_Spaces(txtCtrl);
	if (trim(txtCtrl.value) == "")
	{
		//alert("Please enter the "+ctrName +".");
		txtCtrl.focus();
		return false;		
	}
	/*if(txtCtrl.value.indexOf("'") > -1)
	{
		alert("Please Don't enter ' in " + ctrName + ".");		
		txtCtrl.focus();   	
		return false;		
	}*/			
}
//To validate wether given date is in the form of dd/mm/yyyy
function DateFormatValidate(txtCtrl,val)
{

	var ctrName = val;
	//Remove_Spaces(txtCtrl);
	if(trim(txtCtrl.value) != "")
	{		
		var strarr = txtCtrl.value.split("/");
		/*
		var m = strarr[0];
		var d = strarr[1];
		var y = strarr[2];
		*/
		var m = strarr[1];
		var d = strarr[0];
		var y = strarr[2];
		//alert (y);		
		//alert (m);		
		//alert (d);						
		var len = strarr.length;
		date =new Date();
		if(len > 3 || isNaN(d) || isNaN(m) || isNaN(y) || d<1 || d>31 || m<1 || m>12 || y.length > 4 || y<date.getFullYear()-40)
		{
			alert("Please enter valid " + ctrName + ".");			
			txtCtrl.focus();
			txtCtrl.select();
			return false;
		}
	}
	else
	{
		alert("Please enter " + ctrName + ".");			
		txtCtrl.focus();
		txtCtrl.select();
		return false;	
	}
}
function DateFormatValidate1(txtCtrl,val)
{
	var ctrName = val;
	Remove_Spaces(txtCtrl);
	if(txtCtrl.value != "")
	{		
		var strarr = txtCtrl.value.split("-");
		/*
		var m = strarr[0];
		var d = strarr[1];
		var y = strarr[2];
		*/
		var m = strarr[1];
		var d = strarr[0];
		var y = strarr[2];
		//alert(y);		
		//alert(m);		
		//alert(d);						
		var len = strarr.length;
		date =new Date();
		if(len > 3 || isNaN(d) || isNaN(m) || isNaN(y) || d<1 || d>31 || m<1 || m>12 || y<date.getFullYear()-40)
		{
			alert("Please enter valid " + ctrName + ".");			
			txtCtrl.focus();
			txtCtrl.select();
			return false;
		}
	}
	else
	{
		alert("Please enter " + ctrName + ".");			
		txtCtrl.focus();
		txtCtrl.select();
		return false;	
	}
}

function DateFormateValidateCheck(txtCtrl,val)
{
	var ctrName = val;
	Remove_Spaces(txtCtrl);
	if(txtCtrl.value != "")
	{		
		var strarr = txtCtrl.value.split("/");
		var m = strarr[0];
		var d = strarr[1];
		var y = strarr[2];
		var len = strarr.length;
		date =new Date();
		if(len > 3 || isNaN(d) || isNaN(m) || isNaN(y) || d<1 || m<1 || m>12 || y<date.getFullYear()-40)
		{
			alert("Please enter valid " + ctrName + ".");			
			txtCtrl.focus();
			txtCtrl.select();
			return false;
		}
	}
}

/*
*	To find out wether given date is correct or not
*	Created on 05-Nov-2003
*/
function Checkdate(Lday, Lmonth, Lyear) 
{
	valid  = true;
	if(Lyear < 1950)
	{
		valid = false;
	}
	
	if(Lmonth > 12 || Lmonth < 1)
	{
		valid = false;
	}
	
	if(Lday < 1)
	{
		valid = false;
	}
	
	if( Lmonth == 2 )
	{
		if( (Lyear % 4) == 0 )
		{
			if(Lday > 29)
			{
				valid = false;
			}
		}
		else
		{
			if(Lday > 28 )
			{
				valid = false;
			}
		}
	}
	else if( Lmonth == 1 || Lmonth == 3 || Lmonth == 5 || Lmonth == 7 || Lmonth == 8 || Lmonth == 10 || Lmonth == 12)
	{
		if(Lday > 31)
		{
			valid = false;
		}
	}
	else
	{
		if(Lday > 30)
		{
			valid = false;
		}
	}

	if(valid == true)
	{
		return true;
	}
	else
	{
		alert ("Please enter valid date for Date of birth"+ Lday +"-"+ Lmonth +"-"+ Lyear);
		return false;
	}
}

//validating the date with current date
function DateValidate(txtCtrl,val) 
{
	var ctrName = val;
 	//Remove_Spaces(txtCtrl);
	if(txtCtrl.value != "")
	{		
		var strarr 	= txtCtrl.value.split("/");
 		var m   	= strarr[0];
		var y   	= strarr[1];
		var len 	= strarr.length;
		var result  = true;
		date 	    = new Date();
 		var year 	= date.getFullYear();
		var  checkdate	= (year+"").substring(2,4);
   		if(len != 2 ||   isNaN(m) || isNaN(y) ||  m<1 || m>12 ||  y < checkdate)
		{
			result = false;
		}
 		if(y==checkdate) {
			if(m<=date.getMonth()){
				result=false;
			}
		}
 		if(result == false)
		{
			alert("Please enter valid " + ctrName + ".");		
			txtCtrl.focus();
			txtCtrl.select();
			return false;		
		} 
	}
}

function LengthValidate(txtCtrl, val)
{
	Remove_Spaces(txtCtrl);	
	if(txtCtrl.value.length > val)
	{
		alert("The Length should not be greater than "+ val +" characters!");
		txtCtrl.focus();
		txtCtrl.select();		
		return false;		
	}
}

function TextAreaValidate(txtCtrl, val) 
{
	var ctrName	= val;
 	//Remove_Spaces(txtCtrl);	
	var str = trim(txtCtrl.value);
	if(str.length == 0)
	{
		alert("Please enter " + ctrName + ".");
		txtCtrl.focus();	   	
		return false;
	}		
	/*if(txtCtrl.value.indexOf("'") > -1)
	{
		alert("Please Don't enter ' in " + ctrName + ".");		
		txtCtrl.focus();   	
		return false;		
	}*/			
}

function TextAreaValidateDummy(txtCtrl, val) 
{
	var ctrName	= val;
 	//Remove_Spaces(txtCtrl);	
	var str = trim(txtCtrl.value);
	if(str.length == 0)
	{
		//alert("Please enter " + ctrName + ".");
		txtCtrl.focus();	   	
		return false;
	}		
	/*if(txtCtrl.value.indexOf("'") > -1)
	{
		//alert("Please Don't enter ' in " + ctrName + ".");		
		txtCtrl.focus();   	
		return false;		
	}	*/		
}


//-----------------------------------------------------------
function NumberValidate(txtCtrl, val) 
{
	var ctrName = val;
	Remove_Spaces(txtCtrl);
	if (txtCtrl.value == "" )
	{
		alert("Please enter " + ctrName + ".");
		txtCtrl.focus();	   	
		txtCtrl.select();
		return false;
	}
	if(isNaN(txtCtrl.value)) 
	{
		alert("Please enter numeric value for " + ctrName + ".");
		txtCtrl.focus();	   	
		txtCtrl.select();
		return false;
	}
}

function NumberValidateCheck(txtCtrl) 
{
	Remove_Spaces(txtCtrl);
	var fLength = txtCtrl.value.length;
	if (fLength == 0) 
	{
 		return false;
	}		

	if (txtCtrl.value == "" || isNaN(txtCtrl.value))
	{
		alert("The value " + txtCtrl.value + " is not a valid data.\n\r" +  
			"Enter numeric values !");		
		txtCtrl.focus();
		txtCtrl.select();
		return false;	
	}		
}

//-----------------------------------------
// Req field
/*function EmailValidate(txtCtrl, val) 
{
	var ctrName = val;
	if (txtCtrl.value.indexOf("@") < 1 ||txtCtrl.value.indexOf(".") < 0) 
	{
		alert("Please enter valid " + ctrName + ".\t\n eg: username@domainname.com");
		txtCtrl.focus();	   	
		txtCtrl.select();
		return false;
	}		
	if(txtCtrl.value.indexOf("'") > -1)
	{
		alert("Please Don't enter ' in " + ctrName + ".");		
		txtCtrl.focus();   	
		return false;		
	}			
}
*/
function EmailValidate(txtCtrl, val) 
{
	var ctrName = val;
	var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	Remove_Spaces(txtCtrl);
	if(txtCtrl.value == "")
	{
		alert("Please enter the " + ctrName + ".");		
		txtCtrl.focus();   	
		return false;		
	}	else if (!filter.test(txtCtrl.value)) 	{
		alert("Please enter a valid Email.\t\n eg: username@domainname.com");
		txtCtrl.focus();	   	
		txtCtrl.select();
		return false;
	}		
	if(txtCtrl.value.indexOf("'") > -1)
	{
		alert("Please Don't enter ' in " + ctrName + ".");		
		txtCtrl.focus();   	
		return false;		
	}			
}

function EmailValidateDummy(txtCtrl, val) 
{
	var ctrName = val;
	var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	Remove_Spaces(txtCtrl);
	if(txtCtrl.value == "")
	{
		//alert("Please enter the " + ctrName + ".");		
		//txtCtrl.value='';
		txtCtrl.focus();
		
		return false;		
	}	else if (!filter.test(txtCtrl.value)) 	{
		//alert("Please enter a valid Email.\t\n eg: username@domainname.com");
		//txtCtrl.value='';
		txtCtrl.focus();	   	
		txtCtrl.select();
		return false;
	}		
	if(txtCtrl.value.indexOf("'") > -1)
	{
		//alert("Please Don't enter ' in " + ctrName + ".");
		//txtCtrl.value='';
		txtCtrl.focus();   	
		return false;		
	}			
}

//-----------------------------------------
// Req field
function WebValidate(txtCtrl, val) 
{
	
	var ctrName = val;
	Remove_Spaces(txtCtrl);
 	if ((txtCtrl.value.indexOf(".") < 0) || (txtCtrl.value.indexOf("http://") < 0) ) 
	{
		alert("Please enter valid " + ctrName + ".\t\n eg: http://www.domainname.com");
		txtCtrl.focus();	   	
		txtCtrl.select();
		return false;
	}		
	if(txtCtrl.value.indexOf("'") > -1)
	{
		alert("Please Don't enter ' in " + ctrName + ".");		
		txtCtrl.focus();   	
		return false;		
	}			
}

function checkURL(val) {
	
//var urlregex = new RegExp("^((http||:\/\/www.|https:\/\/www.|ftp:\/\/www.|www.){1}([0-9A-Za-z]+\.)");
																						
	var urlregex = /^(((ht|f)tp(s?))\:\/\/)([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+\.)?(\/\S*)?$/ ;
		  if(urlregex.test(val.value))
		  {
			//alert(urlregex.test(val.value));
			//val.focus();
			//alert("Entered Correct one");
			return(true);
		  }
		  else{	
		  		val.focus();
				alert("Please Enter Valid url.\t\n eg: http://www.domainname.com");
				return(false);
			  }
	}


function checkURLdummy(val) {
		  //var urlregex = new RegExp("^(http:\/\/www.|https:\/\/www.|ftp:\/\/www.|www.){1}([0-9A-Za-z]+\.)");
		  
		  var urlregex = /^(((ht|f)tp(s?))\:\/\/)([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+\.)?(\/\S*)?$/ ;
		  if(urlregex.test(val.value))
		  {
			//alert(urlregex.test(val.value));
			val.focus();
			//alert("Entered Correct one");
			return(true);
		  }
		  else{	
		  		val.focus();
				//alert("Please Enter Valid URL");
				return(false);
			  }
	}

// Not req, but check format - use onblur
function EmailValidateCheck(txtCtrl) {
	var xlogus = txtCtrl.value.length;
	Remove_Spaces(txtCtrl);
	txtCtrl.value=txtCtrl.value.replace(/ \*/g,"");

	if (xlogus == 0) {
 		return false;
	}
	if (txtCtrl.value.indexOf("@") < 2 || txtCtrl.value.indexOf(".") < 2 || txtCtrl.value.indexOf(" ") > 0) {
		alert("Please enter a valid email.");
		txtCtrl.focus();
		return false;
	}		
	
	/*
	the below function is to verify & find out whether the @ character and "." are given with each other
	which denotes it is a invalid email id
	*/
	
	/*
		Find if the "." has atleast two characters after it
		if not we may decide it is Invalid Id
	*/

	//if (txtCtrl.value.length - txtCtrl.value.indexOf(".") > 2);

	//	alert (txtCtrl.value.length - txtCtrl.value.indexOf("."));
	if (txtCtrl.value.indexOf("@.") > -1 || (txtCtrl.value.length - txtCtrl.value.indexOf(".") <= 2))
	{
		alert("Please verify the Email Id");
		txtCtrl.focus();
		return false;
	}

	
	if(txtCtrl.value.indexOf("'") > -1){		
		alert("Please Don't enter ' ." );		
		txtCtrl.focus();   	
		return false;		
	}			
}


/*
// Not req, but check format - use onblur
function EmailValidateCheck(txtCtrl, val) 
{
	var xlogus = txtCtrl.value.length;
	if(!val)
		val = txtCtrl.name;
	if (xlogus == 0) 
	{
 		return false;
	}
	if (txtCtrl.value.indexOf("@") < 1 ||txtCtrl.value.indexOf(".") < 0) 
	{
		alert("Please enter a valid email id.");
		txtCtrl.focus();	
		txtCtrl.select();
		return false;
	}		
	if(txtCtrl.value.indexOf("'") > -1)
	{
		alert("Please Don't enter ' ." );		
		txtCtrl.focus();   	
		return false;		
	}			
}
*/

//-----------------------------------------
// Req
function PhoneValidate(txtCtrl,val) 
{
	var ctrName = val;
	var strarr = txtCtrl.value.split("-");
	var first = strarr[0];
	var last = strarr[1];
	Remove_Spaces(txtCtrl);
	if (txtCtrl.value.indexOf("-") < 3 || isNaN(first) || isNaN(last)|| txtCtrl.value.indexOf(".") != -1 || first.length < 3 || last.length < 4 ) 
	{
		alert("Please enter a valid phone number.");
		txtCtrl.focus();	   	
		return false;
	}		

	if(txtCtrl.value.indexOf("'") > -1)
	{
		alert("Please Don't enter ' in " + ctrName + ".");		
		txtCtrl.focus();   	
		return false;		
	}			
}


// Not req, but check format - use onblur
function PhoneValidateCheck(txtCtrl) 
{
	var xlogus = txtCtrl.value.length;
	if (xlogus == 0) 
	{
 		return false;
	}
	var strarr = txtCtrl.value.split("-");
	var first = strarr[0];
	var last = strarr[1];
    if(txtCtrl.value.indexOf("-") < 3 || isNaN(first) || isNaN(last)|| txtCtrl.value.indexOf(".") != -1 || first.length < 3 || last.length < 4 )
	{
		alert("Please enter a valid phone number.");
		txtCtrl.focus();	   	
		return false;
	}		
	if(txtCtrl.value.indexOf("'") > -1)
	{
		alert("Please Don't enter ' in " + ctrName + ".");		
		txtCtrl.focus();   	
		return false;		
	}			
}

 // 000 use onblur 
function ZeroValidate(txtCtrl , val)
{
		var xlogus = txtCtrl.value.length;
		if (xlogus == 0) 
		{
			return false;
		}
		 
	 if (NumberValidateCheck(txtCtrl, 'Quantity') == false) return false;
				
		var txtValue = txtCtrl.value;		

		if (txtValue == 0 || txtValue == 0.00)
		{
			alert('Zero value is not allowed for '+val);
			txtCtrl.focus();
			return false;	
		}
}

//-------------------------
// Req
function SelValidate(selCtrl) 
{
	if (selCtrl.value == "" || selCtrl.value == "0" || selCtrl.value == "-1" || selCtrl.value.indexOf("Please") != -1) 
	{
		alert("Please select an option in the list.");
		selCtrl.focus();	   	
		return false;
	}		
}

function SelectValidate(selCtrl,msg) 
{
	if (selCtrl.value == "" || selCtrl.value == "0" || selCtrl.value == "-1" || selCtrl.value.indexOf("Please") != -1) 
	{
		alert("Please select " + msg +".");
		selCtrl.focus();	   	
		return false;
	}		
}

function SelectValidateDummy(selCtrl,msg) 
{
	if (selCtrl.value == "" || selCtrl.value == "0" || selCtrl.value == "-1" || selCtrl.value.indexOf("Please") != -1) 
	{
		//alert("Please select " + msg +".");
		selCtrl.focus();	   	
		return false;
	}		
}

function optvalidatenew(frmName,rbGroupName,msg) {
	var radios = document[frmName].elements[rbGroupName];
	var itemchecked = false;
	for (var i=0; i <radios.length; i++) {
	  if (radios[i].checked) {
		 itemchecked = true;
		 break;
	  }
	 }
	 if(!itemchecked) {		
		alert("Please choose an option for "+msg+".");
		if(document[frmName].elements[rbGroupName][0].focus)
			document[frmName].elements[rbGroupName][0].focus();
		return false;
	}
}


function optvalidatenew_search(frmName,rbGroupName,msg) {
	var radios = document[frmName].elements[rbGroupName];
	var itemchecked = false;
	for (var i=0; i <radios.length; i++) {
	  if (radios[i].checked) {
		 itemchecked = true;
		 break;
	  }
	 }
	 if(!itemchecked) {		
		alert(msg);
		if(document[frmName].elements[rbGroupName][0].focus)
			document[frmName].elements[rbGroupName][0].focus();
		return false;
	}
}



function optvalidateDummy(frmName,rbGroupName,msg) {
	var radios = document[frmName].elements[rbGroupName];
	var itemchecked = false;
	for (var i=0; i <radios.length; i++) {
	  if (radios[i].checked) {
		 itemchecked = true;
		 break;
	  }
	 }
	 if(!itemchecked) {		
		//alert("Please choose an option for "+msg+".");
		if(document[frmName].elements[rbGroupName][0].focus)
			document[frmName].elements[rbGroupName][0].focus();
		return false;
	}
}

function OptValidate(optCtrl,msg) 
{
    var el = document.forms[0].elements;

	for(var i = 0 ; i < el.length ; ++i)
	{
		if(el[i].type == "radio")
		{
			var radiogroup = el[el[i].name]; // get the whole set of radio buttons.
			var itemchecked = false;
			for(var j = 0 ; j < radiogroup.length ; ++j) 
			{
				if(radiogroup[j].checked)
				{
				  itemchecked = true;
				  break;
				}
    		}
			if(!itemchecked) 
			{
				//alert("Please choose an option for "+el[i].name+".");
				alert("Please choose an option for "+msg+".");
				if(el[i].focus)
					el[i].focus();
				return false;
			}
	   	}
  	}
} // Function End

function CloseWindow() 
{
	window.close();
	window.opener.focus();
} 

function Remove_Spaces(txtCtrl)
{
  txtCtrl.value = txtCtrl.value.replace(/\r/g, " ");

  txtCtrl.value = txtCtrl.value.replace(/[^ A-Za-z0-9`~!@#\$%\^&\*\(\)-_=\+\\\|\]\[\}\{'";:\?\/\.>,<]/g, "");

  txtCtrl.value = txtCtrl.value.replace(/'/g, "");

  txtCtrl.value = txtCtrl.value.replace(/ +/g, " ");

  txtCtrl.value = txtCtrl.value.replace(/^\s/g, "");

  txtCtrl.value = txtCtrl.value.replace(/\s$/g, "");
  
  if (txtCtrl.value == ' ')
  {
	 txtCtrl.value = '';
   }
 
 }
//-->

function LeastPass(txtCtrl)
{
	
//	if (txtCtrl1.value.length <5)

}

function Comparepassword(txtCtrl1, txtCtrl2) 
{
	if (trim(txtCtrl1.value) != trim(txtCtrl2.value)) {
		alert("The new password and confirm password do not match");
		txtCtrl1.focus();	   	
		return false;
	}
	return true;
}

// Function for Compare Two passwords
function Comparetextboxes(txtCtrl1, txtCtrl2) 
{
	//Find length
	if(trim(txtCtrl1.value).length < 5)
	{
		alert("The Password should be atleast 5 characters !");
		txtCtrl1.focus();	
		return false;
	}
	// Find length
	if(trim(txtCtrl2.value).length <5)
	{
		alert("The Confirm Password should be atleast 5 characters !");
		txtCtrl2.focus();	
		return false;
	}		

	if (trim(txtCtrl1.value) != trim(txtCtrl2.value)) 
	{
		alert("The Password and Confirm Password does not match !");
		txtCtrl1.focus();	   	
		return false;
	}
}

function chkFile(frmName)	
{
	if(frmName.file.value != "")	
	{
		var strarr = frmName.file.value.split(".");
		var len = strarr.length;
		if(len != 2)
		{
			alert("Please check file name !");
			frmName.file.focus();
			frmName.file.select();
			return false;
		}
		var type = strarr[1];						
		if (type < 3) {							
			alert("Please check file format !");
			frmName.file.select();
			return 1;
		}						
	}		
}

function FileValidate(ctrl,msg)	
{
	if(ctrl.value != "")	
	{
		var strarr = ctrl.value.split(".");
		var len = strarr.length;
		if(len != 2)
		{
			alert("Please check file name !");
			ctrl.focus();
			ctrl.select();
			return false;
		}
		var type = strarr[1];						
 		if (type < 3) {							
			alert("Please check file format !");
			ctrl.select();
			return 1;
		}						
	}
	else
	{
		alert(msg);
		return false;
	}
}

// ----------------------Logu inserted on Feb 06, 2003, 11:21 GMT HRS 				
<!-- Begin
function checkLength(field, countfield, maxlimit) 
{
	if (field.value.length > maxlimit) // if too long...trim it!
		field.value = field.value.substring(0, maxlimit);
	// otherwise, update 'characters left' counter
	else
		countfield.value = maxlimit - field.value.length;
}
// End -->

// To check whether the minitues is Valid
// Jyothi - 4th June - 2003
function MinuteValidate(minitue)
{
	var mintueval = parseInt(minitue.value);
	
	if( mintueval > 59 || mintueval < 0)
	{
		alert("Please Enter valid Minutes");
		minitue.focus();
		minitue.select();
		return false;
	} 
}

// To check whether start time is less than end time
// Jyothi - 4th June - 2003
function TimeValidate(start_H, start_M, end_H, end_M)
{
	var s_hour = parseInt(start_H.value);
	var s_min  = parseInt(start_M.value);
	var e_hour = parseInt(end_H.value);
	var e_min  = parseInt(end_M.value);
	
	if ( s_hour > e_hour )
	{
		alert("Start time should be less than end time");
		end_H .focus();
		return false;
	}
	else if ( s_hour == e_hour )
	{
		if ( s_min > e_min )
		{
//			var str = "String1: " + s_hour + "String2: " + e_hour
			alert("Start time should be less than end time");
			end_M .focus();
			return false;
		}
		else if ( s_min == e_min )
		{
			alert("Start time should not be same");
			end_H.focus();
			return false;
		}
	}					
}

// ----------------------SAR inserted on December 30th , 2003------
<!-- Begin
//To compare the from date with to date
function Comparedate(fdate,tdate)
{
	var strarr = fdate.value.split("/");
	
	splitter=fdate.value.substr(2,1);
	strarr = fdate.value.split(splitter);	
	var d = strarr[1];
	var m = strarr[0];
	var y = strarr[2];

	splitter=tdate.value.substr(2,1);
	var strarr = tdate.value.split(splitter);
	var d1 = strarr[1];
	var m1 = strarr[0];
	var y1 = strarr[2];
	if( y == y1)
	{
		if(m == m1)
		{
			if(d > d1)
			{
				alert("From date exceeds To date");		
				tdate.focus();
				tdate.select();
				return false;
			}
		}
		else if (m > m1)
		{
			alert("From date exceeds To date");		
			tdate.focus();
			tdate.select();
			return false;
		}
	}	
	if(y > y1)				
	{
		alert("From date exceeds To date");		
		tdate.focus();
		tdate.select();
		return false;			
	}
}

function redirectpage(url_page)
{
	window.location.href= url_page;
}
function GoBack()
{
	window.history.back(-1);
}




function stripBlanks(fld) {
	var result = "";
	var c = 0;
	for (i=0; i<fld.length; i++) {
	  if (fld.charAt(i) != " " || c > 0) {
		result += fld.charAt(i);
		if (fld.charAt(i) != " ") c = result.length;
		}
	  }
	return result.substr(0,c);
}

// only characters or/and numbers
var numb = '0123456789';
var lwr = 'abcdefghijklmnopqrstuvwxyz';
var upr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var splchars = "&/.;-,_'"+'"'+" ";

function isValid(parm,val) {
  if (parm == "") return true;
  for (i=0; i<parm.length; i++) {
    if (val.indexOf(parm.charAt(i),0) == -1) return false;
  }
}

function isNum(parm) {return isValid(parm,numb);}
function isLower(parm) {return isValid(parm,lwr);}
function isUpper(parm) {return isValid(parm,upr);}
function isAlpha(parm) {return isValid(parm,lwr+upr);}
function isAlphanum(parm) {return isValid(parm,lwr+upr+numb);}
function isAlphanum_spl(parm) {return isValid(parm,lwr+upr+numb+splchars);}
function isDecimal(parm) {return isValid(parm,numb+'.');}

// test for one and only one occurrence of a given character in the input
function oneOnly(parm,chr,must) {
	var atPos = parm.indexOf(chr,0);
	if (atPos == -1) {return !must;}
	if (parm.indexOf(chr, atPos + 1) > - 1) {
	return false; 
	}
}

// checks if certain characters are adjacent to eachother
function adjacent(parm,chrs) {
	return(parm.indexOf(chrs,0) != -1);
}

// This function has three arguments. The first is the field we are testing, 
// the second is the character combination that is permitted and 
// the third is the characters from within that combination which are not allowed to appear outside of that combination.
function onlyAdjacent(parm,comb,chrs) {
	var a = parm.split(comb);
	var b = a.join('');
	for (i=0; i<parm.length; i++) {
		if (val.indexOf(parm.charAt(i),0) != -1) 
		return false;
  	}
}

function setOrder(parm,first,second) {
	var pos1 = parmField.indexOf(first,0);
	if (pos1 == -1) return false; // first char not found
	var pos2 = parmField.indexOf(second,pos1+1);
	if (pos2 == -1) return false; // second char doesn't follow first
}

function setDistance(parm,first,last,min,max) {
	var pos1 = first == '' ? 0 :
	parmField.indexOf(first,0);
	var pos2 = last == '' ? parmField.length - pos1 - 1 :
	parmField.indexOf(second,pos1+1);
	if (pos1 == -1) return false;
	if (pos2 < min || pos2 > max) 
	return false;
}

function endOption(fld,val) {
return fld.substring(fld.lastIndexOf(val)) == val;
}
function get_html_translation_table(table, quote_style) {
    // http://kevin.vanzonneveld.net
    // +   original by: Philip Peterson
    // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: noname
    // +   bugfixed by: Alex
    // +   bugfixed by: Marco
    // +   bugfixed by: madipta
    // +   improved by: KELAN
    // +   improved by: Brett Zamir (http://brettz9.blogspot.com)
    // %          note: It has been decided that we're not going to add global
    // %          note: dependencies to php.js. Meaning the constants are not
    // %          note: real constants, but strings instead. integers are also supported if someone
    // %          note: chooses to create the constants themselves.
    // *     example 1: get_html_translation_table('HTML_SPECIALCHARS');
    // *     returns 1: {'"': '&quot;', '&': '&amp;', '<': '&lt;', '>': '&gt;'}
    
    var entities = {}, histogram = {}, decimal = 0, symbol = '';
    var constMappingTable = {}, constMappingQuoteStyle = {};
    var useTable = {}, useQuoteStyle = {};
    
    // Translate arguments
    constMappingTable[0]      = 'HTML_SPECIALCHARS';
    constMappingTable[1]      = 'HTML_ENTITIES';
    constMappingQuoteStyle[0] = 'ENT_NOQUOTES';
    constMappingQuoteStyle[2] = 'ENT_COMPAT';
    constMappingQuoteStyle[3] = 'ENT_QUOTES';
 
    useTable     = !isNaN(table) ? constMappingTable[table] : table ? table.toUpperCase() : 'HTML_SPECIALCHARS';
    useQuoteStyle = !isNaN(quote_style) ? constMappingQuoteStyle[quote_style] : quote_style ? quote_style.toUpperCase() : 'ENT_COMPAT';
 
    if (useTable !== 'HTML_SPECIALCHARS' && useTable !== 'HTML_ENTITIES') {
        throw Error("Table: "+useTable+' not supported');
        // return false;
    }
 
    // ascii decimals for better compatibility
    entities['38'] = '&amp;';
    if (useQuoteStyle !== 'ENT_NOQUOTES') {
        entities['34'] = '&quot;';
    }
    if (useQuoteStyle === 'ENT_QUOTES') {
        entities['39'] = '&#039;';
    }
    entities['60'] = '&lt;';
    entities['62'] = '&gt;';
 
    if (useTable === 'HTML_ENTITIES') {
      entities['160'] = '&nbsp;';
      entities['161'] = '&iexcl;';
      entities['162'] = '&cent;';
      entities['163'] = '&pound;';
      entities['164'] = '&curren;';
      entities['165'] = '&yen;';
      entities['166'] = '&brvbar;';
      entities['167'] = '&sect;';
      entities['168'] = '&uml;';
      entities['169'] = '&copy;';
      entities['170'] = '&ordf;';
      entities['171'] = '&laquo;';
      entities['172'] = '&not;';
      entities['173'] = '&shy;';
      entities['174'] = '&reg;';
      entities['175'] = '&macr;';
      entities['176'] = '&deg;';
      entities['177'] = '&plusmn;';
      entities['178'] = '&sup2;';
      entities['179'] = '&sup3;';
      entities['180'] = '&acute;';
      entities['181'] = '&micro;';
      entities['182'] = '&para;';
      entities['183'] = '&middot;';
      entities['184'] = '&cedil;';
      entities['185'] = '&sup1;';
      entities['186'] = '&ordm;';
      entities['187'] = '&raquo;';
      entities['188'] = '&frac14;';
      entities['189'] = '&frac12;';
      entities['190'] = '&frac34;';
      entities['191'] = '&iquest;';
      entities['192'] = '&Agrave;';
      entities['193'] = '&Aacute;';
      entities['194'] = '&Acirc;';
      entities['195'] = '&Atilde;';
      entities['196'] = '&Auml;';
      entities['197'] = '&Aring;';
      entities['198'] = '&AElig;';
      entities['199'] = '&Ccedil;';
      entities['200'] = '&Egrave;';
      entities['201'] = '&Eacute;';
      entities['202'] = '&Ecirc;';
      entities['203'] = '&Euml;';
      entities['204'] = '&Igrave;';
      entities['205'] = '&Iacute;';
      entities['206'] = '&Icirc;';
      entities['207'] = '&Iuml;';
      entities['208'] = '&ETH;';
      entities['209'] = '&Ntilde;';
      entities['210'] = '&Ograve;';
      entities['211'] = '&Oacute;';
      entities['212'] = '&Ocirc;';
      entities['213'] = '&Otilde;';
      entities['214'] = '&Ouml;';
      entities['215'] = '&times;';
      entities['216'] = '&Oslash;';
      entities['217'] = '&Ugrave;';
      entities['218'] = '&Uacute;';
      entities['219'] = '&Ucirc;';
      entities['220'] = '&Uuml;';
      entities['221'] = '&Yacute;';
      entities['222'] = '&THORN;';
      entities['223'] = '&szlig;';
      entities['224'] = '&agrave;';
      entities['225'] = '&aacute;';
      entities['226'] = '&acirc;';
      entities['227'] = '&atilde;';
      entities['228'] = '&auml;';
      entities['229'] = '&aring;';
      entities['230'] = '&aelig;';
      entities['231'] = '&ccedil;';
      entities['232'] = '&egrave;';
      entities['233'] = '&eacute;';
      entities['234'] = '&ecirc;';
      entities['235'] = '&euml;';
      entities['236'] = '&igrave;';
      entities['237'] = '&iacute;';
      entities['238'] = '&icirc;';
      entities['239'] = '&iuml;';
      entities['240'] = '&eth;';
      entities['241'] = '&ntilde;';
      entities['242'] = '&ograve;';
      entities['243'] = '&oacute;';
      entities['244'] = '&ocirc;';
      entities['245'] = '&otilde;';
      entities['246'] = '&ouml;';
      entities['247'] = '&divide;';
      entities['248'] = '&oslash;';
      entities['249'] = '&ugrave;';
      entities['250'] = '&uacute;';
      entities['251'] = '&ucirc;';
      entities['252'] = '&uuml;';
      entities['253'] = '&yacute;';
      entities['254'] = '&thorn;';
      entities['255'] = '&yuml;';
    }
    
    // ascii decimals to real symbols
    for (decimal in entities) {
        symbol = String.fromCharCode(decimal);
        histogram[symbol] = entities[decimal];
    }
    
    return histogram;
} 
 
function html_entity_decode( string, quote_style ) {
    // http://kevin.vanzonneveld.net
    // +   original by: john (http://www.jd-tech.net)
    // +      input by: ger
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Onno Marsman
    // +   improved by: marc andreu
    // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // -    depends on: get_html_translation_table
    // *     example 1: html_entity_decode('Kevin &amp; van Zonneveld');
    // *     returns 1: 'Kevin & van Zonneveld'
    // *     example 2: html_entity_decode('&amp;lt;');
    // *     returns 2: '&lt;'
 
    var histogram = {}, symbol = '', tmp_str = '', entity = '';
    tmp_str = string.toString();
    
    if (false === (histogram = get_html_translation_table('HTML_ENTITIES', quote_style))) {
        return false;
    }
 
    // &amp; must be the last character when decoding!
    delete(histogram['&']);
    histogram['&'] = '&amp;';
 
    for (symbol in histogram) {
        entity = histogram[symbol];
        tmp_str = tmp_str.split(entity).join(symbol);
    }
    
    return tmp_str;
}
function utf8_decode ( str_data ) {
    // Converts a string with ISO-8859-1 characters encoded with UTF-8   to single-byte
    // ISO-8859-1
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_utf8_decode/
    // +       version: 805.821
    // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
    // +      input by: Aman Gupta
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: utf8_decode('Kevin van Zonneveld');
    // *     returns 1: 'Kevin van Zonneveld'

    var tmp_arr = [], i = ac = c = c1 = c2 = 0;

    while ( i < str_data.length ) {
        c = str_data.charCodeAt(i);
        if (c < 128) {
            tmp_arr[ac++] = String.fromCharCode(c); 
            i++;
        } else if ((c > 191) && (c < 224)) {
            c2 = str_data.charCodeAt(i+1);
            tmp_arr[ac++] = String.fromCharCode(((c & 31) << 6) | (c2 & 63));
            i += 2;
        } else {
            c2 = str_data.charCodeAt(i+1);
            c3 = str_data.charCodeAt(i+2);
            tmp_arr[ac++] = String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
            i += 3;
        }
    }
    
    return tmp_arr.join('');
}// 

// utf8_encode
function utf8_encode ( str_data ) {
    // Encodes an ISO-8859-1 string to UTF-8
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_utf8_encode/
    // +       version: 805.821
    // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)        
    // *     example 1: utf8_encode('Kevin van Zonneveld');
    // *     returns 1: 'Kevin van Zonneveld'

    str_data = str_data.replace(/\r\n/g,"\n");
    var tmp_arr = [], ac = 0;

    for (var n = 0; n < str_data.length; n++) {
        var c = str_data.charCodeAt(n);
        if (c < 128) {
            tmp_arr[ac++] = String.fromCharCode(c);
        } else if((c > 127) && (c < 2048)) {
            tmp_arr[ac++] = String.fromCharCode((c >> 6) | 192);
            tmp_arr[ac++] = String.fromCharCode((c & 63) | 128);
        } else {
            tmp_arr[ac++] = String.fromCharCode((c >> 12) | 224);
            tmp_arr[ac++] = String.fromCharCode(((c >> 6) & 63) | 128);
            tmp_arr[ac++] = String.fromCharCode((c & 63) | 128);
        }
    }
    
    return tmp_arr.join('');
}// 

function base64_encodejs( data ) {
    // Encodes data with MIME base64
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_base64_encode/
    // +       version: 805.821
    // +   original by: Tyler Akins (http://rumkin.com)
    // +   improved by: Bayron Guevara
    // +   improved by: Thunder.m
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)        
    // -    depends on: utf8_encode
    // *     example 1: base64_encode('Kevin van Zonneveld');
    // *     returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='

    // mozilla has this native
    // - but breaks in 2.0.0.12!
    //if (typeof window['atob'] == 'function') {
    //    return atob(data);
    //}
        
    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var o1, o2, o3, h1, h2, h3, h4, bits, i = ac = 0, enc="", tmp_arr = [];
    data = utf8_encode(data);
    
    do { // pack three octets into four hexets
        o1 = data.charCodeAt(i++);
        o2 = data.charCodeAt(i++);
        o3 = data.charCodeAt(i++);

        bits = o1<<16 | o2<<8 | o3;

        h1 = bits>>18 & 0x3f;
        h2 = bits>>12 & 0x3f;
        h3 = bits>>6 & 0x3f;
        h4 = bits & 0x3f;

        // use hexets to index into b64, and append result to encoded string
        tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
    } while (i < data.length);
    
    enc = tmp_arr.join('');
    
    switch( data.length % 3 ){
        case 1:
            enc = enc.slice(0, -2) + '==';
        break;
        case 2:
            enc = enc.slice(0, -1) + '=';
        break;
    }

    return enc;
}// 

function base64_decode( data ) {
    // Decodes data encoded with MIME base64
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_base64_decode/
    // +       version: 805.821
    // +   original by: Tyler Akins (http://rumkin.com)
    // +   improved by: Thunder.m
    // +      input by: Aman Gupta
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)    
    // -    depends on: utf8_decode
    // *     example 1: base64_decode('S2V2aW4gdmFuIFpvbm5ldmVsZA==');
    // *     returns 1: 'Kevin van Zonneveld'
    
    // mozilla has this native 
    // - but breaks in 2.0.0.12!
    //if (typeof window['btoa'] == 'function') {
    //    return btoa(data);
    //}
    
    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var o1, o2, o3, h1, h2, h3, h4, bits, i = ac = 0, dec = "", tmp_arr = [];

    do {  // unpack four hexets into three octets using index points in b64
        h1 = b64.indexOf(data.charAt(i++));
        h2 = b64.indexOf(data.charAt(i++));
        h3 = b64.indexOf(data.charAt(i++));
        h4 = b64.indexOf(data.charAt(i++));

        bits = h1<<18 | h2<<12 | h3<<6 | h4;

        o1 = bits>>16 & 0xff;
        o2 = bits>>8 & 0xff;
        o3 = bits & 0xff;

        if (h3 == 64) {
            tmp_arr[ac++] = String.fromCharCode(o1);
        } else if (h4 == 64) {
            tmp_arr[ac++] = String.fromCharCode(o1, o2);
        } else {
            tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
        }
    } while (i < data.length);
    
    dec = tmp_arr.join('');
    dec = utf8_decode(dec);
    
    return dec;
}// 

function str_replace(search, replace, subject) {
    // Replace all occurrences of the search string with the replacement string
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_str_replace/
    // +       version: 805.3114
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Gabriel Paderni
    // +   improved by: Philip Peterson
    // +   improved by: Simon Willison (http://simonwillison.net)
    // +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // -    depends on: is_array
    // *     example 1: str_replace(' ', '.', 'Kevin van Zonneveld');
    // *     returns 1: 'Kevin.van.Zonneveld'
    // *     example 2: str_replace(['{name}', 'l'], ['hello', 'm'], '{name}, lars');
    // *     returns 2: 'hemmo, mars'    
    
    var f = search, r = replace, s = subject;
    var ra = is_array(r), sa = is_array(s), f = [].concat(f), r = [].concat(r), i = (s = [].concat(s)).length;

    while (j = 0, i--) {
        while (s[i] = s[i].split(f[j]).join(ra ? r[j] || "" : r[0]), ++j in f){};
    };
     
    return sa ? s : s[0];
}// 

function strtr (str, from, to) {
    // Translates characters in str using given translation tables 
    //
    // version: 905.3122
    // discuss at: http://phpjs.org/functions/strtr
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +      input by: uestla
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: Alan C
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: $trans = {'hello' : 'hi', 'hi' : 'hello'};
    // *     example 1: strtr('hi all, I said hello', $trans)
    // *     returns 1: 'hello all, I said hi'
    // *     example 2: strtr('äaabaåccasdeöoo', 'äåö','aao');
    // *     returns 2: 'aaabaaccasdeooo'
    // *     example 3: strtr('ääääääää', 'ä', 'a');
    // *     returns 3: 'aaaaaaaa'
    // *     example 4: strtr('http', 'pthxyz','xyzpth');
    // *     returns 4: 'zyyx'
    // *     example 5: strtr('zyyx', 'pthxyz','xyzpth');
    // *     returns 5: 'http'
    var fr = '', i = 0, j = 0, lenStr = 0, lenFrom = 0;
    var tmpFrom = [];
    var tmpTo   = [];
    var ret = '';
    var match = false;
 
    // Received replace_pairs?
    // Convert to normal from->to chars
    if (typeof from === 'object') {
        for (fr in from) {
            tmpFrom.push(fr);
            tmpTo.push(from[fr]);
        }
 
        from = tmpFrom;
        to   = tmpTo;
    }
     
    // Walk through subject and replace chars when needed
    lenStr  = str.length;
    lenFrom = from.length;
    for (i = 0; i < lenStr; i++) {
        match = false;
        for (j = 0; j < lenFrom; j++) {
            if (str.substr(i, from[j].length) == from[j]) {
                match = true;
 
                // Fast forward
                i = (i + from[j].length)-1;
                 
                break;
            }
        }
         
        if (false !== match) {
            ret += to[j];
        } else {
            ret += str[i];
        }
    }
 
    return ret;
}

 function is_array( mixed_var ) {
    // Finds whether a variable is an array
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_is_array/
    // +       version: 804.1712
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Legaev Andrey
    // +   bugfixed by: Cord
    // *     example 1: is_array(['Kevin', 'van', 'Zonneveld']);
    // *     returns 1: true
    // *     example 2: is_array('Kevin van Zonneveld');
    // *     returns 2: false

    return ( mixed_var instanceof Array );
}// 

// urldecode
function urldecode( str ) {
    // Decodes URL-encoded string
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_urldecode/
    // +       version: 804.1715
    // +   original by: Philip Peterson
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: urldecode('Kevin+van+Zonneveld%21');
    // *     returns 1: 'Kevin van Zonneveld!'
    
    var ret = str;
       
    ret = ret.replace(/\+/g, '%20');
    ret = decodeURIComponent(ret);
    ret = ret.toString();

    return ret;
}


function urlencode( str ) {
    // URL-encodes string
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_urlencode/
    // +       version: 804.1715
    // +   original by: Philip Peterson
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: urlencode('Kevin van Zonneveld!');
    // *     returns 1: 'Kevin+van+Zonneveld%21'
                                     
    var ret = str;
    
    ret = ret.toString();
    ret = encodeURIComponent(ret);
    ret = ret.replace(/%20/g, '+');

    return ret;
}


function in_array (needle, haystack, argStrict) {
    // Checks if the given value exists in the array  
    // 
    // version: 1103.1210
    // discuss at: http://phpjs.org/functions/in_array    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: vlado houba
    // +   input by: Billy
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: in_array('van', ['Kevin', 'van', 'Zonneveld']);    // *     returns 1: true
    // *     example 2: in_array('vlado', {0: 'Kevin', vlado: 'van', 1: 'Zonneveld'});
    // *     returns 2: false
    // *     example 3: in_array(1, ['1', '2', '3']);
    // *     returns 3: true    // *     example 3: in_array(1, ['1', '2', '3'], false);
    // *     returns 3: true
    // *     example 4: in_array(1, ['1', '2', '3'], true);
    // *     returns 4: false
    var key = '',        strict = !! argStrict;
 
    if (strict) {
        for (key in haystack) {
            if (haystack[key] === needle) {                return true;
            }
        }
    } else {
        for (key in haystack) {            if (haystack[key] == needle) {
                return true;
            }
        }
    } 
    return false;
}

 // End -->
