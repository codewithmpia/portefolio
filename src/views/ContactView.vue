<script setup>
    import { ref } from 'vue';
    import HeadSection from '@/components/HeadSection.vue';

    const name = ref("");
    const email = ref("");
    const message = ref("");
    const showAlert = ref(false)
    const alertContent = ref("");
    const alertType = ref("");

    const resetForm = () => {
        name.value = "";
        email.value = "";
        message.value = "";
    };

    const validateForm = () => {
        let isValid = true;

        if (!name.value) {
            showAlert.value = true;
            alertContent.value = "Veuillez renseigner votre nom.";
            alertType.value = "error";
            isValid = false;
        }

        if (!email.value) {
            showAlert.value = true;
            alertContent.value = "Veuillez renseigner votre adresse email.";
            alertType.value = "error";
            isValid = false;
        } else {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value)) {
                showAlert.value = true;
                alertContent.value = "Veuillez entrer une adresse email valide.";
                alertType.value = "error";
                isValid = false;
            }
        }

        if (!message.value) {
            showAlert.value = true;
            alertContent.value = "Veuillez renseigner votre message.";
            alertType.value = "error";
            isValid = false;
        }

        return isValid;
    };

    const submitForm = async () => {
        if (!validateForm()) {
            return;
        }
        try {
            const response = await fetch("https://mpiadev.pythonanywhere.com/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name.value,
                    email: email.value,
                    message: message.value,
                }),
            });
            if (!response.ok) {
                showAlert.value = true;
                alertType.value = "error";
                throw new Error("Une erreur s'est produite lors de l'envoi du message.");
            }
            showAlert.value = true;
            alertContent.value = "Message envoyé avec succès.";
            alertType.value = "success"
            resetForm();
        } catch (error) {
            showAlert.value = true;
            alertContent.value = "Une erreur s'est produite lors de l'envoi du message.";
            alertType.value = "error";
        }
    };
</script>

<template>
    <HeadSection 
        title="Me contacter"
        note="Des questions? Laissez-moi un message via ce formulaire et je reviendrai vers vous le plus bref delai." />
    <section class="w-full my-10">
        <template v-if="showAlert">
            <div class="relative flex items-center justify-between p-3 rounded mb-6 border border-solid" :class="{'border-green-200 bg-green-50 text-green-900': alertType === 'success', 'border-red-200 bg-red-50 text-red-900': alertType === 'error'}">
                <strong>{{ alertContent }}</strong>
                <svg @click="showAlert = false" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 6 6 18"/>
                    <path d="m6 6 12 12"/>
                </svg>
            </div>
        </template>
        <form @submit.prevent="submitForm">
            <div class="w-full mb-3">
                <label for="name" class="block font-medium uppercase mb-1.5">Votre nom</label>
                <input v-model="name" type="text" name="name" id="name" class="w-full min-h-12 outline-none border border-solid border-[#d5e3ec] rounded p-3 focus:border-cyan-600 focus:shadow-[0_0_0_3px_#4869ee3f]" required>
            </div>
            <div class="w-full mb-3">
                <label for="email" class="block font-medium uppercase mb-1.5">Votre adresse email</label>
                <input v-model="email" type="email" name="email" id="email" class="w-full min-h-12 outline-none border border-solid border-[#d5e3ec] rounded p-3 focus:border-cyan-600 focus:shadow-[0_0_0_3px_#4869ee3f]" required>
            </div>
            <div class="w-full mb-3">
                <label for="message" class="block font-medium uppercase mb-1.5">Votre message</label>
                <textarea v-model="message" name="message" id="message" class="w-full min-h-12 h-52 resize-none outline-none border border-solid border-[#d5e3ec] rounded p-3 focus:border-cyan-600 focus:shadow-[0_0_0_3px_#4869ee3f]" required></textarea>
            </div>
            <button type="submit" class="bg-cyan-600 text-white font-medium py-2 px-3 rounded shadow-sm cursor-pointer hover:filter hover:brightness-110">Envoyer</button>
        </form>
    </section>
</template>