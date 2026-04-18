   /**
 * Funzione per cambiare il contenuto del div "display-area"
 * @param {string} tipo - La chiave corrispondente alla pagina da mostrare
 */
function cambiaPagina(tipo) {
    // Troviamo l'elemento HTML dove inserire il testo
    const contenitore = document.getElementById('display-area');
    
    // Configurazione dei link esterni e delle relative icone
    const linkEsterni = {
        'gemini': { url: 'https://gemini.google.com/', icona: 'gemini1.png' },
        'chatgpt': { url: 'https://chatgpt.com/', icona: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
        'claude': { url: 'https://claude.ai/', icona: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Claude-ai-icon.svg' },
        'perplexity': { url: 'https://www.perplexity.ai/', icona: 'perplexity1.png' }
    };

    // Database interno con i testi per ogni sezione
    const database = {
        'home_iniziale': `
            <h2>Benvenuti nel portale AI</h2>
            <p>Esplora le sezioni del sito utilizzando la barra di navigazione superiore.</p>`,

        'home': `
            <h2>L'Origine dell'IA</h2>
            <p>L'intelligenza artificiale non ha un unico inventore, ma è nata grazie al lavoro di pionieri durante la conferenza di Dartmouth.</p>
            
            <div class="inventore-box">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/John_McCarthy_Stanford.jpg" alt="John McCarthy" style="width:150px; border-radius:10px; margin: 10px 0;">
                <ul style="text-align: left; display: inline-block;">
                    <li><strong>Chi:</strong> John McCarthy (insieme a Marvin Minsky, Nathaniel Rochester e Claude Shannon).</li>
                    <li><strong>Anno:</strong> 1956.</li>
                    <li><strong>Evento:</strong> Il seminario estivo di Dartmouth, dove venne coniato il termine "Intelligenza Artificiale".</li>
                </ul>
            </div>

            <hr style="margin: 20px 0; border: 0; border-top: 1px solid #ddd;">

            <h2>Cos'è l'Intelligenza Artificiale?</h2>
            <p>L'IA è il ramo dell'informatica che si occupa di creare sistemi capaci di simulare processi cognitivi umani, come l'apprendimento, il ragionamento e l'auto-correzione.</p>

            <h2>Le sue Applicazioni</h2>
            <ul style="text-align: left; columns: 2; -webkit-columns: 2;">
                <li>Assistenti vocali (Alexa, Siri)</li>
                <li>Diagnosi medica avanzata</li>
                <li>Guida autonoma (Tesla)</li>
                <li>Generazione di testi e immagini</li>
                <li>Filtri antispam</li>
                <li>Sistemi di raccomandazione (Netflix)</li>
            </ul> `,
        
        'gemini': `
            <h2>Google Gemini</h2>
            <p><strong>Sviluppatore:</strong> Google DeepMind <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" class="logo-azienda" alt="Google Logo" style="height:20px;"></p>
            <p><strong>Costo di produzione:</strong> Circa 200-500 milioni di dollari.</p>

            <h3>Piani e Abbonamenti</h3>
            <table class="gemini-table">
                <thead>
                    <tr>
                        <th>Piano</th>
                        <th>Costo Mensile</th>
                        <th>Caratteristiche principali</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Gemini (Free)</strong></td>
                        <td>Gratis</td>
                        <td>Accesso al modello standard, ideale per compiti quotidiani e chat.</td>
                    </tr>
                    <tr>
                        <td><strong>Gemini Advanced</strong></td>
                        <td>€21,99 / mese</td>
                        <td>Modello Ultra 1.0/1.5, 2TB di spazio su Drive, integrazione in Docs e Gmail.</td>
                    </tr>
                    <tr>
                        <td><strong>Gemini Business</strong></td>
                        <td>Variabile (Aziende)</td>
                        <td>Protezione dati aziendali di livello enterprise e strumenti admin.</td>
                    </tr>
                    </tbody>       
            </table>
            <h3>Analisi: Pregi e Difetti</h3> 
            <table class="gemini-table">
            <thead>
                    <tr>
                        <th>Punti di Forza (Perché sceglierlo)</th>
                        <th>Punti di Debolezza (Cosa migliorare)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Comprensione Multimodale:</strong> A differenza di altri modelli, Gemini è nato per capire contemporaneamente testo, immagini, video e codice senza bisogno di tradurre i dati da un formato all'altro.</td>
                        <td><strong>Allucinazioni Informative:</strong> Come tutti i modelli linguistici, può generare risposte che sembrano convincenti ma sono del tutto inventate. È sempre necessario verificare le fonti.</td>
                    </tr>
                    <tr>
                        <td><strong>Finestra di Contesto Enorme:</strong> La versione Advanced può "leggere" e ricordare fino a 1 milione di token (circa 1 ora di video o migliaia di pagine di documenti) in una sola volta.</td>
                        <td><strong>Bias e Filtri:</strong> A volte i filtri di sicurezza sono troppo restrittivi, portando il modello a rifiutarsi di rispondere a domande innocue o a mostrare pregiudizi ereditati dai dati del web.</td>
                    </tr>
                    <tr>
                        <td><strong>Integrazione Google:</strong> Può scrivere una mail in Gmail, riassumere un file su Drive o pianificare un viaggio usando Google Maps in tempo reale.</td>
                        <td><strong>Consumo Energetico:</strong> Il mantenimento di modelli così vasti richiede una potenza di calcolo immensa, con un impatto ambientale significativo in termini di energia e raffreddamento server.</td>
                    </tr>
                </tbody>
            </table>`,

       'chatgpt': `
            <h2>OpenAI ChatGPT</h2>
            <p><strong>Sviluppatore:</strong> OpenAI <img src="chatgpt.png" class="logo-azienda" alt="OpenAI Logo" style="height:45px; vertical-align:middle;"></p>
            <p><strong>Proprietario:</strong> OpenAI (con forti investimenti da parte di <strong>Microsoft</strong>).</p>
            <p><strong>Costi di produzione:</strong> Si stima che l'addestramento di GPT-4 sia costato oltre <strong>100 milioni di dollari</strong>, con costi operativi giornalieri di circa 700.000 dollari per mantenere i server attivi.</p>

            <h3>Piani e Abbonamenti</h3>
            <table class="gemini-table">
                <thead>
                    <tr>
                        <th>Piano</th>
                        <th>Costo Mensile</th>
                        <th>Caratteristiche principali</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Free</strong></td>
                        <td>Gratis</td>
                        <td>Accesso a GPT-4o mini, limitato nell'uso intensivo.</td>
                    </tr>
                    <tr>
                        <td><strong>Plus</strong></td>
                        <td>$20 / mese</td>
                        <td>Accesso prioritario a GPT-4o, creazione di GPT personalizzati e DALL-E (immagini).</td>
                    </tr>
                    <tr>
                        <td><strong>Team / Enterprise</strong></td>
                        <td>Su preventivo</td>
                        <td>Sicurezza dei dati avanzata per aziende e collaborazione tra membri.</td>
                    </tr>
                </tbody>
            </table>

            <h3>Analisi: Pregi e Difetti</h3>
            <table class="gemini-table">
                <thead>
                    <tr>
                        <th>Punti di Forza</th>
                        <th>Punti di Debolezza</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Capacità di Ragionamento:</strong> Eccelle nella logica complessa, nella scrittura creativa e nella risoluzione di problemi matematici o di programmazione.</td>
                        <td><strong>Aggiornamento Dati:</strong> Ha una "data di taglio" (knowledge cutoff); non sempre ha accesso alle ultimissime notizie in tempo reale come i motori di ricerca.</td>
                    </tr>
                    <tr>
                        <td><strong>Personalizzazione:</strong> Permette agli utenti Plus di creare versioni personalizzate dell'IA (i GPTs) per compiti specifici.</td>
                        <td><strong>Costi Elevati:</strong> Le funzioni più avanzate e veloci sono riservate quasi esclusivamente agli utenti paganti.</td>
                    </tr>
                    <tr>
                        <td><strong>Ecosistema Plugin:</strong> Grande varietà di strumenti integrati per l'analisi dei dati e la generazione di immagini di alta qualità.</td>
                        <td><strong>Privacy:</strong> Spesso criticato per come gestisce i dati degli utenti per l'addestramento futuro (se non disattivato manualmente).</td>
                    </tr>
                </tbody>
            </table>`,

        'claude': `
        <h2>Anthropic Claude</h2>
        <p><strong>Sviluppatore:</strong> Anthropic 
            <img src="claude_kurv.1200-removebg-preview.png" 
                 alt="[Logo Claude]" 
                 style="height:35px; vertical-align:middle; margin-left:15px;">
        </p>
        <p><strong>Proprietario:</strong> Anthropic (fondata da ex membri di OpenAI, sostenuta da <strong>Amazon</strong> e <strong>Google</strong>).</p>
        <p><strong>Costi di produzione:</strong> Anthropic ha raccolto oltre 7 miliardi di dollari per lo sviluppo, con costi di addestramento per Claude 3 stimati in centinaia di milioni di dollari.</p>

        <h3>Piani e Abbonamenti</h3>
        <table class="gemini-table">
            <thead>
                <tr>
                    <th>Piano</th>
                    <th>Costo Mensile</th>
                    <th>Target</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Claude Free</td>
                    <td>Gratis</td>
                    <td>Uso quotidiano</td>
                </tr>
                <tr>
                    <td>Claude Pro</td>
                    <td>$20 / mese</td>
                    <td>Professionisti</td>
                </tr>
            </tbody>
        </table>

        <h3>Analisi: Pregi e Difetti</h3>
        <table class="gemini-table">
            <thead>
                <tr>
                    <th>Punti di Forza</th>
                    <th>Punti di Debolezza</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Scrittura Naturale:</strong> È considerato l'IA più "umana" nel modo di scrivere, evitando i toni robotici tipici di ChatGPT.</td>
                    <td><strong>Niente Generazione Immagini:</strong> Al momento, Claude non crea immagini, concentrandosi solo su testo e codice.</td>
                </tr>
                <tr>
                    <td><strong>Sicurezza (Constitutional AI):</strong> È progettato con una "costituzione" interna per evitare risposte dannose.</td>
                    <td><strong>Disponibilità Geografica:</strong> È arrivato più tardi in Europa rispetto a Gemini e ChatGPT.</td>
                </tr>
                <tr>
                    <td><strong>Visione e Analisi Documenti:</strong> Eccelle nell'analisi di grafici e foto complesse.</td>
                    <td><strong>Limiti di Messaggi:</strong> Anche nel piano Pro si possono raggiungere i limiti di utilizzo velocemente se si caricano file grandi.</td>
                </tr>
            </tbody>
        </table>`,

        'perplexity': `
            <h2>Perplexity AI</h2>
            <p><strong>Sviluppatore:</strong> Perplexity AI, Inc 
            <img src="perplexity.png" 
                 alt="[Logo Perplexity]" 
                 style="height:20px; vertical-align:middle; margin-left:15px;">
            </p>
            <p><strong>Proprietario:</strong> Società indipendente (investitori: Jeff Bezos, NVIDIA).</p>
            <p><strong>Costi di produzione:</strong> Finanziamenti per oltre 500 milioni di dollari per gestire l'infrastruttura di ricerca in tempo reale.</p>

            <h3>Piani e Abbonamenti</h3>
            <table class="gemini-table">
                <thead>
                    <tr><th>Piano</th><th>Costo</th><th>Caratteristiche</th></tr>
                </thead>
                <tbody>
                    <tr><td>Free</td><td>Gratis</td><td>Ricerche standard illimitate.</td></tr>
                    <tr><td>Pro</td><td>$20/mese</td><td>Uso di GPT-4o e Claude 3.5, analisi file.</td></tr>
                </tbody>
            </table>

            <h3>Analisi: Pregi e Difetti</h3>
            <table class="gemini-table">
                <thead>
                    <tr><th>Punti di Forza</th><th>Punti di Debolezza</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Fonti in tempo reale:</strong> Cita sempre i siti web da cui prende le info.</td>
                        <td><strong>Meno creativo:</strong> Più simile a un motore di ricerca che a uno scrittore.</td>
                    </tr>
                    <tr>
                        <td><strong>Trasparenza:</strong> Riduce drasticamente le allucinazioni fornendo le prove.</td>
                        <td><strong>Interfaccia complessa:</strong> Molti link possono distrarre dalla risposta.</td>
                    </tr>
                </tbody>
            </table>`
    };

    // Inseriamo il codice HTML nel contenitore in base al bottone cliccato
    // Se la chiave esiste nel database, la carica; altrimenti non fa nulla
    if (database[tipo]) {
        let contenutoHTML = "";

        // Se NON siamo nella home iniziale, aggiungiamo i tasti di controllo
        if (tipo !== 'home_iniziale') {
            // Tasto X a sinistra
            const tastoChiudi = `<button class="btn-close" onclick="cambiaPagina('home_iniziale')" title="Chiudi">×</button>`;
            
            // Tasto Link a destra (solo se esiste nel database linkEsterni)
            let tastoEsterno = "";
            if (linkEsterni[tipo]) {
                tastoEsterno = `
                    <a href="${linkEsterni[tipo].url}" target="_blank" class="btn-external" title="Apri ${tipo}">
                        <img src="${linkEsterni[tipo].icona}" alt="Logo">
                    </a>`;
            }
            
            contenutoHTML = tastoChiudi + tastoEsterno;
        }

        // Aggiungiamo il testo del database
        contenutoHTML += database[tipo];
        
        // Inseriamo tutto nel contenitore
        contenitore.innerHTML = contenutoHTML;
    }

    window.scrollTo({top: 0, behavior: 'smooth'});
}
// --- GESTIONE COOKIE ---

/**
 * Questa funzione viene eseguita automaticamente all'apertura della pagina.
 * Controlla se esiste già un "permesso" salvato nel browser.
 */
window.onload = function() {
    // Cerchiamo nel "LocalStorage" (la memoria del browser) la chiave 'cookieAccettati'
    const consenso = localStorage.getItem('cookieAccettati');

    // Se il consenso NON esiste, mostriamo il banner
    if (!consenso) {
        document.getElementById('cookie-banner').style.display = 'block';
    }
};

// --- DATABASE TESTI (Aggiornato con Informativa Cookies) ---
function cambiaPagina2(tipo) {
    const contenitore = document.getElementById('display-area');
    
    const database = {
        'home_iniziale': `<h2>Home Page</h2><p>Benvenuto nel portale dedicato all'AI.</p>`,
        'cookies': `
            <h2>Informativa sui Cookie</h2>
            <p><strong>Cookie Tecnici:</strong> Necessari per il funzionamento del sito.</p>
            <p><strong>Cookie Opzionali:</strong> Utilizzati per analizzare il traffico (Google Analytics) e preferenze estetiche.</p>
            <p>Questo sito non vende i tuoi dati a terzi.</p>
            <button onclick="cambiaPagina('home_iniziale')" style="margin-top:20px; padding:10px;">Torna alla schermata iniziale</button>`
    };

    if (database[tipo]) {
        contenitore.innerHTML = database[tipo];
    }
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// --- LOGICA COOKIE CON SCADENZA 10 MINUTI ---
// il controllo dei cookie ogni 10 minuti è inrealistico, serve a testare il sito, un tempo realistico sarebbe ogni settimana o gni 6 mesi.
// --- GESTIONE COOKIE PROFESSIONALE ---

window.onload = function() {
    checkConsenso();
};

function checkConsenso() {
    const preferenze = JSON.parse(localStorage.getItem('userPrivacyConfig'));
    const timestamp = localStorage.getItem('privacyTimestamp');
    const oraAttuale = new Date().getTime();
    const dieciMinuti = 10 * 60 * 1000;

    // Se non ci sono preferenze o sono scaduti i 10 minuti
    if (!preferenze || !timestamp || (oraAttuale - timestamp > dieciMinuti)) {
        localStorage.removeItem('userPrivacyConfig');
        localStorage.removeItem('privacyTimestamp');
        document.getElementById('cookie-banner').style.display = 'block';
    } else {
        console.log("Cookie attivi:", preferenze);
        // Qui potresti attivare script come Google Analytics se preferenze.analytics è true
    }
}

function gestisciConsenso(modo) {
    let scelte = {
        tecnici: true,
        analytics: false,
        marketing: false
    };

    if (modo === 'totale') {
        scelte.analytics = true;
        scelte.marketing = true;
    } else if (modo === 'selezionati') {
        scelte.analytics = document.getElementById('chk-analytics').checked;
        scelte.marketing = document.getElementById('chk-marketing').checked;
    }

    const oraAttuale = new Date().getTime();
    localStorage.setItem('userPrivacyConfig', JSON.stringify(scelte));
    localStorage.setItem('privacyTimestamp', oraAttuale);
    
    alert(`Preferenze salvate!\nAnalitici: ${scelte.analytics ? 'SÌ' : 'NO'}\nMarketing: ${scelte.marketing ? 'SÌ' : 'NO'}`);
    chiudiBanner();
}

function chiudiBanner() {
    document.getElementById('cookie-banner').style.display = 'none';
}

function rifiutaTutto() {
    // In un sito reale, rifiutare significa salvare solo i tecnici
    const oraAttuale = new Date().getTime();
    const soloTecnici = { tecnici: true, analytics: false, marketing: false };
    localStorage.setItem('userPrivacyConfig', JSON.stringify(soloTecnici));
    localStorage.setItem('privacyTimestamp', oraAttuale);
    
    alert("Hai accettato solo i cookie tecnici necessari.");
    chiudiBanner();
}