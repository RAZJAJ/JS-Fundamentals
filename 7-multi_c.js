const count = Number(process.argv[2]);

if (Number.isInteger(count)) {
  for (let i = 0; i < count; i++) {
    console.log('C is fun');
  }
} else {
  console.log('Missing number of occurrences');
}
