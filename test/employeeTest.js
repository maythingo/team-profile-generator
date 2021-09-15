const { expect, it } = require('@jest/globals');
const Employee = require('../lib/employee');

describe('employee', () =>{
    describe('Initialization', () =>{
        it('should create an object with name,id, and email if provided', () =>{
         
            expect(employee.email).toEqual('may@example.com');
        });
    
      
