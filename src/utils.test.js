import { expect } from "chai";
import {getStoriesAndComments} from './utils.js';

describe('Javascript addition operator Test', function() {
    it('add two numbers', function () {
        expect(1+2).lessThanOrEqual(3);
    })
})

describe('getStoriesAndComments method should returns two array', function() {
    it('Returing Two arrays', function () {
        let arr = getStoriesAndComments([]);
        expect(arr.length).equal(2);
    })
})