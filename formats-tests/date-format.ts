export const formatDate = (date: Date, pattern: string): string => {
    const year: string = date.getFullYear().toString();
    const month: string = (date.getMonth() + 1).toString().padStart(2, '0');
    const day: string = date.getDate().toString().padStart(2, '0');

    return pattern
        .replace(/YYYY/g, year)
        .replace(/MM/g, month)
        .replace(/DD/g, day);
};