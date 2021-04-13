/**
 * 
 */
	 $(document).ready(function(){
	         $("#btnSearch").click(function(){
	        	 
	        	//서버로 전달할 데이터 만들기
	        	var userId = $("#userId").val();
	        	var userName = $("#userName").val();
	        	
	        	var param = {memId : userId 
	        				, memName : userName
	        				, flag : "L"
	        				};
	        	 
	            $.ajax({
	               url : "/JqueryPro/MemberServlet"
	               ,type : "post"
	               ,data : param
	               ,dataType : "json"
	               ,success : function(data){
	                  console.log(data);
	                  alert("성공");
	                  //data를 이용해서 테이블 만들기
	                  makeTable(data);
	               }
	               ,error : function(xhr){
	                  console.log(xhr);
	                  alert("오류발생");
	               }
	            });
	            
	         });
	         
	      });
	      
	      function makeTable(data){
	    	  var str = "";
				for(var i = 0; i<data.length; i++){
					var obj = data[i];
					str += "<tr>"
							+ "<td>" + (i + 1) + "</td>"
							+ "<td>" + obj.memId + "</td>"
							+ "<td>" + obj.memName + "</td>"
							+ "<td>" + obj.memPass + "</td>"
							+ "<td>" + obj.memBir + "</td>"
//							+ "<td>" + obj.memHp + "</td>"
							+ "<td>" + formatHp(obj.memHp) + "</td>"
							+ "<td>" + obj.memMail + "</td>"
							+ "<td>" + obj.memJobName + "</td>"
							+ "</tr>";
	    	  }
				$("#tbResult tbody").html(str);
	      }
   