'use client';

import { CardBody, CardContainer, CardItem } from './d-card';

interface Props {
  content: string;
}

export default function Card({ content = '' }: Props) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 group/card  dark:hover:shadow-2xl  dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-4 border">
        {/* <CardItem translateZ="5" className="text-xl font-bold text-neutral-600 dark:text-white"> */}
        {/* {content} */}
        {/* </CardItem> */}

        <CardItem
          as="p"
          translateZ="5"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 font-bold"
        >
          {/* Hover over this card to unleash the power of CSS perspecti49 */}
          <br />{content}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
