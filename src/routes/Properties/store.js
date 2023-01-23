import { writable, derived } from 'svelte/store';

/** Store for your data. 
This assumes the data you're pulling back will be an array.
If it's going to be an object, default this to an empty object.
**/
export const propertiesData = writable({});
export const servicesData = writable({});


/** Data transformation.
For our use case, we only care about the drink names, not the other information.
Here, we'll create a derived store to hold the drink names.
**/
export const properties = derived(propertiesData, ($propertiesData) => {
  if ($propertiesData.data){
    return $propertiesData.data.map(drink => drink.attributes);
  }
  return [];
});
export const services = derived(servicesData, ($servicesData) => {
  if ($servicesData.data){
    return $servicesData.data.map(service => service.attributes);
  }
  return [];
});