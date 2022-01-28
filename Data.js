import { Api } from "./Api.js"

const api = new Api();

export class Data {
  constructor(name, wells) {
    this.name = name;
    this.wells = this.#wellCreate(wells);
  }

  #wellCreate(wells) {
    let wellsList = [];
    for(let well of wells) {
      let wellItem = {};
      wellItem.name = well;
      wellItem.kondensatGaz = api.dinamicParameter(well, this.kondensatGaz) || 'Н/Д';
      wellItem.pZab = api.dinamicParameter(well, this.pZab) || 'Н/Д';
      wellItem.tZab = api.dinamicParameter(well, this.tZab) || 'Н/Д';
      wellItem.pZatr = api.dinamicParameter(well, this.pZatr) || 'Н/Д';
      wellItem.tZatr = api.dinamicParameter(well, this.tZatr) || 'Н/Д';
      wellItem.tehModeOne = api.dinamicParameter(well, this.tehModeOne) || 'Н/Д';
      wellItem.tehModeTwo = api.dinamicParameter(well, this.tehModeTwo) || 'Н/Д';
      wellItem.pUst = api.dinamicParameter(well, this.pUst) || 'Н/Д';
      wellItem.pReg = api.dinamicParameter(well, this.pReg) || 'Н/Д';
      wellItem.tReg = api.dinamicParameter(well, this.tReg) || 'Н/Д';
      wellItem.regPosition = api.dinamicParameter(well, this.regPosition) || 'Н/Д';
      wellItem.debit = api.dinamicParameter(well, this.debit) || 'Н/Д';
      wellItem.pBeforeReg = api.dinamicParameter(well, this.pBeforeReg) || 'Н/Д';
      wellItem.tBeforeReg = api.dinamicParameter(well, this.tBeforeReg) || 'Н/Д';
      wellItem.pBndr = api.dinamicParameter(well, this.pBndr) || 'Н/Д';
      wellItem.tBndr = api.dinamicParameter(well, this.tBndr) || 'Н/Д';
      wellItem.pKgs = api.dinamicParameter(well, this.pKgs) || 'Н/Д';
      wellItem.tKgs = api.dinamicParameter(well, this.tKgs) || 'Н/Д';
      wellItem.pGsk = api.dinamicParameter(well, this.pGsk) || 'Н/Д';
      wellItem.tGsk = api.dinamicParameter(well, this.tGsk) || 'Н/Д';

      wellsList.push(wellItem);
    }

    return wellsList;
  }
}