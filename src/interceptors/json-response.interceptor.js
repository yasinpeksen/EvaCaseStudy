import interceptor from "express-interceptor";

export const jsonInterceptor = interceptor((req, res) => {
  return {
    isInterceptable: true,
    intercept: function (body, send) {
      let result = {
        success: true,
        data: body,
      };
      send(result);
    },
  };
});
