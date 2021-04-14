package kr.or.ddit.member.dao;

import java.sql.SQLException;
import java.util.List;

import com.ibatis.sqlmap.client.SqlMapClient;

import kr.or.ddit.base.dao.BaseDao;
import kr.or.ddit.member.vo.MemberVO;

public class MemberDao extends BaseDao {
	private SqlMapClient smc;
	
	public MemberDao() {
		smc = super.getSqlMapClient();
	}

	public MemberVO retrieveMember(String memId) throws SQLException {
		//queryForObject - 한건
		//queryForList - 여러건 
		return (MemberVO) smc.queryForObject("member.retrieveMember", memId); //namespace.id
		
	}
	
	public List<MemberVO> retrieveMemberList(MemberVO memberVo) throws SQLException {
		return smc.queryForList("member.retrieveMemberList", memberVo);
	}

	public void createMember(MemberVO memberVo) throws SQLException {
		smc.insert("member.createMember", memberVo); //1번 파라미터 호출된 쿼리 아이디.
		
	}
	
}
