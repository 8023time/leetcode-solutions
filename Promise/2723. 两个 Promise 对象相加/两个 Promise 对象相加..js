/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  /**
   * 写法一:
   */
  return promise1.then((response) => {
    return promise2.then((response2) => {
      return response + response2;
    });
  });

  /**
   * 写法二:
   */
  const [response1, response2] = await Promise.all([promise1, promise2]); //需要注意的是内部必须要是一个数组
  return response1 + response2;

  /**
   * 写法三:
   */
  return (await promise1) + (await promise2);
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
