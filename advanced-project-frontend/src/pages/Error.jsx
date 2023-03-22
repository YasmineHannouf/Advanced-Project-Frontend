// import error from '../'


// function ErrorFallback() {
//     return <>
//     <img src="" alt='Somethings Wrong' width={'500px'} height={'500px'}/>
//     </>

//   }
  
//   function MyErrorBoundary() {
//     const [hasError, setHasError] = useState(false);
  
//     useEffect(() => {
//       function errorHandler(error, errorInfo) {
//         console.error(error, errorInfo);
//         setHasError(true);
//       }
  
//       if (hasError) {
//       }
  
//       window.addEventListener("error", errorHandler);
//       return () => window.removeEventListener("error", errorHandler);
//     }, [hasError]);
  
//     if (hasError) {
//       return <ErrorFallback />;
//     }
  
//     return <MyComponent />;
//   }
  
//   export default MyErrorBoundary;
  
  