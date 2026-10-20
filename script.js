/*
  REGOLE
  - Continua quello che hai iniziato stamani in classe.
  - Niente eventi (li vediamo domani): chiama le funzioni dalla console o all'avvio.
  - Solo const/let, mai var. Solo querySelector/querySelectorAll per il DOM.
*/

/* SCRIVI QUI LE TUE FUNZIONI:
   1. Modifica aggiungiTask per accettare priorita
   2. Aggiungi bottone Elimina su ogni task
   6. evidenzia(indice) / togliEvidenza(indice)
   7. data automatica nel task
   8. contaPerPriorita()
*/

const tasks = [];

function render() {
  const lista = document.querySelector('#lista-task');
  lista.textContent = '';

  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.classList.add(`priorita-${task.priorita}`);
    li.classList.toggle('evidenziato', task.evidenziato);

    const badge = document.createElement('span');
    badge.classList.add('badge');
    badge.textContent = task.priorita;

    const data = document.createElement('span');
    data.classList.add('data');
    data.textContent = task.data;

    const bottoneElimina = document.createElement('button');
    bottoneElimina.textContent = 'Elimina';

    const divData = document.createElement('div');
    divData.classList.add('divData');
    divData.append(data, bottoneElimina);

    li.append(task.testo, badge, divData);
    lista.append(li);
  });

  document.querySelector('#contatore').textContent = tasks.length;
}

function aggiungiTask(testo, priorita = 'media') {
  tasks.push({ testo, priorita, data: new Date().toLocaleString('it-IT'), evidenziato: false });
  render();
}

function evidenzia(indice) {
  if (!tasks[indice]) return;
  tasks[indice].evidenziato = true;
  render();
}

function togliEvidenza(indice) {
  if (!tasks[indice]) return;
  tasks[indice].evidenziato = false;
  render();
}

function contaPerPriorita() {
  const conteggi = tasks.reduce((totali, task) => {
    totali[task.priorita]++;
    return totali;
  }, { alta: 0, media: 0, bassa: 0 });
  console.log(conteggi);
  return conteggi;
}

// Avvio: 5 task della foto, poi evidenzia il secondo
aggiungiTask('Pagare le bollette', 'alta');
aggiungiTask('Studiare JavaScript', 'media');
aggiungiTask('Comprare il pane', 'bassa');
aggiungiTask('Chiamare il dentista', 'alta');
aggiungiTask('Riposarsi', 'bassa');
evidenzia(1);
