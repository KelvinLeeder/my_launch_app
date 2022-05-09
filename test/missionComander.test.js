const missionComander = require('./../app/missionComander');

describe("Unit Test for Mission Commander Class", () => {
    test('1) Create a mission comander object', () =>{
        const myMissionCommander = new missionComander("Woopa")
        expect(myMissionCommander.name).toBe("Woopa");
    });
})