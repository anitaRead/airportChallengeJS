describe("Plane", () => {

    let plane;
    let airport;
    
    beforeEach(() => {
        plane = new Plane(); 
        airport = jasmine.createSpyObj("airport", ["clearForLanding", "clearForTakeOff"]);
    });

    it("can land a plane", () => {
        plane.land(airport);
        expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
    });

    it("can take off from airport", () => {
        plane.land(airport);
        plane.takeOff();
        expect(airport.clearForTakeOff).toHaveBeenCalled();
    });
});

