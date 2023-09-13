

export function extractQueryParams(query){
   return query.substr(1).split('&').reduce((queryParams, param) => {
    const [key, valuea] = param.split('=');

    queryParams[key] = valuea

    return queryParams
   }, {})
}