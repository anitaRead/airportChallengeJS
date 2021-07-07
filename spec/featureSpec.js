// As an air traffic controller 
// So I can get passengers to a destination 
// I want to instruct a plane to land at an airport

describe('land a plane', () => {
    let airport;
    let plane;
  
    beforeEach(() => {
      plane = new Plane();
      airport = new Airport();
    });
  
    it('planes can be instructed to land', () => {
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });
});