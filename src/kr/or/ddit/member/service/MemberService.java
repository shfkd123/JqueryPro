package kr.or.ddit.member.service;

import java.sql.SQLException;
import java.util.List;

import kr.or.ddit.member.dao.MemberDao;
import kr.or.ddit.member.vo.MemberVO;

public class MemberService {
	// singleton 패턴 적용
	private MemberDao dao;
	
	public MemberService() {
		if(dao == null)
			dao = new MemberDao();
	}
		
	public MemberVO retrieveMember(String memberId) throws SQLException {
		//Alt + Shift + R 
		MemberVO memberVo = dao.retrieveMember(memberId);
		return memberVo;
	}
	
	public List<MemberVO> retrieveMemberList(MemberVO memberVo) throws SQLException {
		List<MemberVO> list = dao.retrieveMemberList(memberVo);
		return list;
	}

	//기존에 등록된 회원인지 아닌지 체크 
	public void createMember(MemberVO memberVo) throws SQLException {
		//1. 등록 전 유효성 체크
		// 1) 중복됭 ID인지 체크
//		MemberVO resultVo = dao.retrieveMember(memberVo.getMemId());
//		if(resultVo != null)
//			return;
		
		// 2) ID, password 등 유효한 값인지 체크 
		
		//2. DB에 insert 하기
		dao.createMember(memberVo);
		
		
	}
	
}
