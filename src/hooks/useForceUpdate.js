import { useState } from 'react';

export default function useForceUpdate() {
  const [, forceUpdate] = useState(0);

  return () => ((act) => {
    forceUpdate((prevValue) => prevValue + 1);
  });
}
