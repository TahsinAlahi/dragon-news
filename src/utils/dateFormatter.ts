function dateFormatter(date: Date) {
  const weekDay = date.toLocaleString("default", { weekday: "long" });
  const day = date.toLocaleString("default", { day: "numeric" });
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.toLocaleString("default", { year: "numeric" });

  return {
    weekDay,
    day,
    month,
    year,
  };
}

export default dateFormatter;
