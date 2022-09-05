import axios from "axios"

const TOKEN = "ccb1phiad3i49r0um2sg"

export default axios.create({
    // curl "https://finnhub.io/api/v1/quote?symbol=AAPL&token=ccb1ck2ad3i49r0ulsc0"
    baseURL: "https://finnhub.io/api/v1",
    params: {
        token: TOKEN
    }
})