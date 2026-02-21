import type { Schema, Struct } from '@strapi/strapi';

export interface CategoryDisclaimer extends Struct.ComponentSchema {
  collectionName: 'components_category_disclaimers';
  info: {
    displayName: 'disclaimer';
  };
  attributes: {
    customText: Schema.Attribute.Text;
    disclaimerType: Schema.Attribute.Enumeration<
      ['legal', 'financial', 'medical', 'general']
    >;
  };
}

export interface ContentTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_text_blocks';
  info: {
    displayName: 'Text Block';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    nameBlock: Schema.Attribute.String;
  };
}

export interface KnowledgeChecklistSmart extends Struct.ComponentSchema {
  collectionName: 'components_knowledge_checklist_smarts';
  info: {
    displayName: 'Smart Checklist';
  };
  attributes: {
    audiences: Schema.Attribute.Relation<'oneToMany', 'api::audience.audience'>;
    category: Schema.Attribute.Enumeration<
      [
        'Bureaucracy',
        'Education',
        'Employment',
        'Finance',
        'Health',
        'Housing',
        'Life in Germany',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Bureaucracy'>;
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
    MissionTags: Schema.Attribute.Relation<
      'oneToMany',
      'api::mission-tag.mission-tag'
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

export interface KnowledgeSmartChecklistGroup extends Struct.ComponentSchema {
  collectionName: 'components_knowledge_smart_checklist_groups';
  info: {
    displayName: 'SmartChecklistGroup';
  };
  attributes: {
    SmartChecklist: Schema.Attribute.Component<
      'knowledge.checklist-smart',
      true
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface KnowledgeSmartChecklistPicker extends Struct.ComponentSchema {
  collectionName: 'components_knowledge_smart_checklist_pickers';
  info: {
    displayName: 'SmartChecklistPicker';
  };
  attributes: {
    tasks: Schema.Attribute.Relation<'oneToMany', 'api::task.task'>;
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

export interface SharedMetaSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_seos';
  info: {
    displayName: 'metaSEO';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    ogImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'category.disclaimer': CategoryDisclaimer;
      'content.text-block': ContentTextBlock;
      'knowledge.checklist-smart': KnowledgeChecklistSmart;
      'knowledge.smart-checklist-group': KnowledgeSmartChecklistGroup;
      'knowledge.smart-checklist-picker': KnowledgeSmartChecklistPicker;
      'media.spotify-embed': MediaSpotifyEmbed;
      'shared.meta-seo': SharedMetaSeo;
    }
  }
}
