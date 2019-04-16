
import axios from './axios'
import qs from 'qs'
export function get(url,data){
    url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
    return new Promise((resolve,reject) => {
      axios.get(url)
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
    })
  }

export function post(url,data){
    var qsData = qs.stringify(data)
    return new Promise((resolve,reject) => {
        axios.post(url,qsData)
            .then(response => {
                resolve(response.data);
            },err => {
                reject(err)
            })
    })
}

export function param(data) {
    let url = ''
    for (var k in data) {
      let value = data[k] !== undefined ? data[k] : ''
      url += '&' + k + '=' + encodeURIComponent(value)
    }
    return url ? url.substring(1) : ''
  }
  