import { RoleTypes } from "@/components/contexts/AuthContext";

export interface CompanyDataTypes {
  name: string;
  website: string;
  email: string;
  phone: string;
  description: string;
  assistant_name: string;
}

export enum SolutionType {
  SOLUTION_PARTNER_360 = 'SOLUTION_PARTNER_360',
  SOLUTION_PARTNER_NONE = 'SOLUTION_PARTNER_NONE',
}

export enum MessageType {
  TEXT = 'text',
  IMAGE = 'image',
  VIDEO = 'video',
  AUDIO = 'audio'
}


 

export interface Detail {
  unix_timestamp: number;
  dateTime: string;
  ip: string;
  browser: string;
  country: string;
  city: string;
  regionName: string;
  isp: string;
}

export type LinkDetails = {
  longUrl: string;
  totalClicks: number;
  details: Detail[];
};

export interface LinkData {
  longUrl: string;
  totalClicks: number;
  shortUrl: string;
  details: Detail[];
}

export interface BasicInfoData {
  fullName: string;
}
export interface TeamMember {
  name: string;
  email: string;
  _id: string;
  phone: string;
  roles: RoleTypes[];
  user_joined: boolean;
}

export type LeadStatusI =
  | "INITIATED"
  | "IN_PROGRESS"
  | "NOT_QUALIFIED"
  | "NOT_INTERESTED"
  | "CONVERTED"
  | "IN_ACTIVE";


export enum ContactStatus {
  INITIATED = 'INITIATED',
  IN_PROGRESS = 'IN_PROGRESS',
  NOT_INTERESTED = 'NOT_INTERESTED',
  NOT_QUALIFIED = 'NOT_QUALIFIED',
  CONVERTED = 'CONVERTED',
  IN_ACTIVE = 'IN_ACTIVE'
}

export enum ContactStage {
  INITIATED = 'INITIATED',
  QUALIFIED = 'QUALIFIED',
  MQL = 'MQL',
  SQL = 'SQL',
  CONVERTED = 'CONVERTED'
}


export enum MessageTemplateType {
  SMS = "SMS",
  WHATSAPP = "WHATSAPP"
}
export enum ChatChannelType {
  SMS = 'SMS',
  EMAIL = 'EMAIL',
  WHATSAPP = 'WHATSAPP',
  INSTAGRAM = 'INSTAGRAM',
  FB_MESSENGER = 'FB_MESSENGER',
  VOICE = 'VOICE',
  WEBCHAT = 'WEBCHAT',
  SAME_CHANNEL = 'SAME_CHANNEL',
}
 
export interface MessageTemplateData {
  category: string;
  allow_category_change: boolean;
  language: string;
  text_content: string;
  sample_values: string[];
}
export interface APIKeysTypes {

  api_key: string;
  friendly_name: string;
  expiry_timestamp: number;
  rate_limit: number;
  rate_limit_period: number;
  created_at_timestamp: number;
  last_used_at_timestamp: number;
  org_id: string

}

export interface CommunicationChannelTypes {
  _id: string;
  org_id: string;
  friendly_name: string;
  phone_number: string;
  connection_type: ChatChannelType;
  email_metadata: EmailMetadata;
  instagram_id: string;
  fb_messenger_id: string;
  VOICE_METADATA?: VoiceMetadata;
  WHATSAPP_METADATA?: WhatsAppMetadata;
  WEB_CHAT_METADATA?: WebChatMetadata;
  IG_PAGE_METADATA?: IGPageMetadata;
  FB_MESSENGER_METADATA?: FBPageMessengerMetadata;
  updated_at_timestamp: number;
  created_at_timestamp: number;
  is_deleted: boolean;
  sms_enabled?: boolean;
  voice_enabled?: boolean
}
export interface FBPageMessengerMetadata {
  page_id: string;
  page_name: string;
  page_access_token: string;
  messenger_id: string;
}
export interface IGPageMetadata {
  page_id: string;
  page_name: string;
  page_access_token: string;
  instagram_account_id: string;
  instagram_account_name: string;
  instagram_account_username: string;
  instagram_account_profile_picture_url: string;
  instagram_website: string;
  instagram_biography: string;
}
export interface WebChatMetadata {
  widget_id: string;            // Unique identifier for the chat widget on the website
  website_domain: string;       // The domain where the chat widget will be placed
  welcome_message: string;
  logo_url?: string;
  heading?: string;
  sub_heading?: string;
  background_color?: string;
  bubble_background_color?: string;
  bubble_icon_url?: string;  
  is_active:boolean;
  friendly_name?:string;
  // Initial message when a user starts a chat
  // ... any other relevant properties
}
export interface VoiceMetadata {
  provider: 'exotel' | 'twilio';
}
export interface WhatsAppMetadata {
  waba_id: string;

  waba_number_id: string;
  waba_display_number: string;
  waba_number_name: string;
  waba_quality_rating: string;
  waba_verification_status: string;
}
export interface EmailMetadata {
  user: string;
  password: string;
  imap_host: string;
  smtp_host: string;
  imap_port: string;
  smtp_port: string;
  tls: string;
}

export enum IntegrationAuthType {
  OAUTH2 = 'OAUTH2',
  KEY_VALUE_MAP = 'KEY_VALUE_MAP',
}
export enum IntegrationStatus {
  AVAILABLE = 'AVAILABLE',
  RECENTLY_ADDED = 'RECENTLY_ADDED',
  COMING_SOON = 'COMING_SOON',
}

export interface IntegrationFieldsData {

  type: string;
  required: boolean;
  key: string;
  label: string;
  description: string;
  placeholder: string;

}
export interface IntegrationDataResponseForDashboard {
  integration_unique_id: string;
  app_name: string;
  auth_type: IntegrationAuthType;
  logo_url: string;
  app_description: string;
  tags: string[];
  category: string;
  fields: IntegrationFieldsData[];
  status: IntegrationStatus;
}
export interface IntegrationAuth {
  _id: string;
  integration_account_indentifier: string;
  integration_unique_id: string;
  logo_url?: string;
}
export interface OrgProjectDataTypes {
  _id: string;
  title: string;
  description: string;
  contacts_count?: number;
}
export interface MainAgentData {
  provider: string;
  model: string;
  temperature: number;
  max_tokens: number;
  top_p: number;
  name: string;
  system_prompt: string;
}
export interface NodeExecutionHistoryDataTypes {
  _id: string;
  errorMessage: string;
  startedAt: number;
  finishedAt: number;
  notes: string;
  agentName: string;
  nodeId: string;
  success: boolean;
  retryCount: number;
  is_retry: boolean;
  retryNumber: number;
  execution_description: string;
}
export interface SplitTestData {
  variant: string;
  percentage: number;
}
export interface DashboardData {
  totalContacts: number;
  [key: string]: number
  // Add more fields as needed
}
 
 


 

export enum Marketing_Lead_Source {
  CONTACT_US = 'CONTACT_US',
  DEMO = 'DEMO',
  EBOOK = 'EBOOK',
  EMAIL_SUBSCRIPTION = 'EMAIL_SUBSCRIPTION',
  SEO_TOOL = 'SEO_TOOL',
  REPORT = 'REPORT',
}

export interface ContactTags {
  label: string;
  color: string;
};

 


export interface phoneNumberTypes {
  _id: string;
  phoneNumber: string;
  sms_setup_completed: boolean;
  whatsapp_setup_completed: boolean;
}

export enum QuestionTypes {
  TEXT = 'TEXT',
  BUTTON = 'BUTTON',
}
export interface IndividualQuestionsTypes {
  question: string;
  type: QuestionTypes;
  options: string[];
  expected_answers: string[];
}

export interface ConnectedIntegrationsForTemplate {

  integration_unique_name: string,
  integration_connected_id: string,
}
export interface ConnectedAdsAccountForTemplate {

  integration_unique_name: string,
  integration_connected_id: string,
  ad_account_id?: string,
  campaign_id?: string,
  account_type?: string,
}


export interface CTWA_SETTINGS {
  org_agent_id: string | null;
  business_name: string;
  business_vertical: string;
  business_description: string;
  business_website: string;
  sales_ai_assistant_name: string;
  sales_ad_campaign_target_interests: string[];
  sales_ad_campaign_target_languages: string[];
  sales_offer_title: string;
  sales_offer_details: string;
  sales_offer_type: string;
  sales_offer_landing_page_url: string;
  sales_pre_qualification_questions_required: boolean;
  sales_pre_qualification_questions: {
    question: string;
    options: string;
    expected_answer: string;
    _id: string
  }[];
  product_service_pricing: string;
  sales_ad_campaign_objective: ''
  | 'book_a_demo'
  | 'pay_via_payment_link'
  | 'signing_up_for_webinar'
  | 'connecting_a_direct_call';
  sales_ad_campaign_objective_data: {
    payment_link: string;
    webinar_link: string;
    phone_number: string;
    phone_country_code?: string
    call_connect_working_days: string;
    call_connect_start_time: string;
    call_connect_end_time: string;
    call_connect_timezone: string;
  }
  whatsapp_number: string;
  connected_integrations: ConnectedIntegrationsForTemplate[];
  google_ads_account: {
    integration_unique_name?: string,
    integration_connected_id?: string,
    account_id?: string,
    campaign_id?: string,
  };
  facebook_ads_account: {
    integration_unique_name?: string,
    integration_connected_id?: string,
    account_id?: string,
    campaign_id?: string,
  };
  follow_up_data: FollowUpData[];
  reminders_data: RemindersData[];
}

export interface CREATOR_SETTINGS {
  org_agent_id: string | null;
  creator_name: string;
  business_name: string;
  creator_audience_location: string[];
  business_vertical: string;
  business_description: string;
  business_website: string;
  creator_ai_assistant_name: string;
  creator_ai_title: string;
  creator_ai_target_group: string;
  creator_ad_campaign_target_interests: string[];
  creator_ad_campaign_target_languages: string[];
  creator_offer_title: string;
  creator_offer_details: string;
  creator_offer_type: string;
  creator_offer_landing_page_url: string;
  creator_pre_qualification_questions_required: boolean;
  creator_pre_qualification_questions: {
    question: string;
    options: string;
    expected_answer: string;
    _id: string
  }[];

  respond_to_comments: boolean;
  respond_to_dms: boolean;

  respond_to_triggered_words: boolean
  triggered_words: string;

  promote_product_required: boolean

  product_service_pricing: string;
  creator_ad_campaign_objective: ''
  | 'book_a_demo'
  | 'pay_via_payment_link'
  | 'signing_up_for_webinar'
  | 'connecting_a_direct_call';
  assigned_instagram_account: string;
  creator_ad_campaign_objective_data: {
    payment_link: string;
    webinar_link: string;
    phone_number: string;
    phone_country_code?: string
    call_connect_working_days: string;
    call_connect_start_time: string;
    call_connect_end_time: string;
    call_connect_timezone: string;
  }
  connected_integrations: ConnectedIntegrationsForTemplate[];
  google_ads_account: {
    integration_unique_name?: string,
    integration_connected_id?: string,
    account_id?: string,
    campaign_id?: string,
  };
  facebook_ads_account: {
    integration_unique_name?: string,
    integration_connected_id?: string,
    account_id?: string,
    campaign_id?: string,
  };
  follow_up_data: FollowUpData[];
  reminders_data: RemindersData[];
}

export interface ISchedulingData {
  interview_timeslot_minutes: number,
  interview_time_zone: string,
  schedule_from_time: string,
  schedule_to_time: string,
  schedule_days: string,
  schedule_interval: number,
}
export interface RemindersData {
  reminder_template_id?: string;
  reminder_template_name: string;
  reminder_message: string;
  reminder_time: number;
  reminder_unit: 'minutes' | 'hours' | 'days' | 'weeks';
  sample_values: string[];
  values_with_variables: string[];
}
export interface FollowUpData {
  follow_up_template_id?: string;
  follow_up_template_name: string;
  follow_up_message: string;
  follow_up_time: number;
  follow_up_unit: 'minutes' | 'hours' | 'days' | 'weeks';
  sample_values: string[];
  values_with_variables: string[];
}

export interface SUPEHR_SETTINGS {
  org_agent_id: string | null;
  business_name: string;
  business_description: string;
  business_website: string;
  recruiter_ai_assistant_name: string;
  job_title: string;
  job_details: string;
  job_category: string;
  job_posts_link: string;
  pre_qualification_questions_required: boolean;
  pre_qualification_questions: {
    question: string;
    options: string;
    expected_answer: string;
    _id: string
  }[];
  salary: string;
  agent_goal: ''
  | 'schedule_interview'
  whatsapp_number: string;
  connected_integrations: ConnectedIntegrationsForTemplate[];
  google_ads_account: {
    integration_unique_name?: string,
    integration_connected_id?: string,
    account_id?: string,
    campaign_id?: string,
  };
  facebook_ads_account: {
    integration_unique_name?: string,
    integration_connected_id?: string,
    account_id?: string,
    campaign_id?: string,
  };
  schedule_interview_data: ISchedulingData;
  follow_up_data: FollowUpData[];
  reminders_data: RemindersData[];
  not_qualified_message: string;
  interview_mode: string;
}


export interface InvoiceDetails {
  invoiceDate: string;
  dueDate: string;
  invoiceNumber: string;
  accountNumber: string;
  customer_data: {
    name: string;
    email: string;
    phone: string;
    address: {
      address_line1: string;
      address_line2: string;
      city: string;
      state: string;
      zip: string;
      country: string;
    }
  }
  issuer_data: {
    name: string;
    email: string;
    phone: string;
    address: {
      address_line1: string;
      address_line2: string;
      city: string;
      state: string;
      zip: string;
      country: string;
    }
  }
}

export interface Summary {
  grossAmount: number;
  subTotal: number;
  tax: number;
  total: number;
}

export interface ChargeItem {
  [key: string]: number | string;
}

export interface ChargesCategory {
  category: string;
  items: ChargeItem[];
  item_headers: string[];
}

export interface InvoiceData {
  invoiceDetails: InvoiceDetails;
  summary: Summary;
  charges: ChargesCategory[];
}