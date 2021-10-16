const XLSX = require("xlsx");

function readExcel<T extends { [key: string]: string | number }>(
  filepath: string,
  sheetIndex: number | string
) {
  const workbook = XLSX.readFile(filepath);
  const isIndexNum = typeof sheetIndex === "number";

  const chosenSheet = isIndexNum
    ? workbook.Sheets[workbook[sheetIndex]]
    : workbook.Sheets[sheetIndex];

  const xlData: T[] = XLSX.utils.sheet_to_json(chosenSheet);

  return { workbook, xlData };
}

export default readExcel;
