const { expect, it } = require('@jest/globals');
const Manager = require('../lib/manager');

describe('manager', () =>{
    describe('Initialization', () =>{
        it('should create an object with name,id,email,officeNumber if provided', () =>{
            const manager= new Manager('may', 12345,'may@example.com',2058);
    
            expect(manager.name).toEqual('may');
            expect(manager.id).toEqual(12345);
            expect(manager.email).toEqual('may@example.com');
            expect(manager.officeNumber).toEqual(107);
        });
    
        

        it('should return "Manager"', () =>{
            const manager = new Manager('may', 12345, 'may@example.com', 2058);
    
            expect(manager.getRole()).toEqual('Manager');
        });
    })
    

    
})