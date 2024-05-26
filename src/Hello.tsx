import React, { FC, useMemo } from 'react';

type Props = {
  name: string
};


export const Hello: FC<Props> = ({ name }) => {
  const [crash, setCrash] = React.useState(false);
  useMemo(() => {
    if (crash) throw new Error('Crash')
  }, [crash])

  return <div className={'Hello'}>
    <h1>Hello, {name}</h1>
    <button onClick={() => setCrash(true)}>Crash</button>
  </div>;
}
