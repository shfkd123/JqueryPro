package kr.or.ddit.common.service;

import java.sql.SQLException;
import java.util.List;

import kr.or.ddit.common.dao.CodeDao;
import kr.or.ddit.common.vo.CodeVO;

public class CodeService {

	private CodeDao dao;
	
	public CodeService() {
		if(dao == null)
			dao = new CodeDao();
	}
	
	//Ctrl + Shift + o 불필요한 임포트 제거
	public List<CodeVO> retrieveCodeList(CodeVO codeVo) throws SQLException {
		return dao.retrieveCodeList(codeVo);
	}
	
	
}
