import { NextFunction, Request, Response } from 'express'
import { MulterError } from 'multer'

/**
 * Middleware de gestion globale des erreurs
 *
 * @param err - L'erreur Express (peut être la notre ou une autre)
 * @param req - La requête initiale
 * @param res - L'objet de réponse
 * @param next - Permet de passer au middleware suivant si existant
 *
 * @see https://expressjs.com/en/guide/error-handling.html
 */
export const ExceptionsHandler = (err: any, req: Request, res: Response, next: NextFunction) => {

    /**
     * Voir "The default error handler" dans la doc officielle indiquée plus haut
     */
    if (res.headersSent) {
        return next(err)
    }

    /**
     * Si c'est le cas, on sait que c'est notre propre erreur
     */
    if (err.status && err.error) {
        return res
            .status(err.status)
            .json({ error: err.error })
    }

    /**
     * mutler error handling
     */
    if (err instanceof MulterError) {
        let err_ = err as MulterError;
        console.log("Error code")
        console.log(err_.code)
        if (err_.code === "LIMIT_FILE_SIZE") {
            return res
                .status(500)
                .json({
                    error: "File size exceeds limit"
                })

        } else if (err_.code === "LIMIT_UNEXPECTED_FILE") {
            return res
                .status(500)
                .json({
                    error: "File type must be (JPG, PNG, GIF, WEBP)"
                })
        }
    }

    /**
     * Dans les autres cas, on retourne une 500
     */
    return res
        .status(500)
        .json({ error: 'Internal Error' })
}