package kr.or.ddit.common.service;

import java.sql.SQLException;
import java.util.List;

import kr.or.ddit.common.dao.ZipDao;
import kr.or.ddit.common.vo.ZipVO;

public class ZipService {

	private ZipDao dao;

	public ZipService() {
		if (dao == null)
			dao = new ZipDao();
	}

	// Ctrl + Shift + o 불필요한 임포트 제거
	public List<ZipVO> retrieveSidoList() throws SQLException {
		return dao.retrieveSidoList();
	}

	public List<ZipVO> retrieveGugunList(ZipVO zipVO) throws SQLException {

		return dao.retrieveGugunList(zipVO);
	}

	public List<ZipVO> retrieveDongList(ZipVO zipVO) throws SQLException {

		return dao.retrieveDongList(zipVO);
	}

	public List<ZipVO> retrieveZipList(ZipVO zipVO) throws SQLException {

		return dao.retrieveZipList(zipVO);
	}

}
