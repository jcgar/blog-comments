import provideIdGen from 'provide-id-gen';

const idGen = provideIdGen([
  'user',
  'entry',
  'comment',
]);

idGen.isGlobal = true;

export default idGen;
