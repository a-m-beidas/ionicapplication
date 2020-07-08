



export class Validation {
    static emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    static registerValidity = {
        email: false,
        password: false,
        firstName: false,
        lastName: false,
        count: 0
    }

    static loginValidity = {
        email: false,
        password: false,
        count: 0
    }
    
    static loginValidation: any = {
        email: {

        }
    }

    static registerValidation: any = {

    }
}
export enum InputField {
    EMAIL, PASSWORD, FIRSTNAME, LASTNAME
}