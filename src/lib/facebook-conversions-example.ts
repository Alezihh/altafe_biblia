/**
 * EXEMPLO DE USO DA API DE CONVERSÕES DO FACEBOOK
 * 
 * Este arquivo contém exemplos de como usar a API de conversões do Facebook.
 * Você pode usar estes exemplos como referência para implementar em seus componentes.
 */

import { useFacebookConversions } from "@/hooks/use-facebook-conversions";

// ============================================
// EXEMPLO 1: Usando o Hook em um Componente
// ============================================

/*
import { useFacebookConversions } from "@/hooks/use-facebook-conversions";

function CheckoutButton() {
  const { trackPurchase, trackInitiateCheckout } = useFacebookConversions();

  const handleCheckout = async () => {
    // Rastrear início do checkout
    await trackInitiateCheckout(
      "usuario@email.com",  // email
      "+5511999999999",     // telefone (opcional)
      142.52,               // valor
      "BRL"                 // moeda
    );
  };

  const handlePurchase = async () => {
    // Rastrear compra concluída
    const result = await trackPurchase(
      "usuario@email.com",  // email
      "+5511999999999",     // telefone (opcional)
      142.52,               // valor
      "BRL",                // moeda
      "ORDER-12345"         // ID do pedido (opcional)
    );

    if (result.success) {
      console.log("Conversão enviada com sucesso!", result.data);
    } else {
      console.error("Erro ao enviar conversão:", result.error);
    }
  };

  return (
    <div>
      <button onClick={handleCheckout}>Iniciar Checkout</button>
      <button onClick={handlePurchase}>Finalizar Compra</button>
    </div>
  );
}
*/

// ============================================
// EXEMPLO 2: Rastrear Lead
// ============================================

/*
function LeadForm() {
  const { trackLead } = useFacebookConversions();

  const handleSubmit = async (email: string, phone?: string) => {
    // Rastrear lead quando formulário for preenchido
    await trackLead(email, phone || null);
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      handleSubmit(
        formData.get("email") as string,
        formData.get("phone") as string
      );
    }}>
      <input name="email" type="email" placeholder="Email" />
      <input name="phone" type="tel" placeholder="Telefone" />
      <button type="submit">Enviar</button>
    </form>
  );
}
*/

// ============================================
// EXEMPLO 3: Rastrear AddToCart
// ============================================

/*
function ProductCard({ productId, productName, price }: ProductProps) {
  const { trackAddToCart } = useFacebookConversions();

  const handleAddToCart = async () => {
    await trackAddToCart(
      "usuario@email.com",  // email (opcional)
      null,                  // telefone (opcional)
      price,                 // valor
      "BRL",                 // moeda
      productName,           // nome do produto
      [productId]            // IDs dos produtos
    );
  };

  return (
    <div>
      <h3>{productName}</h3>
      <p>R$ {price}</p>
      <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
    </div>
  );
}
*/

// ============================================
// EXEMPLO 4: Usando Meta Pixel (Client-side)
// ============================================

/*
function ProductView({ productId }: { productId: string }) {
  const { trackPixelEvent } = useFacebookConversions();

  useEffect(() => {
    // Rastrear visualização de produto usando Pixel
    trackPixelEvent("ViewContent", {
      content_ids: [productId],
      content_type: "product",
    });
  }, [productId, trackPixelEvent]);

  return <div>Produto {productId}</div>;
}
*/

// ============================================
// EXEMPLO 5: Enviar Evento Customizado
// ============================================

/*
import { sendFacebookConversion, hashSHA256 } from "@/lib/facebook-conversions";

async function sendCustomEvent() {
  const email = "usuario@email.com";
  const hashedEmail = await hashSHA256(email);

  const customEvent = {
    event_name: "CustomEvent",
    event_time: Math.floor(Date.now() / 1000),
    action_source: "website" as const,
    user_data: {
      em: [hashedEmail],
    },
    custom_data: {
      custom_parameter: "custom_value",
    },
  };

  const result = await sendFacebookConversion([customEvent]);
  return result;
}
*/

// ============================================
// EXEMPLO 6: Payload Completo (como fornecido)
// ============================================

/*
import { sendFacebookConversion } from "@/lib/facebook-conversions";

async function sendExamplePayload() {
  const payload = {
    event_name: "Purchase",
    event_time: 1763432976,
    action_source: "website" as const,
    user_data: {
      em: ["7b17fb0bd173f625b58636fb796407c22b3d16fc78302d79f0fd30c2fc2fc068"],
      ph: [null],
    },
    attribution_data: {
      attribution_share: "0.3",
    },
    custom_data: {
      currency: "USD",
      value: "142.52",
    },
    original_event_data: {
      event_name: "Purchase",
      event_time: 1763432976,
    },
  };

  const result = await sendFacebookConversion([payload]);
  return result;
}
*/

export {};

