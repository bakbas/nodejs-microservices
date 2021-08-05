import { Column } from "typeorm";

export class Address {
    @Column()
    line: string;

    @Column()
    town: string;

    @Column()
    county: string;

    @Column()
    state: string;

    @Column()
    country: string;

    @Column()
    postcode: string;

    constructor(
        line: string,
        town: string,
        county: string,
        state: string,
        country: string,
        postcode: string
    ) {
        this.line = line;
        this.town = town;
        this.county = county;
        this.state = state;
        this.country = country;
        this.postcode = postcode;
    }
}
