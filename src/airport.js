class Airport {

    constructor() {
        this._hangar = [];
    };

    planes() {
        return this._hangar;
    };

    clearForLanding(plane) {
        this._hangar.push(plane);
    };

    clearForTakeOff(plane) {
        if(this.isStormy()) {
            throw new Error("can not take off during a storm")
        }
        this._hangar = [];
    };

    isStormy() {
        return false;
    };
    
};

