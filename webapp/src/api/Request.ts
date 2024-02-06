import axios from "axios";


export class Request {

    private static readonly BASE_URL = `https://jsonplaceholder.typicode.com/`;

    private static readonly SWAPI_BASE_URL = `https://swapi.dev/api/`;

    public static getTodoFromJsonPlaceholder(index: number) {
        let URL = `${Request.BASE_URL}/todos/${index}/`;
        return axios
            .get(URL)
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                return err;
            })
    }

    //Lets do a call
    public static getPersonFromSwapiAPI(index: number) {
        let URL = `${Request.SWAPI_BASE_URL}/people/${index}/`;
        // const httpsAgent = new https.Agent({
        //   rejectUnauthorized: false,
        // });
        return axios
            .get(URL)
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                console.error(err)
            })
    }



}



