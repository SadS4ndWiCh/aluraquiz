import { useRouter } from 'next/router';

import { Title } from '../src/components/MainStyles';

export default function Quiz(props) {
  const router = useRouter();
  const { name } = router.query;

  return (
    <Title color='#121212'>Hello {name}</Title>
  )
}