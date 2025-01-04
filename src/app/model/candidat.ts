export class Candidat {
  constructor(
    private _id: number,
    private _nom: string,
    private _prenom: string,
    private _email: string,
    private _numCIN: string,
    private _photo: string,
    private _mdp: string
  ) {}

  // Méthodes getter et setter
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  public get nom(): string {
    return this._nom;
  }
  public set nom(value: string) {
    this._nom = value;
  }

  public get prenom(): string {
    return this._prenom;
  }
  public set prenom(value: string) {
    this._prenom = value;
  }

  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }

  public get numCIN(): string {
    return this._numCIN;
  }
  public set numCIN(value: string) {
    this._numCIN = value;
  }

  public get photo(): string {
    return this._photo;
  }
  public set photo(value: string) {
    this._photo = value;
  }

  public get mdp(): string {
    return this._mdp;
  }
  public set mdp(value: string) {
    this._mdp = value;
  }
}
