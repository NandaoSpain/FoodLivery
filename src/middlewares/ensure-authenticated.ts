import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

import { authConfig } from "@/configs/auth"
import { AppError } from "@/utils/AppError"

interface TokenPayload {
  role: string
  sub: string
}

function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  try {
    const authHeader = request.headers.authorization

    if (!authHeader) {
      throw new AppError("Authorization token is required", 401)
    }
    const [, token] = authHeader.split(" ")
    const { role, sub: user_id} = verify(token, authConfig.jwt.secret) as TokenPayload

    request.user = { role, id: user_id }

    return next()

  } catch (error) {
    throw new AppError("Invalid JWT token", 401)
  }
}

export { ensureAuthenticated }
