export function dateToExportDateString(date: Date): string {
  return `${date.toISOString().split('T')[0]}`;
}

export function dateToDateString(date: Date): string {
  return `${date.toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    localeMatcher: 'lookup',
  })}`;
}

export function getCurrentDateString() {
  const date = new Date();
  const MonthNumber = (date.getMonth() + 1).toString().padStart(2, '0');
  const DateNumber  = date.getDate().toString().padStart(2, '0');
  const YearNumber  = date.getFullYear().toString().padStart(4, '0');

  return `${MonthNumber}${DateNumber}${YearNumber}`;
}
