export default function ({ $http }) {
  $http.onRequest((config) => {
    $http.setHeader('User-Agent', 'Get REST APi Response! - Your Client!');
  });

  $http.onError((error) => {
    if (error.statusCode === 500) {
      alert('Request Error!');
    } else if (error.statusCode === 405) {
      alert('error 405 - Method Not Found');
    } else {
      alert(`error ${error.statusCode}!!!`);
    }
    // Tip: error.response will be undefined if the connection dropped to the server
    // Tip: You can use error.response.data to get response message
    // Tip: You can return an object or Promise as fallback response to avoid rejection
  });
}
