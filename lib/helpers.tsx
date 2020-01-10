import { pascalCase } from "pascal-case";
import Error from "next/error";

export const groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export const throw404 = () => {
  if (process.browser) {
    return <Error statusCode={404} />;
  } else {
    const e: any = new Error({ title: "404", statusCode: 404, code: "ENOENT" });
    throw e;
  }
};
