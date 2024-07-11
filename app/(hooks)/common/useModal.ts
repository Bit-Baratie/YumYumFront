'use client';
import reportApi from "@/app/(api)/common/reportApi";
import { useState } from "react";

const useModal = () => {
  const [modal, setModal] = useState(false);
  const {postReport} = reportApi();
  const [content, setContent] = useState('');

  const contentHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContent(event.target.value);
  };

  const createReviewReport = async (targetId:number) => {
    const reportData = {
      targetId: targetId,
      content: content,
      reportType: 'REVIEW'
    };
   
    const result = await postReport(reportData);
    if (result.status === 201) {
      alert('신고가 완료되었습니다');
      setModal(false);
    } else {
      alert('잠시후 다시 시도해 주세요₩n'+result.error.massege);
    }
  }

  const createReplyReport = async (targetId:number) => {
    const reportData = {
      targetId: targetId,
      content: content,
      reportType: 'REPLY'
    };

    const result = await postReport(reportData);
    if (result.status === 201) {
      alert('신고가 완료되었습니다');
      setModal(false);
    } else {
      alert('잠시후 다시 시도해 주세요₩n'+result.error.massege);
    }
  }

  return {
    contentHandler,
    content,
    createReviewReport,
    createReplyReport,
    modal,
    setModal,
  }
}

export default useModal;