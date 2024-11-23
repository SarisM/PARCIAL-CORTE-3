export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	screen: string;
	events: [];
};

export enum Screens {
	'HOME' = 'HOME',
	'ADMIN' = 'ADMIN',
}

export enum Actions {
	'NAVIGATE' = 'NAVIGATE',
	'ADDEVENTS' = 'ADDEVENTS',
	'GETEVENTS' = 'GETEVENTS',
	'DELETEPRODUCT' = 'DELETEPRODUCT',
}