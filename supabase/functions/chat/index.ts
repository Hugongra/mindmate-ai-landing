import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { message, messages = [] } = await req.json()
    
    const openaiApiKey = Deno.env.get('OPENAI_API_KEY')
    if (!openaiApiKey) {
      throw new Error('OpenAI API key not configured')
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4.1-2025-04-14',
        messages: [
          {
            role: 'system',
            content: `Eres un terapeuta con IA especializado en salud mental y bienestar emocional. Tu objetivo es:
            - Proporcionar apoyo emocional empático y comprensivo
            - Hacer preguntas reflexivas que ayuden al usuario a explorar sus sentimientos
            - Ofrecer técnicas de manejo del estrés y ansiedad
            - Validar las emociones del usuario sin juzgar
            - Sugerir estrategias de afrontamiento saludables
            - Responder siempre en español
            - Mantener un tono cálido, profesional y comprensivo
            - Si detectas signos de crisis, recomienda buscar ayuda profesional inmediata
            
            Importante: No eres un reemplazo de la terapia profesional, pero puedes ofrecer apoyo y herramientas útiles.`
          },
          ...messages,
          { role: 'user', content: message }
        ],
        max_tokens: 500,
        temperature: 0.7,
        stream: false
      }),
    })

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.statusText}`)
    }

    const data = await response.json()
    const botMessage = data.choices[0]?.message?.content || 'Lo siento, no pude generar una respuesta en este momento.'

    return new Response(
      JSON.stringify({ message: botMessage }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Error interno del servidor',
        details: error.message 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})