# BOOLZAP

#### CONSEGNA DELL'ESERCIZIO 

```
Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato

Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

Milestone 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

Milestone 5 - opzionale
Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 

```

```
Possibili bonus

- Funzionalità

evitare che l'utente possa inviare un messaggio vuoto o composto solamente da spazi

A) cambiare icona in basso a destra (a fianco all'input per scrivere un nuovo messaggio) finché l'utente sta scrivendo: di default si visualizza l'icona del microfono, quando l'input non è vuoto si visualizza l'icona dell'aeroplano. Quando il messaggio è stato inviato e l'input si svuota, si torna a visualizzare il microfono. B) inviare quindi il messaggio anche cliccando sull'icona dell'aeroplano

predisporre una lista di frasi e/o citazioni da utilizzare al posto della risposta "ok:" quando il pc risponde, anziché scrivere "ok", scegliere una frase random dalla lista e utilizzarla come testo del messaggio di risposta del pc

visualizzare nella lista dei contatti l'ultimo messaggio inviato/ricevuto da ciascun contatto

inserire l'orario corretto nei messaggi

sotto al nome del contatto nella parte in alto a destra, cambiare l'indicazione dello stato: visualizzare il testo "sta scrivendo..." nel timeout in cui il pc risponde, poi mantenere la scritta "online" per un paio di secondi e infine visualizzare "ultimo accesso alle xx:yy" con l'orario corretto

dare la possibilità all'utente di cancellare tutti i messaggi di un contatto o di cancellare l'intera chat con tutti i suoi dati: cliccando sull'icona con i tre pallini in alto a destra, si apre un dropdown menu in cui sono presenti le voci "Elimina messaggi" ed "Elimina chat"; cliccando su di essi si cancellano rispettivamente tutti i messaggi di quel contatto (quindi rimane la conversazione vuota) oppure l'intera chat comprensiva di tutti i dati del contatto oltre che tutti i suoi messaggi (quindi sparisce il contatto anche dalla lista di sinistra)

dare la possibilità all'utente di aggiungere una nuova conversazione, inserendo in un popup il nome e il link all'icona del nuovo contatto
fare scroll in giù in automatico fino al messaggio più recente, quando viene aggiunto un nuovo messaggio alla conversazione (NB: potrebbe esserci bisogno di utilizzare nextTick: https://vuejs.org/api/general.html#nexttick)

- Grafica
visualizzare un messaggio di benvenuto che invita l'utente a selezionare un contatto dalla lista per visualizzare i suoi messaggi, anziché attivare di default la prima conversazione

aggiungere una splash page visibile per 1s all'apertura dell'app

A) rendere l'app responsive e fruibile anche su mobile: di default si visualizza solo la lista dei contatti e cliccando su un contatto si vedono i messaggi di quel contatto. B) aggiungere quindi un'icona con una freccia verso sinistra per tornare indietro, dalla visualizzazione della chat alla visualizzazione di tutti i contatti

aggiungere un'icona per ingrandire o rimpicciolire il font: dovrebbe essere sufficiente aggiungere una classe al wrapper principale

aggiungere un'icona per cambiare la modalità light/dark: dovrebbe essere sufficiente aggiungere una classe al wrapper principale
```

---

#### SVOLGIMENTO

MILESTONE 1

- Ci viene chiesto di riprodurre la grafica del sito e di predisporre quella che è la classe che caratterizzerà lo stile dei messaggi ricevuti ed inviati. Ho usato bootstrap per facilitarmi nella creazione dell'interfaccia grafica, dividendo in sezioni il sito. Ho predisposto due classi per i messaggi inviati e ricevuti.

Nella lista contatti il primo **li** avrà le istruzioni del nostro ciclo v-for, che andrà a stampare tutti i contatti ciclando tra gli oggetti del nostro array contatti e andandosi a pescare tutte le informazioni necessarie, in questo caso il nome.


---

MILESTONE 2

- Facciamo lo stesso ciclo v-for anche nella board dei messaggi ma in questo caso andiamo a ciclare nell'array del messaggi dell'utente corrente, aiutandoci con un indice che fa riferimento alla propria posizione nell'array dei contatti. Dichiariamo anche una funzione che assegna l'indice corrente con l'indice del contatto cliccato per visualizzarlo a schermo.

---

MILESTONE 3

- Dichiariammo una funzione sendMessage() che attraverso un v-model, pusha nell'array dei messaggi quello che scriviamo nell'input della barra di testo nella chat, aggiungendogli uno stato 'sent' e generandogli l'ora attuale. Con un setTimeout() generiamo una risposta automatica da parte dell'utente che avrà come status questa volta 'received'.

---

MILESTONE 4

- Sempre tramite un v-model associato all'input della barra di ricerca, dichiariamo una funzione che ci filtra nell'array solo i nomi che corrispondo al testo digitato nella barra e ce li fa vedere nella lista contatti. Usiamo startsWith() così ci assicuriamo che i nomi scritti inizino dalla prima lettera del nostro input.

---

MILESTONE 5

- Predisponiamo nell'html un menù a tendina che ci dia la possibilità di eliminare il messaggio. Attraverso la funzione deleteMessage() andiamo a splittare l'array dei messaggi del contatto corrente dall'indice del messaggio cliccato + 1 posizione, in modo che elimini solo quello. Nella lista dei contatti impostiamo uno span che prende il contenuto dall'orario dell'ultimo messaggio del contatto. In questo caso non avendo usato Luxon ho dovuto trimmare l'orario già esistente.

---

BONUS 

- 


