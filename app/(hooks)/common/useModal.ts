'use client';
import reportApi from "@/app/(api)/common/reportApi";
import { useState } from "react";

const useModal = () => {
  const [modal, setModal] = useState(false);
  const { postReport } = reportApi();
  const [content, setContent] = useState('');

  const contentHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContent(event.target.value);
  };

  const createReviewReport = async (targetId: number) => {
    const reportData = {
      targetId: targetId,
      content: content,
      reportType: 'REVIEW'
    };

    await postReport(reportData);
    setContent('');
    setModal(false);
  }
  const createStoreReport = async (targetId: number) => {
    const reportData = {
      targetId: targetId,
      content: content,
      reportType: 'STORE'
    };
    await postReport(reportData);
    setContent('');
    setModal(false);
  }

  const createReplyReport = async (targetId: number) => {
    const reportData = {
      targetId: targetId,
      content: content,
      reportType: 'REPLY'
    };

    await postReport(reportData);
    setContent('');
    setModal(false);
  }

  return {
    contentHandler,
    content,
    createReviewReport,
    createReplyReport,
    createStoreReport,
    modal,
    setModal,
  }
}

export default useModal;