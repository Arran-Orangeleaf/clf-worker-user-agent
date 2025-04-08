/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(
	  request: Request,
	  env: Record<string, unknown>,
	  ctx: ExecutionContext
	): Promise<Response> {
	  const userAgent = request.headers.get('User-Agent') || '';
  
	  if (userAgent.includes('Orangeleaf-Bot')) {
		return new Response('Hello, Orangeleaf-Bot!', {
		  headers: { 'Content-Type': 'text/plain' },
		});
	  }   
	  // Default: pass through to origin
	  return fetch(request);
	},
};  