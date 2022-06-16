function checkName(name){
	var symb="абвгдеёжзийклмнопрстуфхцчшщьыъэюя-"
	var f_check=true;
	
	for (j=0; j<name.length; j++) {
		if (symb.indexOf(name.toLowerCase().charAt(j))==-1){
			f_check = false;
			}
		}
	
	return f_check;
}

function checkDate(date){
	re = /^((0[1-9])|(1[0-9])|(2[0-9])|(3[0-1]))\.((0[1-9])|(1[0-2]))\.((19\d{2})|(200\d)|(201[0-7]))$/g;
	var f_check=false;
	if (re.test(date)) {
		a = date.split(".");
		//alert(Number(a[1]));
		if (a[1] == "04" || a[1] == "06" || a[1] == "09" || a[1] == "11") {
			if (Number(a[0]) < 31) {
				f_check = true;
			}
		} else if (a[1] == "02") {
			if (Number(a[0]) < 29) {
				f_check = true;
			}
		} else f_check = true;
		//f_check = true;	
	}
	return f_check;
}

function checkMail(mail){
	re = /^[0-9a-z_\-\.]{1,}@[0-9a-z]{1,}\.[a-z]{2,6}$/i;
	var f_check=false;
	
	if (re.test(mail)) {
		f_check = true;
	}
	return f_check;
}

function calculate(){
	div1=document.getElementById("ln1");
	div2=document.getElementById("fn1");
	div3=document.getElementById("sn1");
	div4=document.getElementById("dt1");
	div5=document.getElementById("ml1");
	
	ln=document.getElementById("lastName").value;
	c1 = false;
	fn=document.getElementById("firstName").value;
	c2 = false;
	sn=document.getElementById("secondName").value;
	c3 = false;
	ml = document.getElementById("mail").value;
	c4 = false;
	dt = document.getElementById("date").value;
	c5 = false;
	
	if (checkName(ln)) {
		div1.innerHTML = "<font color='#0f0'>Данные введены верно</font>";
		document.getElementById("lastName").style.border = "2px solid rgb(0, 255, 0)";
		c1 = true;
	} else {
		div1.innerHTML = "<font color='#f00'>Данные введены неверно</font>";
		document.getElementById("lastName").style.border = "2px solid rgb(255, 0, 0)";
		c1 = false
	}

	if ((ln == null) || (ln.length == 0)) {
		div1.innerHTML = "Пустое поле";
		document.getElementById("lastName").style.border = "2px solid rgb(255, 0, 0)";
		c1 = false
	}
	
	if (checkName(fn)) {
		div2.innerHTML = "<font color='#0f0'>Данные введены верно</font>";
		document.getElementById("firstName").style.border = "2px solid rgb(0, 255, 0)";
		c2 = true;
	} else {
		div2.innerHTML = "<font color='#f00'>Данные введены неверно</font>";
		document.getElementById("firstName").style.border = "2px solid rgb(255, 0, 0)";
		c2 = false;
	}
	
	if ((fn == null) || (fn.length == 0)) {
		div2.innerHTML = "Пустое поле";
		document.getElementById("firstName").style.border = "2px solid rgb(255, 0, 0)";
		c2 = false;
	}
	
	if (checkName(sn)) {
		div3.innerHTML = "<font color='#0f0'>Данные введены верно</font>";
		document.getElementById("secondName").style.border = "2px solid rgb(0, 255, 0)";
		c3 = true;
	} else {
		div3.innerHTML = "<font color='#f00'>Данные введены неверно</font>";
		document.getElementById("secondName").style.border = "2px solid rgb(255, 0, 0)";
		c3 = false;
	}
	
	if ((sn == null) || (sn.length == 0)) {
		div3.innerHTML = "Пустое поле";
		document.getElementById("secondName").style.border = "2px solid rgb(255, 0, 0)";
		c3 = false;
	}
	
	if (checkDate(dt)) {
		div4.innerHTML = "<font color='#0f0'>Данные введены верно</font>";
		document.getElementById("date").style.border = "2px solid rgb(0, 255, 0)";
		c4 = true;
	} else {
		div4.innerHTML = "<font color='#f00'>Данные введены неверно</font>";
		document.getElementById("date").style.border = "2px solid rgb(255, 0, 0)";
		c4=false;
	}
	if ((dt == null) || (dt.length == 0)) {
		div4.innerHTML = "Пустое поле";
		document.getElementById("date").style.border = "2px solid rgb(255, 0, 0)";
		c4 = false;
	}
	
	if (checkMail(ml)) {
		div5.innerHTML = "<font color='#0f0'>Данные введены верно</font>";
		document.getElementById("mail").style.border = "2px solid rgb(0, 255, 0)";
		c5 = true;
	} else {
		div5.innerHTML = "<font color='#f00'>Данные введены неверно</font>";
		document.getElementById("mail").style.border = "2px solid rgb(255, 0, 0)";
		c5 = false;
	}
	if ((ml == null) || (ml.length == 0)) {
		div5.innerHTML = "Пустое поле";
		document.getElementById("mail").style.border = "2px solid rgb(255, 0, 0)";
		c5 = false;
	}
	
	if (c1 == true && c2 == true && c3 == true && c4 == true && c5 == true) {
		alert("Вы успешно зарегистрированы!");
		location.reload();
	}
}