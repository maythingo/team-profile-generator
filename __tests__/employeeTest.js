const { expect, it } = require('@jest/globals');
const Employee = require('../lib/employee');

describe('employee', () =>{
    describe('Initialization', () =>{
        it('should create an object with name,id, and email if provided', () =>{
            const employee = new Employee('may', 12345,'may@example.com');
    
            expect(employee.name).toEqual('may');
            expect(employee.id).toEqual(12345);
            expect(employee.email).toEqual('may@example.com');
        });
    


        it('should return name', () =>{
            const employee = new Employee('may', 12345, 'may@example.com');
    
            expect(employee.getName()).toEqual('may');
        });

        it('should return email', () =>{
            const employee = new Employee('may', 12345, 'may@example.com');
    
            expect(employee.getEmail()).toEqual('may@example.com');
        });

        it('should return id', () =>{
            const employee = new Employee('may', 12345, 'may@example.com');
    
            expect(employee.getId()).toEqual(12345);
        });

        it('should return "Employee"', () =>{
            const employee = new Employee('  may', 12345, 'may@example.com');
    
            expect(employee.getRole()).toEqual('Employee');
        });
    })
    

    
})