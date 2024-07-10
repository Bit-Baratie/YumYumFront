"use client";
import Style from "./report.module.scss";
import { AlertFilled } from "@ant-design/icons";
import useReview from "../(hooks)/review/useReview";

const ReportModal = ({ onClose }: { onClose: () => void }) => {
  const { handleTextareaChange, reportText, createReport } = useReview();

  return (
    <div className={Style.modalOverlay}>
      <div className={Style.modalContent}>
        <button className={Style.closeButton} onClick={onClose}>
          X
        </button>

        <div className={Style.title}>
          신고하기
          <AlertFilled />
        </div>
        <div className={Style.ddd}>
          <textarea
            className={Style.tlsrh}
            placeholder="신고내용을 작성해주세요"
            value={reportText}
            onChange={handleTextareaChange}
          />
          <button className={Style.wjsthd} onClick={() => createReport(1)}>
            전송
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
