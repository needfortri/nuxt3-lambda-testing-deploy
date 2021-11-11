"use strict";
import { handler } from "./server";

exports.handler = async (event) => {
  const { statusCode, headers, body } = handler({ path: "/" });
  return { statusCode, headers, body };
};
