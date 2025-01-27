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
    <HeadSection :title="project.title" :date="project.created_at" :link="project.link" />
    <section class="w-full my-10">
        <div class="w-full flex flex-col gap-6">
            <div class="w-full h-64 rounded-md shadow-md">
                <img class="h-full w-full object-cover rounded-md" :src="`projects/${project.image}`" :alt="project.title">
            </div>
            <div class="w-full flex flex-col gap-4">
                <div class="w-full flex flex-col gap-3">
                    <h2 class="text-2xl font-bold text-cyan-600 py-3">Description du projet</h2>
                    <div>{{ project.description }}</div>
                    
                    <div class="w-full flex flex-col gap-3">
                        <h2 class="text-2xl font-bold text-cyan-600 py-3">Détails du projet</h2>
                        <div>
                            <h3 class="text-xl font-bold text-cyan-600 pb-3">Objectif</h3>
                            <div v-text="project.details.objectif"></div>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-cyan-600 py-3">Téchnologies utilisées</h3>
                            <p>Pour réaliser ce projet, j'ai utilisé les technologies et outils suivants: </p>
                            <ul class="list-disc list-inside pl-4 ml-4">
                                <template v-for="techno in project.details.technos">
                                    <li class="my-2">{{ techno }}</li>
                                </template>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-cyan-600 pb-3">Fonctionnalités clés</h3>
                            <ul class="list-disc list-inside pl-4 ml-4">
                                <template v-for="fonctionnalite in project.details.fonctionnalites">
                                    <li class="my-2">{{ fonctionnalite }}</li>
                                </template>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-cyan-600 pb-3">Approche technique</h3>
                            <ul class="list-disc list-inside pl-4 ml-4">
                                <template v-for="approch in project.details.approche_tech">
                                    <li class="my-2">{{ approch }}</li>
                                </template>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="w-full flex flex-col gap-3">
                    <h2 class="text-2xl font-bold text-cyan-600 pb-3">Résultats</h2>
                    <ul class="list-disc list-inside pl-4 ml-4">
                        <template v-for="resultat in project.resultats">
                            <li class="my-2">{{ resultat }}</li>
                        </template>
                    </ul>
                </div>
                <div>{{ project.conclusion }}</div>
            </div>
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