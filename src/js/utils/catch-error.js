function catchError(callback, fromFile) {
  try {
    callback();
  } catch (err) {
    console.error(`Error from ${fromFile}.js`, err);
  }
}

export default catchError;
