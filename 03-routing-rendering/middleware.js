// Middleware functions automatically receive the request object

import { NextResponse } from "next/server"

export const middleware = (req) => {
    return NextResponse.next();
}

export const config = {
    matcher: "/news",
}