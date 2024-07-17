import {axiosWithAuth} from "@/app/(hooks)/common/useAxiosWithAuth";
import { reportType } from "@/app/type";

const reportApi = () => {
  const postReport = async (reportData: reportType) => {
    const result = await axiosWithAuth.post(`/report`, reportData );
    return result;
  }

  return {
    postReport
  };
}

export default reportApi;