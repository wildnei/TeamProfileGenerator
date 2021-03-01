const Employee = require("../lib/Employee");

describe('Employee', () => {
    describe('Initialization', () => {
        // Positive test
        it("should be object", () => {
            // Arrange
            const text = 'Pick up milk';

            expect("string" in text).toEqual(true)

        });
    });
});