export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const innerTask = true; // Renaming to avoid conflicting with outer scope
    const innerTask2 = false; // Renaming to avoid conflicting with outer scope
    // innerTask and innerTask2 are not used further
  }

  return [task, task2];
}
