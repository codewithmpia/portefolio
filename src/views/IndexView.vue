<script setup>
import { ref } from 'vue';
import projects from "@/data/projects.json";
import DownloadCV from '@/components/DownloadCV.vue';
import Python from '@/components/icons/Python.vue';
import Django from '@/components/icons/Django.vue';
import Flask from '@/components/icons/Flask.vue';
import Javascript from '@/components/icons/Javascript.vue';
import VueJs from '@/components/icons/VueJs.vue';
import Alpine from '@/components/icons/Alpine.vue';
import HtmlIcon from '@/components/icons/HtmlIcon.vue';
import Css from '@/components/icons/Css.vue';
import Tailwindcss from '@/components/icons/Tailwindcss.vue';
import Bootstrap from '@/components/icons/Bootstrap.vue';
import Linux from '@/components/icons/Linux.vue';
import Git from '@/components/icons/Git.vue';
import Docker from '@/components/icons/Docker.vue';
import Latex from '@/components/icons/Latex.vue';
import Sql from '@/components/icons/Sql.vue';
import C from '@/components/icons/C.vue';
import HeadSection from '@/components/HeadSection.vue';

const projectList = ref(projects);
const truncateText = (text, limit) => text.length <= limit ? text : `${text.substring(0, limit)}...`;
</script>

<template>
    <HeadSection
        title="Projets"
        note="Voici quelques projets déjà réalisés, fruits de ma passion et de mon engagement, 
            chacun m'ayant offert l'opportunité de repousser mes limites et d'affiner mes compétences :" />
    
    <section class="w-full my-10">
        <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <template v-for="project in projectList" :key="project.slug">
                <RouterLink :to="{ name: 'project', params: {slug: project.slug}}" class="relative rounded-md shadow-md group">
                    <img class="h-full w-full object-cover rounded-md" :src="`src/assets/projects/${project.image}`" :alt="project.title" srcset="">
                    <div class="absolute inset-x-0 bottom-0 flex items-center justify-center bg-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity rounded-b-md">
                        <span class="text-white text-sm p-2">{{ truncateText(project.title, 15) }}</span>
                    </div>
                </RouterLink>
            </template>
        </div>
    </section>

    <HeadSection 
        title="Compétences"
        note="Découvrez les compétences que j'ai acquises et perfectionnées au fil de mes projets, 
            combinant expertise technique et créativité pour relever tous les défis." />

    <section class="w-full my-10">
        <div class="w-full flex flex-col gap-8">
            <div class="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
                <Python class="w-full h-20" />
                <Django class="w-full h-20" />
                <Flask class="w-full h-20" />
                <C class="w-full h-20" />
                <Sql class="w-full h-20" />
                <Javascript class="w-full h-20" />
                <VueJs class="w-full h-20" />
                <Alpine class="w-full h-20" />
                <HtmlIcon class="w-full h-20" />
                <Css class="w-full h-20" />
                <Tailwindcss class="w-full h-20" />
                <Bootstrap class="w-full h-20" />
                <Linux class="w-full h-20" />
                <Git class="w-full h-20" />
                <Docker class="w-full h-20" />
                <Latex class="w-full h-20" />
            </div>
            <DownloadCV />
        </div>
    </section>
</template>