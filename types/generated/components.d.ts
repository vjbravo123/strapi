import type { Schema, Struct } from '@strapi/strapi';

export interface SharedButtons extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'buttons';
  };
  attributes: {
    Link: Schema.Attribute.String;
    Name: Schema.Attribute.String;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedCourseDescription extends Struct.ComponentSchema {
  collectionName: 'components_shared_course_descriptions';
  info: {
    displayName: 'CourseDescription';
  };
  attributes: {
    descriptionList: Schema.Attribute.JSON;
    Heading: Schema.Attribute.String;
    Resources: Schema.Attribute.Component<'shared.resources', false>;
  };
}

export interface SharedCourseDetails extends Struct.ComponentSchema {
  collectionName: 'components_shared_course_details';
  info: {
    displayName: 'CourseDetails';
  };
  attributes: {};
}

export interface SharedCourseHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_course_heroes';
  info: {
    displayName: 'CourseHero';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'shared.buttons', true>;
    CourseDetails: Schema.Attribute.JSON;
    Heading: Schema.Attribute.String;
    Outcomes: Schema.Attribute.JSON;
    PriceComponent: Schema.Attribute.Component<'shared.price-component', false>;
    src: Schema.Attribute.String;
    Subheading: Schema.Attribute.String;
  };
}

export interface SharedCoursePriceSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_course_price_sections';
  info: {
    displayName: 'CoursePriceSection';
  };
  attributes: {
    CTA2: Schema.Attribute.Component<'shared.cta-2', false>;
    originalPrice: Schema.Attribute.String;
    price: Schema.Attribute.String;
  };
}

export interface SharedCta1 extends Struct.ComponentSchema {
  collectionName: 'components_shared_cta_1s';
  info: {
    displayName: 'CTA1';
  };
  attributes: {
    ButtonLink: Schema.Attribute.String;
    ButtonName: Schema.Attribute.String;
  };
}

export interface SharedCta2 extends Struct.ComponentSchema {
  collectionName: 'components_shared_cta_2s';
  info: {
    displayName: 'CTA2';
  };
  attributes: {
    ButtonLink: Schema.Attribute.String;
    ButtonText: Schema.Attribute.String;
  };
}

export interface SharedCta3 extends Struct.ComponentSchema {
  collectionName: 'components_shared_cta_3s';
  info: {
    displayName: 'CTA3';
  };
  attributes: {
    ButtonLink: Schema.Attribute.String;
    ButtonText: Schema.Attribute.String;
  };
}

export interface SharedHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {
    CTA1: Schema.Attribute.Component<'shared.cta-1', false>;
    DayOneText: Schema.Attribute.String;
    DayTwoText: Schema.Attribute.String;
    Heading: Schema.Attribute.String;
    smallHeading: Schema.Attribute.String;
  };
}

export interface SharedInstructorsSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_instructors_sections';
  info: {
    displayName: 'InstructorsSection';
  };
  attributes: {
    bio: Schema.Attribute.String;
    companyLogo: Schema.Attribute.String;
    name: Schema.Attribute.String;
    position: Schema.Attribute.String;
    ProfilePic: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedPriceComponent extends Struct.ComponentSchema {
  collectionName: 'components_shared_price_components';
  info: {
    displayName: 'PriceComponent';
  };
  attributes: {
    originalPrice: Schema.Attribute.String;
    price: Schema.Attribute.String;
    text1: Schema.Attribute.String;
    text2: Schema.Attribute.String;
    text3: Schema.Attribute.String;
    text4: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRatings extends Struct.ComponentSchema {
  collectionName: 'components_shared_ratings';
  info: {
    displayName: 'ratings';
  };
  attributes: {
    ratings: Schema.Attribute.JSON;
  };
}

export interface SharedReadytoStartSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_readyto_start_sections';
  info: {
    displayName: 'ReadytoStartSection';
  };
  attributes: {
    CTA3: Schema.Attribute.Component<'shared.cta-3', true>;
  };
}

export interface SharedResources extends Struct.ComponentSchema {
  collectionName: 'components_shared_resources';
  info: {
    displayName: 'Resources';
  };
  attributes: {
    heading: Schema.Attribute.String;
    ResourceList: Schema.Attribute.JSON;
    text1: Schema.Attribute.String;
    text2: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedServices extends Struct.ComponentSchema {
  collectionName: 'components_shared_services';
  info: {
    displayName: 'Services';
  };
  attributes: {
    color: Schema.Attribute.String;
    description: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    stats: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTestimonialCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonial_cards';
  info: {
    displayName: 'testimonial-card';
  };
  attributes: {
    Designation: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    profilePic: Schema.Attribute.String;
    rating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
    Text: Schema.Attribute.Text;
    Username: Schema.Attribute.String;
  };
}

export interface SharedWhyChoose extends Struct.ComponentSchema {
  collectionName: 'components_shared_why_chooses';
  info: {
    displayName: 'WhyChoose';
  };
  attributes: {
    Card: Schema.Attribute.Component<'shared.card', true>;
    Heading: Schema.Attribute.String;
    Subheading: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.buttons': SharedButtons;
      'shared.card': SharedCard;
      'shared.course-description': SharedCourseDescription;
      'shared.course-details': SharedCourseDetails;
      'shared.course-hero': SharedCourseHero;
      'shared.course-price-section': SharedCoursePriceSection;
      'shared.cta-1': SharedCta1;
      'shared.cta-2': SharedCta2;
      'shared.cta-3': SharedCta3;
      'shared.hero-section': SharedHeroSection;
      'shared.instructors-section': SharedInstructorsSection;
      'shared.media': SharedMedia;
      'shared.price-component': SharedPriceComponent;
      'shared.quote': SharedQuote;
      'shared.ratings': SharedRatings;
      'shared.readyto-start-section': SharedReadytoStartSection;
      'shared.resources': SharedResources;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.services': SharedServices;
      'shared.slider': SharedSlider;
      'shared.testimonial-card': SharedTestimonialCard;
      'shared.why-choose': SharedWhyChoose;
    }
  }
}
