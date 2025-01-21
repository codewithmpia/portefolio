<script setup>
    import Retour from './Retour.vue';
    
    const props = defineProps({
        title: String,
        note: String
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
            <p v-if="props.note" class="text-lg">{{ props.note }}</p>
        </div>
    </section>
</template>