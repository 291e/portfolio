// emails/WelcomeEmail.tsx
import {
  Html,
  Body,
  Container,
  Text,
  Section,
  Heading,
  Hr,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface WelcomeEmailProps {
  userName: string;
  userEmail: string;
}

export default function WelcomeEmail({
  userName,
  userEmail,
}: WelcomeEmailProps) {
  return (
    <Html>
      <Tailwind>
        <Body className="bg-white font-sans">
          <Container className="mx-auto py-8 px-4">
            <Section className="text-center">
              <Heading className="text-2xl font-bold text-gray-800 mb-4">
                포트폴리오 웹사이트 방문 감사합니다
              </Heading>
              <Text className="text-gray-600 mb-4">
                안녕하세요, {userName}님!
              </Text>
              <Text className="text-gray-600 mb-4">
                포트폴리오 웹사이트를 방문해 주셔서 감사합니다. 제 프로젝트와
                경험에 대해 관심을 가져주셔서 기쁩니다.
              </Text>
              <Text className="text-gray-600 mb-4">
                문의사항이나 협업 제안이 있으시다면 언제든지 연락해 주세요.
              </Text>
              <Hr className="my-6 border-gray-300" />
              <Text className="text-sm text-gray-500">
                이 이메일은 {userEmail}로 발송되었습니다.
              </Text>
              <Text className="text-sm text-gray-500">
                © 2024 포트폴리오 웹사이트. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
