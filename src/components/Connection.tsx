import { HTTP } from "@ionic-native/http/ngx";


export class Connection {
    private static http : HTTP = new HTTP();
    static loggedIn: any = {user: {}};
    static async post(path:string, requestBody: any) {
        let result = undefined
        Connection.http.setHeader('*', String("Content-Type"), String("application/json"));
        Connection.http.setHeader('*', String("Accept"), String("application/json"));
        Connection.http.setDataSerializer('json');
        try {
            result = await Connection.http.post('http://10.0.0.13:8080/IonicProjectsBackEnd'
               + path, requestBody, {});
            result = JSON.parse(result.data);
            result = {
                firstName: result.firstName,
                lastName: result.lastName
            }
        } catch (e) {
            result = { error: JSON.parse(e.error).message}
        }
        return result
    }
}