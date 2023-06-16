//we will wrap all of our controllers inside this function
//this function calls the passed controller inside a try-catch block.
//this way you will not have to write try catch blocks in each controller.
//an example of how you would use this is
// const myController = catchAsyncError(async (req,res,next)=>{})

exports.catchAsyncError = (controllerFunction) => (req, res, next) => {
    Promise.resolve(controllerFunction(req, res, next)).catch(next);
  };