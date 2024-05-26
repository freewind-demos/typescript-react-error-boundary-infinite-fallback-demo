import React, { FC, useMemo } from 'react';

type Props = {};

export const Hello: FC<Props> = ({ }) => {
  const [crash, setCrash] = React.useState(false);
  useMemo(() => {
    if (crash) throw new Error('Crash')
  }, [crash])

  return <div className={'Hello'}>
    Hello: <button onClick={() => setCrash(true)}>Crash</button>
  </div>;
}
