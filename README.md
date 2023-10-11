
Kolab

Bienvenue sur le projet Kolab! 
Ce projet est divisé en trois principaux dossiers : api, app et admin. Chacun représente une partie distincte du projet. Voici comment vous pouvez démarrer avec chacun d'eux.

Structure du Projet

```Kolab/
│
├── api/           # Dossier pour l'API du backend
├── app/           # Dossier pour l'application front-end principale
└── admin/         # Dossier pour le panneau d'administration

```
Instructions de Mise en Place
Pré-requis
Assurez-vous d'avoir Node.js installé sur votre machine.
Étapes Générales
Clonez ce dépôt sur votre machine locale.

```git clone https://github.com/Fsd24-ProjectYoussouph/kolab.git
cd Kolab

```
Accédez à chaque dossier et installez les dépendances :
```# Pour l'API
cd api
npm install

# Pour l'application principale
cd ../app
npm install

# Pour le panneau d'administration
cd ../admin
npm install

```

Démarrage des Services
API
Pour démarrer l'API:

```cd api
npm run dev
```
Application Principale
Pour démarrer l'application principale:
```cd app
npm start
```
Panneau d'Administration
Pour démarrer le panneau d'administration:

```cd admin
npm run dev
```

