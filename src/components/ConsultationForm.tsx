"use client";
import { useState, useRef, RefObject } from "react";
import { useForm } from "react-hook-form";
import PrivacyPolicy from "@/components/PrivacyPolicy";

interface ConsultationFormData {
  evaluationTarget: string[];
  customTarget?: string;
  location: string;
  evaluationType: string;
  inheritanceDate?: string;
  priceLevel: string;
  additionalInfo: string;
  name: string;
  phone1: string;
  phone2: string;
  phone3: string;
  privacyAgreement: boolean;
}

interface ConsultationFormProps {
  type: "무료 상담" | "정식 평가";
  title: string;
}

export default function ConsultationForm({
  type,
  title,
}: ConsultationFormProps) {
  const { register, handleSubmit, watch } = useForm<ConsultationFormData>();
  const [customTarget, setCustomTarget] = useState(false);
  const [invalidFields, setInvalidFields] = useState<string[]>([]);
  const phone1Ref = useRef<HTMLInputElement>(null);
  const phone2Ref = useRef<HTMLInputElement>(null);
  const phone3Ref = useRef<HTMLInputElement>(null);

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

  const evaluationTargets = watch("evaluationTarget", []);
  const customTargetValue = watch("customTarget");

  const validateEvaluationTargets = () => {
    if (evaluationTargets.length > 0) return true;

    if (customTarget && customTargetValue?.trim()) return true;

    return false;
  };

  const onSubmit = handleSubmit(
    async (data: ConsultationFormData) => {
      const missingFields: string[] = [];

      if (!validateEvaluationTargets()) {
        missingFields.push("evaluationTarget");
      }
      if (!data.location) {
        missingFields.push("location");
      }
      if (!data.evaluationType) {
        missingFields.push("evaluationType");
      }
      if (data.evaluationType === "상속" && !data.inheritanceDate) {
        missingFields.push("inheritanceDate");
      }
      if (!data.priceLevel) {
        missingFields.push("priceLevel");
      }
      if (!data.name) {
        missingFields.push("name");
      }
      if (!data.phone1 || !data.phone2 || !data.phone3) {
        missingFields.push("phone");
      }
      if (!data.privacyAgreement) {
        missingFields.push("privacyAgreement");
      }

      if (missingFields.length > 0) {
        setInvalidFields(missingFields);
        setTimeout(() => setInvalidFields([]), 1000);
        return;
      }

      const formattedData: any = {
        신청유형: type,
        평가대상:
          (Array.isArray(data.evaluationTarget)
            ? data.evaluationTarget.join(", ")
            : data.evaluationTarget || "") +
          (data.customTarget ? `, ${data.customTarget}` : ""),
        소재지: data.location,
        평가항목: data.evaluationType,
        희망가격수준: data.priceLevel,
        기타사항: data.additionalInfo || "없음",
        "이름/회사명": data.name,
        연락처: `${data.phone1}-${data.phone2}-${data.phone3}`,
        개인정보동의: data.privacyAgreement ? "동의" : "미동의",
      };

      // 상속인 경우에만 상속개시일을 평가항목 바로 아래에 추가
      if (data.evaluationType === "상속") {
        // 완전히 새로운 순서로 데이터 재구성
        const newFormattedData: any = {
          신청유형: formattedData.신청유형,
          평가대상: formattedData.평가대상,
          소재지: formattedData.소재지,
          평가항목: formattedData.평가항목,
          상속개시일: data.inheritanceDate,
          희망가격수준: formattedData.희망가격수준,
          기타사항: formattedData.기타사항,
          "이름/회사명": formattedData["이름/회사명"],
          연락처: formattedData.연락처,
          개인정보동의: formattedData.개인정보동의,
        };

        // 기존 객체를 새 객체로 교체
        Object.keys(formattedData).forEach((key) => {
          delete formattedData[key];
        });
        Object.assign(formattedData, newFormattedData);
      }

      try {
        // 메일 가독성을 위한 포맷팅
        const emailBody = Object.entries(formattedData)
          .map(([key, value]) => `${key}: ${value}`)
          .join("\n\n");

        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formattedData,
            emailBody: emailBody, // 가독성 좋은 텍스트도 함께 전송
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to send email");
        }

        // 성공 메시지 표시
        alert("상담 신청이 완료되었습니다.");

        // 콘솔 로그는 유지
        console.log("======= 상담 신청 정보 =======");
        Object.entries(formattedData).forEach(([key, value]) => {
          console.log(`${key}: ${value}`);
        });
        console.log("===========================");
      } catch (error) {
        console.error("Error sending email:", error);
        alert("상담 신청 중 오류가 발생했습니다. 다시 시도해 주세요.");
      }
    },
    (errors) => {
      const missingFields = Object.keys(errors);
      setInvalidFields(missingFields);
      setTimeout(() => setInvalidFields([]), 1000);
    }
  );

  const handlePhoneInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    maxLength: number,
    nextRef?: RefObject<HTMLInputElement>
  ) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    e.target.value = value;

    if (value.length >= maxLength && nextRef?.current) {
      nextRef.current.focus();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 pt-24">
      <h1 className="text-3xl font-bold mb-8">{title}</h1>

      <form onSubmit={onSubmit} className="space-y-6">
        <div
          className={`${
            invalidFields.includes("evaluationTarget")
              ? "animate-shake bg-red-50"
              : ""
          }`}
        >
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
                  {...register("evaluationTarget", {
                    required:
                      evaluationTargets.length === 0 &&
                      (!customTarget || !customTargetValue?.trim()),
                  })}
                  value={item}
                  id={item}
                  className="mr-2"
                />
                <label htmlFor={item} className="cursor-pointer flex-1">
                  {item}
                </label>
              </div>
            ))}
            <div className="flex items-center">
              <input
                type="checkbox"
                onChange={(e) => setCustomTarget(e.target.checked)}
                className="mr-2"
                id="customTargetCheckbox"
              />
              <label
                htmlFor="customTargetCheckbox"
                className="mr-2 cursor-pointer"
              >
                직접입력
              </label>
              <input
                type="text"
                {...register("customTarget", {
                  required: customTarget && evaluationTargets.length === 0,
                  validate: (value) => {
                    if (!customTarget) return true;
                    return !!value?.trim();
                  },
                })}
                className="border p-2 rounded flex-1"
                placeholder="평가대상을 입력해주세요"
                disabled={!customTarget}
              />
            </div>
          </div>
        </div>

        <div
          className={`${
            invalidFields.includes("location") ? "animate-shake bg-red-50" : ""
          }`}
        >
          <label className="block mb-2 font-semibold">소재지 (필수)</label>
          <input
            type="text"
            {...register("location", { required: true })}
            className="border p-2 rounded w-full"
          />
        </div>

        <div
          className={`${
            invalidFields.includes("evaluationType")
              ? "animate-shake bg-red-50"
              : ""
          }`}
        >
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

        {watch("evaluationType") === "상속" && (
          <div
            className={`${
              invalidFields.includes("inheritanceDate")
                ? "animate-shake bg-red-50"
                : ""
            }`}
          >
            <label className="block mb-2 font-semibold">
              상속개시일 (필수)
            </label>
            <input
              type="date"
              {...register("inheritanceDate", {
                required: watch("evaluationType") === "상속",
              })}
              className="border p-2 rounded w-full"
            />
          </div>
        )}

        <div
          className={`${
            invalidFields.includes("priceLevel")
              ? "animate-shake bg-red-50"
              : ""
          }`}
        >
          <label className="block mb-2 font-semibold">
            희망가격수준 (필수)
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

        <div
          className={`${
            invalidFields.includes("name") ? "animate-shake bg-red-50" : ""
          }`}
        >
          <label className="block mb-2 font-semibold">
            이름 또는 회사명 (필수)
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="border p-2 rounded w-full"
          />
        </div>

        <div
          className={`${
            invalidFields.includes("phone") ? "animate-shake bg-red-50" : ""
          }`}
        >
          <label className="block mb-2 font-semibold">연락처 (필수)</label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              maxLength={3}
              {...register("phone1", {
                required: true,
                pattern: /^[0-9]{2,3}$/,
              })}
              onChange={(e) => handlePhoneInput(e, 3, phone1Ref)}
              placeholder="010"
              className="border p-2 rounded w-24 text-center"
            />
            <span>-</span>
            <input
              type="text"
              maxLength={4}
              {...register("phone2", {
                required: true,
                pattern: /^[0-9]{3,4}$/,
              })}
              onChange={(e) => handlePhoneInput(e, 4, phone2Ref)}
              placeholder="0000"
              className="border p-2 rounded w-24 text-center"
            />
            <span>-</span>
            <input
              type="text"
              maxLength={4}
              {...register("phone3", { required: true, pattern: /^[0-9]{4}$/ })}
              onChange={(e) => handlePhoneInput(e, 4, phone3Ref)}
              placeholder="0000"
              className="border p-2 rounded w-24 text-center"
            />
          </div>
        </div>

        <div
          className={`${
            invalidFields.includes("privacyAgreement")
              ? "animate-shake bg-red-50"
              : ""
          }`}
        >
          <label className="block mb-2 font-semibold">
            개인정보 수집 및 이용 동의 (필수)
          </label>
          <div className="border p-4 mb-2 h-32 overflow-y-auto">
            <PrivacyPolicy />
          </div>
          <label className="flex items-center w-full cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
            <input
              type="checkbox"
              {...register("privacyAgreement", { required: true })}
              className="mr-2"
              id="privacyAgreement"
            />
            <span>동의합니다</span>
          </label>
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
