const magazine = ['two', 'times', 'three', 'is', 'not', 'four'];
const note = ['two', 'times', 'is', 'four', 'two'];

function checkNote() {
  for (const word of note) {
    const existingWord = magazine.indexOf(word);
    if (existingWord === -1) {
      console.log('No');
      return;
    }
    magazine.splice(existingWord, 1);
  }

  console.log('Yes');
}
checkNote();
