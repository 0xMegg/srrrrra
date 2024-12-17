"use client";
import { useState, FormEvent } from "react";
import PrivacyPolicy from "@/components/PrivacyPolicy";

export default function MessagePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone1: "",
    phone2: "",
    phone3: "",
    content: "",
    agreement: false,
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.agreement) {
      alert("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }

    // 여기에 제출 로직 추가
    console.log("제출된 데이터:", formData);
  };

  return (
    <main className="max-w-4xl mx-auto p-4 pt-20">
      <h1 className="text-2xl font-bold mb-8">문자 상담</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 font-medium">
            이름 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full p-2 border rounded"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block mb-2 font-medium">
            연락처 <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              maxLength={3}
              required
              className="w-24 p-2 border rounded"
              value={formData.phone1}
              onChange={(e) =>
                setFormData({ ...formData, phone1: e.target.value })
              }
            />
            <span className="flex items-center">-</span>
            <input
              type="text"
              maxLength={4}
              required
              className="w-24 p-2 border rounded"
              value={formData.phone2}
              onChange={(e) =>
                setFormData({ ...formData, phone2: e.target.value })
              }
            />
            <span className="flex items-center">-</span>
            <input
              type="text"
              maxLength={4}
              required
              className="w-24 p-2 border rounded"
              value={formData.phone3}
              onChange={(e) =>
                setFormData({ ...formData, phone3: e.target.value })
              }
            />
          </div>
        </div>

        <div>
          <label htmlFor="content" className="block mb-2 font-medium">
            상담 내용 <span className="text-red-500">*</span>
          </label>
          <textarea
            id="content"
            required
            rows={5}
            className="w-full p-2 border rounded"
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
          />
        </div>

        <div className="p-4 bg-gray-50 rounded">
          <div className="h-40 overflow-y-auto border rounded p-4 bg-white">
            <PrivacyPolicy />
          </div>
          <div className="mt-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                required
                checked={formData.agreement}
                onChange={(e) =>
                  setFormData({ ...formData, agreement: e.target.checked })
                }
              />
              <span>
                개인정보 수집 및 이용에 동의합니다.{" "}
                <span className="text-red-500">*</span>
              </span>
            </label>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
          >
            상담 신청하기
          </button>
        </div>
      </form>
    </main>
  );
}
