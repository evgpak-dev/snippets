```javascript
function handleGlobalError(error, type) {
  const errorData = {
    type: type,
    message: error.message,
    stack: error.stack,
    url: window.location.href,
  }

  console.log(errorData);

  // fetch('/api/log-error', {
  //   method: 'POST',
  //   body: JSON.stringify(errorData),
  //   headers: { 'Content-Type': 'application/json' }
  // });
}

window.onerror = function(message, source, lineno, colno, error) {
  console.warn("window.onerror caught an error");

  const errorObj = error || new Error(message);
  handleGlobalError(errorObj, 'Uncaught Exception');

  return true;
}

window.onunhandledrejection = function(event) {
  console.warn("window.onunhandledrejection caught an error");

  const errorObj = event.reason || new Error('Unknown promise rejection reason');
  handleGlobalError(errorObj, 'Unhandled Promise Rejection');

  event.preventDefault();
}
