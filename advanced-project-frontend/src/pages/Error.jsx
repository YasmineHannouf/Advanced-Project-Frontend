
function ErrorFallback() {
    return <h1>Something went wrong.</h1>;
  }
  
  function MyErrorBoundary() {
    const [hasError, setHasError] = useState(false);
  
    useEffect(() => {
      function errorHandler(error, errorInfo) {
        console.error(error, errorInfo);
        setHasError(true);
      }
  
      if (hasError) {
        // Call your error reporting service here
      }
  
      window.addEventListener("error", errorHandler);
      return () => window.removeEventListener("error", errorHandler);
    }, [hasError]);
  
    if (hasError) {
      return <ErrorFallback />;
    }
  
    return <MyComponent />;
  }
  
  export default MyErrorBoundary;
  
  