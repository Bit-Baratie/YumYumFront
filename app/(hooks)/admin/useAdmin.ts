'use client';

import AdminApi from "@/app/(api)/admin/adminApi";
import Swal from "sweetalert2";

const useAdmin = () => {
  const { deleteUser, deleteComment, deleteReview, deleteStore } = AdminApi();

  const removeUser = async (memberId: number): Promise<{ success: boolean }> => {
    try {
      const result = await deleteUser(memberId);
      return { success: result?.status === 204 };
    } catch (error) {
      console.error("Error removing user:", error);
      return { success: false };
    }
  };

  const removeReply = async (replyId: number): Promise<{ success: boolean }> => {
    try {
      const result = await deleteComment(replyId);
      return { success: result?.status === 204 };
    } catch (error) {
      console.error("Error removing reply:", error);
      return { success: false };
    }
  };

  const removeReview = async (reviewId: number): Promise<{ success: boolean }> => {
    try {
      const result = await deleteReview(reviewId);
      return { success: result?.status === 204 };
    } catch (error) {
      console.error("Error removing review:", error);
      return { success: false };
    }
  };

  const removeStore = async (storeId: number): Promise<{ success: boolean }> => {
    try {
      const result = await deleteStore(storeId);
      return { success: result?.status === 204 };
    } catch (error) {
      console.error("Error removing store:", error);
      return { success: false };
    }
  };

  return {
    removeUser,
    removeReply,
    removeReview,
    removeStore
  };
};

export default useAdmin;
