QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 <= "3", "1<3 - the first agrument is 'truthy', so we pass!");
});
QUnit.test('Testing validate function with several sets of inputs', function(assert) {
    assert.equal(validate(5644794), false, 'Tested with seven digits');
    assert.equal(validate(12345), false, 'Tested with five digits');
    assert.equal(validate(1234), false, 'Tested with four digits');
    assert.equal(validate(null), undefined, 'Tested with null digits');
    assert.equal(validate("str"), undefined, 'Tested with String digits');
       
});