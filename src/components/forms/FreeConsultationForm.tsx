"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "이름을 입력해주세요"),
  phone: z
    .string()
    .regex(/^01[0-9]-?[0-9]{4}-?[0-9]{4}$/, "올바른 전화번호를 입력해주세요"),
  email: z.string().email("올바른 이메일을 입력해주세요"),
  preferredDate: z.string(),
  content: z.string().min(10, "최소 10자 이상 입력해주세요"),
});

type FormData = z.infer<typeof schema>;

export function FreeConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/consultations/free`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        alert("상담 신청이 완료되었습니다.");
      } else {
        throw new Error("서버 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error(error);
      alert("오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-6">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            이름
          </label>
          <input
            type="text"
            {...register("name")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            연락처
          </label>
          <input
            type="tel"
            {...register("phone")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            이메일
          </label>
          <input
            type="email"
            {...register("email")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            상담 희망일
          </label>
          <input
            type="datetime-local"
            {...register("preferredDate")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            상담 내용
          </label>
          <textarea
            {...register("content")}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.content && (
            <p className="mt-1 text-sm text-red-600">
              {errors.content.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
        >
          {isSubmitting ? "제출 중..." : "상담 신청하기"}
        </button>
      </div>
    </form>
  );
}
