console.clear();

const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');

loginBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			signupBtn.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

signupBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			loginBtn.parentNode.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});



function My_Validate(){
 
	var uname_error , ufamily_error;
	uname_error = document.getElementById("un_error");
	ufamily_error = document.getElementById("uf_error");
	
	var UserName = document.forms["MyForm"]["User_Name"].value;
	var UserFamily = document.forms["MyForm"]["User_Family"].value;
	
	if ( UserName == "" && UserFamily == "" ){
	 uname_error.style.display = "block";
	 ufamily_error.style.display = "block";
	 uname_error.innerHTML ="لطفا نام وارد کنید";
	 ufamily_error.innerHTML ="لطفا فامیلی وارد کنید";
	 return false;
	}
	
	else if ( UserName != "" && UserFamily == "" ){
	 ufamily_error.style.display = "block";
	 uname_error.style.display = "none";
	 ufamily_error.innerHTML ="لطفا فامیلی وارد کنید";
	 uname_error.innerHTML ="";
	 return false;
	}
	
	else if ( UserName == "" && UserFamily != "" ){
	 ufamily_error.style.display = "none";
	 uname_error.style.display = "block";
	 uname_error.innerHTML ="لطفا نام وارد کنید";
	 ufamily_error.innerHTML ="";
	 return false;
	}
	
	else{
	 alert("همه چی درسته و فرم ارسال شد");
	}
	
   }