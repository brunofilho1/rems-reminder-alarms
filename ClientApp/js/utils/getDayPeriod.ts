export function getDayPeriod() {
  const currentDate = new Date();
  const currentTime = currentDate.getHours();

  switch (true) {
    case currentTime >= 6 && currentTime < 12:
      return "Bom dia";
      break;
    case currentTime >= 12 && currentTime < 18:
      return "Boa tarde";
      break;
    default:
      return "Boa noite";
  }

}