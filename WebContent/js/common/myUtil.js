/**
 * 
 */
// strUrl => http://localhost:9090/JqueryPro/html/jqeury9/jquery9_submit.html
//strKey => "userId"
function getValue(strUrl, strKey){
   var val ="";
   //strUrl 에서 strKey에 해당하는 값을  추출해서
   val = "~";
   return val;
}

function isEmpty(val){
	//val이 빈값이거나 null이거나 undefined이거나  " "
	
	return true;
	
	//return false;
	
}

function chkRegExp(val, type){
	
}

//어떤 값을 형식에 맞게끔 바꿔주는 함수
function format(val, type){
//	type == "hpno" 타입이 핸드폰번호이면
//		var 010-1234-1234  형식을 이렇게 만든다.
	
	if(type == "hpno") {
		val = val.replaceAll("-", "").replaceAll(" ", ""); // 우선 -랑 빈칸을 다 없앤다.
		val = val.replace(/(\d{3})(\d{3,4})(\d{4})/, "$1-$2-$3"); //(1번파라미터)(2번파라미터)(3번파라미터)
		val = 010-1234-1234; //이런모양으로 세팅 후 --> 정규식 사용
		
		return val; //val 리턴

		/*
		//날짜도 마찬가지 
		// 2020/04/08
		val.replace(/(\d{3})(\d{3,4})(\d{4})/, "$1/$2/$3");
		// 2020-04-08
		val.replace(/(\d{3})(\d{3,4})(\d{4})/, "$1-$2-$3");
		// 2020년04월08일
		val.replace(/(\d{3})(\d{3,4})(\d{4})/, "$1년$2월$3일");
		//하지만 날짜는 주로 디비에서 포맷팅을 함. 
		*/
	}
}