import { Parameter } from "./Parameter.js";
import { Render } from "./Render.js";
import { Data } from "./Data.js";

const render = new Render;

const wheater = {
  temperatureValue: '-26 &deg;С',
  speedWindValue: '2 м/с'
}
const parametersList = [];

const kondensatGaz = new Parameter('Конденсатно-газовый фактор', 'гр/м3');
const pZab = new Parameter('Р забойное', 'МПа');
const tZab = new Parameter('Т забойное', '&deg;С');
const pZatr = new Parameter('Р затрубное', 'МПа');
const tZatr = new Parameter('Тех. режим доп.', 'МПа');
const tehModeOne = new Parameter('Тех. режим доп.', 'МПа');
const tehModeTwo = new Parameter('Тех. режим доп.', 'МПа');
const pUst = new Parameter('Р устевое', 'МПа');
const pReg = new Parameter('Р до регулятора', 'МПа');
const tReg = new Parameter('Т до регулятора', '&deg;С');
const regPosition = new Parameter('Положение регулятора', '%');
const debit = new Parameter('Дебит скважины', 'м3/час');
const pBeforeReg = new Parameter('Р после регулятора', 'МПа');
const tBeforeReg = new Parameter('Т после регулятора', '&deg;С');
const pBndr = new Parameter('Р входа на БНДР', 'МПа');
const tBndr = new Parameter('Т входа на БНДР', '&deg;С');
const pKgs = new Parameter('Р выхода с КГС', 'МПа');
const tKgs = new Parameter('Т выхода с КГС', '&deg;С');
const pGsk = new Parameter('Р входа на ГСК', 'МПа');
const tGsk = new Parameter('Т входа на ГСК', '&deg;С');

parametersList.push(kondensatGaz, pZab, tZab, pZatr, tZatr, tehModeOne, tehModeTwo, pUst, pReg, tReg, regPosition, debit, pBeforeReg, tBeforeReg, pBndr, tBndr, pKgs, tKgs, pGsk, tGsk);

render.createParameter(parametersList, wheater);

const A1 = new Data('A1', ['A1-1', 'A1-2']);
const A2 = new Data('A2', ['A2-1', 'A2-2', 'A2-3', 'A2-4']);

render.createBranch(A1);
render.createBranch(A2);