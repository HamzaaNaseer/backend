const express = require("express");
const {
  create,
  get,
  update,
  deleteData,
  uploadExcel,
} = require("../../controllers/datasetController");
const { MessageMediaUploader } = require("../../middlewares/fileUpload");
const router = express.Router();

router.post("/create", create);
router.get("/get", get);
router.patch("/update/:id", update);
router.delete("/delete/:id", deleteData);
router.post("/add/excel", MessageMediaUploader.single("doc"), uploadExcel);
module.exports = router;
