export interface HubspotFormFields {
  name: string;
  value: string;
}

export interface HubspotFormContext {
  pageUri: string;
  pageName: string;
}

export interface HubspotFormRequest {
  fields: HubspotFormFields[];
  context: HubspotFormContext;
  portalId: number;
  formId: string;
}

export interface HubspotFormResponse {
  redirectUri?: string;
  inlineMessage?: string;
  errors: {
    message: string;
    errorType: string;
  };
}
