import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { Pokemon } from './pokemon'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private dataUri = 'http://localhost:3000/pokemons'

  constructor(private http: HttpClient) { }

  // private dummyPokemonData : Pokemon[] = [{"_id":"dadaddfsrtgs","Type":"Fire","PokedexNo":3,"Name":"Charizard","Generation":1}]

  getPokemons(): Observable<Pokemon[]>{
    console.log('Dummy getPokemons called');

    return this.http.get<Pokemon[]>(`${this.dataUri}?limit=3`)
    .pipe(
      catchError(this.handleError)
    )

  }

  private handleError(error:HttpErrorResponse){
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
  } 
  else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // Return an observable with a user-facing error message.
  return throwError(
    'Something bad happened; please try again later.');
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    console.log(pokemon)
    return this.http.post<Pokemon>(this.dataUri, pokemon)
      .pipe(
        catchError(this.handleError)
      )
  }


  updatePokemon(id:string, pokemon: Pokemon): Observable<Pokemon>{
    console.log('subscribe to update'+id);
    let pokemonUri : string = this.dataUri + '/'+ id;
    return this.http.put<Pokemon>(pokemonUri, pokemon)
    .pipe(
      catchError(this.handleError)
    )
  }

  deleteBook(id:string): Observable<unknown> {
    const url = `${this.dataUri}/${id}`;
    return this.http.delete(url)
    .pipe(catchError(this.handleError)
    );
  }


}

