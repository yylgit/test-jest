const sum = require('./sum');
const {fetchDataSuccess, fetchDataFail} = require('./fetchData');




// test('adds 1 + 2 to equal 3', () => {
//   console.log('test adds 1 + 2 to equal 3')
//   expect(sum(1, 2)).toBe(3);
// });

describe('describe inner', ()=>{
  console.log('describe inner');
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));  

 

  test('null', () => {
    console.log('test null')
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
  });

  describe('describe inner2', ()=>{
    console.log('describe inner2');
    beforeEach(() => console.log('3 - beforeEach'));
    afterEach(() => console.log('3 - afterEach'));  
    test('null3', () => {
      console.log('test null3')
      const n = null;
      expect(n).toBeNull();
      expect(n).toBeDefined();
      expect(n).not.toBeUndefined();
    });
  })
})
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));