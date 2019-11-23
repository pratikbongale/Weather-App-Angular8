# Weather App
A single page application build with Angular 8 to display weather details for a given location.

I used the [Weatherstack API](https://weatherstack.com) to fetch weather data using Http.

![Home Page](https://github.com/pratikbongale/Weather-App-Angular8/blob/master/src/assets/home_page.png)

References:
[Weather App Blog](https://www.digitalocean.com/community/tutorials/how-to-build-a-weather-app-with-angular-bootstrap-and-the-apixu-api) - Detailed blog on how to create a simple weather app.
[Weather API](https://weatherstack.com) - Create a free account at weatherstack to fetch weather information.
[Styling](https://getbootstrap.com/docs/4.1/layout/overview/) - Styling provided by bootstrap

## Environment
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.18.

## How to run
Run `ng serve --o`. This command will build your app and host it on your local system. The `--o` option will open the app in your default web browser.

By default, Angular apps are hosted at http://localhost:4200/.

The app will automatically reload if you change any of the source files.

**Note:** Before you run the app you need to enter a valid API_KEY. Please create a free account with https://weatherstack.com, grab the API key from your dashboard and plug it into [scr/app/apixu.service.ts](scr/app/apixu.service.ts) file.
