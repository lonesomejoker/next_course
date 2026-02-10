export async function POST(req) {
  let data = await req.json();
  console.log(data);
  return new Response(JSON.stringify({ success: true, data: data }), {
    headers: { "Content-Type": "application/json" },
  });
}
