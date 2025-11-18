import { useCallback } from "react";
import {
  sendFacebookConversion,
  hashSHA256,
  type FacebookConversionEvent,
  createPurchaseEvent,
  createLeadEvent,
  createInitiateCheckoutEvent,
  createAddToCartEvent,
} from "@/lib/facebook-conversions";

/**
 * Hook React para facilitar o uso da API de conversões do Facebook
 */
export function useFacebookConversions() {
  /**
   * Envia eventos de conversão para o Facebook
   */
  const sendConversion = useCallback(
    async (events: FacebookConversionEvent[]) => {
      try {
        const response = await sendFacebookConversion(events);
        const data = await response.json();
        return { success: true, data };
      } catch (error) {
        console.error("Erro ao enviar conversão para Facebook:", error);
        return { success: false, error };
      }
    },
    []
  );

  /**
   * Envia evento de Purchase (compra)
   */
  const trackPurchase = useCallback(
    async (
      email: string | null,
      phone: string | null,
      value: number | string,
      currency: string = "USD",
      orderId?: string
    ) => {
      // Hash dos dados do usuário se fornecidos
      let hashedEmail: string | null = null;
      let hashedPhone: string | null = null;

      if (email) {
        hashedEmail = await hashSHA256(email);
      }

      if (phone) {
        hashedPhone = await hashSHA256(phone);
      }

      const event = createPurchaseEvent(
        hashedEmail,
        hashedPhone,
        value,
        currency,
        orderId
      );

      return sendConversion([event]);
    },
    [sendConversion]
  );

  /**
   * Envia evento de Lead
   */
  const trackLead = useCallback(
    async (email: string | null, phone: string | null) => {
      // Hash dos dados do usuário se fornecidos
      let hashedEmail: string | null = null;
      let hashedPhone: string | null = null;

      if (email) {
        hashedEmail = await hashSHA256(email);
      }

      if (phone) {
        hashedPhone = await hashSHA256(phone);
      }

      const event = createLeadEvent(hashedEmail, hashedPhone);

      return sendConversion([event]);
    },
    [sendConversion]
  );

  /**
   * Envia evento de InitiateCheckout (início do checkout)
   */
  const trackInitiateCheckout = useCallback(
    async (
      email: string | null,
      phone: string | null,
      value: number | string,
      currency: string = "USD"
    ) => {
      // Hash dos dados do usuário se fornecidos
      let hashedEmail: string | null = null;
      let hashedPhone: string | null = null;

      if (email) {
        hashedEmail = await hashSHA256(email);
      }

      if (phone) {
        hashedPhone = await hashSHA256(phone);
      }

      const event = createInitiateCheckoutEvent(
        hashedEmail,
        hashedPhone,
        value,
        currency
      );

      return sendConversion([event]);
    },
    [sendConversion]
  );

  /**
   * Envia evento de AddToCart (adicionar ao carrinho)
   */
  const trackAddToCart = useCallback(
    async (
      email: string | null,
      phone: string | null,
      value: number | string,
      currency: string = "USD",
      contentName?: string,
      contentIds?: string[]
    ) => {
      // Hash dos dados do usuário se fornecidos
      let hashedEmail: string | null = null;
      let hashedPhone: string | null = null;

      if (email) {
        hashedEmail = await hashSHA256(email);
      }

      if (phone) {
        hashedPhone = await hashSHA256(phone);
      }

      const event = createAddToCartEvent(
        hashedEmail,
        hashedPhone,
        value,
        currency,
        contentName,
        contentIds
      );

      return sendConversion([event]);
    },
    [sendConversion]
  );

  /**
   * Rastreia evento usando o Meta Pixel (client-side)
   */
  const trackPixelEvent = useCallback(
    (eventName: string, eventData?: Record<string, any>) => {
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", eventName, eventData);
      }
    },
    []
  );

  return {
    sendConversion,
    trackPurchase,
    trackLead,
    trackInitiateCheckout,
    trackAddToCart,
    trackPixelEvent,
  };
}

