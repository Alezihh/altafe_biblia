/**
 * Facebook Conversions API Utility
 * 
 * Este utilitário permite enviar eventos de conversão para o Facebook
 * através da Conversions API, complementando o Meta Pixel.
 */

// Tipos para a API de conversões
export interface FacebookUserData {
  em?: string[]; // Email (hash SHA256)
  ph?: (string | null)[]; // Phone (hash SHA256)
  fn?: string[]; // First name (hash SHA256)
  ln?: string[]; // Last name (hash SHA256)
  ct?: string[]; // City (hash SHA256)
  st?: string[]; // State (hash SHA256)
  zp?: string[]; // Zip code (hash SHA256)
  country?: string[]; // Country (hash SHA256)
  external_id?: string[]; // External ID (hash SHA256)
}

export interface FacebookCustomData {
  currency?: string;
  value?: number | string;
  content_name?: string;
  content_category?: string;
  content_ids?: string[];
  contents?: Array<{
    id: string;
    quantity?: number;
    item_price?: number;
  }>;
  num_items?: number;
  order_id?: string;
  search_string?: string;
  status?: string;
}

export interface FacebookAttributionData {
  attribution_share?: string;
}

export interface FacebookOriginalEventData {
  event_name: string;
  event_time: number;
}

export interface FacebookConversionEvent {
  event_name: string;
  event_time: number;
  action_source: "website" | "email" | "app" | "phone_call" | "chat" | "physical_store" | "system_generated" | "other";
  user_data: FacebookUserData;
  attribution_data?: FacebookAttributionData;
  custom_data?: FacebookCustomData;
  original_event_data?: FacebookOriginalEventData;
  event_source_url?: string;
  event_id?: string;
}

export interface FacebookConversionsPayload {
  data: FacebookConversionEvent[];
  access_token: string;
  pixel_id: string;
  test_event_code?: string;
}

// ID do Pixel Meta
const PIXEL_ID = "794408196757020";

/**
 * Envia eventos de conversão para o Facebook Conversions API
 */
export async function sendFacebookConversion(
  events: FacebookConversionEvent[],
  accessToken?: string
): Promise<Response> {
  const token = accessToken || import.meta.env.VITE_FACEBOOK_ACCESS_TOKEN;
  
  if (!token) {
    throw new Error("Facebook Access Token não configurado. Configure VITE_FACEBOOK_ACCESS_TOKEN no arquivo .env");
  }

  const payload: FacebookConversionsPayload = {
    data: events,
    access_token: token,
    pixel_id: PIXEL_ID,
  };

  const response = await fetch(
    `https://graph.facebook.com/v21.0/${PIXEL_ID}/events`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(
      `Erro ao enviar conversão para Facebook: ${JSON.stringify(error)}`
    );
  }

  return response;
}

/**
 * Cria um hash SHA256 de uma string
 * Útil para hashear emails, telefones, etc antes de enviar para o Facebook
 */
export async function hashSHA256(value: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(value.toLowerCase().trim());
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

/**
 * Helper para criar um evento de Purchase
 */
export function createPurchaseEvent(
  email: string | null,
  phone: string | null,
  value: number | string,
  currency: string = "USD",
  orderId?: string,
  eventTime?: number
): FacebookConversionEvent {
  const event: FacebookConversionEvent = {
    event_name: "Purchase",
    event_time: eventTime || Math.floor(Date.now() / 1000),
    action_source: "website",
    user_data: {},
    custom_data: {
      currency,
      value: typeof value === "number" ? value.toFixed(2) : value,
    },
    original_event_data: {
      event_name: "Purchase",
      event_time: eventTime || Math.floor(Date.now() / 1000),
    },
  };

  if (email) {
    event.user_data.em = [email];
  }

  if (phone) {
    event.user_data.ph = [phone];
  }

  if (orderId) {
    event.custom_data!.order_id = orderId;
  }

  return event;
}

/**
 * Helper para criar um evento de Lead
 */
export function createLeadEvent(
  email: string | null,
  phone: string | null,
  eventTime?: number
): FacebookConversionEvent {
  const event: FacebookConversionEvent = {
    event_name: "Lead",
    event_time: eventTime || Math.floor(Date.now() / 1000),
    action_source: "website",
    user_data: {},
    original_event_data: {
      event_name: "Lead",
      event_time: eventTime || Math.floor(Date.now() / 1000),
    },
  };

  if (email) {
    event.user_data.em = [email];
  }

  if (phone) {
    event.user_data.ph = [phone];
  }

  return event;
}

/**
 * Helper para criar um evento de InitiateCheckout
 */
export function createInitiateCheckoutEvent(
  email: string | null,
  phone: string | null,
  value: number | string,
  currency: string = "USD",
  eventTime?: number
): FacebookConversionEvent {
  const event: FacebookConversionEvent = {
    event_name: "InitiateCheckout",
    event_time: eventTime || Math.floor(Date.now() / 1000),
    action_source: "website",
    user_data: {},
    custom_data: {
      currency,
      value: typeof value === "number" ? value.toFixed(2) : value,
    },
    original_event_data: {
      event_name: "InitiateCheckout",
      event_time: eventTime || Math.floor(Date.now() / 1000),
    },
  };

  if (email) {
    event.user_data.em = [email];
  }

  if (phone) {
    event.user_data.ph = [phone];
  }

  return event;
}

/**
 * Helper para criar um evento de AddToCart
 */
export function createAddToCartEvent(
  email: string | null,
  phone: string | null,
  value: number | string,
  currency: string = "USD",
  contentName?: string,
  contentIds?: string[],
  eventTime?: number
): FacebookConversionEvent {
  const event: FacebookConversionEvent = {
    event_name: "AddToCart",
    event_time: eventTime || Math.floor(Date.now() / 1000),
    action_source: "website",
    user_data: {},
    custom_data: {
      currency,
      value: typeof value === "number" ? value.toFixed(2) : value,
    },
    original_event_data: {
      event_name: "AddToCart",
      event_time: eventTime || Math.floor(Date.now() / 1000),
    },
  };

  if (email) {
    event.user_data.em = [email];
  }

  if (phone) {
    event.user_data.ph = [phone];
  }

  if (contentName) {
    event.custom_data!.content_name = contentName;
  }

  if (contentIds) {
    event.custom_data!.content_ids = contentIds;
  }

  return event;
}

