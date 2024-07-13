export class CustomError{
    static generarError(name, message, cause, code){
        let error=new Error(message, {cause:cause})
        error.name=name
        error.code=code

        throw error
    }
}

