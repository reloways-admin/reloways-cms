import type { Schema, Struct } from '@strapi/strapi';

export interface ContentTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_text_blocks';
  info: {
    displayName: 'Text Block';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface MediaSpotifyEmbed extends Struct.ComponentSchema {
  collectionName: 'components_media_spotify_embeds';
  info: {
    displayName: 'Spotify Embed';
  };
  attributes: {
    spotifyUrl: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.text-block': ContentTextBlock;
      'media.spotify-embed': MediaSpotifyEmbed;
    }
  }
}
