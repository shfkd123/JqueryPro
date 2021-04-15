/**
 * 
 */
$(document).ready(function(){

	//1. 직업코드 세팅
	initJobSelect();
	//2. 기념일코드 세팅
	initMemorialSelect();
	//3. 광고메일 수신 여부 기본값 세팅 - 미수신
	//$("#recvEmailYnN").prop("checked", true);
	//4. 취미코드 세팅 (체크박스)
	initHobbyCheck();
	
	//5. 우편번호 찾기 화면-시 세팅
	initCitySelect();

function initJobSelect(){
//직업코드 조회해서 세팅하기
	$.ajax({
		url : "/JqueryPro/CodeServlet",
		type : "post",
		data : {
			"groupCode" : 'A02'
		} // 직업코드 조회
		,
		dataType : "json",
		success : function(data) {
			console.log(data);

			makeJobSelect(data);

		}
	,error : function(xhr){
		console.log(xhr);
		alert("오류발생");
	}
	
	});
	
}	
	
function makeJobSelect(data){
/* 	//방법1) 
	var strHtml = "";
	$("#userJob").html(strHtml); // <select>
	
	//방법2)
	$("#userJob").empty();
	$("#userJob").append(ele1);
	$("#userJob").append(ele2); */
	
	var strHtml = "";
	for (var i = 0; i < data.length; i++) {
		strHtml += '<option value="' + data[i].value + '">' + data[i].name + '</option>';
	//만들어야 하는 모양
	//<option value="07">군인</option>

	//가지고 오는 데이터 형태 	
	//	[
	//	 {"value" : "07", "name" : "군인"}
	//	 ,{"value" : "08", "name" : "전업주부"}
	//	]	
	}
	$("#userJob").html(strHtml); 
	
}

function initMemorialSelect(){	
//기념일 조회해서 세팅하기
	$.ajax({
		url : "/JqueryPro/CodeServlet"
			,type : "post"
				,data : {"groupCode" : 'A03'} //기념일 유형
	,dataType : "json"
		,success : function(data){
			console.log(data);
			
			makeAnnDaySelect(data);
			
		}
	,error : function(xhr){
		console.log(xhr);
		alert("오류발생");
	}	
	});
}

function makeAnnDaySelect(data){
	
	var strHtml = "";
	for (var i = 0; i < data.length; i++) {
		strHtml += '<option value="' + data[i].value + '">' + data[i].name + '</option>';
	}
	$("#AnnDay").html(strHtml); 
	
}

function initHobbyCheck(){
	//직업코드 조회해서 세팅하기
	$.ajax({
		url : "/JqueryPro/CodeServlet",
		type : "post",
		data : {
			"groupCode" : 'A01'
		} // 취미코드 조회
		,
		dataType : "json",
		success : function(data) {
			console.log(data);
	
			makeHobbyCheck(data);
	
		}
	,error : function(xhr){
		console.log(xhr);
		alert("오류발생");
	}
	
	});
}

function makeHobbyCheck(data) {
	var strHtml = "";
	for (var i = 0; i < data.length; i++) {
		strHtml += '<label class="checkbox-inline"><input type="checkbox" value="' + data[i].value + '">' + data[i].name + '</label>';
	}
	$("#Hobby").html(strHtml); 
}

function initCitySelect() {
	//직업코드 조회해서 세팅하기
//	var param = {
//	"sidocode" : 'sido'
//};
	$.ajax({
		url : "/JqueryPro/ZipServlet",
		type : "post",
//		data : param, 
		dataType : "json",
		success : function(data) {
			console.log(data);
	
			makeCitySelect(data);
	
		}
	,error : function(xhr){
		console.log(xhr);
		alert("오류발생");
	}
	
	});
}

function makeCitySelect(data) {
	var strHtml = '<option value="">선택하세요</option>';
	for (var i = 0; i < data.length; i++) {
		strHtml += '<option value="' + data[i].sido + '">' + data[i].sido + '</option>';
	}
	$("#city").html(strHtml); 

// 방법2)	
// setGu();
	
// 방법3) 
// trigger로 change 이벤트 호출
	
}

function setGu(){
	//'sido' : '대전'
	var param = {
			'sido' : $("#city").val()
			,'flag' : 'GU'
			};
	
	$.ajax({
		url : "/JqueryPro/ZipServlet",
		type : "post",
		data : param,
		dataType : "json",
		success : function(data) {
			console.log(data);
	
			makeGugunSelect(data);
	
		}
	,error : function(xhr){
		console.log(xhr);
		alert("오류발생");
	}
	
	});
}

function makeGugunSelect(data) {
	var strHtml = '<option value="">선택하세요</option>';
	for (var i = 0; i < data.length; i++) {
		strHtml += '<option value="' + data[i].gugun + '">' + data[i].gugun + '</option>';
	}
	$("#gu").html(strHtml); 
	$("#gu").prop("disabled", false); 
}

function checkId(){
	var userId = $("#userID").val();
	// id값이 입력이 되었는지 확인
	
	//isEmpty(userId);
	//consloe.log(1);
	//console.log(isEmpty(userId));
	if(isEmpty(userId) == true){
		alert("id가 입력되지 않았습니다.");
		$("#userID").focus();
	}
	// id값이 유효한지 확인
	if(chkRegExp(userId, "userId") == false){
		alert("id값이 유효하지 않습니다.");
	}
	
	
	// 기등록된 id가 있는지 확인
// 	var param = {"memId" : userId, "flag" : "CHKID"};
	var param = {memId : userId, flag : "CHKID"};
	
	$.ajax({
		url : "/JqueryPro/MemberServlet"
		,type : "post"
		,data : param
		,dataType : "json"
		,success : function(data){
			console.log(data);
			//{"resultCnt" : "0"}
			//{"resultCnt" : "1

// 			data.resultCnt ==> "0"/"1"
			
			if(data.resultCnt == 0){
				// 중복된  ID가 아니면
				alert("사용가능한  ID 입니다.");
			} else {
				// 중복된  ID이면
				//alert("중복된 ID 입니다.");
				$("#userID").focus();
				$("#spMemId").text("중복된 ID 입니다.");
				$("#spMemId").show();
			}
			
		}
		,error : function(xhr){
			console.log(xhr);
		}
		});
	}

});