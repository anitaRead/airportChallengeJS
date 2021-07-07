describe("Instruct a plane", () => {
    let airport;
    let plane;
  
    beforeEach(() => {
      plane = new Plane();
      airport = new Airport();
    });

    // As an air traffic controller 
    // So I can get passengers to a destination 
    // I want to instruct a plane to land at an airport
  
    describe("land", () => {
      it("planes can be instructed to land", () => {
        plane.land(airport);
        expect(airport.planes()).toContain(plane);
      });
    });

    // As an air traffic controller 
    // So I can get passengers on the way to their destination 
    // I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

    describe("take off", () => {
      it("planes can be instructed to take off", () => {
        plane.land(airport);
        plane.takeOff();
        expect(airport.planes()).toEqual([]);
      });
    });
});


