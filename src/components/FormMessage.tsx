"use client";

type Variant = "success" | "error";

interface FormMessageProps {
  variant: Variant;
  message: string;
  onDismiss?: () => void;
}

export default function FormMessage({
  variant,
  message,
  onDismiss,
}: FormMessageProps) {
  const isSuccess = variant === "success";
  return (
    <div
      role="alert"
      className={`mb-4 flex items-center justify-between rounded-lg border p-4 ${
        isSuccess
          ? "border-green-200 bg-green-50 text-green-800"
          : "border-red-200 bg-red-50 text-red-800"
      }`}
    >
      <span className="font-medium">{message}</span>
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          className="ml-2 rounded p-1 hover:bg-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1"
          aria-label="닫기"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
