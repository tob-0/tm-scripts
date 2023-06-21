class HttpClient {
  static _instance = null;

  static get instance() {
    if (!HttpClient._instance) {
      HttpClient._instance = new XMLHttpRequest();
    }
    return HttpClient._instance;
  }

  static get(url) {
    return new Promise((resolve, reject) => {
      HttpClient.instance.open("GET", url);
      HttpClient.instance.onload = () => {
        Logger.debug(
          `GET ${url} [${HttpClient.instance.status}] ${HttpClient.instance.statusText}`
        );
        if (
          HttpClient.instance.status >= 200 &&
          HttpClient.instance.status < 300
        ) {
          resolve(HttpClient.instance.response);
        } else {
          reject(HttpClient.instance.statusText);
        }
      };
      HttpClient.instance.onerror = () =>
        reject(HttpClient.instance.statusText);
      HttpClient.instance.send();
    });
  }
}
