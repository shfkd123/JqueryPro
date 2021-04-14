/**
 * 
 */


/**
 * 휴대폰 포맷
 * @param val
 * @returns
 */
  function formatHp(val){        
     // val : 010 1234 1234, 01012341234, 010 12341234
     // 01012341234, 010-1234-1234, 010-12341234 , 0101234-1234
     val = val.replaceAll("-", "").replaceAll(" ", "");
     
     //010-1234-1234 or 010-123-1234
     val = val.replace(/(\d{3})(\d{3,4})(\d{4})/, "$1-$2-$3");
     
     return val;
  }
 
  /**
   * 입력값 가져오기.
   * @param strKey
   * @returns value
   */
  function getValue(url, key) {
         var params = url.substr(url.indexOf("?") + 1); //"uesrName=아이유&userAge=29"
         params = params.split("&"); //["uesrName=아이유", "userAge=29"]
         for (var i = 0; i < params.length; i++){
             temp = params[i].split("="); // ["uesrName", "아이유"]
             if (temp[0] == key) {  // "uesrName"
                return value = decodeURI(temp[1]); // "아이유" (+ 한글 안깨지게)
             } else {
                return "";
             }
        }
     }
      
/**
 * 빈값 체크하기
 * @param val
 * @returns
 */  
   function isEmpty(val){
         if (val == "") return true; //빈값이면 true
         if (val == null) return true;
         if (val == undifined) return true; 
         
         val = jQuery.trim(val); 
         if (val.lenght == 0) return false; //빈값이 아니면 false
   }     
      
      
   function chkRegExp(val, type){
	   var min, max;
	   var regExp;
	   var result;
	   if(type == "userId"){
	      min = 5; max = 10;
	      regExp = /^[a-z][a-z0-9_]{5,10}$/;
	      result = "빈 칸 없이 5~10 글자. 영문 소문자로 시작. 영문 소문자, 숫자 사용 가능.";
	   } else if(type == "userPw"){
	      min = 8; max = 20;
	      regExp = /[a-z]+/ && /[A-Z]+/ && /[0-9]+/ && /[~`!@\#$%^&*\(\)_\-\=+\\|\[\{\]\};:\'\",<.>\/?]+/;
	      result = "빈 칸 없이 8~20 글자. 영문 소문자, 대문자, 숫자, 특수문자가 반드시 1글자씩 포함.";
	   } else if(type == "userName"){
	      min = 2; max = 5;
	      regExp = /^[가-힣]{2,5}$/;
	      result = "빈 칸 없이 한글 2~5 글자.";
	   }  else if(type == "userHp"){
	      min = "null"; max = "null";
	      regExp =/^(\d{3}-\d{3,4}-\d{4})|(\d{3}\d{3,4}\d{4})$/;
	      result = "";
	   } 
	   if(!val.match(regExp)) {
	      return false;
	   }
	   return true;
	}