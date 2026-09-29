import { aliasesActions } from './actions';
import { aliasesAnalytics } from './analytics';
import { aliasesAnimals } from './animals';
import { aliasesAstronomy } from './astronomy';
import { aliasesBrands } from './brands';
import { aliasesCommerce } from './commerce';
import { aliasesCommunication } from './communication';
import { aliasesDevices } from './devices';
import { aliasesFiles } from './files';
import { aliasesFiletypes } from './filetypes';
import { aliasesFood } from './food';
import { aliasesHealth } from './health';
import { aliasesHolidays } from './holidays';
import { aliasesMedia } from './media';
import { aliasesMisc } from './misc';
import { aliasesNavigation } from './navigation';
import { aliasesNetwork } from './network';
import { aliasesNutrition } from './nutrition';
import { aliasesOther } from './other';
import { aliasesPeople } from './people';
import { aliasesPlaces } from './places';
import { aliasesSecurity } from './security';
import { aliasesSports } from './sports';
import { aliasesStatus } from './status';
import { aliasesSymbols } from './symbols';
import { aliasesTime } from './time';
import { aliasesTools } from './tools';
import { aliasesTransport } from './transport';
import { aliasesWeather } from './weather';

export const iconAliases: Record<string, string[]> = {
    ...aliasesNavigation,
    ...aliasesStatus,
    ...aliasesTime,
    ...aliasesAnimals,
    ...aliasesFood,
    ...aliasesNutrition,
    ...aliasesHealth,
    ...aliasesWeather,
    ...aliasesDevices,
    ...aliasesTransport,
    ...aliasesFiletypes,
    ...aliasesFiles,
    ...aliasesCommunication,
    ...aliasesPeople,
    ...aliasesSports,
    ...aliasesHolidays,
    ...aliasesTools,
    ...aliasesSecurity,
    ...aliasesNetwork,
    ...aliasesAnalytics,
    ...aliasesMedia,
    ...aliasesPlaces,
    ...aliasesCommerce,
    ...aliasesSymbols,
    ...aliasesAstronomy,
    ...aliasesBrands,
    ...aliasesActions,
    ...aliasesMisc,
    ...aliasesOther,
};
