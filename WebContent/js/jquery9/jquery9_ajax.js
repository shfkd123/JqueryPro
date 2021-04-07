/**
 * 
 */
function fnGet(){
		//submit 실행
	var fm = document.getElementById("fm"); //form태그 가져옴.
	fm.action = "html1_ex1.html?userId=test01&password=asdf"; //호출된 url을 다시 세팅 가능 다른 html 파일도 가능
	fm.method = "post"; //post 방식으로 다시 세팅
	fm.submit(); //form이 전송됨.
}

function fnAjax(){
	$.ajax({
		url : "intro.html"
		,type : "GET"
		/* ,data :
		,dataType :  */
		,success : function(data){ //intro.html 파일 자체가 data로 들어온다.
			$("#divResult").html(data);
		}
		,error : function(xhr){
			console.log(xhr);
			alert("오류발생");
		}
	});
}

function fnText(){
	$.ajax({
		//url : "../sample/data_text.txt" ---> 상대경로
		url : "/JqueryPro/html/sample/data_text.txt" //--->root로 부터 찾아가는
		//,type : "get"
		//,data : {}
		,dataType: "text"
		,success : function(data){
			// text이기 때문에 아래 둘다 무관하다.
			//$("#divResult").text(data);
			$("#divResult").html(data);
		}
		,error : function(xhr){
			console.log(xhr);
			alert("오류발생");
		}
	});
}

function fnJsonObj(){
	$.ajax({
		url : "/JqueryPro/html/sample/data_json_obj.txt"
		,dataType : "json"
		,success : function(data){
			console.log(data);
			console.log(data.name);
			// div에 이름: ~, 나이: ~, 
			
			var str = "";
			str += "이름 : " + data.name + "<br>"
				+ "나이 : " + data.age + "<br>"
				+ "성별 : " + data.gender + "<br>"
				+ "직업 : " + data.job;
			
			$("#divResult").html(str);
		}
		,error : function(xhr){
		console.log(xhr);
		alert("오류발생");
		}
	});
}

function fnJsonArr(){
	$.ajax({
		url : "/JqueryPro/html/sample/data_json_arr.txt"
		,dataType : "json"
		,success : function(data){
			console.log("성공 >>>> " + data);
			
			var str = "<ol>";
			//for문 사용
			for(var i = 0; i<data.length; i++){
				str += "<li>" + data[i] + "</li>";
			}
			//each 사용
//				$.each(data, function(idx){
//					str += "<li>" + data[i] + "</li>";					
//				});
			str += "</ol>";
			
			$("#divResult").html(str);
/* 만들고자 하는 모습 	<ol>
					<li>프로그래머</li>
					...
					<li>주부</li>
				</ol> */
		}
		,error : function(data){
			console.log("오류 >>>> " + data);
		}
	});
}

//실제 필드에서 가장 많이 사용하는 형태
function fnJsonList(){
	$.ajax({
		url : "/JqueryPro/html/sample/data_json_list.txt"
		,dataType : "json"
		,success : function(data){
			console.log(data);
			//1번째 회원
			//이름 : ~
			//나이 : ~
			var str = "";
			for(var i = 0; i<data.length; i++){
				var obj = data[i];
				str +=  i+1 + "번째 회원" + "<br>"
						+"이름 : " + obj.name + "<br>"
						+ "나이 : " + obj.age + "<br>"
						+ "성별 : " + obj.gender + "<br>"
						+ "직업 : " + obj.job + "<br><br>";
			$("#divResult").html(str);
			
			}
		}
		,error : function(xhr){
			console.log(xhr);
			alert("오류발생");
		}
	});
}

//실제 필드에서 가장 많이 사용하는 형태
function fnJsonList_table(){
	$.ajax({
		url : "/JqueryPro/html/sample/data_json_list.txt"
		,dataType : "json"
		,success : function(data){
			console.log(data);
			
			var str = "<table>"
					+ "<tr>"
					+ "<td>" + "번호" + "</td>"
					+ "<td>" + "이름" + "</td>"
					+ "<td>" + "나이" + "</td>"
					+ "<td>" + "성별" + "</td>"
					+ "<td>" + "직업" + "</td>"
					+ "</tr>";
			for(var i = 0; i<data.length; i++){
				var obj = data[i];
				str += "<tr>"
						+ "<td>" + i + "번째 회원" + "</td>"
						+ "<td>" + "이름 : " + obj.name + "</td>"
						+ "<td>" + "나이 : " + obj.age  + "</td>"
						+ "<td>" + "성별 : " + obj.gender + "</td>"
						+ "<td>" + "직업 : " + obj.job + "</td>" 
						+ "</tr>";
			$("#divResult").html(str);
			}
			str += "</table>";
			
			/* 
			만들고자 하는 모습 	
			<table>
			<tr>
				<td>번호</td>
				<td>이름</td>
				<td>나이</td>
				<td>성별</td>
				<td>직업</td>
			</tr>
			<tr>
				<td>1</td>
				<td>강건우</td>
				<td>28</td>
				<td>남자</td>
				<td>학생</td>
			</tr>
			...
			</table>*/
		}
		,error : function(xhr){
			console.log(xhr);
			alert("오류발생");
		}
	});
}

function fnXml(){
	$.ajax({
		url : "cd_catalog.xml"
//		    ,type : "get"//"post"
//			,data : {}
		,dataType : "xml"
		,success : function(data){
			makeArtistList(data);
		}
		,error : function(xhr){
			console.log(xhr);
			alert("오류발생");
		}
	});
}

function makeArtistList(param){
	//param ==> document
	//console.log(data);
	//console.log(data.getElementsByTagName("CATALOG"));
	//console.log(data.getElementsByTagName("CD"));
	//document.getElementsByTagName("~")
	//childNodes 
	//children  -->이런 요소들을 사용해서 자식들을 가져올 수 있다. 길어짐 주의 
	
	var arr = param.getElementsByTagName("ARTIST");
	var str = "";
		console.log(arr);
		console.log(arr[0]);
		console.log(arr[0].innerHTML);
	for (var i = 0; i < arr.length; i++) {
			str += arr[i].innerHTML + "<br>"; //가수이름				
	}
	$("#divResult").html(str);
}

function fnXml2(){
	$.ajax({
		url : "cd_catalog.xml"
		,dataType : "xml"
		,success : function(data){
			makeTitleList(data);
		}
		,error : function(xhr){
			console.log(xhr);
			alert("오류발생");
		}
	});
}

function makeTitleList(param){		
	var arr = param.getElementsByTagName("TITLE");
	//console.log(arr[0].innerHTML);
	//console.log($(arr[0]).html());
	console.log(arr[0]);
	console.log(arr[0].childNodes);
	console.log(arr[0].childNodes[0]);
	console.log(arr[0].childNodes[0].nodeValue); //[HTML 교재 10 - DOM순회] - pdf에서 참고
	
	var str = "";
	for (var i = 0; i < arr.length; i++) {
		console.log(arr[i].childNodes[0].nodeValue);
		str += arr[i].childNodes[0].nodeValue + "<br>"; //제목			
	}
	$("#divResult").html(str);
}

function fnXmlList(){
	$.ajax({
		url : "cd_catalog.xml"
		,dataType : "xml"
		,success : function(data){
			makeXmlList(data);
		}
		,error : function(xhr){
			console.log(xhr);
			alert("오류발생");
		}
	});
}
function makeXmlList(param){		
	var arrCd = param.getElementsByTagName("CD");
	console.log(arrCd); //arr : HTMLCollection
	
//	for(var i=0; i<arr.length; i++){
//	for (var obj of arr) {
// 	$.each
		//obj : <CD>
//		console.log(obj);
//		console.log($(obj).children());
//		console.log($(obj).children().eq(0));
//		console.log($(obj).children().eq(0).html());

/* 		만들고자 하는 모양 		
  		<table>
			<tr>
				<td>제목</td>
				<td>가수</td>
				<td>국가</td>
				<td>회사</td>
				<td>가격</td>
				<td>년도</td>
			</tr>
		</table>
*/
	var str = "<table>"
		+ "<tr>"
		+ "<td>" + "번호" + "</td>"
		+ "<td>" + "제목" + "</td>"
		+ "<td>" + "가수" + "</td>"
		+ "<td>" + "국가" + "</td>"
		+ "<td>" + "회사" + "</td>"
		+ "<td>" + "가격" + "</td>"
		+ "<td>" + "년도" + "</td>"
		+ "</tr>"; 
	
	//대소문자 ctrl + shift +x/y
	for(var i=0; i<arrCd.length; i++){
		var obj = arrCd[i];

		var objTitle = obj.getElementsByTagName("TITLE");
		var objArtist = obj.getElementsByTagName("ARTIST");
		var objCountry = obj.getElementsByTagName("COUNTRY");
		var objCompany = obj.getElementsByTagName("COMPANY");
		var objPrice = obj.getElementsByTagName("PRICE");
		var objYear = obj.getElementsByTagName("YEAR");
		
		title = $(objTitle).html();		
		artist = $(objArtist).html();		
		country = $(objCountry).html();		
		company = $(objCompany).html();		
		price = $(objPrice).html();		
		year = $(objYear).html(); 		

		str += "<tr>"
			+ " <td>" + (i+1) + "</td>" //번호
			+ " <td>" + title + "</td>" //제목
			+ " <td>" + artist +"</td>" //가수
			+ " <td>" + country + "</td>" //나라
			+ " <td>" + company + "</td>" //회사
			+ " <td>" + price + "</td>" //가격
			+ " <td>" + year + "</td>" //년도
			+ "</tr>";

		$("#divResult").html(str);
		//return;
	}
	str += "</table>";
}

function fnXmlListHigh(){
	console.log(1);
	$.ajax({
		url : "cd_catalog1.xml"
			,dataType : "xml"
				,success : function(data){
					makeXmlListHigh(data);
				}
	,error : function(xhr){
		console.log(xhr);
		alert("오류발생");
	}
	});
}
function makeXmlListHigh(param){
	console.log(2);
	var arrCd = param.getElementsByTagName("CD");
//	$("CD", param);
	console.log(arrCd); //arr : HTMLCollection

	var str = "<table>"
		+ "<tr>"
		+ "<td>" + "번호" + "</td>"
		+ "<td>" + "제목" + "</td>"
		+ "<td>" + "가수" + "</td>"
		+ "<td>" + "국가" + "</td>"
		+ "<td>" + "회사" + "</td>"
		+ "<td>" + "가격" + "</td>"
		+ "<td>" + "년도" + "</td>"
		+ "</tr>"; 
	
	//대소문자 ctrl + shift +x/y
	for(var i=0; i<arrCd.length; i++){
		var obj = arrCd[i];
		
		var objTitle = obj.getElementsByTagName("TITLE");
		var objArtist = obj.getElementsByTagName("ARTIST");
		var objCountry = obj.getElementsByTagName("COUNTRY");
		var objCompany = obj.getElementsByTagName("COMPANY");
		var objPrice = obj.getElementsByTagName("PRICE");
		var objYear = obj.getElementsByTagName("YEAR");
		
		if($(objTitle).length > 0)
			title = $(objTitle).html();
		
		if($(objArtist).length > 0)
			artist = $(objArtist).html();
		
		if($(objCountry).length > 0)
			country = $(objCountry).html();
		
		if($(objCompany).length > 0)
			company = $(objCompany).html();		
		
		if($(objPrice).length > 0)
			price = $(objPrice).html();		
		
		if($(objYear).length > 0)
			year = $(objYear).html();

		str += "<tr>"
			+ " <td>" + (i+1) + "</td>" //번호
			+ " <td>" + title + "</td>" //제목
			+ " <td>" + artist +"</td>" //가수
			+ " <td>" + country + "</td>" //나라
			+ " <td>" + company + "</td>" //회사
			+ " <td>" + price + "</td>" //가격
			+ " <td>" + year + "</td>" //년도
			+ "</tr>";
		
		$("#divResult").html(str);
		//return;
	}
	str += "</table>";
}

