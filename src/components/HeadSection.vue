<script setup>
    import Retour from './Retour.vue';
    
    const props = defineProps({
        title: String,
        note: String,
        date: String,
        link: String
    })
</script>

<template>
    <section class="w-full">
        <div class="flex flex-col gap-3">
            <Retour v-if="$route.name != 'index'" />
            <h1 class="flex items-baseline gap-1 text-4xl font-black text-cyan-600">
                {{ props.title }}
                <span class="block h-3 w-3 bg-orange-400"></span>
            </h1>
            <p v-if="props.note">{{ props.note }}</p>
            <div v-if="$route.name === 'project'" class="flex items-center gap-6 text-sm uppercase">
                <span>{{ props.date }}</span>
                <a :href="props.link" target="_blank" class="hover:text-cyan-600 underline">Voir sur Github</a>
            </div>
        </div>
    </section>
</template>