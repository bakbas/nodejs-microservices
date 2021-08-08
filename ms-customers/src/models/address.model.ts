export default class Address {
    line: string;

    town: string;

    county: string;

    state: string;

    country: string;

    postcode: string;

    constructor({ line, town, county, state, country, postcode }: Address) {
        this.line = line;
        this.town = town;
        this.county = county;
        this.state = state;
        this.country = country;
        this.postcode = postcode;
    }
}
