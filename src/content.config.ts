import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

// Coordonnées et infos générales du restaurant (édité par le client via /admin).
const config = defineCollection({
  loader: glob({ pattern: 'site.json', base: './src/content/config' }),
  schema: ({ image }) =>
    z.object({
      nom: z.string(),
      slogan: z.string(),
      description: z.string(),
      telephone: z.string(),
      adresse: z.string(),
      ville: z.string(),
      carteUrl: z.string().url(),
      commandeUrl: z.string().url().optional().or(z.literal('')),
      horaires: z.array(
        z.object({
          jours: z.string(),
          heures: z.string(),
        })
      ),
      reseaux: z.object({
        instagram: z.string().url().optional().or(z.literal('')),
        facebook: z.string().url().optional().or(z.literal('')),
        googleMaps: z.string().url().optional().or(z.literal('')),
      }),
      heroImage: image().optional(),
    }),
});

// Le menu : chaque catégorie est un fichier, avec une liste de plats.
const menu = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/menu' }),
  schema: ({ image }) =>
    z.object({
      categorie: z.string(),
      ordre: z.number().default(0),
      plats: z.array(
        z.object({
          nom: z.string(),
          description: z.string().optional().default(''),
          prix: z.number(),
          image: image().optional(),
          populaire: z.boolean().optional().default(false),
        })
      ),
    }),
});

// Galerie de photos.
const galerie = defineCollection({
  loader: glob({ pattern: 'galerie.json', base: './src/content/config' }),
  schema: ({ image }) =>
    z.object({
      photos: z.array(
        z.object({
          image: image(),
          legende: z.string().optional().default(''),
        })
      ),
    }),
});

export const collections = { config, menu, galerie };
