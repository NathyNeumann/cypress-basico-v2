# Cypress basic v2

A simple call center application. containing a form and a privacy policy page. It is a fork Walmyr Filho's project - CAT TAT - studying about Cypress basic.

## Pre-requirements

It is required to have NODE.JS and NPM installed to run this project.

> I used versions `16.15.0` and `8.5.5` of Node.js and npm, respectively. I used yarn instead npm in version `1.22.18`. I suggesr you use this versions or later.

You will need a browser too.

> I used Google Chrome

## Installation

Run `npm install` or `yarn` (or `npm i` for short form) to install the dev dependencies

## Tests

You can run tests si,ulating a desktop oe mobile viewport.

### Desktop

Run `npm test`or `yarn test` (or `npm t`for the short version) to run the test in headless mode on a desktop viewport.

Or, run `npm run cy:open` or `yarn cy:open` to open Cypress in interactive mode on desktop viewport.

### Mobile

You can run tests on mobile viewport using `npm test:mobile` or `yarn test:mobile` in headless mode and `npm run cy:open:mobile` or `yarn cy:open:mobile` to run tests on interactive mode.
