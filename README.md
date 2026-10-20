** ESERCITAZIONE 20/10 - RAGIONARE SOLO CON JS

** MODIFICARE SOLO FILE SCRIPT.JS

Contesto

5 task colorati per priorità, badge, data, "Elimina", un task evidenziato, "Totale: 5".
Niente eventi: tutto si guida da chiamate di funzione all'avvio o dalla console.
Solo const/let; solo querySelector/querySelectorAll.
Funzioni richieste: aggiungiTask(testo, priorita), bottone Elimina, evidenzia(indice)/togliEvidenza(indice), data automatica, contaPerPriorita().
index.html e style.css non si toccano.

5 task con stesso orario 13:15:17 = 5 chiamate di fila a aggiungiTask all'avvio.
Task evidenziato = indice 1 = evidenzia(1) all'avvio.
Priorità dei task = parametro di aggiungiTask (alta, media, bassa, alta, bassa).

Struttura del <li> (dedotta dal CSS)

li.priorita-<x> (+ .evidenziato)
testo
span.badge
div.divData
span.data
button "Elimina"

** STEP OPERATIVI

1- Creare Array tasks { testo, priorita, data, evidenziato }: il DOM è conseguenza dell'array, così l'evidenziazione sopravvive ai ridisegni.
2- Usare render(): unico punto che tocca il DOM; svuota la lista e ricostruisce i li con textContent (no innerHTML); aggiorna #contatore con tasks.length.
3- Usare aggiungiTask(testo, priorita = 'media'): crea l'oggetto con la data (toLocaleString('it-IT')) poi push + render(); default per compatibilità
4- Data: new Date().toLocaleString('it-IT') dentro aggiungiTask, salvata nell'oggetto (se fosse in render cambierebbe a ogni ridisegno). 
5- evidenzia(i) / togliEvidenza(i): + render(). flag nell'array 
6- contaPerPriorita(): un reduce -> { alta, media, bassa }, da stampare in console.
7- Avvio: 5 chiamate a aggiungiTask con le priorità dello screenshot (alta, media, bassa, alta, bassa), poi evidenzia(1).
8- Pulsanti inerti: "Aggiungi" (già nell'HTML) e "Elimina" (creato con render() su ogni li) non hanno nessuna funzione collegata. 
Il bottone Elimina è solo creato, nessuna funzione di eliminazione viene scritta, viene solo disengato da render().

** SCRIVERE FUNZIONI 

Scrivere le funzioni sopra indicate

** TEST

Aprire index.html e provare le funzioni sviluppate in console.

** REPORT 

Riportare eventuali successi o fallimenti.