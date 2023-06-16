const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    //args sequence is errors, destination
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + file.originalname);
  },
});

exports.MessageMediaUploader = multer({
  storage: storage,

  fileFilter: function (req, file, cb) {
    //allowing excell only
    if (
      file.mimetype ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      cb(null, true);
    } else {
      cb(new Error("document type is invalid"), false);
    }
  },
});
