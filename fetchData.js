
module.exports = {
  fetchDataSuccess() {
    return new Promise(function(resolve, reject) {
      setTimeout(()=>{
        resolve('fetchDataSuccess')
      },1000)
    })
  },
  fetchDataFail() {
    return new Promise(function(resolve, reject) {
      setTimeout(()=>{
        resolve('error')
      },1000)
    })
  }
}