// 'use client';

// import AdminApi from "@/app/(api)/admin/adminApi";
// import { useState } from "react";

// interface Report {
//   id: string;
//   // type: string; // 댓글, 리뷰, 맛집
//   reportedContent: string; // 신고된 내용
//   reportedId: string; // 신고된 id
//   reportedReason: string; // 신고 이유
//   reporterId: string; // 신고자 id
//   reporter: string; //신고자 닉네임
// }

// interface ReportType {
//   comment: string;
//   review: string;
//   user: string;
// }


// const useAdmin = async () => {
//   // const [ ddd, setDdd] = useState<any>();

//   // const getReviewReport = async (type: string) => {
//   //   const result = await getReport("review");
//   //   return result.data;
//   // }


//   return {
//     reportContents, fetchReviewReport
//   }

// }
// export default useAdmin;

// // useAdminReports.ts


// // const useAdminReports = () => {
// //   const adminApi = AdminApi();
// //   const [reports, setReports] = useState<Report[]>([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchReports = async () => {
// //       try {
// //         const data = await adminApi.getReport('리뷰'); // 예시로 '리뷰' 타입의 신고를 가져오도록 설정
// //         setReports(data);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error('Error fetching reports:', error);
// //         setLoading(false);
// //       }
// //     };

// //     fetchReports();
// //   }, [adminApi]);

// //   return { reports, loading };
// // };

// // export default useAdminReports;
