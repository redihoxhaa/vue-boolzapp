'use strict'

const { createApp } = Vue;

createApp({
    data() {
        return {
            contactOptionShower: false,
            copiedContactList: [],
            latestAccess: "",
            appTheme: "light-theme",
            areYouInChatMobile: false,
            newContactName: "",
            newContactPicURL: "",
            biggerFont: false,
            isSendingMessage: "",
            welcomeMessageHider: false,
            splashScreenHider: false,
            leftColShow: true,
            rightColShow: false,
            mappedContactList: [],
            optionMessageShower: [],
            currentMessageIndex: null,
            currentContactIndex: 0,
            newMessageText: "",
            searchModel: '',
            randomQuotes: [
                "Il cielo è limpido stasera, guardalo!",
                "Ho finalmente imparato a fare sushi! Tu hai qualche piatto preferito?",
                "Hai visto l'ultima mostra d'arte contemporanea? È stata incredibile!",
                "Mi sto dedicando alla fotografia di paesaggi. Qual è il tuo soggetto preferito da fotografare?",
                "Ho corso una maratona questo weekend. Tu pratichi sport?",
                "Sto ascoltando musica classica per rilassarmi. Che genere di musica preferisci?",
                "Sto leggendo un libro di fantascienza che mi sta catturando. Hai letto qualcosa di interessante ultimamente?",
                "Ho comprato un telescopio per osservare le stelle. Hai mai guardato il cielo notturno?",
                "Mi sto cimentando nell'arte del giardinaggio. Ti piace prenderti cura delle piante?",
                "Ho iniziato un corso online su programmazione. Ti interessa la tecnologia?"
            ],
            contacts: [

                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
        }

    },
    methods: {

        // Check sul viewport per mostrare gli elementi corretti
        adaptToScreen() {
            if (window.matchMedia('only screen and (min-width: 992px)').matches) {
                this.rightColShow = true;
                this.leftColShow = true;
            } else {
                if (this.areYouInChatMobile === true) {
                    this.rightColShow = true;
                    this.leftColShow = false;
                } else {
                    this.rightColShow = false;
                }
            }
        },

        // Aggiungere nuovo contatto
        addNewContact() {
            const newContact = {};
            if (this.newContactName.trim() !== '' && this.newContactPicURL.trim() !== '') {
                newContact.name = this.newContactName;
                newContact.avatar = this.newContactPicURL;
                newContact.visible = true;
                newContact.messages = [];
                newContact.index = this.mappedContactList.length;
                this.copiedContactList.push(newContact);
            }
            this.newContactName = "";
            this.newContactPicURL = "";
        },

        // Torna alla lista contatti in mobile cliccando sul chevron
        backToList() {
            if (window.matchMedia('only screen and (max-width: 991px)').matches) {
                this.leftColShow = !this.leftColShow;
                this.rightColShow = !this.rightColShow;
                this.areYouInChat = false;
            }
        },

        // Aumentare il font size della pagina
        changeFont() {
            this.biggerFont = !this.biggerFont;
        },

        // Passare al tema dark
        changeTheme() {
            if (this.appTheme === "light-theme") {
                this.appTheme = "dark-theme";
            } else {
                this.appTheme = "light-theme";
            }
        },

        // Copia la lista dei contatti
        copyContactList() {
            this.copiedContactList = [...this.contacts];
        },

        // Crea uno stato per ogni messaggio per mostrare o meno il menu a tendina delle opzioni
        createStates() {
            this.optionMessageShower = [];
            this.mappedContactList[this.currentContactIndex].messages.forEach((message, index) => {
                const state = false;
                this.optionMessageShower.push(state);
            });
        },

        // Elimina tutti i messaggi del contatto corrente
        deleteAllMessages() {
            this.mappedContactList[this.currentContactIndex].messages.splice(0, this.mappedContactList[this.currentContactIndex].messages.length);
            this.createStates();
        },

        // Elimina il contatto corrente
        deleteContact(index) {
            this.copiedContactList.splice(index, 1);
            this.mapContacts();
        },

        // Elimina singolo messaggio
        deleteMessage(index) {
            this.mappedContactList[this.currentContactIndex].messages.splice(index, 1);
            this.getLastAccess();
            this.createStates();
            const orarioLastMessage = new Date(this.mappedContactList[this.currentContactIndex].messages[index].date);
            const userLatestAccess = new Date(this.mappedContactList[this.currentContactIndex].lastAccess);
            if (orarioLastMessage > userLatestAccess) {
                this.mappedContactList[this.currentContactIndex].lastAccess = orarioLastMessage;
            }
        },

        // Estrai ora e minuti dalla stringa della data
        extractTime(actualDate) {
            const time = actualDate.slice(11, -3);
            return time;
        },

        // Filtra i contatti con searchbar
        filteredContacts() {
            if (this.searchModel.trim() !== '') {
                const filteredContactList = this.mappedContactList.filter((contact) =>
                    contact.name.toLowerCase().startsWith(this.searchModel.toLowerCase()));
                return filteredContactList;
            } else {
                return this.mappedContactList;
            }
        },

        // Ottieni ultimo accesso del contatto corrente
        getLastAccess() {
            const reversed = [...this.mappedContactList[this.currentContactIndex].messages].reverse();
            reversed.every(element => {
                if (element.status === 'received') {
                    this.latestAccess = this.extractTime(element.date);
                    return false;
                }
                return true;
            });
        },

        // Nascondi splash screen
        hideSplashScreen() {
            this.splashScreenHider = true;
        },

        // Nascondi messaggio di benvenuto
        hideWelcomeMessage() {
            this.welcomeMessageHider = true;
        },

        // Mappa i contatti e aggiungi key per tracciare e key per ultimo accesso
        mapContacts() {
            this.mappedContactList = this.copiedContactList.map((contact, index) => {
                const originalIndex = index;
                const lastAccess = this.extractTime(this.copiedContactList[this.currentContactIndex].messages[this.copiedContactList[this.currentContactIndex].messages.length - 1].date);
                contact.lastAccess = lastAccess;
                contact.index = originalIndex;
                return contact;
            });
        },

        // Funzioni di timeout quando si riceve il messaggio
        receiveMessage() {
            setTimeout(function () { this.isSendingMessage = "online"; }.bind(this), 1000);
            setTimeout(function () { this.isSendingMessage = "sta scrivendo..."; }.bind(this), 2000);
            setTimeout(function () { this.isSendingMessage = "online"; }.bind(this), 4000);
            setTimeout(function () { this.isSendingMessage = ""; }.bind(this), 6000);
        },

        // Scrolla fino al messaggio più recente
        scrollToBottom() {
            const latestMessage = document.querySelector(".where-is-the-bottom");
            latestMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });
        },

        // Manda un messaggio
        sendMessage(message, status) {
            const newMessage = {};
            if (message.trim() !== '') {
                const dt = new Date();
                const padL = (nr, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);
                newMessage.date = `${padL(dt.getMonth() + 1)}/${padL(dt.getDate())}/${dt.getFullYear()} ${padL(dt.getHours())}:${padL(dt.getMinutes())}:${padL(dt.getSeconds())}`;
                newMessage.message = message;
                newMessage.status = status;
                this.mappedContactList[this.currentContactIndex].messages.push(newMessage);
                this.newMessageText = "";
                if (status === 'sent') {
                    setTimeout(function () { this.sendMessage(this.randomQuotes[Math.floor(Math.random() * 10)], 'received'); }.bind(this), 4000);
                } else {
                    this.mappedContactList[this.currentContactIndex].lastAccess = `${padL(dt.getHours())}:${padL(dt.getMinutes())}`;
                }
                setTimeout(function () { this.scrollToBottom(); }.bind(this), 10);
            }
        },

        // Mostra chat contatto
        showContact(index) {
            this.currentContactIndex = index;
            this.createStates();
            this.welcomeMessage = false;
            if (window.matchMedia('only screen and (max-width: 991px)').matches) {
                this.areYouInChatMobile = true;
            }
            this.searchModel = "";
        },

        // Mostra opzioni contatto
        showContactOptions() {
            this.contactOptionShower = !this.contactOptionShower;
        },

        // Mostra opzioni messaggio
        showMessageOptions(index) {
            this.currentMessageIndex = index;
            this.optionMessageShower[index] = !this.optionMessageShower[index];
        },


    },

    mounted() {
        this.adaptToScreen();
        window.addEventListener('resize', this.adaptToScreen);
        this.copyContactList()
        this.mapContacts();
        this.createStates();
        setTimeout(this.hideSplashScreen, 1000)
    }
}).mount('#app')