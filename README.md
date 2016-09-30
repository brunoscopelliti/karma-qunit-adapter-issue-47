# karma-qunit-adapter-issue-47

The purpose of this repo it's to demonstrate an [issue](https://github.com/karma-runner/karma-qunit/issues/47) I'm facing with `karma-qunit`.

```
Update 30 Semptember, 2016
Updating `karma-qunit` to version 1.2.1 solves the issue.
```

Steps:
---

- Install dependencies

```
cd path/to/this/repo
npm i
```

- Run the Demo

```
npm start
```

Result:
---

When there's at least a failing test, the adapter enters in a never ending loop in which it continues to log the exception (look at the image in this repo).

Considerations
---

I am not expert about QUnit internals, however I noticed that when a test fails, QUnit creates an *internal* test that it uses somehow to track the failing test... `karma-qunit` executes the `testDone` callback even for this *fake* (or better internal) test.

I don't know if this is wanted, or necessary, but it seem to be the cause of the never ending log stream.
