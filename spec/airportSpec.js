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
});