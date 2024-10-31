export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    let task = true; // `let` makes this block-scoped
    let task2 = false; // `let` makes this block-scoped
  }

  return [task, task2];
}
