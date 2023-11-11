// 📄 math.js

// 📄 math.js

function sum(a, b) {
  if (Array.isArray(a)) {
    let sum = 0
    a.forEach((i) => (sum += i))
    return sum
  } else if (typeof a === 'number' && typeof b === 'number') {
    return a + b
  }
}





// ... module.export ...




module.exports = {
  sum,
}


