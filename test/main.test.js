QUnit.module('MAIN MODULE', {})  // group all these tests together

QUnit.test('TEST add', assert => {
  assert.equal(add(1, 1), 2, 'Positive integers')
  assert.equal(add(-1, -1), -2, 'Negative integers')
  assert.equal(add(-10, 10), 0, 'Mixed')
  assert.equal(add(-1, 10), 9, 'Negative integers')
  assert.equal(add(-5, 10), 5, 'Negative integers')
})

