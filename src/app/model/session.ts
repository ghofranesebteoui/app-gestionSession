import { Candidat } from "./candidat";
import { Formateur } from "./formateur";
import { Formation } from "./formation";

export class Session {
    constructor(
      private _id: number,
      private _dateDeb: Date,
      private _dateFin: Date,
      private _desc: string,
      private _formation: Formation,
      private _formateurs: Formateur[],
      private _candidats: Candidat[]
    ) {}
  
    public get id(): number {
      return this._id;
    }
    public set id(value: number) {
      this._id = value;
    }
  
    public get dateDeb(): Date {
        return this._dateDeb;
    }
    public set dateDeb(value: Date) {
        this._dateDeb = value;
    }
  
    public get dateFin(): Date {
      return this._dateFin;
    }
    public set dateFin(value: Date) {
      this._dateFin = value;
    }
  
    public get desc(): string {
        return this._desc;
    }
    public set desc(value: string) {
        this._desc = value;
    }
  
    public get formation(): Formation {
      return this._formation;
    }
    public set formation(value: Formation) {
      this._formation = value;
    }
  
    public get formateurs(): Formateur[] {
      return this._formateurs;
    }
    public set formateurs(value: Formateur[]) {
      this._formateurs = value;
    }
  
    public get candidats(): Candidat[] {
      return this._candidats;
    }
    public set candidats(value: Candidat[]) {
      this._candidats = value;
    }
  }
  