const express = require("express");
const controllers = require("../app/controllers");
const { authController } = require("../app/controllers/api/v1");
const cloudStorage = require("./cloudStorage");
const swaggerUI = require("swagger-ui-express");
const OpenAPI=require("../openAPI.json");

const apiRouter = express.Router();

// Swagger
apiRouter.use("/api/v1/docs", swaggerUI.serve, swaggerUI.setup(OpenAPI));

// Check Current User
apiRouter.get(
  "/api/v1/whoami",
  authController.authorize,
  controllers.api.v1.authController.whoAmI
);
// Auth Login (All User) & Register (Member)
apiRouter.post("/api/v1/register", controllers.api.v1.authController.register);
apiRouter.post("/api/v1/login", controllers.api.v1.authController.login);
// register admin
apiRouter.post(
  "/api/v1/admin/register",
  controllers.api.v1.authController.authorizeSuperAdmin,
  controllers.api.v1.authController.registerAdmin
);



// Cars (Admin & Super Admin)
apiRouter.get(
  "/api/v1/cars",
  controllers.api.v1.authController.authorize,
  cloudStorage.single("car_image"),
  controllers.api.v1.carsController.getAll
);
apiRouter.post(
  "/api/v1/car/create",
  controllers.api.v1.authController.authorizeAdmin,
  cloudStorage.single("car_image"),
  controllers.api.v1.carsController.create
);
apiRouter.put(
  "/api/v1/car/update/:id",
  controllers.api.v1.authController.authorizeAdmin,
  cloudStorage.single("car_image"),
  controllers.api.v1.carsController.update
);

apiRouter.delete(
  "/api/v1/car/delete/:id",
  controllers.api.v1.authController.authorizeAdmin,
  cloudStorage.single("car_image"),
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
