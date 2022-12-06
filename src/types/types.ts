export interface hotelDataTypes {
	data: {
		is_top_result: boolean;
		result_object: {
			address: string;
			ancestors: object[];
			awards: [];
			category: any;
			category_counts: any;
			descriptions: string;
			doubleclick_zone: string;
			geo_description: string;
			geo_type: string;
			has_attraction_coverpage: boolean;
			has_curated_shopping_list: boolean;
			has_restaurant_coverpage: boolean;
			is_jfy_enabled: boolean;
			latitude: string;
			location_id: string;
			location_string: string;
			longitude: string;
			name: string;
			nearby_attractions: [];
			nearby_metro_station: [];
			num_reviews: string;
			rating: string;
			photo: {
				caption: string;
				helpful_votes: string;
				id: string;
				images: {
					large: {
						height: string;
						width: string;
						url: string;
					};
					medium: {
						height: string;
						width: string;
						url: string;
					};
					original: {
						height: string;
						width: string;
						url: string;
					};
					small: {
						height: string;
						width: string;
						url: string;
					};
					thumbnail: {
						height: string;
						width: string;
						url: string;
					};
				};
				is_blessed: boolean;
				published_date: string;
				uploaded_date: string;
				user: null;
			};
		};
		review_snippet: {
			snippet: string;
			spans: [];
			review_id: string;
		};
		result_type: string;
		scope: string;
	}[];
	metadata: { scope: string };
	paging: {
		results: string;
		total_results: string;
	};
	partial_content: boolean;
	sort: any;
	tracking: { search_id: string };
}

export interface hotelType{
	is_top_result: boolean;
	result_object: {
		address: string;
		ancestors: object[];
		awards: [];
		category: any;
		category_counts: any;
		descriptions: string;
		doubleclick_zone: string;
		geo_description: string;
		geo_type: string;
		has_attraction_coverpage: boolean;
		has_curated_shopping_list: boolean;
		has_restaurant_coverpage: boolean;
		is_jfy_enabled: boolean;
		latitude: string;
		location_id: string;
		location_string: string;
		longitude: string;
		name: string;
		nearby_attractions: [];
		nearby_metro_station: [];
		num_reviews: string;
		rating: string;
		photo: {
			caption: string;
			helpful_votes: string;
			id: string;
			images: {
				large: {
					height: string;
					width: string;
					url: string;
				};
				medium: {
					height: string;
					width: string;
					url: string;
				};
				original: {
					height: string;
					width: string;
					url: string;
				};
				small: {
					height: string;
					width: string;
					url: string;
				};
				thumbnail: {
					height: string;
					width: string;
					url: string;
				};
			};
			is_blessed: boolean;
			published_date: string;
			uploaded_date: string;
			user: null;
		};
	};
	review_snippet: {
		snippet: string;
		spans: [];
		review_id: string;
	};
	result_type: string;
	scope: string;
}

export interface storeInterface {
    cards: any,
    centerPosition: any;
}

export interface actionType {
    type: string;
    payload: any;
}

export interface CenterProps {
	center: number[];
	setCenter?: React.Dispatch<React.SetStateAction<number[]>>;
	setSearch: (search: string) => void;
}

export interface ButtonPropsTypes {
	type?: string;
	children?: React.ReactNode;
	hotelPosition?: [number, number];
	onClick?: any;
}

export interface inputProps {
	className: string;
	children: React.ReactNode;
	placeholder: string;
  }