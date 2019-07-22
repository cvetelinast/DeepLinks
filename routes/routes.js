var appRouter = function (app) {
    app.get("/", function(req, res) {
      res.status(200).send("Welcome to our restful API");
    });

    app.get("/deeplinks", function(req, res) {
        res.status(200).send("Hello from the Deep Links");
      });
  }
  
  module.exports = appRouter;