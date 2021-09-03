## flatpickr - javascript datetime picker
[![Build Status](https://circleci.com/gh/flatpickr/flatpickr/tree/master.svg?style=shield)](https://circleci.com/gh/flatpickr/flatpickr/tree/master)

[![Coverage](https://coveralls.io/repos/github/chmln/flatpickr/badge.svg?branch=master)](https://coveralls.io/github/chmln/flatpickr)
[![npm version](https://badge.fury.io/js/flatpickr.svg)](https://www.npmjs.com/package/flatpickr)
[![CDNJS](https://img.shields.io/cdnjs/v/flatpickr.svg)](https://cdnjs.com/libraries/flatpickr)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=plastic)](https://raw.githubusercontent.com/flatpickr/flatpickr/master/LICENSE.md)

## changes in this version:
# Changes:
- use button for calendar dates - aria tags on span or div is not read by a screenreader and the navigation is easier with buttons.
- use buttons for calendar month arrows
- added tab trapping.

# new config params changes
- toMonthOnOpen: true : If dialog is closed and the calendar is not on the month of the current date, go to month of the curent date when open.
- stopNoMoreDates: false : If "true" and there is a list of available dates stop navigation to next/prev month if no available dates and show a message
- noMoreDatesText: "No more available dates on {m} {y}" : actual message if navigation to next/prev month is trapped. m = month, y = year
- openOnFocus: If "true" - calendar open when input if focused, else kalender vil open on enter

## Motivation
We need a more Universal Designed version of the calendar than the original

## Compatibility
Edge, iOS Safari 6+, Chrome 8+, Firefox 6+
This version is not testet for IE

## Install & Use

Demos and documentation for original: https://flatpickr.js.org

See also:
* [angular2+-flatpickr addon](https://github.com/mezoistvan/ng2-flatpickr)
* [angularJS-flatpickr addon](https://www.npmjs.com/package/angular-flatpickr)
* [ember-flatpickr addon](https://www.npmjs.com/package/ember-flatpickr)
* [Preact Component](https://github.com/molnarmark/preact-flatpickr)
* [React Component](https://github.com/coderhaoxin/react-flatpickr)
* [Stimulus.js Controller](https://github.com/adrienpoly/stimulus-flatpickr)
* [Svelte Component](https://github.com/jacobmischka/svelte-flatpickr)
* [vue-flatpickr component](https://github.com/ankurk91/vue-flatpickr-component)
* [lit-flatpickr component](https://github.com/Matsuuu/lit-flatpickr)

## Supporting flatpickr

flatpickr will never change its license, pester users for donations, or engage in other user-hostile behavior.

Nevertheless, if you enjoyed working with this library or if its made your life easier, you can buy me a cup of coffee :)

<a href='https://ko-fi.com/A3381DJ9' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://az743702.vo.msecnd.net/cdn/kofi4.png?v=0' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
