<script setup>
    import DownloadCV from './DownloadCV.vue';
    import Discord from './icons/Discord.vue';
    import Github from './icons/Github.vue';
    import Twitter from './icons/Twitter.vue';
    import Youtube from './icons/Youtube.vue';
</script>

<template>
    <aside>
        <div class="w-full flex flex-col md:flex-row lg:flex-col gap-6">
            <div class="flex flex-col gap-6">
                <div class="h-64 w-full md:w-64 lg:w-full bg-cyan-600 rounded-md shadow-md">
                    <img class="h-full w-full object-cover rounded-md" src="/src/assets/photo.png" alt="Ma photo">
                </div>
                <div class="hidden md:block lg:hidden">
                    <template v-if="$route.name !== 'contact'">
                        <RouterLink :to="{name: 'contact'}" class="w-44 md:w-full lg:w-full flex items-center justify-between bg-cyan-600 text-white font-medium py-2 px-3 rounded shadow-sm cursor-pointer hover:filter hover:brightness-110">
                            Me contacter
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 8L22 12L18 16"/>
                                <path d="M2 12H22"/>
                            </svg>
                        </RouterLink>
                    </template>
                    <template v-else>
                        <DownloadCV />
                    </template>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="w-full flex flex-col gap-2">
                    <span class="text-sm">Hi, je suis</span>
                    <h2 class="text-3xl font-black text-cyan-600">Mpia M.</h2>
                    <p>Passionné de programmation, je suis étudiant en informatique, toujours curieux d'apprendre et de relever des défis.</p>
                </div>
                <div class="w-full flex flex-col gap-3 mt-4">
                    <h3 class="text-xl font-medium text-cyan-600">Je suis dispo:</h3>
                    <div class="w-full flex flex-col gap-3">
                        <h4 class="flex items-center gap-1 text-lg font-medium">
                            <svg class=" text-cyan-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"/>
                                <path d="m12 5 7 7-7 7"/>
                            </svg>
                            Par email:
                        </h4>
                        <a href="mailto:codewithmpia@gmail.com" class="hover:underline hover:text-cyan-600">codewithmpia@gmail.com</a>
                    </div>
                    <div class="w-full flex flex-col gap-3">
                        <h4 class="flex items-center gap-1 text-lg font-medium">
                            <svg class=" text-cyan-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"/>
                                <path d="m12 5 7 7-7 7"/>
                            </svg>
                            Sur les réseaux:
                        </h4>
                        <div class="w-full flex items-center flex-wrap gap-6">
                            <a href="https://github.com/codewithmpia" target="_blank" class="cursor-pointer">
                                <Github class="w-8 h-8" />
                            </a>
                            <a href="#" target="_blank" class="cursor-pointer">
                                <Twitter class="w-8 h-8" />
                            </a>
                            <a href="#" target="_blank" class="cursor-pointer">
                                <Youtube class="w-8 h-8" />
                            </a>
                            <a href="#" target="_blank" class="cursor-pointer">
                                <Discord class="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="block md:hidden lg:block mt-6">
                    <template v-if="$route.name !== 'contact'">
                        <RouterLink :to="{name: 'contact'}" class="w-44 md:w-full lg:w-full flex items-center justify-between bg-cyan-600 text-white font-medium py-2 px-3 rounded shadow-sm cursor-pointer hover:filter hover:brightness-110">
                            Me contacter
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 8L22 12L18 16"/>
                                <path d="M2 12H22"/>
                            </svg>
                        </RouterLink>
                    </template>
                    <template v-else>
                        <DownloadCV />
                    </template>
                </div>
            </div>
        </div>
    </aside>
</template>