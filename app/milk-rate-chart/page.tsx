"use client";

import { useRef, useState } from "react";
import * as XLSX from "xlsx";
import Image from "next/image";

export default function MilkRateChartPage() {
  const fileRef = useRef<HTMLInputElement | null>(null);

  const [excelUploaded, setExcelUploaded] = useState(false);
  const [tableData, setTableData] = useState<string[][]>([]);
  const [colSizes, setColSizes] = useState<number[]>([]);
  const [rowSizes, setRowSizes] = useState<number[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState("");

  // Logo
  const logoUrl =
    "https://res.cloudinary.com/dddhtbuzs/image/upload/v1765321597/milk.jpg";

  // Excel → PX conversion
  const excelWidthToPx = (wch: number) => Math.round(wch * 7 + 5);
  const excelHeightToPx = (hpt: number) => Math.round(hpt * 1.333);

  // Fix empty cell
  const safeCell = (val: unknown): string =>
  val === undefined || val === null ? "" : String(val);

  // ⭐ FORMAT NUMBER only after editing (Excel like)
  const formatNumber = (value: string) => {
    if (/^\d+(\.\d+)?$/.test(value)) {
      return parseFloat(value).toFixed(2);
    }
    return value;
  };

  // ======================= ARROW KEY NAV (Desktop ke liye useful) =======================
  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    r: number,
    c: number
  ) => {
    if (e.key === "ArrowDown")
      document.getElementById(`cell-${r + 1}-${c}`)?.focus();

    if (e.key === "ArrowUp")
      document.getElementById(`cell-${r - 1}-${c}`)?.focus();

    if (e.key === "ArrowRight")
      document.getElementById(`cell-${r}-${c + 1}`)?.focus();

    if (e.key === "ArrowLeft")
      document.getElementById(`cell-${r}-${c - 1}`)?.focus();
  };

  // ======================= HANDLE EXCEL FILE =======================
  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    const jsonData = XLSX.utils
      .sheet_to_json(sheet, { header: 1 })
      .map((row: (string | number | boolean | null)[]) =>
  row.map((cell) => formatNumber(safeCell(cell)))
);

    setTableData(jsonData);

    if (!jsonData.length) {
      setColSizes([]);
      setRowSizes([]);
      setExcelUploaded(true);
      return;
    }

    // Column sizes
    const cols = sheet["!cols"]
      ?sheet["!cols"].map((c: { wch?: number }) => excelWidthToPx(c.wch ?? 8.43))
      : jsonData[0].map(() => excelWidthToPx(8.43));

    // Row sizes
    const rows = sheet["!rows"]
  ? sheet["!rows"].map((r: { hpt?: number }) =>
      excelHeightToPx(r.hpt ?? 15)
    )
  : jsonData.map(() => excelHeightToPx(15));


    setColSizes(cols);
    setRowSizes(rows);

    setExcelUploaded(true);
  };

  // ======================= ADD COLUMN =======================
  const addColumn = () => {
    if (!tableData.length) return;
    const updated = tableData.map((row) => [...row, ""]);
    setTableData(updated);
    setColSizes((prev) => [...prev, excelWidthToPx(8.43)]);
  };

  // ======================= ADD ROW =======================
  const addRow = () => {
    if (!tableData.length) return;
    const newRow = new Array(tableData[0].length).fill("");
    setTableData((prev) => [...prev, newRow]);
    setRowSizes((prev) => [...prev, excelHeightToPx(15)]);
  };

  // ======================= UI =======================
  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center pt-4 sm:pt-6 px-2 sm:px-4">

      {/* BEFORE EXCEL UPLOAD */}
      {!excelUploaded && (
        <div className="w-full max-w-5xl flex flex-col items-center mt-8 mb-8">
          <div className="relative flex justify-center items-center w-full">
            <Image
              src={logoUrl}
              alt="Milk Logo"
              width={1800}
              height={1200}
              className="rounded-xl w-full h-auto max-h-[420px] object-cover"
            />

            <h1 className="absolute text-black font-bold text-center w-full animate-fadeIn text-2xl sm:text-3xl md:text-4xl drop-shadow
               bg-clip-text text-transparent animate-title-gradient">
              Milk Rate Chart Excel To Csv Converter 
            </h1>
          </div>
        </div>
      )}

      {/* UPLOAD BUTTON */}
      <div className={`${excelUploaded ? "mt-2 mb-4" : "mb-6"}`}>
        <input
          type="file"
          accept=".xls,.xlsx"
          ref={fileRef}
          onChange={handleFile}
          hidden
        />
        <button
          onClick={() => fileRef.current?.click()}
          className={`py-2.5 sm:py-3 px-6 rounded-md text-white font-semibold shadow ${
            excelUploaded ? "bg-blue-600 text-sm" : "bg-blue-700 text-base sm:text-lg"
          }`}
        >
          Upload Excel
        </button>
      </div>

      {/* Title after upload */}
      {excelUploaded && (
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center
           bg-clip-text text-transparent animate-title-gradient">
          Milk Rate Chart Excel To Csv Converter
        </h1>
      )}

      {/* TABLE SECTION */}
      {excelUploaded && tableData.length > 0 && (
        <div className="w-full bg-white p-2 sm:p-4 rounded-md shadow-md">

          {/* File Name Input */}
          <input
            type="text"
            placeholder="Enter File Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="border px-3 py-2 w-full mb-3 sm:mb-4 rounded-md text-sm sm:text-base"
          />

          {/* TABLE WRAPPER - Responsive scroll area */}
          <div
            className="overflow-auto border rounded-md mx-auto"
            style={{
              maxHeight: "70vh",
              width: "100%",
            }}
          >
            <table
              className="border-collapse"
              style={{ fontFamily: "Calibri, Arial", width: "max-content", minWidth: "100%" }}
            >
              <tbody>
                {tableData.map((row, r) => (
                  <tr key={r} style={{ height: rowSizes[r] ? `${rowSizes[r]}px` : "32px" }}>
                    {row.map((cell, c) => (
                      <td
                        key={c}
                        className={`border ${
                          r === 0 ? "bg-gray-100 font-semibold sticky top-0 z-10" : ""
                        }`}
                        style={{ width: colSizes[c] ? `${colSizes[c]}px` : "100px" }}
                      >
                        <input
                          id={`cell-${r}-${c}`}
                          value={cell}
                          readOnly={!isEditing}
                          onChange={(e) => {
                            if (!isEditing) return;
                            const raw = e.target.value;
                            setTableData((prev) => {
                              const updated = [...prev];
                              updated[r][c] = raw; // Typing allowed
                              return updated;
                            });
                          }}
                          onBlur={() => {
                            if (!isEditing) return;
                            setTableData((prev) => {
                              const updated = [...prev];
                              updated[r][c] = formatNumber(prev[r][c]); // Format when editing ends
                              return updated;
                            });
                          }}
                          onKeyDown={(e) => handleKeyPress(e, r, c)}
                          className="w-full h-full px-2 py-1 text-xs sm:text-sm md:text-[14px] outline-none"
                          inputMode="decimal"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-2 mt-4">

            {/* Edit / Lock */}
            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`w-full sm:flex-1 py-2.5 sm:py-3 rounded-md text-white font-medium ${
                isEditing ? "bg-yellow-500" : "bg-blue-600"
              }`}
            >
              {isEditing ? "Lock" : "Edit"}
            </button>

            {/* Add Row */}
            <button
              onClick={addRow}
              className="w-full sm:flex-1 py-2.5 sm:py-3 rounded-md bg-purple-600 text-white font-medium"
            >
              + Add Row
            </button>

            {/* Add Column */}
            <button
              onClick={addColumn}
              className="w-full sm:flex-1 py-2.5 sm:py-3 rounded-md bg-orange-600 text-white font-medium"
            >
              + Add Column
            </button>

            {/* Download CSV */}
            <button
              onClick={() => {
                const sheet = XLSX.utils.aoa_to_sheet(tableData);
                const csv = XLSX.utils.sheet_to_csv(sheet);
                const finalName =
                  newName.trim() !== "" ? `${newName}.csv` : "SNF_B_M.csv";

                const blob = new Blob([csv], { type: "text/csv" });
                const url = URL.createObjectURL(blob);

                const a = document.createElement("a");
                a.href = url;
                a.download = finalName;
                a.click();
              }}
              className="w-full sm:flex-1 py-2.5 sm:py-3 rounded-md bg-green-600 text-white font-medium"
            >
              Download CSV
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
