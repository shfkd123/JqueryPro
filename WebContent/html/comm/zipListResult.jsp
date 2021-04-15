<%@page import="kr.or.ddit.common.vo.ZipVO"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
[
<%

List<ZipVO> list = (List<ZipVO>)request.getAttribute("list");

for(int i=0; i<list.size(); i++){
	if(i> 0){
		%>,<%
	}
	
	String sido = list.get(i).getSido();
	String gugun = list.get(i).getGugun();
	String dong = list.get(i).getDong();
	String bunji = list.get(i).getBunji();
	String zipcode = list.get(i).getZipcode();

	%>
	{
	 	"sido" : "<%=sido %>"
	 	,"gugun" : "<%=gugun %>"
	 	,"dong" : "<%=dong %>"
	 	,"bunji" : "<%=bunji %>"
	 	,"zipcode" : "<%=zipcode %>"
	}
	<%
}
// {"name" : "대전"}, {"name" : "광주"}, {"name" : "울산"}
%>
]