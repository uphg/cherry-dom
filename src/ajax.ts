interface AjaxParam {
  url: string
  baseURL: string,
  method: string,/* 'get' | 'GET' | 'post' | 'POST' | 'put' | 'PUT' | 'delete' | 'DELETE' */
  body: Document | XMLHttpRequestBodyInit | null | undefined
  headers: { [key: string]: string }
}

const create = function ({ url, baseURL, method, body, headers }: AjaxParam) {

  if (method) {
    return new Promise(function(resolve, reject) {
      const request = new XMLHttpRequest();
      request.open(method, url);
  
      const keys = Object.keys(headers)
  
      keys.forEach((key) => {
        request.setRequestHeader(key, headers[key]);
      })
  
      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          if (request.status >= 200 && request.status < 300) {
            resolve.call(undefined, request.responseText);
          } else if (request.status >= 400) {
            reject.call(undefined, request);
          }
        }
      }
      request.send(body);
    })
  }
  
  return {
    get() {
      
    }
  }
  
}