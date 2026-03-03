# Build-Stage / Verwende Node.js als Basis-Image
FROM node:alpine as build
# Setze das Arbeitsverzeichnis
WORKDIR /app
# Kopiere package.json und package-lock.json
COPY package*.json ./
RUN npm set strict-ssl false
# Installiere Abhängigkeiten
RUN npm ci
# Kopiere den restlichen Quellcode
COPY . .
# Baue die Angular-App
RUN npm run build

# Production-Stage / Verwende NGINX als Basis-Image für die Produktionsumgebung
FROM nginx:alpine
# Kopiere die gebaute App in das NGINX-Verzeichnis
COPY --from=build /app/dist/camosTest/browser/ /usr/share/nginx/html
# Kopiere deine angepasste NGINX-Konfiguration (optional, aber empfohlen. Eine Beispiel Konfiguration findest du weiter unten)
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Port 80 freigeben, nginx läuft auf diesem Port
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
