declare namespace API {
  type ExternalLink = {
    type:
      | "website"
      | "twitter"
      | "github"
      | "facebook"
      | "instagram"
      | "support"
      | "linkedin";
    link: string;
  };
  type Collective = {
    description: string;
    external_linksan: ExternalLink[];
    link: string;
    name: string;
    slug: string;
    tags: string[];
  };
  type Tag = {
    name: string;
    count: number;
    has_synonyms: boolean;
    is_moderator_only: boolean;
    is_required: boolean;
    user_id?: number;
    last_activity_date?: number;
    collectives?: Collective[];
  };
}
