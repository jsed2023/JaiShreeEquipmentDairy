"use client";

import { useRef, useState } from "react";
import ExcelJS from "exceljs";
import Image from "next/image";

export default function MilkRateChartPage() {
  const fileRef = useRef<HTMLInputElement | null>(null);

  const [excelUploaded, setExcelUploaded] = useState(false);
  const [tableData, setTableData] = useState<string[][]>([]);
  const [colSizes, setColSizes] = useState<number[]>([]);
  const [rowSizes, setRowSizes] = useState<number[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState("");
  const [error, setError] = useState("");

  const logoUrl =
    "https://res.cloudinary.com/dddhtbuzs/image/upload/v1765321597/milk.jpg";

  // Excel column width -> pixels
  const excelWidthToPx = (wch: number) => Math.round(wch * 7 + 5);

  // Excel row height -> pixels
  const excelHeightToPx = (hpt: number) => Math.round(hpt * 1.333);

  // Safe cell conversion
  const safeCell = (val: unknown): string =>
    val === undefined || val === null ? "" : String(val);

  // Format numeric values
  const formatNumber = (value: string) => {
    if (/^\d+(\.\d+)?$/.test(value)) {
      return parseFloat(value).toFixed(2);
    }

    return value;
  };

  // CSV parser
  const parseCSV = (text: string): string[][] => {
    const rows: string[][] = [];
    let row: string[] = [];
    let cell = "";
    let insideQuotes = false;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const nextChar = text[i + 1];

      if (char === '"') {
        if (insideQuotes && nextChar === '"') {
          cell += '"';
          i++;
        } else {
          insideQuotes = !insideQuotes;
        }
      } else if (char === "," && !insideQuotes) {
        row.push(cell);
        cell = "";
      } else if (
        (char === "\n" || char === "\r") &&
        !insideQuotes
      ) {
        if (char === "\r" && nextChar === "\n") {
          i++;
        }

        row.push(cell);

        if (row.length > 1 || row[0] !== "") {
          rows.push(row);
        }

        row = [];
        cell = "";
      } else {
        cell += char;
      }
    }

    if (cell !== "" || row.length > 0) {
      row.push(cell);
      rows.push(row);
    }

    return rows;
  };

  // Arrow key navigation
  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    r: number,
    c: number
  ) => {
    if (e.key === "ArrowDown") {
      document.getElementById(`cell-${r + 1}-${c}`)?.focus();
    }

    if (e.key === "ArrowUp") {
      document.getElementById(`cell-${r - 1}-${c}`)?.focus();
    }

    if (e.key === "ArrowRight") {
      document.getElementById(`cell-${r}-${c + 1}`)?.focus();
    }

    if (e.key === "ArrowLeft") {
      document.getElementById(`cell-${r}-${c - 1}`)?.focus();
    }
  };

  // =======================
  // HANDLE FILE
  // =======================
  const handleFile = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setError("");

    try {
      const fileName = file.name.toLowerCase();

      // ======================
      // CSV FILE
      // ======================
      if (fileName.endsWith(".csv")) {
        const text = await file.text();

        const csvData = parseCSV(text).map((row) =>
          row.map((cell) => formatNumber(safeCell(cell)))
        );

        setTableData(csvData);

        const maxColumns = Math.max(
          ...csvData.map((row) => row.length),
          1
        );

        setColSizes(
          Array.from(
            { length: maxColumns },
            () => excelWidthToPx(8.43)
          )
        );

        setRowSizes(
          csvData.map(() => excelHeightToPx(15))
        );

        setExcelUploaded(true);
        return;
      }

      // ======================
      // XLSX FILE
      // ======================
      if (!fileName.endsWith(".xlsx")) {
        setError(
          "Only .xlsx and .csv files are supported."
        );
        return;
      }

      const buffer = await file.arrayBuffer();

      const workbook = new ExcelJS.Workbook();

      await workbook.xlsx.load(buffer);

      const worksheet = workbook.worksheets[0];

      if (!worksheet) {
        setError("No worksheet found in this file.");
        return;
      }

      const data: string[][] = [];

      worksheet.eachRow(
        { includeEmpty: true },
        (row) => {
          const rowData: string[] = [];

          row.eachCell(
            { includeEmpty: true },
            (cell) => {
              let value = "";

              if (cell.value !== null && cell.value !== undefined) {
                if (typeof cell.value === "object") {
                  if (
                    "text" in cell.value &&
                    typeof cell.value.text === "string"
                  ) {
                    value = cell.value.text;
                  } else if (
                    "result" in cell.value
                  ) {
                    value = safeCell(cell.value.result);
                  } else {
                    value = safeCell(cell.text);
                  }
                } else {
                  value = safeCell(cell.value);
                }
              }

              rowData.push(formatNumber(value));
            }
          );

          data.push(rowData);
        }
      );

      // Remove completely empty trailing rows
      const cleanedData = data.filter((row) =>
        row.some((cell) => cell.trim() !== "")
      );

      if (!cleanedData.length) {
        setTableData([]);
        setColSizes([]);
        setRowSizes([]);
        setExcelUploaded(true);
        return;
      }

      const maxColumns = Math.max(
        ...cleanedData.map((row) => row.length)
      );

      // Normalize all rows
      const normalizedData = cleanedData.map((row) => {
        const updatedRow = [...row];

        while (updatedRow.length < maxColumns) {
          updatedRow.push("");
        }

        return updatedRow;
      });

      // Column widths
      const columns = Array.from(
        { length: maxColumns },
        (_, index) => {
          const column = worksheet.getColumn(index + 1);

          return excelWidthToPx(
            column.width ?? 8.43
          );
        }
      );

      // Row heights
      const rows = normalizedData.map(
        (_, index) => {
          const row = worksheet.getRow(index + 1);

          return excelHeightToPx(
            row.height ?? 15
          );
        }
      );

      setTableData(normalizedData);
      setColSizes(columns);
      setRowSizes(rows);
      setExcelUploaded(true);
    } catch (err) {
      console.error("File processing error:", err);

      setError(
        "Unable to read this file. Please upload a valid .xlsx or .csv file."
      );
    }
  };

  // =======================
  // ADD COLUMN
  // =======================
  const addColumn = () => {
    if (!tableData.length) return;

    const updated = tableData.map((row) => [
      ...row,
      "",
    ]);

    setTableData(updated);

    setColSizes((prev) => [
      ...prev,
      excelWidthToPx(8.43),
    ]);
  };

  // =======================
  // ADD ROW
  // =======================
  const addRow = () => {
    if (!tableData.length) return;

    const newRow = new Array(
      tableData[0].length
    ).fill("");

    setTableData((prev) => [
      ...prev,
      newRow,
    ]);

    setRowSizes((prev) => [
      ...prev,
      excelHeightToPx(15),
    ]);
  };

  // =======================
  // CSV ESCAPE
  // =======================
  const escapeCSV = (value: string) => {
    const needsQuotes =
      value.includes(",") ||
      value.includes('"') ||
      value.includes("\n") ||
      value.includes("\r");

    const escaped = value.replace(
      /"/g,
      '""'
    );

    return needsQuotes
      ? `"${escaped}"`
      : escaped;
  };

  // =======================
  // DOWNLOAD CSV
  // =======================
  const downloadCSV = () => {
    const csv = tableData
      .map((row) =>
        row.map(escapeCSV).join(",")
      )
      .join("\r\n");

    const finalName =
      newName.trim() !== ""
        ? `${newName.trim()}.csv`
        : "SNF_B_M.csv";

    const blob = new Blob(
      [csv],
      {
        type: "text/csv;charset=utf-8;",
      }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = finalName;

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);

    URL.revokeObjectURL(url);
  };

  // =======================
  // UI
  // =======================
  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center pt-4 sm:pt-6 px-2 sm:px-4">

      {!excelUploaded && (
        <div className="w-full max-w-5xl flex flex-col items-center mt-8 mb-8">

          <div className="relative flex justify-center items-center w-full">

            <Image
              src={logoUrl}
              alt="Milk Logo"
              width={1800}
              height={1200}
              className="rounded-xl w-full h-auto max-h-105 object-cover"
            />

            <h1
              className="
                absolute w-full px-4
                text-center font-bold
                text-2xl sm:text-3xl md:text-4xl
                bg-clip-text text-transparent
                animate-title-gradient
                drop-shadow
              "
            >
              Milk Rate Chart Excel To CSV Converter
            </h1>

          </div>

        </div>
      )}

      {/* ERROR */}
      {error && (
        <div className="w-full max-w-3xl mb-4 p-3 rounded-md bg-red-100 text-red-700 text-center">
          {error}
        </div>
      )}

      {/* UPLOAD BUTTON */}
      <div
        className={`${
          excelUploaded
            ? "mt-2 mb-4"
            : "mb-6"
        }`}
      >
        <input
          type="file"
          accept=".xlsx,.csv"
          ref={fileRef}
          onChange={handleFile}
          hidden
        />

        <button
          onClick={() =>
            fileRef.current?.click()
          }
          className={`py-2.5 sm:py-3 px-6 rounded-md text-white font-semibold shadow ${
            excelUploaded
              ? "bg-blue-600 text-sm"
              : "bg-blue-700 text-base sm:text-lg"
          }`}
        >
          Upload Excel
        </button>

      </div>

      {/* TITLE */}
      {excelUploaded && (
        <h1
    className="
      text-2xl sm:text-3xl
      font-bold
      mb-4
      text-center
      bg-clip-text
      text-transparent
      animate-title-gradient
    "
  >
          Milk Rate Chart Excel To CSV Converter
        </h1>
      )}

      {/* TABLE */}
      {excelUploaded &&
        tableData.length > 0 && (
          <div className="w-full bg-white p-2 sm:p-4 rounded-md shadow-md">

            {/* FILE NAME */}
            <input
              type="text"
              placeholder="Enter File Name"
              value={newName}
              onChange={(e) =>
                setNewName(e.target.value)
              }
              className="border px-3 py-2 w-full mb-3 sm:mb-4 rounded-md text-sm sm:text-base"
            />

            {/* TABLE */}
            <div
              className="overflow-auto border rounded-md mx-auto"
              style={{
                maxHeight: "70vh",
                width: "100%",
              }}
            >
              <table
                className="border-collapse"
                style={{
                  fontFamily:
                    "Calibri, Arial",
                  width: "max-content",
                  minWidth: "100%",
                }}
              >
                <tbody>

                  {tableData.map(
                    (row, r) => (
                      <tr
                        key={r}
                        style={{
                          height: rowSizes[r]
                            ? `${rowSizes[r]}px`
                            : "32px",
                        }}
                      >

                        {row.map(
                          (cell, c) => (
                            <td
                              key={c}
                              className={`border ${
                                r === 0
                                  ? "bg-gray-100 font-semibold sticky top-0 z-10"
                                  : ""
                              }`}
                              style={{
                                width: colSizes[c]
                                  ? `${colSizes[c]}px`
                                  : "100px",
                              }}
                            >
                              <input
                                id={`cell-${r}-${c}`}
                                value={cell}
                                readOnly={
                                  !isEditing
                                }

                                onChange={(e) => {
                                  if (
                                    !isEditing
                                  )
                                    return;

                                  const raw =
                                    e.target.value;

                                  setTableData(
                                    (prev) => {
                                      const updated =
                                        prev.map(
                                          (row) =>
                                            [...row]
                                        );

                                      updated[r][c] =
                                        raw;

                                      return updated;
                                    }
                                  );
                                }}

                                onBlur={() => {
                                  if (
                                    !isEditing
                                  )
                                    return;

                                  setTableData(
                                    (prev) => {
                                      const updated =
                                        prev.map(
                                          (row) =>
                                            [...row]
                                        );

                                      updated[r][c] =
                                        formatNumber(
                                          prev[r][c]
                                        );

                                      return updated;
                                    }
                                  );
                                }}

                                onKeyDown={(e) =>
                                  handleKeyPress(
                                    e,
                                    r,
                                    c
                                  )
                                }

                                className="
                                  w-full h-full
                                  px-2 py-1
                                  text-xs sm:text-sm
                                  md:text-[14px]
                                  outline-none
                                "

                                inputMode="decimal"
                              />
                            </td>
                          )
                        )}

                      </tr>
                    )
                  )}

                </tbody>
              </table>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-2 mt-4">

              <button
                onClick={() =>
                  setIsEditing(
                    !isEditing
                  )
                }
                className={`w-full sm:flex-1 py-2.5 sm:py-3 rounded-md text-white font-medium ${
                  isEditing
                    ? "bg-yellow-500"
                    : "bg-blue-600"
                }`}
              >
                {isEditing
                  ? "Lock"
                  : "Edit"}
              </button>

              <button
                onClick={addRow}
                className="
                  w-full sm:flex-1
                  py-2.5 sm:py-3
                  rounded-md
                  bg-purple-600
                  text-white
                  font-medium
                "
              >
                + Add Row
              </button>

              <button
                onClick={addColumn}
                className="
                  w-full sm:flex-1
                  py-2.5 sm:py-3
                  rounded-md
                  bg-orange-600
                  text-white
                  font-medium
                "
              >
                + Add Column
              </button>

              <button
                onClick={downloadCSV}
                className="
                  w-full sm:flex-1
                  py-2.5 sm:py-3
                  rounded-md
                  bg-green-600
                  text-white
                  font-medium
                "
              >
                Download CSV
              </button>

            </div>

          </div>
        )}

    </div>
  );
}