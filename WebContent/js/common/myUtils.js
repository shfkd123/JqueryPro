/**
 * 
 */
function getValue(url, key){
		// http:localhost:9090/JqueryPro/html/jquery9/jquery9_submit_result.html?userID=mem001&userPW=dd&userName=%EC%95%84%EC%9D%B4%EC%9C%A0&userAge=22
		var idx = url.indexOf("?");
		if(idx > -1){
			url = url.substr(idx + 1);
			// url = "userName=아이유&userAge=25"
			
			url.split("&");
			// ["userName=아이유", "userAge=25"]
			
			for(var i=0; i<arr.length; i++)}{
				arr[i]; // "userName=아이유" 또는 "userName="--> 이렇게 값이 없는 경우도 생각해줘야
						// 한다.
				var tmp = arrp[i].split("=");
				// ["userName", "아이유"]
				if(tmp[0] == key){
					if(tmp.length > 1){
						return tmp[1];
					}else {
						return "";
					}
				}
			}
			
		}

}
//핸드폰 번호 포맷
function formatHp(val) {
	//val : 01012341234, 010-1234-1234, 010-12341234, 0101234-1234
	// 010 1234 1234, 010 12341234, 0101234 1234
	val = val.replaceAll("-", "").replaceAll(" ", ""); //-와 빈칸 없애기
	
	//010-123-1234, 010-1234-1234
	val = val.replace(/(\d{3})(\d{3,4})(\d{4})/, "$1-$2-$3");
	return val;
}

//
function isEmpty(val){
	//빈값이면  true 리턴
	//빈값이 아니면 false 리턴
	
	if(val == undefined) return true;
	if(val == null) return true;
	if(val == "null") return true;
	
	val = jQuery.trim(val);
	if(val.length == 0) return true;
	
	return false;
}

