const sum = require('./sum');
const {fetchDataSuccess, fetchDataFail} = require('./fetchData');

// beforeEach(() => console.log('1 - beforeEach'));

test('adds 1 + 2 to equal 3', () => {
  // throw '222'
  expect(sum(1, 2)).toBe(3);
  
});

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  // expect(n).not.toBeTruthy();
  // expect(n).toBeFalsy();
  // test中有一个错误的时候 后边的就停止执行
  // expect(n).toBeTruthy();
  // expect(n).not.toBeFalsy();
});

test('the data is fetchDataSuccess', () => {
  return fetchDataSuccess().then(data => {
    expect(data).toBe('fetchDataSuccess');
  });
});

// test('the data is fetchDataSuccess', () => {
//   return expect(fetchDataFail()).rejects.toMatch('error');
// });