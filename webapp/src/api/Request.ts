import axios, {
  AxiosError,
  AxiosHeaderValue,
  AxiosHeaders,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

import fs from "fs";
import https from "https";

export class Request {
  private static readonly BASE_URL = `https://jsonplaceholder.typicode.com/`;
  private static readonly SWAPI_BASE_URL = `https://swapi.dev/api/`;

  private static  httpsAgent: https.Agent;
 
  private static  headers = {
    "Content-type": "application/json",
  };

  static {
    //Need to load the certificate
    Request.httpsAgent = new https.Agent({
      ca: fs.readFileSync("C:/cert/chain_bundle.pem"),
      cert: fs.readFileSync("C:/cert/chain_bundle.pem"),
    });
    
  }

  public static async getTodoFromJsonPlaceholder(index: number) {
    let APIUrl = `${Request.BASE_URL}/todos/${index}/`;
    
  
    const requestConfig: AxiosRequestConfig = {
      method: "get",
      headers: Request.headers,
      httpAgent:Request.httpsAgent
    };
    try {
      let response = await axios.get(APIUrl, requestConfig);
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      console.log(error);
    }
  }

  //Lets do a call
  public static async getPersonFromSwapiAPI(index: number) {
    let URL = `${Request.SWAPI_BASE_URL}/people/${index}/`;
    // const httpsAgent = new https.Agent({
    //   rejectUnauthorized: false,
    // });
    const requestConfig: AxiosRequestConfig = {
      method: "get",
      headers: Request.headers,
      httpAgent:Request.httpsAgent
    };
    try {
      let response = await axios.get(URL, requestConfig);
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      console.log(error);
    }
    // return axios
    //   .get(URL)
    //   .then((response) => {
    //     return response.data;
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  }
}
export const testJsonPlaceHolder = async (index: number) => {
  const httpsAgent = new https.Agent({
    ca: fs.readFileSync("C:/cert/chain_bundle.pem"),
    cert: fs.readFileSync("C:/cert/chain_bundle.pem"),
  });
  const RootUrl = `https://jsonplaceholder.typicode.com/todos`;

  let APIUrl = `${RootUrl}/${index}/`;
  const headers = {
    "Content-type": "application/json",
  };

  const requestConfig: AxiosRequestConfig = {
    method: "get",
    headers: headers,
    httpAgent:httpsAgent
  };
  try {
    let response = await axios.get(APIUrl, requestConfig);

    return response.data;
  } catch (err) {
    const error = err as AxiosError;
    console.log(error);
  }
};
