<script setup>
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';
    import projects from "@/data/projects.json";
    import HeadSection from '@/components/HeadSection.vue';

    const route = useRoute();
    const slug = route.params.slug;
    const project = ref(projects.find(p => p.slug === slug));
</script>

<template>
    <HeadSection :title="project.title" />
    <section class="w-full my-10">
        <div class="w-full flex flex-col gap-6">
            <div class="w-full h-64 rounded-md shadow-md">
                <img class="h-full w-full object-cover rounded-md" :src="`/src/assets/projects/${project.image}`" :alt="project.title">
            </div>
            <div>{{ project.description }}</div>
            <a :href="project.link" target="_blank" class="w-52 flex items-center justify-between bg-cyan-600 text-white font-medium py-2 px-3 rounded shadow-sm cursor-pointer hover:filter hover:brightness-110">
                Voir sur Github
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 8L22 12L18 16"/>
                    <path d="M2 12H22"/>
                </svg>
            </a>
        </div>
    </section>
</template>