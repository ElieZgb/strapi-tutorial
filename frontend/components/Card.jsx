"use client";
import React from "react";
import { useQuery, gql } from "@apollo/client";

const QUERY = gql`
	query CardQuery {
		card {
			title
			card_id
			body
		}
	}
`;

export default function Card({ title, body, ID }) {
	const { data: { card } = {}, loading, error } = useQuery(QUERY);

	if (loading) {
		return (
			<div className="flex flex-col gap-5">
				<span className="text-lg italic">ID: Loading...</span>
				<h1 className="uppercase">Loading...</h1>
				<p className="bg-red-500 p-5">Loading...</p>
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-5">
			<span className="text-lg italic">ID: {card.card_id}</span>
			<h1 className="uppercase">{card.title}</h1>
			<p className="bg-red-500 p-5">{card.body}</p>
		</div>
	);
}
