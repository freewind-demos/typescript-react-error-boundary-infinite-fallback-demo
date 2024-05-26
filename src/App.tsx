import React, { FC, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Hello } from './Hello';

type Props = {};

export const App: FC<Props> = ({ }) => {
    const [version, setVersion] = useState(0);

    return <ErrorBoundary onError={error => {
        console.error('Error caught in error boundary:', error)
        setVersion(n => n + 1)
    }} fallback={<Hello name={"fallback-" + version} />}>
        <Hello name="inner" />
    </ErrorBoundary>;
}
