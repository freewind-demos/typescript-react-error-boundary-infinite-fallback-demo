import React, { FC } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Hello } from './Hello';

type Props = {};

export const App: FC<Props> = ({ }) => {
    console.log("### > App")
    return <div>
        <h1>Hello, Error boundary</h1>
        <ErrorBoundary fallback={<div>Error occurs</div>}>
            <Hello />
        </ErrorBoundary>
        <ErrorBoundary fallback={<div>Error occurs</div>}>
            <Hello />
        </ErrorBoundary>
    </div>;
}
