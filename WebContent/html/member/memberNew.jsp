<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script type="text/javascript">
	$(document).ready(function(){
		
	});
	
	// [중복검사] 버튼에 클릭 이벤트
	function chkId(){
		var memId = $("#memId").val();
		
		//빈 값 확인
		if(isEmpty(memId)){
			alert("ID 값이 입력되지 않았습니다.");
			$("#memId").focus();
			$("#spMemId").show();
			return;
		}
		
		//유효성 검사 - 영어 소문자와 숫자로 구성. 3글자 이상 10글자 이하
		var regExp = /^[a-z0-9]{3,10}$/;
		if(!regExp.text(memId)){ 
			//형식이 맞지 않을 경우 
			alert("ID 값이  유효하지 않습니다.");
			$("#memId").focus();
			$("#spMemId").show();
			return;
		}
		
		//DB에서 중복검사 수행
		$.ajax({
			url : "~"
			,type : "post"
			,data : {"memId" : memId, "flag" : "CHKID"}
			,dataType : "json"
			,success : function(data){
				console.log(data);
				$("#spMemId").hide();
			}
			,error : function(xhr){
				console.log(xhr);
				alert("ID 중복 검사 중 오류가 발생했습니다.");
			}
		});
	}
</script>
</head>
<body>

</body>
</html>