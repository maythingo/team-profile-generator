const { expect, it } = require('@jest/globals');
const Engineer = require('../lib/engineer');

describe('engineer', () =>{
    describe('Initialization', () =>{
        it('should create an object with name,id,email,github if provided', () =>{
            const engineer = new Engineer('may', 12345,'may@example.com','maythingo');
    
            expect(engineer.name).toEqual('robert');
            expect(engineer.id).toEqual(12345);
            expect(engineer.email).toEqual('may@example.com');
            expect(engineer.github).toEqual('maythingo');
        });
    
        

        it('should return github', () =>{
            const engineer = new Engineer('may', 12345, 'may@example.com', 'maythingo');
    
            expect(engineer.getGithub()).toEqual('maythingo');
        });

        it('should return "Engineer"', () =>{
            const engineer = new Engineer('may', 12345, 'maythingo@example.com', 'maythingo');
    
            expect(engineer.getRole()).toEqual('Engineer');
        });

    })
    

    
})