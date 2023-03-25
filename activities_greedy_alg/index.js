function find(activities) {
  activities.sort((a, b) => b.cost - a.cost);

  const selectedActivities = [];

  for (let i = 0; i < activities.length; i++) {
    const currentActivity = activities[i];
    const isOverlap = selectedActivities.some(
      (activity) => currentActivity.start < activity.end && activity.start < currentActivity.end
    );
    if (!isOverlap) {
      selectedActivities.push(currentActivity);
    }
  }
  return selectedActivities;
}

const activities = [
  { start: 14, end: 15, cost: 2 },
  { start: 10, end: 11, cost: 1 },
  { start: 14, end: 17, cost: 2 },
  { start: 11, end: 13, cost: 1 },
  { start: 10, end: 15, cost: 1 },
  { start: 12, end: 13, cost: 1 },
  { start: 16, end: 17, cost: 2 },
  { start: 15, end: 16, cost: 2 },
];
const selectedActivities = find(activities);
console.log(selectedActivities);
const sortedSelectedActivities = selectedActivities.sort((a, b) => a.start - b.start)
console.log(sortedSelectedActivities);


