describe ("Airport", () => {
    
    let airport;
    let plane;

    beforeEach(() => {
        airport = new Airport;
        plane = jasmine.createSpyObj("plane", ["land"]);
    });

    it ('has no planes', () => {
        expect(airport.planes()).toEqual([]);
    });  

    it("can clear planes for landing", () => {
        airport.clearForLanding(plane);
        expect(airport.planes()).toEqual([plane]);
    });


});