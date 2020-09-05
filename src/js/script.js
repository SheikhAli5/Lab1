var e = document.getElementById('mail')
var t = document.getElementById('txt')
var r = document.getElementById('radio')
var er1 = document.getElementById('error1')
var er2 = document.getElementById('error2')
var er3 = document.getElementById('error3')
let radio = document.querySelectorAll('input[name="rating"]');
let x=0;
let y=0;
let j=0;
function btnClick()
        {	er1.style.cssText="display: none;"
        	er2.style.cssText="display: none;"
        	er3.style.cssText="display: none;"

        	function CheckEmail(mail)
				{
				var mailformat = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
				if(mail.match(mailformat))
					{
					x=1;
					}
				}
				CheckEmail(e.value);

			var radios = document.getElementsByName('rating');
			for (var i = 0, length = radios.length; i < length; i++)
			{
 				if (radios[i].checked)
 					{
 					j=i;
  					y=radios[i].value;
  					break;
 					}
			}

        	if (t.value ==='' || t.value.length <2 || t.value.length>100){
				er2.style.cssText="display: inline-block;"
				if (y===0) {
        			er3.style.cssText="display: inline-block;"
        		}
        		if (x!=1) {
					er1.style.cssText="display: inline-block;"
        		}
			}
        	else if (x!=1) {
				er1.style.cssText="display: inline-block;"
				if (y===0) {
        			er3.style.cssText="display: inline-block;"
        		}
        	}
        	else if (y===0) {
        		er3.style.cssText="display: inline-block;"
        	}
        	else{
        		var d = new Date()
        		let liLast = document.createElement('li');
            	var val = t.value+" "+e.value+" rating = "+y+" ( "+d.getHours()+":"+d.getMinutes()+")";
  				liLast.innerHTML = val;
  				ol.append(liLast);
  				e.value = '';
  				t.value = '';
  				x=0;
  				radios[j].checked = false;
  				y=0;

        		}

        }