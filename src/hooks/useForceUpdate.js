import { useState } from 'react';

export default function useForceUpdate() {
  const [, forceUpdate] = useState(0);

  return () => {
    forceUpdate((prevValue) => prevValue + 1);
  };
}
