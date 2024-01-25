//Lets try

export abstract class Util {
  public static ERROR_MESSAGE: string = "No data can be found";
 
  //A generic find
  public static genericFind<T>(list: Array<T>, value: T) {
    //call find
    let promise = new Promise<T>((resolve, reject) => {
      let result = list.find((item) => item === value);
      if (result) {
        return resolve(result);
      } else return reject(this.ERROR_MESSAGE);
    });
    return promise;
  }

  public static async asyncFind<T>(list: Array<T>, value: T) {
    
    let result  =  await this.genericFind(list,value);
    return result;
    
  }
}

//A generic find
export function asyncGenericFindFunc<T>(list: Array<T>, value: T) {
  //call find
  let promise = new Promise<T>((resolve, reject) => {
    let result = list.find((item) => item === value);
    if (result) {
      resolve(result);
    } else reject("No data can be found");
  });
  return promise;
}
