import interceptor from "express-interceptor";

export const jsonInterceptor = interceptor((req, res) => {
  return {
    isInterceptable: () => !res.error,
    intercept: function (body, send) {
      let data = body;
      try {
        data = JSON.parse(data);
      } catch {}

      let result = {
        success: true,
        data: data,
      };
      res.set("Content-Type", "application/json");
      send(JSON.stringify(result));
    },
  };
});
