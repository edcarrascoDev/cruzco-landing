// src/app/api/hubspot/route.ts

import { NextRequest, NextResponse } from "next/server";
import { HubspotFormContext, HubspotFormRequest } from "@cruzco/lib/models";

interface RequestBody {
  formData: Record<string, string>;
  context: HubspotFormContext;
}

export async function POST(req: NextRequest) {
  const { formData, context }: RequestBody = await req.json();

  // 1. Validar que las variables de entorno están presentes
  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formId = process.env.HUBSPOT_FORM_ID;
  const apiKey = process.env.HUBSPOT_API_KEY;

  console.log(portalId, formId, apiKey);
  if (!portalId || !formId || !apiKey) {
    console.error("HubSpot environment variables are not set");
    return NextResponse.json(
      { message: "Server configuration error." },
      { status: 500 },
    );
  }

  // 2. Transformar los datos del formulario al formato de HubSpot
  const hubspotPayload: HubspotFormRequest = {
    fields: Object.entries(formData).map(([name, value]) => ({
      name,
      value,
    })),
    context: {
      pageUri: context.pageUri,
      pageName: context.pageName,
    },
    portalId: Number(portalId),
    formId: formId,
  };

  const hubspotApiUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

  try {
    // 3. Enviar los datos a la API de HubSpot
    const response = await fetch(hubspotApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(hubspotPayload),
    });

    const data = await response.json();

    if (!response.ok) {
      // Si HubSpot devuelve un error, lo pasamos al cliente
      console.error("HubSpot API error:", data);
      return NextResponse.json(
        {
          message: data.message || "Error submitting to HubSpot.",
          errors: data.errors,
        },
        { status: response.status },
      );
    }

    // ¡Éxito!
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Internal server error:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred." },
      { status: 500 },
    );
  }
}
