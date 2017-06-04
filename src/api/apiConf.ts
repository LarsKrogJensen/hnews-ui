// const HostAndPort = "localhost:8080"
// export const API_URL =


export const API_URL = () => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return "http://localhost:8080/graphql"
    } else {
        return "https://hnews-gql.herokuapp.com/graphql"
    }

}

export const WS_URL = () => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return 'ws://localhost:8080/subscriptions'
    } else {
        return 'wss://hnews-gql.herokuapp.com/subscriptions'
    }

}

