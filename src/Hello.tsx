import React, { FC, useMemo } from 'react';

type Props = {
  name: string
};


export const Hello: FC<Props> = ({ name }) => {
  useMemo(() => {
    throw new Error('Crash')
  }, []);
  return <div className={'Hello'}>
    <h1>Hello, {name}</h1>
  </div>;
}
