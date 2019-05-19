

// continue means skipping anything

for (i = 0; i < 10; i++) {
  // skip 3 and 7
  if (i === 3 || i === 7) {
    continue
  } else {
    console.log(i)
  }
}