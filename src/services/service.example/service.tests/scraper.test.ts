/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */ 
import { describe, expect, test } from '@jest/globals';


describe('example tests', () => {

    beforeEach( async ( ) => {
        console.log('before each test');
    });

    afterEach( async () => {
        console.log('after each test');
    });
    
    // can accept cookies
    // can open rewviews.
    // can get html. 
    // html contains correct elements.

    test('can click and cookies popup' , async ( ) => {
        expect( 2 == 2 ).toBe(true);
    });

    test('can then open google reviews' , async ( ) => {
        expect( 2 > 1 ).toBe(true);
    });

    test('can scrape reviews using stored selectors' , async ( ) => { 
        expect([ 1 , 2 , 4 ]).toBeGreaterThan(0);
    });
});