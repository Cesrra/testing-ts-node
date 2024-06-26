import { expect } from "chai"
import Calculator from "../src/calculator"

describe("Test Calculator Class", () => {
    it("Should return Sum", () => {
        const calcu = new Calculator()
        const result = calcu.add(2,3)

        expect(result).to.equal(5)
    })

    it("Should return Substract", () => {
        const calcu = new Calculator()
        const result = calcu.substract(2,3)

        expect(result).to.equal(-1)
    })

    it("Should return Divide", () => {
        const calcu = new Calculator()
        const result = calcu.divide(6,3)

        expect(result).to.equal(2)
    })

    it("Should return Multiple", () => {
        const calcu = new Calculator()
        const result = calcu.multiple(2,3)

        expect(result).to.equal(6)
    })

    it("Should throu an Error when divide by cero", () => {
        const calcu = new Calculator()
        expect(() => calcu.divide(2,0)).to.throw("Can not divide by cero!")
    })
})