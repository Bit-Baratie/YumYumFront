'use client';
import reportApi from "@/app/(api)/common/reportApi";
import { useState } from "react";

const useModal = () => {
  const [modal, setModal] = useState(false);
  const {reviewReport} = reportApi();
  const [content, setContent] = useState('');

  const contentHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContent(event.target.value);
  };

  const createReviewReport = async (reviewId:number) => {
    console.log(reviewId)
    const reportData = {
      targetId: reviewId,
      content: content,
      reportType: 'REVIEW'
    };
   
    const result = await reviewReport(reportData);
    console.log(result.status)
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
    modal,
    setModal
  }
}

export default useModal;