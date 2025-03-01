<template>
    <v-container>
        <v-row align="center" justify="start">
            <v-col cols="auto">
                <v-img width="64" max-height="64" src="/src/assets/contabilidad.png" contain></v-img>
            </v-col>
            <v-col>
                <span class="text-h3 font-weight-bold text-primary" style="font-family: 'Space Grotesk'">Software
                    Contable</span>
            </v-col>
        </v-row>

        <v-row class="mt-12" justify="space-around">
            <v-col cols="7">
                <v-row>
                    <span class="text-h4 font-weight-bold text-primary"
                        style="font-family: 'Space Grotesk'">Acceso</span>
                </v-row>
                <v-row class="mt-6">
                    <span class="text-h6 font-stretch-100% text-primary" style="font-family: 'Inter'">Inicia sesión para
                        continuar</span>
                </v-row>
            </v-col>
            <v-col cols="5">
                <v-card color="card" class="pa-6" elevation="12">
                    <v-card-title class="text-h4 font-weight-bold text-center text-primary">Iniciar
                        sesión</v-card-title>

                    <v-card-text>
                        <v-form ref="loginForm" v-model="isValid" @submit.prevent="login">
                            <!-- Campo de Email -->
                            <v-text-field label="Correo electrónico" v-model="email" :rules="emailRules" required
                                clearable variant="outlined" class="mt-3" />

                            <!-- Campo de Contraseña -->
                            <v-text-field label="Contraseña" v-model="password" :rules="passwordRules" required
                                clearable variant="outlined" :type="showPassword ? 'text' : 'password'"
                                @click:append="showPassword = !showPassword" append-inner-icon="mdi-eye" class="mt-3" />

                            <!-- Botón de Login -->
                            <v-btn :disabled="!isValid" block color="buttonprimary" class="mt-4" type="submit">
                                Iniciar sesión
                            </v-btn>
                        </v-form>
                    </v-card-text>

                    <v-card-actions class="justify-center">
                        <v-btn variant="text" color="buttonprimary" @click="gotoCreateAccount">Registrate</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn variant="text" color="buttonprimary" @click="gotoForgotPassword">¿Olvidaste tu
                            contraseña?</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            showPassword: false,
            isValid: false,
            emailRules: [
                v => !!v || 'El correo es obligatorio',
                v => /.+@.+\..+/.test(v) || 'Debe ser un correo válido'
            ],
            passwordRules: [
                v => !!v || 'La contraseña es obligatoria',
                v => v.length >= 6 || 'Mínimo 6 caracteres'
            ]
        };
    },
    methods: {
        gotoCreateAccount() {
            this.$router.push('/create-account');
        },
        gotoForgotPassword() {
            this.$router.push('/forgot-password');
        },
        async login() {
            if (!this.isValid) return;

            try {
                const response = await fetch('https://api.tuapp.com/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: this.email, password: this.password })
                });

                if (!response.ok) throw new Error('Credenciales incorrectas');

                const data = await response.json();
                localStorage.setItem('token', data.token);
                this.$router.push('/dashboard'); // Redirige tras el login exitoso
            } catch (error) {
                alert(error.message);
            }
        }
    }
};
</script>

<style scoped>
.fill-height {
    height: 100vh;
}
</style>