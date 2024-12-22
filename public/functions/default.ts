import { NextRouter } from "next/router";

interface routerOptions {
  query?: Record<string, string | number | boolean>;
  shallow?: boolean;
}

const routerPush = (router: NextRouter, pathName: string, options?: routerOptions) => {
  router.push({ pathname: pathName, query: options?.query }, undefined, { shallow: options?.shallow });
}
const routerReplace = (router: NextRouter, pathName: string, options: routerOptions) => {
  router.replace({ pathname: pathName, query: options?.query }, undefined, { shallow: options?.shallow });
}
const pageReload = (router: NextRouter) => {
  router.reload();
}

export { routerPush, routerReplace, pageReload };