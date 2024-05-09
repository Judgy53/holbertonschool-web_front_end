/**
 * @param {number} numbersOfStudents 
 * @returns {function[]}
 */
function createClassRoom(numbersOfStudents) {

    /**
     * @param {number} seat 
     * @returns {function}
     */
    function studentSeat(seat) {
        return function() {
            return seat;
        }
    }

    const students = new Array();
    for (let i = 0; i < numbersOfStudents; i++) {
        students.push(studentSeat(i+1));
    }

    return students;
}

const classRoom = createClassRoom(10);