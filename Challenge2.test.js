const strictEquals = function (a, b) {
    if (Number.isNaN(a) && Number.isNaN) {
        return false;
    }
    if (Object.is(0, a) && Object.is(-0, b)) {
        return true;
    }
    if (Object.is(-0, a) && Object.is(0, b)) {
        return true;
    }
    return Object.is(a, b);
};

describe("When strictEquals function", () => {
    describe("When it receives (1, 1)", () => {
        test("Then it should return true", () => {
            const a = 1;

            const b = 1;

            const expectedResult = true;

            const result = strictEquals(a, b);

            expect(result).toBe(expectedResult);
        });
    });
    describe("When it receives (NaN, NaN)", () => {
        test("Then it should return false", () => {
            const a = NaN;

            const b = NaN;

            const expectedResult = false;

            const result = strictEquals(a, b);

            expect(result).toBe(expectedResult);
        });
    });
    describe("When it receives (0, -0)", () => {
        test("Then it should return true", () => {
            const a = 0;

            const b = -0;

            const expectedResult = true;

            const result = strictEquals(a, b);

            expect(result).toBe(expectedResult);
        });
    });
    describe("When it receives (-0, 0)", () => {
        test("Then it should return true", () => {
            const a = -0;

            const b = 0;

            const expectedResult = true;

            const result = strictEquals(a, b);

            expect(result).toBe(expectedResult);
        });
    });
    describe("When it receives (1, '1')", () => {
        test("Then it should return false", () => {
            const a = 1;

            const b = "1";

            const expectedResult = false;

            const result = strictEquals(a, b);

            expect(result).toBe(expectedResult);
        });
    });
    describe("When it receives (true, false)", () => {
        test("Then it should return false", () => {
            const a = true;

            const b = false;

            const expectedResult = false;

            const result = strictEquals(a, b);

            expect(result).toBe(expectedResult);
        });
    });
    describe("When it receives (false, false)", () => {
        test("Then it should return true", () => {
            const a = false;

            const b = false;

            const expectedResult = true;

            const result = strictEquals(a, b);

            expect(result).toBe(expectedResult);
        });
    });
    describe("When it receives ('Water', 'oil')", () => {
        test("Then it should return false", () => {
            const a = "Water";

            const b = "oil";

            const expectedResult = false;

            const result = strictEquals(a, b);

            expect(result).toBe(expectedResult);
        });
    });
});
