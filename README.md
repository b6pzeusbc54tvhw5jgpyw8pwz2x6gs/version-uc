[![npm version](https://img.shields.io/npm/v/version-uc.svg?style=flat-square)](https://www.npmjs.com/package/version-uc)


# version-uc

## Install

```
$ npm install version-uc --save-dev
```

## Usage

Add script-tag to use `node_modules/bin/version-uc`
```
{
  "scripts": {
    version: "version-uc",
  }
}
```

Suppose current version is 1.1.0
There are 4 keyword.  `major` `minor` `patch` `clear`

```
$ npm run version
# 1.1.1

$ npm run version
# 1.1.2

$ npm run version minor
# 1.2.0

$ npm run version
# 1.2.1

$ npm run version patch
# 1.2.2

$ npm run version beta
# 1.2.2-beta.1

$ npm run version
# 1.2.2-beta.2

$ npm run version
# 1.2.2-beta.3

$ npm run version patch
# 1.2.3

$ npm run version alpha
# 1.2.3-alpha.1

$ npm run version alpha
# 1.2.3-alpha.2

$ npm run version major
# 2.0.0

$ npm run version mytest
# 2.0.0-mytest.1

$ npm run version
# 2.0.0-mytest.2

$ npm run version clear
# 2.0.0
```

In above example, `alpha` `beta` `mytest` are not keyword. These can be any word you want.

## Usage2 - global

- WIP

## TODO

- [ ] write Usage2 - global
- [ ] test case
- [ ] auto test when push
