describe ("Airport", () => {
    
    let airport;
    let plane;

    beforeEach(() => {
        airport = new Airport;
        plane = jasmine.createSpyObj("plane", ["land"]);
    });

    it ("has no planes to start", () => {
        expect(airport.planes()).toEqual([]);
    });  

    it("can clear planes for landing", () => {
        airport.clearForLanding(plane);
        expect(airport.planes()).toEqual([plane]);
    });

    it("can clear planes for take off", () => {
        airport.clearForLanding(plane);
        airport.clearForTakeOff(plane);
        expect(airport.planes()).toEqual([]);
    });

    it("can check for stormy conditions", () => {
        expect(airport.isStormy()).toBeFalsy();
    });

    describe("when stormy", () => {
        it("does not clear planes for takeoff", () => {
          spyOn(airport,"isStormy").and.returnValue(true);
          expect(() => { airport.clearForTakeOff(plane); }).toThrowError("can not take off during a storm");
        });
    });
});