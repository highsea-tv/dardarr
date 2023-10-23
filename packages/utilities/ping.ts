/**
 * Ping a url to check if it is online.
 * @param url The url to ping.
 * @returns A promise that resolves to a response object.
 */
export default async function ping(url: string): Promise<Response> {

    const response = await fetch(url, {
        method: 'GET',
        mode: 'no-cors'
    })

    return response

}
