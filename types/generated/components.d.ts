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

export interface KnowledgeChecklistSmart extends Struct.ComponentSchema {
  collectionName: 'components_knowledge_checklist_smarts';
  info: {
    displayName: 'Smart Checklist';
  };
  attributes: {
    audience: Schema.Attribute.Enumeration<
      ['Everyone', 'Freelancers', 'Employees', 'Students']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Everyone'>;
    dependencyTaskId: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 128;
      }>;
    descriptionShort: Schema.Attribute.String;
    idTask: Schema.Attribute.String & Schema.Attribute.Required;
    linkedArticle: Schema.Attribute.Relation<
      'oneToOne',
      'api::knowledge-article.knowledge-article'
    >;
    nameTask: Schema.Attribute.String & Schema.Attribute.Required;
    urgency: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 10;
          min: 1;
        },
        number
      >;
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
      'knowledge.checklist-smart': KnowledgeChecklistSmart;
      'media.spotify-embed': MediaSpotifyEmbed;
    }
  }
}
