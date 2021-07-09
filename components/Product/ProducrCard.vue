<template>
    <div key="id">
        <div>
            <img
                :style="{
                    width: 240,
                    height: 360
                }"
                :src="`https://image.tmdb.org/t/p/w500${posterPath}`"
                :alt="originalTitle"
            />
        </div>
        <div>
            <div>
                <h2>{{originalTitle}}</h2>
                <h3>{{releaseYear}}  |  {{ genresData.toString().replace(/,/g, ",  ") }}</h3>
                <div>{{overview}}</div>
            </div>
            <div justify-content="space-between">
                <h2>${{price}}</h2>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "ProductCard",
    props: {
        id: Number,
        originalTitle: String,
        genresData: [ Array, String ],
        releaseYear: Number,
        posterPath: String,
        overview: String,
        price: Number
    }
}
</script>
