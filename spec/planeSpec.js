describe("Plane", () => {

    let plane;
    let airport;
    
    beforeEach(() => {
        plane = new Plane(); 
        airport = jasmine.createSpyObj("airport", ["clearForLanding"]);
    });

    it("can land a plane", () => {
        plane.land(airport);
        expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
    });
});
