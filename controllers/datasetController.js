const { catchAsyncError } = require("../middlewares/catchAsyncError");
const DatasetModel = require("../models/dataset");
const ErrorHandler = require("../utils/ErrorHandler");

const xlsx = require("xlsx");

exports.create = catchAsyncError(async (req, res, next) => {
  const data = await DatasetModel.create(req.body);

  return res.status(200).json({ success: true, data });
});

exports.get = catchAsyncError(async (req, res, next) => {
  const data = await DatasetModel.find();
  const count = await DatasetModel.countDocuments();
  return res.status(200).json({ success: true, count, data });
});

exports.update = catchAsyncError(async (req, res, next) => {
  const dataToUpdate = req.params.id;
  if (!dataToUpdate) return next(new ErrorHandler("Provide id of data", 400));

  //find and update the data

  const updatedData = await DatasetModel.findByIdAndUpdate(
    dataToUpdate,
    req.body,
    {
      new: true,
    }
  );

  return res.status(200).json({ success: true, data: updatedData });
});

exports.deleteData = catchAsyncError(async (req, res, next) => {
  const dataToDelete = req.params.id;
  if (!dataToDelete) return next(new ErrorHandler("Data not Found", 400));

  await DatasetModel.findByIdAndDelete(dataToDelete);

  return res
    .status(200)
    .json({ success: true, message: "data deleted successfully" });
});

exports.uploadExcel = catchAsyncError(async (req, res, next) => {
  console.log("uploaded file is ", req.file);
  const filePath = req.file.path;
  const workbook = xlsx.readFile(filePath);

  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

  const documents = data.slice(1).map((row) => ({
    name: row[0],
    email: row[1],
    phone: row[2],
    age: row[3],
    city: row[4],
  }));

  await DatasetModel.insertMany(documents);

  return res.status(200).json({ message: "uploaded successfully" });
});
