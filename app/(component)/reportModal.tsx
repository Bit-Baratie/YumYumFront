"use client";
import Style from "./report.module.scss";
import { AlertFilled } from "@ant-design/icons";
import useReview from "../(hooks)/review/useReview";
import useModal from "../(hooks)/common/useModal";

const ReportModal = ({ onClose, targetId, createReport }: { onClose: () => void,  targetId:number, createReport: Function} ) => {
  const { content, contentHandler} = useModal();

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
            value={content}
            onChange={contentHandler}
          />
          <button className={Style.wjsthd} onClick={() => createReport(targetId)}>
            전송
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
