<%@page import="java.util.List"%>
<%@page import="kr.or.ddit.member.vo.MemberVO"%>

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
[   
<%
//서블릿에서 조회결과를 "list"라는 key로 request에 담아줬음.
List<MemberVO> list = (List<MemberVO>)request.getAttribute("list"); 


for(int i=0; i<list.size(); i++){
	MemberVO vo = list.get(i);
	String memId = vo.getMemId();
	String memName = vo.getMemName();
	
	//json 타입으로 만들어야 하는 부분 ==> {"name" : "~", "id" : "~"}
	
	//번호, id, 이름, 비밀번호, 생년월일, 전화번호, 메일, 직업
	
	if(i>0){
		%>,<%
	}
	%>
	{	"memName" : "<%=memName %>"
		, "memId" : "<%=memId%>"
		, "memPass" : "<%=vo.getMemPass()%>"
		, "memBir" : "<%=vo.getMemBir()%>"
		, "memHp" : "<%=vo.getMemHp()%>"
		, "memMail" : "<%=vo.getMemMail()%>"
		, "memJobName" : "<%=vo.getMemJobName()%>"
	}
	<%
}
%>
]
		 