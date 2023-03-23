function filterChecker(array:Array<string>, target:Array<string>) {
  return target.every((value) => array.includes(value))
}

export default filterChecker