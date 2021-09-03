export interface TimeoutObject {
  name: string;
  obj: any;
}

let timeOutObjects: Array<TimeoutObject> = [];

export function stopTimer(timerName: string) {
  const obj = timeOutObjects.filter((e) => e.name === timerName);
  if (obj.length > 0) {
    clearTimeout(obj[0].obj);
    timeOutObjects = timeOutObjects.filter((e) => e.name !== timerName);
  }
}

export function startTimer(timerName: string, callback: () => any, ms: number) {
  stopTimer(timerName);
  const timeout = setTimeout(() => {
    callback();
  }, ms);

  timeOutObjects.push({ name: timerName, obj: timeout });
}
