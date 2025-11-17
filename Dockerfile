# Image légère
FROM node:20-alpine

# Dossier de travail
WORKDIR /app

# Installer les deps en prod
COPY package*.json ./
RUN npm ci --omit=dev || npm install --omit=dev

# Copier le code
COPY . .

# Bonnes pratiques
ENV NODE_ENV=production

# Ton serveur écoute process.env.PORT || 3000
# On expose 3000 par défaut (Render définira PORT)
EXPOSE 3000

# Commande de démarrage
CMD ["node", "index.js"]