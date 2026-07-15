import { ServicePageData } from "./types";
import { hireLaravelDeveloper } from "./hire-laravel-developer";
import { hirePhpDeveloper } from "./hire-php-developer";
import { hireBackendDeveloper } from "./hire-backend-developer";
import { paymentGatewayIntegration } from "./payment-gateway-integration";
import { telegramMiniAppDevelopment } from "./telegram-mini-app-development";
import { laravelApiDevelopment } from "./laravel-api-development";
import { reactLaravelDevelopment } from "./react-laravel-development";

export const servicesData: Record<string, ServicePageData> = {
  "hire-laravel-developer": hireLaravelDeveloper,
  "hire-php-developer": hirePhpDeveloper,
  "hire-backend-developer": hireBackendDeveloper,
  "payment-gateway-integration": paymentGatewayIntegration,
  "telegram-mini-app-development": telegramMiniAppDevelopment,
  "laravel-api-development": laravelApiDevelopment,
  "react-laravel-development": reactLaravelDevelopment,
};

export const servicesList: ServicePageData[] = Object.values(servicesData);
