const asyncWrapper  = (fn) =>{ //instead of setting up try catch block for every controller we are setting up the asyncWrapper function to every controller
    //in asyncWrapper we take the controller as argument
    //async functions will always return a promise
    return async(req,res,next) =>{
        try{
            await fn(req,res,next)//waiting for the promise to be resolved or rejected
        }catch(error){
            next(error)//passing the error to another middleware which will handel the errors
        }
    }
}

module.exports = asyncWrapper

//wrapping the controller into the middleware