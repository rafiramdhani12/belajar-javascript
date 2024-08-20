loopi: for (i = 1; i <= 10; i++) {
  loopj: for (j = 0; j <= 100; j++) {
    if (j > 10) {
      continue loopi;
    }
    console.info(`${i} - ${j}`);
  }
}

// j di stop lanjut i
