const XLSX = require("xlsx");

export default function writeExcel(
  data: { [key: string]: any }[],
  filename: string,
  sheetname: string
) {
  const wb = XLSX.utils.book_new();
  wb.SheetNames.push(sheetname);
  const ws = XLSX.utils.json_to_sheet(data);
  wb.Sheets[sheetname] = ws;

  const filenameWithExtension = filename.includes(".xlsx")
    ? filename
    : `${filename}.xlsx`;
  console.info("Created new file: ", filename);
  console.info("Sheets | ", wb.SheetNames);

  XLSX.writeFile(wb, filenameWithExtension);
}
