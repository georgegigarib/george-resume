'use client';

import { CardBody, CardContainer } from './d-card';

interface Props {
  content: React.ReactNode;
}

export default function Card({ content = '' }: Props) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 group/card  dark:hover:shadow-2xl  dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl  border">
        {content}
      </CardBody>
    </CardContainer>
  );
}
