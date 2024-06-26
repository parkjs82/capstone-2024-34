"use client";

import FilePEResultCard from "@components/analyze/file_pe_result_card";
import FilePEUploadCard from "@components/analyze/file_pe_upload_card";
import {
  AnalyzePeFileUploadResponse,
  FilePeResultResponse,
} from "@customTypes/analyze/api";
import { useState } from "react";

export default function AnalyzePeFilePage() {
  let [data, setData] = useState<AnalyzePeFileUploadResponse>();
  // 업로드후 로딩 상태 저장
  const [isProgress, setIsProgress] = useState(false);

  function handleSubmitResponse(responseData: AnalyzePeFileUploadResponse) {
    setData(responseData);
    console.log("res", data);
  }

  return (
    <div className="h-full w-full max-w-full space-y-4 overflow-x-hidden px-4 py-4 sm:space-y-6 sm:px-6 sm:py-6">
      <div className="h-full min-h-full w-full">
        {/* 페이지 헤더 */}
        <div className="grid grid-cols-2">
          <header>
            <p className="mb-2 text-sm font-semibold text-blue-600">
              Analyze PE File
            </p>
            <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl">
              단일 PE 파일 분석
            </h1>
            <p className="mt-2 text-lg text-gray-800"></p>
          </header>

          <div className="place-items-end items-end place-self-end"></div>
        </div>
        {/* 콘텐츠 영역 */}
        <div className="mt-5 grid w-full max-w-full gap-4 sm:gap-6">
          <FilePEUploadCard
            onSubmit={handleSubmitResponse}
            isProgress={isProgress}
            setIsProgress={setIsProgress}
          />
          <FilePEResultCard
            success={data?.success}
            message={data?.message}
            data={data?.data || ({} as FilePeResultResponse)}
            isProgress={isProgress}
          />
        </div>
      </div>
    </div>
  );
}
