import { SITE } from '~/config.js';
import { trim } from '~/utils/utils';

export const trimSlash = (s: string) => trim(trim(s, '/'));
const createPath = (...params: string[]) => {
  const paths = params
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
  return '/' + paths + (SITE.trailingSlash && paths ? '/' : '');
};

const BASE_PATHNAME = SITE.basePathname;

export const getCanonical = (path = ''): string | URL => {
  const url = String(new URL(path, SITE.origin));
  if (!SITE.trailingSlash && path && url.endsWith('/')) {
    return url.slice(0, -1);
  } else if (SITE.trailingSlash && path && !url.endsWith('/')) {
    return url + '/';
  }
  return url;
};

export const getPermalink = (slug = '', type: 'page' = 'page'): string => {
  let permalink: string;

  switch (type) {
    case 'page':
      permalink = createPath(slug);
      break;
  }

  return definitivePermalink(permalink);
};

export const getHomePermalink = (): string => getPermalink('/');

export const getAsset = (path: string): string =>
  '/' +
  [BASE_PATHNAME, path]
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');

const definitivePermalink = (permalink: string): string => createPath(BASE_PATHNAME, permalink);
