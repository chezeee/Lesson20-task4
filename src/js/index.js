/**
 * @param {string} status
 * @param {string} location
 */
const prepareStatus = (status, location) => {
  const userId = 42;
  const data = {
    userId,
    status,
    location,
  };

  const userStatus = JSON.stringify(data);
  console.log(userStatus);
  return userStatus;
};

// Sample usage - do not modify
prepareStatus("My first post!", "Amsterdam");
// '{"userId":42,"status":"My first post!","location":"Amsterdam"}'

prepareStatus("Hello World!", "Berlin");
// '{"userId":42,"status":"Hello World!","location":"Berlin"}'
