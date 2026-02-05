import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { ErrorBoundary} from 'react-error-boundary'

function ErrorFallback ({error, resetErrorBoundary}){
  return (
    <div> 
      <h2>Yikes! Something went wrong </h2> <p>{error.message}</p>
      <button onclick={resetErrorBoundary}> Try Again </button>
    </div>
  )

}


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
    <Suspense fallback= {<div>Loading...</div>}>
    <App />
    </Suspense>
    </ErrorBoundary>
  </StrictMode>
  </BrowserRouter>
)
