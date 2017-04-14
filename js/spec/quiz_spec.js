var quiz = require('../index');

describe("a program to quiz users on classmate identities", () => {

  it("can read the csv data", () => {
    expect(quiz.csvRead("blah,blah,blah"))
      .toEqual(['blah','blah','blah']);
  it("can read the csv data", () => {
    expect(quiz.csvRead("foo,bar,baz"))
      .toEqual(['foo','bar','baz'])
  });

});



