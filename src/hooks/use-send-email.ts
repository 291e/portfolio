import { useState } from "react";
import { toast } from "sonner";

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function useSendEmail() {
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (data: EmailData) => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          subject: data.subject,
          html: `
            <h2>새로운 문의가 도착했습니다</h2>
            <p><strong>이름:</strong> ${data.name}</p>
            <p><strong>이메일:</strong> ${data.email}</p>
            <p><strong>제목:</strong> ${data.subject}</p>
            <p><strong>메시지:</strong></p>
            <p>${data.message}</p>
          `,
        }),
      });

      if (!response.ok) {
        throw new Error("이메일 전송에 실패했습니다.");
      }

      toast.success("메시지가 성공적으로 전송되었습니다.");
      return true;
    } catch (error) {
      toast.error("메시지 전송에 실패했습니다. 다시 시도해 주세요.");
      console.error("이메일 전송 에러:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    sendEmail,
    isLoading,
  };
}
