
<script>
import { onMount } from 'svelte';
import { propertiesData,properties,servicesData, services } from './store';
import Property from './property.svelte';

onMount(async () => {
    fetch('http://localhost:1337/api/properties?populate=*')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            propertiesData.set(data);
        })
        .catch((error) => {
            console.log(error);
            return [];
        });
});
</script>

<div class="grid grid-cols-4 gap-4 px-8">
{#each $properties as property}


    <div>
        <Property {property}/>
    </div>


{/each}
</div>