var expect = require("chai").expect;

var SmartEventBus = require("../smart-event-bus");

describe("SmartEvenBus", () => {
    describe("publish-subscribe", () => {
        it("should work", () => {
            var bus = new SmartEventBus();
            var data = { text: "hello" };

            var callCount = 0;

            // First subscription
            bus.subscribe("test-message", (message) => {
                expect(message).to.equal(data);
                callCount++;
            });

            // Second subscription
            bus.subscribe("test-message", (message) => {
                expect(message).to.equal(data);
                callCount++;
            });

            bus.publish("test-message", data);

            expect(callCount).to.equal(2);
        });
    });
});