"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import FormMessage from "@/components/FormMessage";
import type { RefObject } from "react";

interface MessageFormValues {
  name: string;
  phone1: string;
  phone2: string;
  phone3: string;
  content: string;
  privacyAgreement: boolean;
}

interface MessageFormProps {
  title: string;
  /** 이메일 제목용 신청유형 (예: "문자상담", "무형자산 문자상담") */
  applicationType: string;
}

export default function MessageForm({ title, applicationType }: MessageFormProps) {
  const { register, handleSubmit, reset, setValue } = useForm<MessageFormValues>({
    defaultValues: {
      name: "",
      phone1: "",
      phone2: "",
      phone3: "",
      content: "",
      privacyAgreement: false,
    },
  });
  const [formMessage, setFormMessage] = useState<{
    variant: "success" | "error";
    message: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [invalidFields, setInvalidFields] = useState<string[]>([]);
  const phone2Ref = useRef<HTMLInputElement>(null);
  const phone3Ref = useRef<HTMLInputElement>(null);

  const handlePhoneInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    maxLength: number,
    nextRef?: RefObject<HTMLInputElement>
  ) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    e.target.value = value;
    const name = e.target.name as keyof MessageFormValues;
    setValue(name, value);
    if (value.length >= maxLength && nextRef?.current) {
      nextRef.current.focus();
    }
  };

  const onSubmit = handleSubmit(
    async (data) => {
      setFormMessage(null);
      setInvalidFields([]);
      setIsSubmitting(true);
      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            도메인: applicationType.startsWith("무형자산") ? "무형자산평가" : "감정평가",
            신청유형: applicationType,
            이름: data.name,
            연락처: `${data.phone1}-${data.phone2}-${data.phone3}`,
            상담내용: data.content,
          }),
        });
        if (!response.ok) throw new Error("메일 전송에 실패했습니다.");
        setFormMessage({
          variant: "success",
          message: "상담 신청이 완료되었습니다.",
        });
        reset();
      } catch (error) {
        console.error("Error:", error);
        setFormMessage({
          variant: "error",
          message: "상담 신청 중 오류가 발생했습니다. 다시 시도해주세요.",
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    (errors) => {
      setInvalidFields(Object.keys(errors));
      setTimeout(() => setInvalidFields([]), 1000);
    }
  );

  const fieldInvalid = (name: string) =>
    invalidFields.includes(name) ? "animate-shake bg-red-50" : "";
  const inputClass = (name: string, extra = "") =>
    `input-ring ${invalidFields.includes(name) ? "input-ring-invalid " : ""}${extra}`.trim();

  const r2 = register("phone2", { required: true, pattern: /^[0-9]{3,4}$/ });
  const r3 = register("phone3", { required: true, pattern: /^[0-9]{4}$/ });

  return (
    <main className="max-w-4xl mx-auto p-4 pt-20">
      <h1 className="text-2xl font-bold mb-8">{title}</h1>

      {formMessage && (
        <FormMessage
          variant={formMessage.variant}
          message={formMessage.message}
          onDismiss={() => setFormMessage(null)}
        />
      )}

      <form onSubmit={onSubmit} className="space-y-6">
        <div className={fieldInvalid("name")}>
          <label htmlFor="name" className="block mb-2 font-semibold">
            이름 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            className={inputClass("name", "w-full")}
            {...register("name", { required: true })}
            aria-invalid={invalidFields.includes("name")}
          />
        </div>

        <div
          className={
            fieldInvalid("phone1") || fieldInvalid("phone2") || fieldInvalid("phone3")
          }
        >
          <label className="block mb-2 font-semibold">
            연락처 <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              maxLength={3}
              placeholder="010"
              className={inputClass("phone1", "w-24 text-center")}
              {...register("phone1", { required: true, pattern: /^[0-9]{2,3}$/ })}
              onChange={(e) => handlePhoneInput(e, 3, phone2Ref)}
              aria-invalid={invalidFields.includes("phone1")}
            />
            <span>-</span>
            <input
              type="text"
              maxLength={4}
              placeholder="0000"
              className={inputClass("phone2", "w-24 text-center")}
              {...r2}
              ref={(el) => {
                r2.ref(el);
                (phone2Ref as React.MutableRefObject<HTMLInputElement | null>).current = el;
              }}
              onChange={(e) => handlePhoneInput(e, 4, phone3Ref)}
              aria-invalid={invalidFields.includes("phone2")}
            />
            <span>-</span>
            <input
              type="text"
              maxLength={4}
              placeholder="0000"
              className={inputClass("phone3", "w-24 text-center")}
              {...r3}
              ref={(el) => {
                r3.ref(el);
                (phone3Ref as React.MutableRefObject<HTMLInputElement | null>).current = el;
              }}
              onChange={(e) => handlePhoneInput(e, 4)}
              aria-invalid={invalidFields.includes("phone3")}
            />
          </div>
        </div>

        <div className={fieldInvalid("content")}>
          <label htmlFor="content" className="block mb-2 font-semibold">
            상담 내용 <span className="text-red-500">*</span>
          </label>
          <textarea
            id="content"
            rows={5}
            className={inputClass("content", "w-full")}
            {...register("content", { required: true })}
            aria-invalid={invalidFields.includes("content")}
          />
        </div>

        <div className={fieldInvalid("privacyAgreement")}>
          <div className="p-4 bg-gray-50 rounded">
            <div className="h-40 overflow-y-auto border rounded p-4 bg-white">
              <PrivacyPolicy />
            </div>
            <label className="flex items-center gap-2 mt-4 cursor-pointer hover:bg-gray-100 p-2 rounded">
              <input
                type="checkbox"
                {...register("privacyAgreement", { required: true })}
                className="focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                aria-invalid={invalidFields.includes("privacyAgreement")}
              />
              <span>
                개인정보 수집 및 이용에 동의합니다.{" "}
                <span className="text-red-500">*</span>
              </span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          {isSubmitting ? "전송 중..." : "상담 신청하기"}
        </button>
      </form>
    </main>
  );
}
