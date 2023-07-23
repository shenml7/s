
function printLabel() {
	      const element = document.getElementById('myButton');
                element.disabled = true;
		  const labelText = document.getElementById('CopiesInput').value;
          const labelText1 = document.getElementById('CopiesInputz').value;
          const labelText2 = document.getElementById('CopiesInputx').value;
          const labelText3= document.getElementById('CopiesInputc').value;
          const labelText4 = document.getElementById('CopiesInputv').value;
          const labelText5 = document.getElementById('CopiesInputb').value;
          const labelText6 = document.getElementById('CopiesInputn').value;
          const labelText7 = document.getElementById('CopiesInputm').value;
          const petselect = document.getElementById('pet-select').value;
          var isChecked = document.getElementById("but").checked;
		  
		  
            var labelData = {
                libraryID: "6c24a1ec-1ac4-448d-a2e6-8652266f79a0",
                relativePath: petselect,
	            printer: "TSC TTP-244 Pro",
                copies:labelText,
				NamedDataSources:{
					"名":labelText1,
					"22":labelText2,
					"01":labelText3,
					"02":labelText4,
					"03":labelText5,
					"1":labelText6,
					"2":labelText7,
					"空":isChecked,
				}
            };

            var xhr = new XMLHttpRequest();
            xhr.open("POST", "http://shenml.xyz/Bartender/api/v1/print");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify(labelData));
			xhr.timeout = 5000;
            xhr.onload = function() {
              if (xhr.status === 200) {
                 $(".noti-layout-six__wrapper").css("background","#53d0cd");
                 $(".noti-layout-six__heading").text("打印成功");
                $('.noti-layout-six__hppns-img').attr('src', 'css/happiness.png');
	            $(".noti-layout-six__paragraph").css("color","##32afac");
                $('.cd-popup').addClass('is-visible');
				$("#CopiesInputx").val("");
				 element.disabled = false;
                 }
                 else {
                 $(".noti-layout-six__wrapper").css("background","#FF8E9F");
                 $(".noti-layout-six__heading").text("打印失败");
                $('.noti-layout-six__hppns-img').attr('src', 'css/sad.png');
	            $(".noti-layout-six__paragraph").css("color","#d87b8c");
                $('.cd-popup').addClass('is-visible');
				   element.disabled = false;
				   
               }
             };
			 xhr.ontimeout = function (e) {
                 $(".noti-layout-six__wrapper").css("background","#FF8E9F");
                 $(".noti-layout-six__heading").text("打印失败");
                $('.noti-layout-six__hppns-img').attr('src', 'css/sad.png');
	            $(".noti-layout-six__paragraph").css("color","#d87b8c");
                $('.cd-popup').addClass('is-visible');
			   element.disabled = false;
                 };
               
        }
		
function keyPress1(){
	if(event.keyCode==13) {
       CopiesInputz.select();
	   document.getElementById('dataSpan').style.display = 'block';
   }
}

function keyPress2(){
	if(event.keyCode==13) {
       CopiesInputx.select();
       document.getElementById('dataSpan').style.display = 'none';
   }
}

function keyPress3(){
	if(event.keyCode==13) {
       CopiesInputc.select();
   }
}

function keyPress4(){
   if(event.keyCode==13) {
       CopiesInputv.select();
   }
}
function keyPress5(){
   if(event.keyCode==13) {
       CopiesInputb.select();
   }
}

function keyPress6(){
   if(event.keyCode==13) {
       CopiesInputn.select();
   }
}
function keyPress7(){
   if(event.keyCode==13) {
       CopiesInputm.select();
   }
}

document.oncopy = function(){
        event.returnValue = false;
    }
    // 或者直接返回整个事件
    document.oncopy = function(){
        return false;
    }

function checkLawyerType() {
               
		var petselect = document.getElementById("pet-select").value;
		var wenben = document.getElementById("wenben");
		var wenben1 = document.getElementById("wenben1");
		var wenben2 = document.getElementById("wenben2");
		var wenben3 = document.getElementById("wenben3");
		var wenben4 = document.getElementById("wenben4");
		var wenben5 = document.getElementById("wenben5");
			
			if(petselect == "统名标签.btw"){
				location.reload();
			}
			if(petselect == "空白.btw"){
				wenben1.style.display = 'none'; 
				wenben2.style.display = 'none';
				wenben3.style.display = 'none';
				wenben4.style.display = 'none';
				wenben5.style.display = 'none';
			}
			if(petselect == "入库.btw"){
				var date = new Date();
                var Y = date.getFullYear();
                var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1):date.getMonth()+1);
                var D = (date.getDate()< 10 ? '0'+date.getDate():date.getDate());;
                document.getElementById('CopiesInputx').value= Y+M+D;
				wenben.innerHTML ="入库日期"
				wenben1.style.display = 'none'; 
				wenben2.style.display = 'none';
				wenben3.style.display = 'none';
				wenben4.style.display = 'none';
				wenben5.style.display = 'none';
			}
			if(petselect == "开包.btw"){
				wenben.innerHTML ="开包日期"
				wenben1.style.display = 'none'; 
				wenben2.style.display = 'none';
				wenben3.style.display = 'none';
				wenben4.style.display = 'none';
				wenben5.style.display = 'none';
			}
		};

















