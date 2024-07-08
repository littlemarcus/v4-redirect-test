import type { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  return new URL("/https://www.google.com/", request.url);
};