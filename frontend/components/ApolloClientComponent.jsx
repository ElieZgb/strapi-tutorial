"use client";
import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Apollo client
const client = new ApolloClient({
	uri: process.env.NEXT_PUBLIC_STRAPI_APOLLO_ENDPOINT,
	cache: new InMemoryCache(),
});

export default function ApolloClientComponent({ children }) {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
