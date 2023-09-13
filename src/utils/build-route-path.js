export function buildRoutPath(path) {
  const routeParametersRegex = /:([a-zA-Z]+)/g
  const pathWithParms = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9\-_]+)')

  const pathRegExp = new RegExp(`^${pathWithParms}(?<query>\\?(.*))?$`)

  return pathRegExp
}