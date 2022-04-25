function checkSpam(str) {
  str = str.toUpperCase();
  let spamTrigger1 = '1xBet'.toUpperCase();
  let spamTrigger2 = 'XXX'.toUpperCase();

  if (str.includes(spamTrigger1) || str.includes(spamTrigger2)) {
    return true;
  } else {
    return false;
  }
}
