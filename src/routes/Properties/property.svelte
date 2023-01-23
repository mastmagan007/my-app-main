<script>

export let property;
</script>

<div class="bg-slate-50 border border-orange relative">
    <div class="absolute uppercase text-xs text-slate-50 bg-orange px-3 py-1">
        {property.Type}
    </div>
    <img src={property.Thumb.data.attributes.formats.medium.url} alt="" />

    <div class="p-4 ">
        <h4 class="text-xl  font-medium uppercase leading-tight h-14">
            {property.Title}
        </h4>
    
        <div class="badge bg-orange py-1 px-2 uppercase text-xs text-slate-50 inline-block my-2"
        >
            
            <a href={`/properties/${property.slug}`}>{property.Status}</a>
        </div>
        <h5 class="uppercase text-sm font-medium">
            <i class="fa-solid fa-location-dot text-orange mr-2" />
            {property.City}
        </h5>
        <h5 class="uppercase text-sm font-medium my-1">
            <i class="fa-solid fa-layer-group text-orange mr-1" /> GLA:
            <span class="text-orange"> {property.Area} </span>
        </h5>
        <h5 class="uppercase text-sm font-medium">
            <i class="fa-solid fa-tags fa-flip-horizontal text-orange mr-2" />CAPE RATE:
            <span class="text-orange">
                {property.Rate}
                %</span>
        </h5>
        <h4 class="uppercase font-medium mt-2">
            Listing Price: <span class="text-orange">${property.Price} </span>
        </h4>
    </div>
</div>
