/// <reference types="node" />

declare var SHOPIFY_API_KEY: string;

declare namespace NodeJS {
	interface ProcessEnv {
		PORT: string;
		SHOPIFY_API_KEY: string;
		SHOPIFY_API_SECRET: string;
		SCOPES: string;
		HOST: string;
		SHOP: string;
	}
}