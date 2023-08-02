


export const getBaseURL = () => {
    console.log("Environnement ", process.env.NEXT_PUBLIC_PRODUCTION)
    let url = process.env.NEXT_PUBLIC_PRODUCTION === "true" ? process.env.NEXT_PUBLIC_PRODUCTION_URL : "http://localhost:5000/"
    return url
}

export const formatEndPoint = (endpoint: string) => {
    let base_url = getBaseURL()
    return base_url + endpoint;
}