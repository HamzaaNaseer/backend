//this is our middleware for handling errors

exports.ErrorMiddleware = (err, req, res, next) => {
    console.log("Error is 🔴🔴", err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

  
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  };