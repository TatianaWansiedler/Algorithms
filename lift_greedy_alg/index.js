// Задача: вызов лифта
// В доме два лифта.
// Реализовать алгоритм отправки наиближайшего на вызывающий этаж.
// Алгоритм будет применяться в домах разной этажности.
// *Алгоритм будет применяться в домах с количеством > 2 лифтов
// Пример:
// в доме 19 этажей
// работают лифт А и лифт В
// лифт А находиться на 0 этаже
// лифт В находиться на 8 этаже
// на вход: 1
// отправляем лифт А

function callLift(lifts, floorCalled) {
    let minDistance = Infinity;
    let nearestLift = null;

    for (const lift of lifts) {
        const distance = Math.abs(lift.currentFloor - floorCalled);
        if (distance < minDistance) {
            minDistance = distance;
            nearestLift = lift;
        }
    }
    return nearestLift.id
}

const liftsArr = [
    {
        id: 'lift A',
        currentFloor: 0,
    },
    {
        id: 'lift B',
        currentFloor: 8,
    },
    {
        id: 'lift C',
        currentFloor: 3,
    },
];

console.log(callLift(liftsArr, 1)); // lift A
console.log(callLift(liftsArr, 2)); // lift C
