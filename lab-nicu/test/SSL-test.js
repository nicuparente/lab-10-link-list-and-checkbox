'use strict';

const SSL = require('../lib/SSL.js');
const  expect = require('expect');

describe('testing SSL', () => {
    it('SSL should exist',()=>{
        let ssl = new SSL();
        expect(ssl).toExist();
        expect(ssl.length).toEqual(0);
    })
    it('adding 3 nodes', () => {
        let ssl = new SSL();

        ssl.add(10);
        ssl.add(20);
        ssl.add(30);

        expect(ssl.length).toEqual(3);
        expect(ssl.head.value).toEqual(10);
        expect(ssl.tail.value).toEqual(30);
    })

    it('adding 3 nodes removing middle', () => {
        let ssl = new SSL();

        ssl.add(10);
        ssl.add(20);
        ssl.add(30);

        ssl.remove(20)
        expect(ssl.length).toEqual(2);
        expect(ssl.head.value).toEqual(10);
        expect(ssl.tail.value).toEqual(30);
    })

    it('reverse linked list', () => {
        let ssl = new SSL();
        ssl.add(10);
        ssl.add(20);
        ssl.add(30);
        ssl.reverse();
        expect(ssl.head.value).toEqual(30);
        expect(ssl.tail.value).toEqual(10);
    })
});