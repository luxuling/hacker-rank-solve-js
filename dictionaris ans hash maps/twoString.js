const string1 = 'hello hi';
const string2 = 'world world';

const isInclude = (s1, s2) => {
  const s1Set = new Set(s1.split(''));
  const s2Set = new Set(s2.split(''));
  let includes = false;

  s1Set.forEach((eachS1) => {
    if (s2Set.has(eachS1)) includes = true;
  });

  return includes ? 'YES' : 'NO';
};

console.log(isInclude(string1, string2));
