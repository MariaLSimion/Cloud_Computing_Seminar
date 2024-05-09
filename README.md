ACADEMIA DE STUDII ECONOMICE DIN BUCUREȘTI

Proiect cloud computing
Realizarea unei biblioteci virtuale și utilizarea serviciilor Cloud

Student: Simion Maria Liana
Program master: SIMPRE anul 1
Grupa: 1133
Mai 2024
 
Links
Github repository:
https://github.com/MariaLSimion/Cloud_Computing_Simion_Maria_Virtual_Shelf
YouTube presentation:
https://youtu.be/_aonSp_fzzw 
Vercel:
https://cloud-computing-simion-maria-virtual-shelf.vercel.app/   

Introducere
Pentru a aduce o soluție adecvată pentru gestionarea colecțiilor de cărți fizice, am dezvoltat o aplicație de bibliotecă virtuală. Această aplicație își propune să ofere utilizatorilor o modalitate eficientă și intuitivă de a-și organiza și gestiona cărțile într-un mediu virtual.

Descriere problemă
Problema principală pe care o întâmpină iubitorii de cărți este gestionarea și organizarea colecțiilor lor de cărți fizice. Aceste colecții pot deveni adesea dezordonate și greu de gestionat în mod eficient, ceea ce poate duce la dificultăți în găsirea cărților dorite sau la confuzie în privința cărților împrumutate.
Mai precis, nevoile nesatisfăcute sunt:
Lipsa de organizare: Colecțiile de cărți fizice pot deveni dezordonate în timp, făcând dificilă găsirea și accesarea cărților dorite.
Dificultăți în urmărirea cărților împrumutate: Este ușor să uiți cine a luat ce carte și când trebuie să o returneze.
Lipsa unei viziuni de ansamblu: Fără o metodă eficientă de gestionare a colecției, utilizatorii pot pierde urma cărților pe care le dețin sau pot achiziționa în mod repetat aceleași cărți.
Aceste probleme servesc ca motivație pentru dezvoltarea aplicației de bibliotecă virtuală, care își propune să ofere o soluție practică și eficientă pentru aceste dificultăți întâmpinate de pasionații de cărți.

Tehnologii folosite
Github
GitHub este o platformă de găzduire a codului sursă și de colaborare pentru dezvoltatori. Am ales să găzduiesc codul sursă al aplicației pe platforma GitHub. GitHub nu este doar un serviciu de găzduire a codului sursă, ci și un instrument puternic de colaborare și gestionare a versiunilor. 

MongoDB Cloud
MongoDB este un sistem de gestionare a bazelor de date NoSQL, care utilizează un model de documente în locul modelului relațional. MongoDB Cloud este serviciul de găzduire în cloud oferit de MongoDB pentru bazele de date MongoDB. Pentru gestionarea datelor, am optat pentru MongoDB Cloud, un sistem de gestionare a bazelor de date NoSQL scalabil și flexibil. 

Next.js
Next.js este un cadru de dezvoltare React care permite construirea de aplicații web cu JavaScript și React.js. Principalele caracteristici ale Next.js includ pre-rendering-ul și generarea statică, rutele bazate pe sistemul de fișiere, gestionarea stării, și suportul pentru stilizare CSS.Next.js oferă, de asemenea, o performanță ridicată și o experiență de dezvoltare eficientă pentru aplicații web modern.
În ceea ce privește partea de interfață utilizator, am ales să folosesc Next.js, un cadru de dezvoltare React care a oferit un set bogat de caracteristici pentru construirea unei aplicații web moderne și interactive. Next.js a facilitat dezvoltarea interfeței utilizatorului, oferind suport pentru pre-rendering și generare statică, gestionarea stării și rute bazate pe sistemul de fișiere. 

Vercel
Vercel este o platformă de găzduire și livrare rapidă a aplicațiilor web. Vercel oferă integrare strânsă cu Next.js, facilitând implementarea și actualizarea rapidă a aplicației. Platforma oferă, de asemenea, funcționalități precum gestionarea domeniilor, monitorizarea performanței și actualizările continue. Pentru găzduirea și livrarea rapidă a aplicației mele web, am ales platforma Vercel. Vercel oferă un mediu de găzduire modern și performant, care se integrează perfect cu tehnologiile pe care le-am utilizat în dezvoltarea aplicației, în special cu Next.js. Prin intermediul Vercel, am putut implementa și actualiza aplicația cu ușurință, beneficiind de performanță ridicată și de o experiență de utilizare plăcută.

Descriere API

Endpoints
Endpoint-ul "/api/records":
GET - Această rută este utilizată pentru a obține toate înregistrările de cărți disponibile. Este folosită în paginile de acasă și de about pentru a afișa cărțile sub forma de carduri și pentru a oferi o imagine de ansamblu asupra cărților disponibile.
POST - Această rută este utilizată pentru a crea o nouă înregistrare de carte. Este folosită în pagina "Add a Book" (create) pentru a permite utilizatorilor să adauge noi cărți în biblioteca lor virtuală.
Endpoint-ul "/api/records?id={id}":
GET - Această rută este utilizată pentru a obține o înregistrare specifică de carte în funcție de ID-ul furnizat. Este folosită în pagina de editare a cărților pentru a încărca datele unei cărți pentru editare, precum și în alte componente unde este necesar accesul la datele unei cărți specifice.
PUT - Această rută este utilizată pentru a actualiza o înregistrare existentă de carte. Este folosită în pagina de editare a cărților pentru a permite utilizatorilor să actualizeze informațiile despre cărți.
DELETE - Această rută este utilizată pentru a șterge o înregistrare de carte existentă în funcție de ID-ul furnizat. Este folosită în componente care permit utilizatorilor să șteargă cărți din biblioteca lor virtuală.

Flux de date
Clasa ApiMethods
În clasa ApiMethods avem o serie de funcţii ce gestionează răspunsurile de la server în funcţie de diferitele situaţii şi erori care pot apărea în timpul comunicării cu API-ul. Aceste funcții pot fi utilizate pentru a trimite răspunsuri corespunzătoare în funcție de rezultatul unei solicitări și a stării resursei cerute.
![image](https://github.com/MariaLSimion/Cloud_Computing_Simion_Maria_Virtual_Shelf/assets/109346033/44aa5c16-62f4-46cb-b702-771a78e8bdb0)
![image](https://github.com/MariaLSimion/Cloud_Computing_Simion_Maria_Virtual_Shelf/assets/109346033/58f1659d-727c-4b80-96da-29c42052c103)

Exemple de request / response
GET /api/records:
Request: Utilizatorul face o cerere GET pentru a obține toate înregistrările de cărți disponibile.
Response: Funcția sendOk este utilizată pentru a trimite un răspuns de succes cu datele solicitate către client (status 200) sau sendNotFound este utilizată pentru a trimite un mesaj de eroare în cazul în care nu există înregistrări disponibile (status 404).

POST /api/records:
Request: Utilizatorul face o cerere POST pentru a crea o nouă înregistrare de carte.
Response: Funcția sendOk este utilizată pentru a trimite un răspuns de succes cu datele noii înregistrări create către client (status 200) sau sendBadRequest este utilizată pentru a trimite un mesaj de eroare în cazul în care cererea este invalidă sau nu poate fi procesată (status 400).

PUT /api/records:
Request: Utilizatorul face o cerere PUT pentru a actualiza o înregistrare existentă de carte.
Response: Funcția sendOk este utilizată pentru a trimite un răspuns de succes cu datele actualizate către client (status 200) sau sendNotFound este utilizată pentru a trimite un mesaj de eroare în cazul în care înregistrarea specificată nu poate fi găsită (status 404).

DELETE /api/records?id={id}:
Request: Utilizatorul face o cerere DELETE pentru a șterge o înregistrare de carte existentă în funcție de ID-ul specificat.
Response: Funcția sendOk este utilizată pentru a trimite un răspuns de succes către client (status 200) sau sendNotFound este utilizată pentru a trimite un mesaj de eroare în cazul în care înregistrarea specificată nu poate fi găsită (status 404).

Descrierea aplicației
Pagina de Home
Această pagină servește drept punct central al aplicației, prezentând utilizatorului toate cărțile disponibile sub forma de carduri. Fiecare card oferă informații despre titlu, autor și alte detalii relevante despre carte.
Utilizatorii pot folosi filtrele disponibile pentru a afișa cărțile în funcție de gen, dacă sunt deținute sau nu și dacă au fost citite sau nu. Butonul "Edit" permite utilizatorilor să editeze informațiile despre o carte, iar butonul "Delete" permite ștergerea acesteia din biblioteca lor virtuală

 ![image](https://github.com/MariaLSimion/Cloud_Computing_Simion_Maria_Virtual_Shelf/assets/109346033/f4d0c114-ed0b-4e41-8fa1-6b64d39e97df)

Pagina de About
În cadrul acestei pagini avem cateva detalii despre aplicație.
 ![image](https://github.com/MariaLSimion/Cloud_Computing_Simion_Maria_Virtual_Shelf/assets/109346033/7a22e554-da39-4a79-9e03-9b9eded7cf3b)

Pagina de Contact
În cadrul acestei pagini se regăsesc câteva linkuri relevante pentru proiect, precum linkul pentru repositoryul de GitHub, cel pentru prezentarea de pe YouTube si cel pentru Vercel. 
 ![image](https://github.com/MariaLSimion/Cloud_Computing_Simion_Maria_Virtual_Shelf/assets/109346033/09b46085-a87a-4d57-9a6a-38e263774e3f)

Pagina de adaugare a unei cărți
Această pagină permite utilizatorilor să adauge noi cărți în biblioteca lor virtuală. Utilizatorii pot completa un formular cu detalii despre carte, cum ar fi titlul, autorul și genul, precum și să selecteze dacă cartea este deținută și/sau a fost citită.
 ![image](https://github.com/MariaLSimion/Cloud_Computing_Simion_Maria_Virtual_Shelf/assets/109346033/1d953b20-b041-4bd3-8e8f-3e36ee379695)

Opțiunile din cadrul celor 3 drop down items:

![image](https://github.com/MariaLSimion/Cloud_Computing_Simion_Maria_Virtual_Shelf/assets/109346033/b26fc16f-6d5a-4910-842e-5b52db13421c)
![image](https://github.com/MariaLSimion/Cloud_Computing_Simion_Maria_Virtual_Shelf/assets/109346033/2777cbfb-d4c7-4608-b480-3c5abae910dd)
![image](https://github.com/MariaLSimion/Cloud_Computing_Simion_Maria_Virtual_Shelf/assets/109346033/de0dbc70-9f5a-4baf-a996-74a144d0058e)

Editarea unei cărți deja existente
Dacă utilizatorul dorește să editeze o carte existentă, se va accesa în urma apăsării butonului Edit acelali formular ce va fi pre-populat cu datele existente, gata pentru editare.
 
![image](https://github.com/MariaLSimion/Cloud_Computing_Simion_Maria_Virtual_Shelf/assets/109346033/b0e8d718-f6b7-4313-b935-32bf7c241d8d)


Referințe
•	https://lungu-mihai-adrian.gitbook.io/cloud-computing-2024-simpre/cerinte-proiect 
•	https://github.com/MihaiAdrianLungu/SIMPRE-2024 
•	https://flowbite.com/ 
•	https://nextjs.org/learn-pages-router/basics/deploying-nextjs-app/deploy  

