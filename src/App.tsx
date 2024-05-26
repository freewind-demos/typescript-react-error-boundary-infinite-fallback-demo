import React, { FC } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Hello } from './Hello';

type Props = {};

export const App: FC<Props> = ({ }) => {
    return <ErrorBoundary onError={error => {
        console.error('Error caught in error boundary:', error)
    }} fallback={
        // <App />
        <Hello name='fallback' />
    }>
        <Hello name="inner" />
    </ErrorBoundary>;
}
