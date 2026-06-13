# Casa Pronto — Site vitrine

Site statique **Astro** + CMS **Sveltia**, hébergé gratuitement sur **Cloudflare Pages**.
Zéro maintenance, zéro coût récurrent, le client est autonome via `/admin`.

## Développement local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère dist/
npm run preview  # prévisualise le build
```

## Mise en ligne (passation au client) — à faire UNE fois

1. **GitHub** (compte du client) : créer un dépôt, y pousser ce projet.
   - Dans `public/admin/config.yml`, remplacer `COMPTE-GITHUB/restaurant-site` par `<compte-client>/<depot>`.

2. **Cloudflare Pages** (compte du client) :
   - Connecter le dépôt GitHub.
   - Build command : `npm run build` — Output directory : `dist`
   - Brancher le domaine du client (acheté à son nom).

3. **Auth du CMS** (pour que le client publie depuis `/admin`) :
   - Configurer l'OAuth GitHub. Le plus simple sans serveur à maintenir :
     déployer le worker OAuth **Sveltia CMS Auth** sur Cloudflare (gratuit, oubliable).
     → https://github.com/sveltia/sveltia-cms-auth
   - Renseigner l'URL du worker dans `config.yml` via `backend.base_url` si besoin.

4. Remettre au client le fichier **README-CLIENT.md**.

## Structure du contenu (édité par le client)

- `src/content/config/site.json` — coordonnées, horaires, réseaux
- `src/content/config/galerie.json` — photos
- `src/content/menu/*.json` — catégories et plats

Une fois en place : **rien à maintenir**. Le client édite, Cloudflare reconstruit.
