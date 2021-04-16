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
	
	$("#tbZipResult").on("dbclick", "tbody tr", function(){
		//this ==> tr
		var zipcode = $(this).children("td:eq(0)").text();
		var addr = $(this).children("td:eq(1)").text();
		//console.log($(this));--> console.log(zipcode); 
		//console.log($(this).children()); ---> console.log(addr);
		
		//메인화면(부모창)의 우편번호, 주소 input에 데이터 세팅
		$("#MEM_ZIP").val(zipcode);
		$("#MEM_Gugun").val(addr);
		
		//주소창 (모달창) 닫기
		$("#zipModal").modal("hide");
	});

});


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
	
	var strHtml = '<option value="">선택하세요</option>';
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
	var param = {
			'flag' : 'SI'
	}
	$.ajax({
		url : "/JqueryPro/ZipServlet",
		type : "post",
		data : param, 
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
	
	setGu();
	
//	setGu();
	
// 방법3) 
// trigger로 change 이벤트 호출
	
}

function setGu(){
	var param = {
			'sido' : $("#city").val()
			,'flag' : 'GU'
	};
	
	$.ajax({
		url : "/JqueryPro/ZipServlet"
		,type : "post"
		,data : param
		,dataType : "json"
		,success : function(data){
//			console.log(data);
			makeGugunSelect(data);
			
		}
		,error : function(xhr){
			console.log(xhr);
			alert("오류");
		}
	});
	
}

function makeGugunSelect(data){
	var strHtml = '<option value="">선택하세요</option>';
	for(var i=0 ; i<data.length ; i++){
		strHtml += '<option value="' + data[i].gugun +'">' + data[i].gugun + '</option>';
	}
	$("#gu").html(strHtml);
	$("#gu").prop("disabled", false);
}

function setDong(){
	var param = {
			'sido' : $("#city").val()
			,'gugun' : $("#gu").val()
			,'flag' : 'DONG'
	};
	
	$.ajax({
		url : "/JqueryPro/ZipServlet"
		,type : "post"
		,data : param
		,dataType : "json"
		,success : function(data){
//			console.log(data);
			makeDongSelect(data);
			
		}
		,error : function(xhr){
			console.log(xhr);
			alert("오류");
		}
	});
	
}
function makeDongSelect(data){
	var strHtml = '<option value="">선택하세요</option>';
	for(var i=0 ; i<data.length ; i++){
		strHtml += '<option value="' + data[i].dong +'">' + data[i].dong + '</option>';
	}
	$("#dong").html(strHtml);
	$("#dong").prop("disabled", false);
}

function searchZipCode(){
	var sido = $("#city").val();
	var gu = $("#gu").val();
	var dong= $("#dong").val();
	
	if(isEmpty(sido) || isEmpty(gu) || isEmpty(dong)) {
		alert("시, 구, 동을 선택하고 검색 버튼을 누르세요.");
		return;
	}
	
	var param = {
			'sido' : sido
			,'gugun' : gu
			,'dong' : dong
	};
	
	$.ajax({
		url : "/JqueryPro/ZipServlet"
		,type : "post"
		,data : param
		,dataType : "json"
		,success : function(data){
//			console.log(data);
			makeZipTable(data);
		}
		,error : function(xhr){
			console.log(xhr);
			alert("오류");
		}
	});
	
}
function makeZipTable(data){
	$("#divZipResult").show();
	$("#tbZipResult tbody").empty();
	
	var strHtml = "";
	for(var i=0 ; i<data.length ; i++) {
		console.log(data[i]);
		//          <tr onclick='fntest( "300-801", "대전", "중구", "문화1동", "1번지" );'>
//		strHtml += "<tr onclick='fntest( \"" + data[i].zipcode + "\", \"" + data[i].sido + "\");'>" // "300-801"
		strHtml += "<tr>"
				+ "<td>" + data[i].zipcode + "</td>"
				+ "<td>" + data[i].sido + " "
				+ data[i].gugun + " "
				+ data[i].dong + " " 
				+ changeEmptyVal(data[i].bunji) + "</td>"
				+ "</tr>";
	}
	
	$("#tbZipResult tbody").html(strHtml);
	
//	$("#tbZipResult tbody").dblclick();
	
}

function changeEmptyVal(val) {
	   if(isEmpty(val)) return "";
	   else return val;
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

function openZip(){
	//시 셀렉트박스 조회하고 초기화
	initCitySelect();
	//테이블 초기화
	$("#tbZipResult tbody").empty();
	
	//주소창(모달창) 열기 - 부트스트랩의 modal 메소드 호출 
	$("#zipModal").modal();
}

//회원정보 저장하기
function save(){
	
	//회원정보 유효성 체크
	var result = validate();
	
	if(!result){
		return;
	}
	
	//사용자에게 저장하기 전에 다시 물어본다.
	 if(confirm("저장하시겠습니까?"))
		 return; 
	 
	 //DB에 저장하는 ajax 호출
	 $("#formFlag").val("C");
	 $.ajax({
		url : "",
		type : "post",
		data: $("#fm").serialize(),
		datatype : "json",
		success: function(data){
			alert("저장되었습니다.");
			
			//페이지 이동
//			changePage();
			
		},
		error: function(xhr){
			alert("실패하였습니다. \n 관리자에게 문의하세요.");
			console.log(xhr);
		}
		
	 });
}

function changePage(){
	//방법1
//	window.location.href = "/JqueryPro/html/member/memberList2.html";
	
	//방법2
	var fm = document.getElementById("fm");
	fm.action = "/JqueryPro/html/member/memberList2.html"; // 서블릿을 호출하기도 함.
	fm.method = "post";
	fm.submit();
	
}

function validate(){
	//....
	return false; //문제가 생기면 중간에 return false;
	
	//체크가 끝나면
	return true;
}