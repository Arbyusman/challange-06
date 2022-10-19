const express = require("express");
const controllers = require("../app/controllers");
const cloudStorage = require("./cloudStorage");

const apiRouter = express.Router();

//register member
apiRouter.post("/api/v1/register", controllers.api.v1.authController.register);

// register admin
apiRouter.post(
  "/api/v1/register_admin",
  controllers.api.v1.authController.authorizeSuperAdmin,
  controllers.api.v1.authController.registerAdmin
);

// login all users
apiRouter.post("/api/v1/login", controllers.api.v1.authController.login);

//get list user
apiRouter.get(
  "/api/v1/users",
  controllers.api.v1.authController.authorize,
  controllers.api.v1.authController.findAllUser
);

//cars
apiRouter.get("/api/v1/cars", controllers.api.v1.carsController.getAll);
apiRouter.post(
  "/api/v1/cars",
  controllers.api.v1.authController.authorize,
  cloudStorage.single("car_image"),
  controllers.api.v1.carsController.create
);
apiRouter.put(
  "/api/v1/cars/:id",
  controllers.api.v1.authController.authorize,
  controllers.api.v1.carsController.update
);
apiRouter.get("/api/v1/cars/:id", controllers.api.v1.carsController.getById);
apiRouter.delete(
  "/api/v1/cars/:id",
  controllers.api.v1.authController.authorize,
  controllers.api.v1.carsController.destroy
);

apiRouter.get("/api/v1/errors", () => {
  throw new Error(
    "The Industrial Revolution and its consequences have been a disaster for the human race."
  );
});

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;
