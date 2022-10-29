import { Component, Input, OnInit } from "@angular/core";

@Component({
	selector: "weather-details",
	templateUrl: "./weatherDetails.component.html",
	styleUrls: ["./weatherDetails.component.scss"],
})
export class WeatherDetails implements OnInit {
	@Input() weatherData: data[];
	filteredCity: data;
	ngOnInit() {}

	filterCity(value) {
		const filteredData = this.weatherData.filter((city) => value.toLowerCase() == city.name.toLocaleLowerCase());
		if (filteredData) {
			this.filteredCity = filteredData[0];
		}
		console.log(this.filteredCity);
	}
}

interface data {
	name: string;
	temperature: string;
	wind: string;
	humidity: string;
}
