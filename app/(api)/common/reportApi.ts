import { axiosWithAuth } from "@/app/(hooks)/common/axiosWithAuth";
import { reportType } from "@/app/type";
import Swal from "sweetalert2";

const reportApi = () => {
  const postReport = async (reportData: reportType) => {
    const result = await axiosWithAuth.post(`/report`, reportData);
    if (result.status === 201) {
      Swal.fire({
        title: '신고가 완료되었습니다',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
        width: 400,
      });
    } else {
      Swal.fire({
        title: 'Error!',
        text: "다시 시도해주세요.",
        icon: 'warning',
        timer: 1500,
        showConfirmButton: false,
        width: 400,
      });
    }
    return result;
  }

  return {
    postReport
  };
}

export default reportApi;