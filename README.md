# ProfesseurGO - API Backend

Ce dépôt contient le code source de l'API backend pour le projet "ProfesseurGO". Cette API a pour but de servir le contenu des quiz à l'application mobile iOS.

## Rôle de l'API

L'API expose des points d'entrée (endpoints) que l'application mobile interroge pour récupérer les questions et les réponses des quiz. Lorsqu'un joueur interagit avec un "coffre" dans le jeu, l'application contacte ce backend pour obtenir le contenu du défi.

Le serveur est conçu pour être simple, léger et facilement déployable sur des plateformes comme Render.

## Technologies Utilisées

-   **Environnement** : Node.js
-   **Framework** : Express.js
-   **Langage** : JavaScript

## Installation et Lancement Local

### Prérequis

-   Node.js et npm installés sur votre machine.

### Étapes d'installation

1.  Clonez ce dépôt.
2.  Ouvrez un terminal dans le dossier du projet.
3.  Installez les dépendances avec la commande :
    ```
    npm install
    ```
4.  Lancez le serveur en mode développement :
    ```
    npm start
    ```

Le serveur sera alors accessible sur `http://localhost:3000` (ou le port que vous avez configuré).
La partie front est liée à l'API publiée sur **Render**, si vous voulez modifier pour des tests pensez à changer l'url.

## Licence

Ce projet est la propriété de Kylian GRANDY et est distribué sous la licence **Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International**.

-   Vous êtes autorisé à consulter et à utiliser ce code à des fins personnelles et non commerciales.
-   Vous n'êtes **pas autorisé** à le modifier et à redistribuer les versions modifiées.
-   Vous n'êtes **pas autorisé** à l'utiliser à des fins commerciales.

Pour plus de détails, consultez le fichier `LICENSE`.
