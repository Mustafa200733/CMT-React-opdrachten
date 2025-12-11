De eerste bug was de App.jsx geen import useState had en de AddMovie ook,
 daarna stond de setMovie buiten de functie handleSubmit.
 er stond een uitroepteken in de      if (!movies.includ es(newMovie)) dat heb ik verwijderd en     setMovies([...movies, newMovie]);  ik heb van setMovie set Movies gemaakt dus ik legde een s achter setMovie 
 
## Bug Fixes

### Bug 1:In App.jsx werd een foutmelding weergegeven: "useState is not defined".
- **Probleem:** React kon de useState-hook niet vinden, waardoor de component niet  kon renderen.
- **Oorzaak:** Er stond geen import van useState bovenaan App.jsx.
- **Oplossing:** Ik heb bovenaan App.jsx de correcte import toegevoegd:
                  import { useState } from 'react';
                  
### Bug 2: In App.jsx werd een foutmelding weergegeven: "useState is not defined".
- **Probleem:**De component gebruikte useState, maar React wist niet waar deze functie vandaan kwam.
- **Oorzaak:** Bovenaan AddMovie.jsx ontbrak de import van useState.
- **Oplossing:**Ik heb bovenaan AddMovie.jsx de juiste import toegevoegd:
                import { useState } from 'react';

### Bug 3: In App.jsx werd de functie setMovie aangeroepen wanneer er een nieuwe film werd toegevoegd.
- **Probleem:** React gaf een foutmelding omdat setMovie niet bestaat in deze component.
                Hierdoor werkte het toevoegen van nieuwe films niet.
- **Oorzaak:** Oorzaak
            De state voor films was gedeclareerd als:
            const [movies, setMovies] = useState([]);

            Maar in de code werd per ongeluk de niet-bestaande functie setMovie gebruikt:
            setMovie([...movies, newMovie]);

- **Oplossing:**De foutieve functie is vervangen door de correcte state setter:

setMovies([...movies, newMovie]);
                  
### Bug 4: In App.jsx werkte de duplicatie-check in de functie addMovie niet zoals verwacht.
- **Probleem:** Wanneer een film nog niet in de lijst stond, verscheen de melding:
               "This movie is already in your favorites!"
                De logica was dus omgekeerd.

- **Oorzaak:**  De duplicatie-check gebruikte de verkeerde conditie:
                if (!movies.includes(newMovie)) {
                alert('This movie is already in your favorites!');
                return;}
                !movies.includes(newMovie) is true wanneer de film nog niet bestaat, terwijl de melding het tegenovergestelde zegt.

- **Oplossing:**De conditie is aangepast naar:
                if (movies.includes(newMovie)) {
                alert('This movie is already in your favorites!');
                return;
                } 
                Nu verschijnt de melding alleen wanneer de film écht al in de lijst staat.  






## Bug 5 Bij het toevoegen van een nieuwe film kon een gebruiker invoer doen die uitsluitend uit spaties bestond (bijvoorbeeld " "). Deze invoer werd niet herkend als leeg en werd tóch aan de lijst toegevoegd.

-**Probleem:**

De validatie controleerde alleen op een lege string (""), maar niet op strings met spaties. Hierdoor slaagden users erin om "lege" filmtitels toe te voegen.

-**Oorzaak:**

De code gebruikte:
if (movie === '') { ... }
" " is niet gelijk aan "", dus de check faalde.

-**Oplossing**
Door .trim() te gebruiken worden alle spaties verwijderd vóór de validatie:
const trimmed = movie.trim();
if (trimmed === '') {
  alert('Movie name cannot be empty');
  return;
}
Hierdoor worden filmnamen met alleen spaties correct afgekeurd.


### **Test Report Template:**
```markdown
## Test Results

### User Story 1: : Movies toevoegen aan favorietenlijst**✅ PASSED
Criterium 1: Er is een invoerveld aanwezig. ✅

Criterium 2: Er is een knop aanwezig om toe te voegen. ✅

Criterium 3: Film wordt toegevoegd bij klikken. ✅

Criterium 4: Film verschijnt onder bestaande favorieten. ✅

Criterium 5: Lege titel -> foutmelding. ✅

Criterium 6: Inputveld wordt leeggemaakt na toevoegen. ✅


### User Story 2 :Films verwijderen uit favorietenlijst- ✅ PASSED

Criterium 1: Elke film heeft een verwijderknop. ✅

Criterium 2: Klikken op verwijderknop verwijdert film. ✅

Criterium 3: Film verdwijnt direct uit lijst. ✅

Criterium 4: Geen foutmelding bij succesvol verwijderen. ✅


## User Story 3: Duplicate films voorkomen — ✅ PASSED
Criterium 1: Duplicate toevoegen geeft foutmelding. ✅

Criterium 2: Duplicate wordt niet toegevoegd. ✅

Criterium 3: Lijst bevat geen duplicaten. ✅


## User Story 4: Lege lijstmelding tonen — ✅ PASSED

Criterium 1: Tekst "No favorite movies yet. Add some!" verschijnt bij lege lijst. ✅

Criterium 2: Melding verdwijnt zodra eerste film toegevoegd is. ✅

Criterium 3: Melding verschijnt opnieuw wanneer alle films verwijderd zijn. ✅





## 🧪 Test Scenario's

### **Test Scenario 1: Happy Path**

"Inception" toevoegen → zichtbaar

"The Matrix" toevoegen → zichtbaar

Verwijder "Inception" → alleen "The Matrix" blijft

Verwijder "The Matrix" → lege-lijst melding verschijnt ✅

### **Test Scenario 2: Error Handling**

Lege titel → alert "Movie name cannot be empty" ✅

"Avatar" toevoegen → OK

"Avatar" opnieuw toevoegen → alert "This movie is already in your favorites!" ✅

Enkel één "Avatar" aanwezig ✅

### **Test Scenario 3: Edge Cases**

Alleen spaties → alert (trim check) ✅

Zeer lange naam → UI toont alles  ✅

Speciale karakters → geaccepteerd ✅


## Git Commits

### Commit 1
**Message:** `fix: add missing useState import in App.jsx`  
**Beschrijving:** De applicatie gaf een foutmelding omdat useState niet was geïmporteerd in App.jsx.

### Commit 2
**Message:** `fix: add missing useState import in AddMovie.jsx`  
**Beschrijving:** Ook AddMovie.jsx gaf een error door ontbrekende useState import.

### Commit 3
**Message:** `fix: correct setMovies state setter (was setMovie)`  
**Beschrijving:** In App.jsx werd setMovie gebruikt in plaats van setMovies, waardoor films niet werden toegevoegd.

### Commit 4
**Message:** `fix: prevent adding duplicate movie titles`  
**Beschrijving:** Duplicate films werden juist *wel* toegevoegd, dit is nu opgelost met een correcte includes-check.

### Commit 5
**Message:** `fix: clear input field after submitting a movie`  
**Beschrijving:** Filmtitel bleef in het invoerveld staan. Nu wordt het invoerveld correct geleegd met setMovie('').

### Commit 6
**Message:** `fix: prevent adding empty or whitespace-only movie titles`  
**Beschrijving:** “    ” en lege input konden worden toegevoegd. Dit is nu geblokkeerd met movie.trim().

### Commit 7
**Message:** `fix: delete movie from list correctly`  
**Beschrijving:** Verwijderen werkte, maar had foutieve of inconsistente logica. Nu wordt de lijst correct gefilterd.

### Commit 8
**Message:** `fix: show empty list message when no movies are present`  
**Beschrijving:** Er werd geen melding getoond bij een lege lijst. De lege-lijst-conditie is nu correct toegevoegd.
