function divide(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Denominator can't be 0");
  } else if (isNaN(numerator) || isNaN(denominator)) {
    throw new Error("All arguments should be numbers");
  }
  return numerator / denominator;
}

try {
  console.log(divide(5, 5));
} catch (error) {
  console.log(`An Error during divide: ${error.message}`);
} finally {
  console.log("Work is Done");
}

try {
  console.log(divide(5, 0));
} catch (error) {
  console.log(`An Error during divide: ${error.message}`);
} finally {
  console.log("Work is Done");
}

try {
  console.log(divide(5, "string"));
} catch (error) {
  console.log(`An Error during divide: ${error.message}`);
} finally {
  console.log("Work is Done");
}

try {
  console.log(divide(NaN, 5));
} catch (error) {
  console.log(`An Error during divide: ${error.message}`);
} finally {
  console.log("Work is Done");
}
