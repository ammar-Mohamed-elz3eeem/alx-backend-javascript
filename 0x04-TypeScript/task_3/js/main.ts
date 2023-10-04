/// <reference path="crud.d.ts" />
import * as CRUD from './crud.js';
import { RowElement, RowID } from './interface.js';

export const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

export const newRowID: RowID = CRUD.insertRow(row);

export const updatedRow: RowID = CRUD.updateRow(newRowID, row);

CRUD.deleteRow(newRowID);
