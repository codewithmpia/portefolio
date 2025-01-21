<script setup>
    const year = new Date().getFullYear();
</script>

<template>
    <footer class="w-full border-t border-solid border-[#d5e3ec] py-8">
        <div class="w-full flex flex-col items-center gap-6">
            <div class="w-full flex items-center justify-center gap-6">
                <RouterLink :to="{name: 'index'}" class="font-medium uppercase hover:text-cyan-600" :class="{'text-cyan-600': $route.name === 'index' || $route.name === 'project'}">Projets</RouterLink>
                <RouterLink :to="{name: 'contact'}" class="font-medium uppercase hover:text-cyan-600" :class="{'text-cyan-600': $route.name === 'contact'}">Contact</RouterLink>
                <a href="https://github.com/codewithmpia" target="_blank" class="font-medium uppercase hover:text-cyan-600">Github</a>
            </div>
            <p>Copyright &copy; {{ year }} <RouterLink :to="{name: 'index'}" class="underline hover:text-cyan-600">codewithmpia</RouterLink>. Tous droits réservés.</p>
        </div>
    </footer>
</template>