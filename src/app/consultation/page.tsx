"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface ConsultationForm {
  evaluationTarget: string[];
  customTarget?: string;
  location: string;
  evaluationType: string;
  priceLevel: string;
  additionalInfo: string;
  name: string;
  phone: string;
  privacyAgreement: boolean;
}

export default function ConsultationPage() {
  const { register, handleSubmit } = useForm<ConsultationForm>();
  const [customTarget, setCustomTarget] = useState(false);

  const evaluationTypes = [
    "시가참고",
    "상속",
    "증여",
    "양도",
    "현물출자",
    "법인전환",
    "자산재평가",
    "보상",
    "담보",
    "법인",
    "일반회생",
  ];

  const priceLevels = ["최대", "적정", "최소"];

  const onSubmit = (data: ConsultationForm) => {
    // 수집된 데이터를 보기 좋게 포맷팅
    const formattedData = {
      평가대상:
        data.evaluationTarget.join(", ") +
        (data.customTarget ? `, ${data.customTarget}` : ""),
      소재지: data.location,
      평가항목: data.evaluationType,
      희망가격수준: data.priceLevel,
      기타사항: data.additionalInfo || "없음",
      "이름/회사명": data.name,
      연락처: data.phone,
      개인정보동의: data.privacyAgreement ? "동의" : "미동의",
    };

    console.log("======= 상담 신청 정보 =======");
    Object.entries(formattedData).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
    });
    console.log("===========================");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 pt-24">
      <h1 className="text-3xl font-bold mb-8">하이테크 상담 신청</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block mb-2 font-semibold">평가대상 (필수)</label>
          <div className="space-y-2">
            {[
              "토지(대지, 전, 답 등)",
              "건물(상가, 빌딩 등)",
              "개별주택(단독, 다가구 등)",
              "공동주택(아파트, 다세대 등)",
              "분양권 및 입주권",
              "오피스텔",
              "무형자산(영업권, 특허권, 상표권 등)",
            ].map((item) => (
              <div key={item} className="flex items-center">
                <input
                  type="checkbox"
                  {...register("evaluationTarget")}
                  value={item}
                  className="mr-2"
                />
                <label>{item}</label>
              </div>
            ))}
            <div className="flex items-center">
              <input
                type="checkbox"
                onChange={(e) => setCustomTarget(e.target.checked)}
                className="mr-2"
              />
              <label className="mr-2">직접입력</label>
              <input
                type="text"
                {...register("customTarget")}
                className="border p-2 rounded flex-1"
                placeholder="평가대상을 입력해주세요"
                disabled={!customTarget}
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block mb-2 font-semibold">소재지 (필수)</label>
          <input
            type="text"
            {...register("location", { required: true })}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">평가항목 (필수)</label>
          <select
            {...register("evaluationType", { required: true })}
            className="border p-2 rounded w-full"
          >
            <option value="">선택해주세요</option>
            {evaluationTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            희망가��수준 (필수)
          </label>
          <select
            {...register("priceLevel", { required: true })}
            className="border p-2 rounded w-full"
          >
            <option value="">선택해주세요</option>
            {priceLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 font-semibold">기타사항</label>
          <textarea
            {...register("additionalInfo")}
            className="border p-2 rounded w-full h-32"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            이름 또는 회사명 (필수)
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">연락처 (필수)</label>
          <input
            type="tel"
            {...register("phone", {
              required: true,
              pattern: /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/,
            })}
            placeholder="010-0000-0000"
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            개인정보 수집 및 이용 동의 (필수)
          </label>
          <div className="border p-4 mb-2 h-32 overflow-y-auto">
            {/* 개인정보 수집 동의 내용 */}
            개인정보 수집 및 이용에 대한 내용이 들어갈 자리니다...
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              {...register("privacyAgreement", { required: true })}
              className="mr-2"
            />
            <label>동의합니다</label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
        >
          상담 신청하기
        </button>
      </form>
    </div>
  );
}
