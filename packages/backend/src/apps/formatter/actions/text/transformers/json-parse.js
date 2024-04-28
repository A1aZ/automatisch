const jsonParse = ($) => {
  const input = $.step.parameters.input;

  // if input is string and quotes were not removed, remove them
  if (typeof input === 'string' && input[0] === '"' && input[input.length - 1] === '"') {
      return JSON.parse(input.slice(1, -1));
  }
  return JSON.parse(input);
};

export default jsonParse;
