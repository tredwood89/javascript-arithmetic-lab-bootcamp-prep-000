var a, b

beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})

it('add(a, b) adds two numbers and returns the result', function() {
  expect(add(a, b)).toEqual(a + b)
})
  function add(a,b) {
    return (a+b)
  }
it('subtract(a, b) subtracts b from a and returns the result', function() {
  expect(subtract(a, b)).toEqual(a - b)
})
  function subtract(a,b) {
    return (a-b)
}
it('multiply(a, b) multiplies two numbers and returns the result', function() {
  expect(multiply(a, b)).toEqual(a * b)
})
  function multiply(a,b) {
    return (a*b)
}

it('divide(a, b) divides a by b and returns the result', function() {
  expect(divide(a, b)).toEqual(a / b)
})
  function divide(a,b) {
    return (a/b)
}

it('inc(n) increments n and returns the result', function() {
  expect(inc(a)).toEqual(a + 1)
})
  function inc(a) {
    return (a+=1)
  }

it('dec(n) decrements n and returns the result', function() {
  expect(dec(a)).toEqual(a - 1)
})
function dec(a) {
  return (a-=1)
}

describe('makeInt(n)', function() {
  it('parses n as an integer and returns the parsed integer', function() {
    expect(makeInt(a.toString())).toEqual(a)
  })
  function makeInt(n) {
    var n = 5 {
    return parseInt(a,10)
  }
}
  it('assumes base 10', function() {
    expect(makeInt('0x2328')).toEqual(0)
  })
  function makeInt(n) {
    return parseInt(0*2328, 10)
  }
  it('returns NaN as appropriate', function() {
    expect(isNaN(makeInt('sldkjflksjf'))).toEqual(true)
  })
  function makeInt(n) {
    return parseInt('sldkjflksjf', 10)
  }
})

describe('preserveDecimal(n)', function() {
  it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
    expect(preserveDecimal('2.222')).toBe(2.222)
  })
  function preserveDecimal(n) {
    return parseFloat ('2.222');
  }
    it('returns NaN as appropriate', function() {
    expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
  })
  function preserveDecimal(n) {
    return parseFloat('sldkjflksjf')
  }
})
