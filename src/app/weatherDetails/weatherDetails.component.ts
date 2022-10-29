import { Component, Input, OnInit } from "@angular/core";

@Component({
	selector: "weather-details",
	templateUrl: "./weatherDetails.component.html",
	styleUrls: ["./weatherDetails.component.scss"],
})
export class WeatherDetails implements OnInit {
	@Input() weatherData: data[];
	filteredCity: data;
	isCityFound: boolean = false;
	searchedInput: string = "";

	ngOnInit() {}

	filterCity(value) {
		this.isCityFound = false;
		const filteredData = this.weatherData.filter((city) => value.toLowerCase() == city.name.toLocaleLowerCase());
		if (filteredData.length > 0) {
			this.isCityFound = true;
			this.filteredCity = filteredData[0];
		}
	}
}

interface data {
	name: string;
	temperature: string;
	wind: string;
	humidity: string;
}
