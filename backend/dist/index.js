"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  db: () => db
});
module.exports = __toCommonJS(src_exports);
var import_cors = __toESM(require("cors"));
var import_express7 = __toESM(require("express"));

// src/config.ts
var config = {
  API_PORT: 5e3
};

// controllers/Test/test.controller.ts
var import_express = require("express");

// utils/exceptions.ts
var Exception = class {
  constructor(error, status) {
    this.error = error;
    this.status = status;
  }
};
var ServerRequestException = class extends Exception {
  /**
   * On appelle le `constructor` de la classe parente `Exception`
   */
  constructor(error) {
    super(error, 500);
  }
};

// utils/prismaHandler.ts
var handleCreateMissingError = (message) => {
  let messages = message.split("\n");
  return messages[messages.length - 1];
};

// controllers/Test/test.controller.ts
var TestController = (0, import_express.Router)();
TestController.get("/", async (req, res, next) => {
  try {
    let data = await db.testModel.findMany().catch(
      (err) => {
        throw new ServerRequestException(handleCreateMissingError(err.message));
      }
    );
    console.log("hello");
    console.log(data);
    return res.status(200).json(data);
  } catch (err) {
    next(err);
  }
});
TestController.post("/", async (req, res, next) => {
  try {
    let body = req.body;
    let r = await db.testModel.create({
      data: body
    }).catch(
      (err) => {
        throw new ServerRequestException(handleCreateMissingError(err.message));
      }
    );
    console.log(r);
    res.status(201).json(r);
  } catch (err) {
    console.log(err);
    next(err);
  }
});
TestController.patch("/:id", async (req, res, next) => {
  try {
    console.log("patch");
    const id = Number(req.params.id);
    let body = req.body;
    const test = await db.testModel.update({
      where: {
        id
      },
      data: body
    }).catch(
      (err) => {
        throw new ServerRequestException(handleCreateMissingError(err.message));
      }
    );
    res.status(200).json(test);
  } catch (err) {
    next(err);
  }
});
TestController.delete("/:id", async (req, res, next) => {
  try {
    console.log("delete");
    const id = Number(req.params.id);
    const test = await db.testModel.delete({
      where: {
        id
      }
    }).catch(
      (err) => {
        throw new ServerRequestException(handleCreateMissingError(err.message));
      }
    );
    res.status(200).json(test);
  } catch (err) {
    next(err);
  }
});

// src/index.ts
var import_client = require("@prisma/client");

// middlewares/exceptions.handler.ts
var import_multer = require("multer");
var ExceptionsHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  if (err.status && err.error) {
    return res.status(err.status).json({ error: err.error });
  }
  if (err instanceof import_multer.MulterError) {
    let err_ = err;
    console.log("Error code");
    console.log(err_.code);
    if (err_.code === "LIMIT_FILE_SIZE") {
      return res.status(500).json({
        error: "File size exceeds limit"
      });
    } else if (err_.code === "LIMIT_UNEXPECTED_FILE") {
      return res.status(500).json({
        error: "File type must be (JPG, PNG, GIF, WEBP)"
      });
    }
  }
  return res.status(500).json({ error: "Internal Error" });
};

// controllers/User/user.controller.ts
var import_express2 = require("express");

// utils/helper.ts
var import_ethers = require("ethers");
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var verifySignature = (address, signature) => {
  console.log(`Verifying signature ${signature}`);
  const signerAddr = import_ethers.ethers.verifyMessage(address, signature);
  if (signerAddr !== address) {
    return false;
  } else {
    return true;
  }
};
function deleteFile(path_) {
  const filePath = import_path.default.resolve(path_);
  import_fs.default.unlink(filePath, (err) => {
    if (err) {
      console.error(`Error deleting file ${filePath}: ${err}`);
    } else {
      console.log(`File ${filePath} has been deleted.`);
    }
  });
}

// controllers/User/user.controller.ts
var UserController = (0, import_express2.Router)();
UserController.post("/:address", async (req, res, next) => {
  try {
    console.log("fetching User..");
    const add = req.params.address;
    let body = req.body;
    let res_sig = verifySignature(add, body.signature);
    if (res_sig) {
      const userData = await db.userModel.findUnique({
        where: {
          address: add
          /* hna fen mab9atch katgheni omkltom */
        }
      }).catch(
        (err) => {
          throw new ServerRequestException(handleCreateMissingError(err.message));
        }
      );
      if (!userData) {
        console.log("Creating new user");
        let newUserData = await db.userModel.create({
          data: {
            address: add
          }
        }).catch(
          (err) => {
            throw new ServerRequestException(handleCreateMissingError(err.message));
          }
        );
        res.json(newUserData);
      } else {
        console.log("User Found");
        res.json(userData);
      }
    } else {
      throw new ServerRequestException("Signature Verification Failed");
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    next(error);
  }
});
UserController.patch("/:address", async (req, res, next) => {
  try {
    console.log("fetching User..");
    const add = req.params.address;
    let body = req.body;
    let res_sig = verifySignature(add, body.signature);
    if (res_sig) {
      if (add !== body.data.address) {
        throw new ServerRequestException("Address Missmatch");
      }
      const userData = await db.userModel.update({
        where: {
          address: add
          /* hna fen mab9atch katgheni omkltom */
        },
        data: body.data
      }).catch(
        (err) => {
          throw new ServerRequestException(handleCreateMissingError(err.message));
        }
      );
      console.log("User Found");
      res.json(userData);
    } else {
      throw new ServerRequestException("Signature Verification Failed");
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    next(error);
  }
});
UserController.get("/:address", async (req, res, next) => {
  try {
    const add = req.params.address;
    const userData = await db.userModel.findUnique({
      where: { address: add }
    }).catch(
      (err) => {
        throw new ServerRequestException(handleCreateMissingError(err.message));
      }
    );
    if (!userData) {
      console.log("User not found");
      res.status(404).json({ message: "User not found" });
    } else {
      console.log("User Found");
      res.json(userData);
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    next(error);
  }
});

// controllers/Verification/Verification.controller.ts
var import_express3 = require("express");
var VerificationController = (0, import_express3.Router)();
VerificationController.post("/", async (req, res, next) => {
  let data = req.body;
  console.log("verification data ", data);
  try {
    let res_sig = verifySignature(data.address, data.signature);
    if (!res_sig) {
      throw new ServerRequestException("Signature Verification Failed");
    }
    const userData = await db.userModel.findUnique({
      where: {
        address: data.address
        /* hna fen mab9atch katgheni omkltom */
      }
    }).catch(
      (err) => {
        throw new ServerRequestException(handleCreateMissingError(err.message));
      }
    );
    if (!userData) {
      console.log("Creating new user");
      let newUserData = await db.userModel.create({
        data: {
          address: data.address
        }
      }).catch(
        (err) => {
          throw new ServerRequestException(handleCreateMissingError(err.message));
        }
      );
      res.json(newUserData);
    }
    return res.status(200).json({
      verified: true
    });
  } catch (err) {
    next(new ServerRequestException("Signature Verification Failed"));
  }
});

// controllers/Product/Product.controller.ts
var import_express4 = require("express");

// configurations/multerConfig.ts
var import_multer2 = __toESM(require("multer"));
var import_path2 = __toESM(require("path"));
var FILE_SIZE = 4e6;
var DESTINATION = import_path2.default.resolve("uploads");
var storage = import_multer2.default.diskStorage({
  destination: function(req, file, cb) {
    cb(null, DESTINATION);
  },
  filename: function(req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = import_path2.default.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + extension);
  }
});
var upload = (0, import_multer2.default)({
  storage,
  limits: {
    fileSize: FILE_SIZE
  },
  fileFilter(req, file, cb) {
    console.log("called before error");
    console.log(file.size);
    console.log(import_path2.default.resolve("uploads"));
    if (!file.originalname.toLowerCase().match(/\.(jpg|jpeg|png|gif|webp)$/)) {
      return cb(new import_multer2.MulterError("LIMIT_UNEXPECTED_FILE"));
    }
    cb(null, true);
  }
});

// controllers/Product/Product.controller.ts
var ProductController = (0, import_express4.Router)();
var numberFields = ["shippingCost", "minimumDeliveryTime", "maximumDeliveryTime", "Price", "quantity"];
ProductController.post("/create/:address", upload.array("image", 4), async (req, res, next) => {
  try {
    const add = req.params.address;
    console.log("address ", add);
    let body = req.body;
    let res_sig = verifySignature(add, body.signature);
    if (res_sig) {
      let files = req.files;
      console.log(files);
      let body2 = req.body;
      let _a = body2, { signature, category } = _a, newBody = __objRest(_a, ["signature", "category"]);
      console.log(body2);
      for (let key of numberFields) {
        newBody[key] = Number(newBody[key]);
      }
      newBody.isAuction = newBody.isAuction === "true";
      console.log(newBody);
      const userData = await db.userModel.findUnique({
        where: { address: add }
      }).catch(
        (err) => {
          throw new ServerRequestException(handleCreateMissingError(err.message));
        }
      );
      console.log(userData);
      if (!userData) {
        throw new ServerRequestException("User Not found");
      } else {
        let im_array = files == null ? void 0 : files.map((e, i) => {
          let relative_path = "/uploads/" + e.filename;
          let url = "/images/" + e.filename;
          let temp = {
            filename: e.filename,
            physicalPath: relative_path,
            fileUrl: url
          };
          return temp;
        });
        let userAndProduct = await db.userModel.update({
          where: {
            id: userData == null ? void 0 : userData.id
          },
          data: {
            products: {
              create: [
                __spreadProps(__spreadValues({}, newBody), {
                  catgId: Number(category),
                  images: {
                    create: im_array
                  }
                })
              ]
            }
          },
          select: {
            products: {
              select: {
                id: true
                // Select the 'id' field of the newly created product
              }
            }
          }
        }).catch(
          (err) => {
            throw new ServerRequestException(handleCreateMissingError(err.message));
          }
        );
        console.log(userAndProduct);
        return res.status(201).json({
          pid: userAndProduct.products[userAndProduct.products.length - 1].id
        });
      }
    } else {
      throw new ServerRequestException("Signature Verification Failed");
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
});
ProductController.delete("/delete/:id/:address/:signature", async (req, res, next) => {
  try {
    const add = req.params.address;
    console.log("address ", add);
    let body = req.params;
    let productId = Number(body.id);
    let res_sig = verifySignature(add, body.signature);
    if (res_sig) {
      const product = await db.product.findUnique({
        where: { id: productId },
        include: {
          images: {
            select: {
              id: true,
              fileUrl: true,
              filename: true
            }
          }
        }
      });
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      for (let image of product.images) {
        deleteFile("./uploads/" + image.filename);
      }
      let product_ = await db.product.delete({
        where: { id: productId }
      });
      console.log(product_);
      return res.status(200).json(product_);
    } else {
      throw new ServerRequestException("Signature Verification Failed");
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
});
ProductController.get("/list", async (req, res, next) => {
  try {
    const products = await db.product.findMany({
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true
          }
        },
        images: {
          select: {
            id: true,
            fileUrl: true,
            filename: true
          }
        }
      }
    });
    console.log("Fetched products:", products);
    return res.status(200).json(products);
  } catch (err) {
    console.log(err);
    next(err);
  }
});
ProductController.get("/:id", async (req, res, next) => {
  try {
    const productId = parseInt(req.params.id);
    const product = await db.product.findUnique({
      where: { id: productId },
      include: {
        images: {
          select: {
            id: true,
            fileUrl: true,
            filename: true
          }
        }
      }
    });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    console.log(product);
    return res.status(200).json(product);
  } catch (err) {
    console.log(err);
    next(err);
  }
});
ProductController.get("/myproduct/:address", async (req, res, next) => {
  try {
    const { address } = req.params;
    const userData = await db.userModel.findUnique({
      where: { address },
      include: {
        products: {
          include: {
            images: true,
            category: true
          }
        }
      }
    });
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }
    console.log(`Fetched products for user at address ${address}:`, userData.products);
    return res.status(200).json(userData.products);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

// controllers/Category/Category.controller.ts
var import_express5 = require("express");
var CategoryController = (0, import_express5.Router)();
CategoryController.get("/categories", async (req, res) => {
  try {
    const categories = await db.category.findMany({
      include: {
        products: false
      }
    });
    res.json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error fetching categories" });
  }
});

// controllers/Order/OrderController.ts
var import_express6 = require("express");
var OrderController = (0, import_express6.Router)();
OrderController.post("/create", async (req, res, next) => {
  try {
    const body = req.body;
    const newOrder = await db.order.create({
      data: {
        orderId: body.orderId,
        sellerId: body.sellerId,
        buyerId: body.buyerId,
        productId: body.productId
      }
    });
    res.json(newOrder);
  } catch (error) {
    console.error("Error creating order:", error);
    next(error);
  }
});

// src/index.ts
var db = new import_client.PrismaClient();
var app = (0, import_express7.default)();
app.use(import_express7.default.json());
app.use((0, import_cors.default)());
app.use("/api/user", UserController);
app.use("/tests", TestController);
app.use("/verify", VerificationController);
app.use("/product", ProductController);
app.use("/category", CategoryController);
app.use("/order", OrderController);
app.use("/images", import_express7.default.static("uploads"));
app.use(ExceptionsHandler);
app.listen(config.API_PORT, () => {
  console.log(`Server running on http://localhost:${config.API_PORT}`);
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  db
});
