import provideIdGen from 'provide-id-gen';

const idGen = provideIdGen([
  'user'
]);

idGen.isGlobal = true;

export default idGen;
