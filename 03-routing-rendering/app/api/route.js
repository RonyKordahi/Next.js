// Route functions automatically receive the request object

export const GET = (req) => {    
    return new Response("Hello!");

    // return new Response.json();
}

// export const POST = (req) => {

// }