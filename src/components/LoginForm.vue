<template>
    <div class="text-white text-center font-bold p-4 mb-4" v-if="login_show_alert" :class="login_alert_variant">
        {{ login_alert_msg }}
    </div>
    <vee-form :validation-schema="loginSchema" @submit="login">

        <div class="mb-3">
            <label class="inline-block mb-2">Email</label>
            <vee-field name="email" type="email"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Email" />
            <ErrorMessage class="text-red-600" name="email" />
        </div>

        <div class="mb-3">
            <label class="inline-block mb-2">Password</label>
            <vee-field name="password" type="password"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Password" />
            <ErrorMessage class="text-red-600" name="password" />
        </div>
        <button type="submit"
            class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
            :disabled="login_in_submission">
            Submit
        </button>
    </vee-form>
</template>

<script setup>
import { useUserStore } from '../stores/user';
import { ref, reactive } from 'vue';

const userStore = useUserStore()

const loginSchema = reactive({
    email: "required|email",
    password: "required|min:9|max:100",
})

const login_in_submission = ref(false)
const login_show_alert = ref(false)
const login_alert_variant = ref("bg-blue-500")
const login_alert_msg = ref("Please wait! We are logging you in.")

async function login(values) {
    login_show_alert.value = true;
    login_in_submission.value = true;
    login_alert_variant.value = "bg-blue-500";
    login_alert_msg.value = "Please wait! We are logging you in.";

    try {
        await userStore.authenticate(values);
    } catch (error) {
        login_in_submission.value = false;
        login_alert_variant.value = "bg-red-500";
        login_alert_msg.value = "Invalid login details.";
        return;
    }

    login_alert_variant.value = "bg-green-500";
    login_alert_msg.value = "Success! You are now logged in.";
    window.location.reload();
}

</script>