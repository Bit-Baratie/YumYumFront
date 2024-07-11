import useAxiosWithAuth from "@/app/(hooks)/common/useAxiosWithAuth";
import { reportType } from "@/app/type";

const reportApi = () => {
  const {axiosWithAuth} = useAxiosWithAuth();

  const reviewReport = async (reportData: reportType) => {
    const result = await axiosWithAuth.post(`/report`, reportData );
    return result;
  }

  const replyReport = (reportData: reportType) => {
    
  }

  const storeReport = (reportData: reportType) => {
    
  }

  return {
    reviewReport,
    replyReport,
    storeReport
  };
}

export default reportApi;