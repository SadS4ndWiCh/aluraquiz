import styled from 'styled-components';

import Link from 'next/link';
import Image from 'next/image';

const BackLinkArrowBase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 25px;
  height: 25px;

  margin-right: 15px;

  border-radius: ${({ theme }) => theme.borderRadius};

  &:hover {
    background-color: rgba(255,255,255,.08);
  }

  cursor: pointer;
`;

export default function BackLinkArrow({ href }) {
  return (
    <Link href={href}>
      <BackLinkArrowBase>
      <svg width="15" height="15" viewBox="0 0 60 98" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 85.749L22.915 48.583L60 11.417L48.583 0L0 48.583L48.583 97.166L60 85.749Z" fill="white"/>
      </svg>

      </BackLinkArrowBase>
    </Link>
  )
}