import multer from "multer";
import path from "path";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const path = "./upload";
    fs.mkdirSync(path, { recursive: true });

    cb(null, path);
  },
  filename: function (req, file, cb) {
    const [, extension] = file.originalname.split(".");

    cb(null, uuidv4() + "." + extension);
  },
});

function checkFileType(
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) {
  const allowedTypes = /jpeg|jpg|png/;

  const extensionName = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );

  const mimetype = allowedTypes.test(file.mimetype);

  if (mimetype && extensionName) {
    return cb(null, true);
  } else {
    return cb(null, false);
  }
}

export const upload = multer({
  storage,
  fileFilter: function (_req, file, cb) {
    checkFileType(file, cb);
  },
});
