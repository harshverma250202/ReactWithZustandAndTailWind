import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

export function DefaultErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div className='flex flex-col justify-center align-items-center h-screen'>
            <div className='flex justify-center text-red-500'>Something went wrong:</div>
            <div className='flex justify-center'>{error.message}</div>
            <div className='flex justify-center'><button className='bg-blue-100 w-[20%] border-black' onClick={resetErrorBoundary}>Try again</button></div>

        </div >
    );
}
export function DefaultOnReset() {
    window.location.reload();
}

export function ErrorBoundary({ children, ErrorFallbackComponent = DefaultErrorFallback, onReset = DefaultOnReset }) {
    return (
        <ReactErrorBoundary
            FallbackComponent={ErrorFallbackComponent}
            onReset={onReset}
        >
            {children}
        </ReactErrorBoundary>
    );
}

