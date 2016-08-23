
QUnit.module('Test sum', {

    beforeEach: function () {},

    afterEach: function () {}

});



function sum(a, b) {
    return a+b;
}


QUnit.test('First test', function (assert) {
    var result = sum(2, 2);
    assert.equal(result, 4, 'Easy one');
});


QUnit.test('Second test', function (assert) {
    var result = sum(2, 0);
    assert.equal(result, 2, 'Zero neutral');
});


QUnit.test('Third test', function (assert) {
    var result = sum(50, 50);
    assert.equal(result, 99, 'Boom');
});
