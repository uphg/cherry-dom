interface AjaxParams {
  url: string
  baseURL: string,
  method: string,/* 'get' | 'GET' | 'post' | 'POST' | 'put' | 'PUT' | 'delete' | 'DELETE' */
  body: Document | XMLHttpRequestBodyInit | null | undefined
  headers: { [key: string]: string }
}

export const ajax = function({ url, method, body, headers }: AjaxParams) {
  return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest()
    request.open(method, url)
    for (let key in headers) {
      let value = headers[key]
      request.setRequestHeader(key, value)
    }

    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status >= 200 && request.status < 300) {
          resolve.call(undefined, request.responseText)
        } else if (request.status >= 400) {
          reject.call(undefined, request)
        }
      }
    }
    request.send(body)
  })
}