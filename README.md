# 🌟 Discord Minecraft Player Counter Bot

Un bot Discord élégant qui affiche le nombre de joueurs en ligne sur un serveur Minecraft et permet de mettre à jour cette information via une commande slash.

![Bot Preview](https://via.placeholder.com/600x300/000000/FFFFFF?text=Discord+Minecraft+Player+Counter+Bot)

## 🚀 Fonctionnalités

- **Affichage en Temps Réel** : Le bot affiche le nombre de joueurs en ligne sur un serveur Minecraft dans son statut.
- **Commande Slash `/update`** : Permet de mettre à jour manuellement le nombre de joueurs.
- **Auto-Update** : Le bot met à jour automatiquement le nombre de joueurs toutes les minutes.

## 📋 Prérequis

- Node.js (version 14 ou supérieure)
- Un serveur Minecraft accessible
- Un bot Discord configuré avec les intents nécessaires

## 🛠 Installation

1. **Cloner le dépôt** :

   ```bash
   git clone https://github.com/votre-utilisateur/discord-minecraft-player-counter.git
   cd discord-minecraft-player-counter
   ```

2. **Installer les dépendances** :

   ```bash
   npm install discord.js @discordjs/rest @discordjs/builders minecraft-server-util
   ```

3. **Configurer le bot** :

   - Créez un fichier `config.json` dans le répertoire racine du projet avec le contenu suivant :

     ```json
     {
         "token": "VOTRE_TOKEN_DISCORD",
         "clientId": "VOTRE_CLIENT_ID",
         "guildId": "VOTRE_GUILD_ID"
     }
     ```

   - Remplacez `VOTRE_TOKEN_DISCORD`, `VOTRE_CLIENT_ID`, et `VOTRE_GUILD_ID` par les valeurs appropriées.

4. **Activer les intents nécessaires** :

   - Allez sur le [Portail des Développeurs Discord](https://discord.com/developers/applications).
   - Sélectionnez votre application.
   - Dans le menu de gauche, allez dans la section "Bot".
   - Faites défiler jusqu'à la section "Privileged Gateway Intents".
   - Activez les intents nécessaires : **Presence Intent**, **Server Members Intent**, et **Message Content Intent**. 

## 🎮 Utilisation

1. **Lancer le bot** :

   ```bash
   node index.js
   ```

2. **Utiliser la commande slash** :

   - Sur votre serveur Discord, utilisez la commande `/update` pour mettre à jour manuellement le nombre de joueurs.

## 🤝 Contribuer

Les contributions sont les bienvenues ! Pour contribuer, veuillez suivre ces étapes :

1. Fork le projet.
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`).
3. Commitez vos modifications (`git commit -m 'Add some AmazingFeature'`).
4. Poussez vers la branche (`git push origin feature/AmazingFeature`).
5. Ouvrez une Pull Request.

## 📜 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

✨ **Merci d'utiliser le Discord Minecraft Player Counter Bot !** ✨
