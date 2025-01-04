export class Formation {
  value: any;
        constructor(
        private _id: number,
        private _titre: string,
        private _desc: string,
        private _chargeHoraire: number,
        private _prog: string,
        private _nivDifficulte: string,
        private _motsCles: string[],
        private _categories: string[]
      ) {}
    
      public get id(): number {
        return this._id;
      }
      public set id(value: number) {
        this._id = value;
      }
    
      public get titre(): string {
        return this._titre;
      }
      public set titre(value: string) {
        this._titre = value;
      }
    
      public get desc(): string {
        return this._desc;
    }
    public set desc(value: string) {
        this._desc = value;
    }
    
      public get chargeHoraire(): number {
        return this._chargeHoraire;
      }
      public set chargeHoraire(value: number) {
        this._chargeHoraire = value;
      }
    
      public get prog(): string {
        return this._prog;
    }
    public set prog(value: string) {
        this._prog = value;
    }
    
    public get nivDifficulte(): string {
        return this._nivDifficulte;
    }
    public set nivDifficulte(value: string) {
        this._nivDifficulte = value;
    }
   
    
      public get motsCles(): string[] {
        return this._motsCles;
      }
      public set motsCles(value: string[]) {
        this._motsCles = value;
      }
    
      public get categories(): string[] {
        return this._categories;
      }
      public set categories(value: string[]) {
        this._categories = value;
      }
}
