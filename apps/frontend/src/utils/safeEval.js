export function evalWithVariables(func, vars) {
  let varsString = ''
  for (const key in vars) {
    if (typeof vars[key] === 'number') {
      varsString +=  `const ${key} = ${vars[key]};`
    } else if (typeof vars[key] === 'string') {
      varsString += `const ${key} = '${vars[key]}';`
    }
  }
  if (!func.includes('return')) {
    func = `return ${func}`
  }
  return eval(`(function() { ${varsString} ${func}; })()`)
}

// export function safeEval(code, context, opts) {
//   const sandbox = {}
//   const resultKey = 'SAFE_EVAL_' + Math.floor(Math.random() * 1000000)
//   sandbox[resultKey] = {}
//   const clearContext = `
//     (function() {
//       Function = undefined;
//       const keys = Object.getOwnPropertyNames(this).concat(['constructor']);
//       keys.forEach((key) => {
//         const item = this[key];
//         if (!item || typeof item.constructor !== 'function') return;
//         this[key].constructor = undefined;
//       });
//     })();
//   `
//   code = clearContext + resultKey + '=' + code
//   if (context) {
//     Object.keys(context).forEach(function (key) {
//       sandbox[key] = context[key]
//     })
//   }
//   console.log('vm', vm)
//   vm.runInNewContext(code, sandbox, opts)
//   return sandbox[resultKey]
// }
